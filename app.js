let currentIndex = 0;
/* =========================
   FIREBASE CONFIG
========================= */
const firebaseConfig = {
  apiKey: "AIzaSyCdwn29ysD5qRGiNzjYkWtf6S15388Dvn0",
  authDomain: "ssc-cgl-notes-app.firebaseapp.com",
  projectId: "ssc-cgl-notes-app"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

/* =========================
   GLOBAL STATE
========================= */
let currentData = [];

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
let searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

const subjects = ["biology", "chemistry", "physics", "computers"];

/* =========================
   CLOUD SYNC
========================= */
async function loadCloudBookmarks() {
  try {
    const doc = await db.collection("users").doc("defaultUser").get();

    if (doc.exists) {
      bookmarks = doc.data().bookmarks || [];
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
  } catch (e) {
    console.log("Cloud load failed");
  }
}

function syncBookmarks() {
  db.collection("users").doc("defaultUser").set({
    bookmarks: bookmarks
  });
}

/* =========================
   LOAD SUBJECT
========================= */
function loadSubject(subject) {
  switch (subject) {
    case "biology":
      currentData = biologyData;
      currentIndex = 0;
      break;
    case "chemistry":
      currentData = chemistryData;
      currentIndex = 1;
      break;
    case "physics":
      currentData = physicsData;
      currentIndex = 2;
      break;
    case "computers":
      currentData = computersData;
      currentIndex = 3;
      break;
  }

  renderChapters(currentData);
  updateAmbient(currentIndex);
  moveIndicator(currentIndex);
}

/* =========================
   RENDER CHAPTERS
========================= */
function renderChapters(data) {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = "";

  data.forEach((ch, index) => {
    const isBM = bookmarks.find(b => b.title === ch.title);
    const isPriority = isBM?.priority;

    const el = document.createElement("div");
    el.className = "chapter";
    el.dataset.text = ch.text || "";

    el.innerHTML = `
      <div class="chapter-header">

        <div class="ch-icon">
          <i data-lucide="${ch.icon || 'book-open'}"></i>
        </div>

        <div class="ch-title">${ch.title}</div>

        <span class="bookmark ${isBM ? "active" : ""} ${isPriority ? "priority" : ""}"
              onclick="toggleBookmark(event, '${ch.title}')">
              <i data-lucide="star"></i>
        </span>

        <span class="ch-arrow">
          <i data-lucide="chevron-right"></i>
        </span>

      </div>

      <div class="chapter-body">
        <div class="body-inner">
          ${renderSections(ch.sections || [])}
        </div>
      </div>
    `;

    app.appendChild(el);
  });

  initChapters();
  lucide.createIcons();
}

/* =========================
   RENDER SECTIONS
========================= */
function renderSections(sections) {
  return sections.map(sec => `
    <div class="section">
      <div class="section-title">${sec.title}</div>
      ${sec.content || ""}
    </div>
  `).join("");
}

/* =========================
   CHAPTER TOGGLE
========================= */
function initChapters() {
  document.querySelectorAll(".chapter-header").forEach(header => {
    header.addEventListener("click", function () {
      const chapter = this.parentElement;

      chapter.classList.toggle("open");

      document.querySelectorAll(".chapter").forEach(ch => {
        ch.classList.remove("active");
      });

      chapter.classList.add("active");
    });
  });
}

/* =========================
   SEARCH
========================= */
function initSearch() {
  const searchInput = document.getElementById("search");

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    filterChapters(query);
    showSuggestions(query);
  });

  searchInput.addEventListener("focus", showRecentSearches);

  searchInput.addEventListener("blur", function () {
    saveSearch(this.value);
  });
}

function filterChapters(query) {
  document.querySelectorAll(".chapter").forEach(ch => {
    const text = ch.dataset.text || "";
    const title = ch.querySelector(".ch-title").innerText.toLowerCase();

    const match = text.includes(query) || title.includes(query);
    ch.style.display = match ? "" : "none";
  });
}

/* =========================
   SEARCH SUGGESTIONS
========================= */
function showSuggestions(query) {
  const box = document.querySelector(".search-suggestions");

  if (!query) {
    box.innerHTML = "";
    return;
  }

  const results = currentData
    .filter(ch =>
      ch.text.toLowerCase().includes(query) ||
      ch.title.toLowerCase().includes(query)
    )
    .slice(0, 5);

  box.innerHTML = results.map(ch => `
    <div class="suggestion-item" onclick="jumpToChapter('${ch.title}')">
      ${ch.title}
    </div>
  `).join("");
}

function showRecentSearches() {
  const box = document.querySelector(".search-suggestions");

  box.innerHTML = searchHistory.map(q => `
    <div class="suggestion-item" onclick="applySearch('${q}')">
      🔁 ${q}
    </div>
  `).join("");
}

function saveSearch(query) {
  if (!query) return;

  searchHistory.unshift(query);
  searchHistory = [...new Set(searchHistory)].slice(0, 5);

  localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
}

/* =========================
   SEARCH ACTIONS
========================= */
function applySearch(q) {
  const input = document.getElementById("search");
  input.value = q;
  input.dispatchEvent(new Event("input"));
}

function jumpToChapter(title) {
  document.querySelectorAll(".chapter").forEach(ch => {
    if (ch.innerText.includes(title)) {
      ch.scrollIntoView({ behavior: "smooth" });
      ch.classList.add("open", "active");
    }
  });
}

/* =========================
   BOOKMARK SYSTEM
========================= */
function toggleBookmark(event, title) {
  event.stopPropagation();

  const existing = bookmarks.find(b => b.title === title);

  if (existing) {
    bookmarks = bookmarks.filter(b => b.title !== title);
  } else {
    bookmarks.push({
      title,
      subject: subjects[currentIndex],
      time: Date.now(),
      priority: false
    });
  }

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  syncBookmarks();
  renderChapters(currentData);
}

function togglePriority(title) {
  const item = bookmarks.find(b => b.title === title);
  if (!item) return;

  item.priority = !item.priority;

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  syncBookmarks();
  renderChapters(currentData);
}

/* long press */
let pressTimer;

document.addEventListener("mousedown", e => {
  if (e.target.closest(".bookmark")) {
    const title = e.target.closest(".chapter")
      .querySelector(".ch-title").innerText;

    pressTimer = setTimeout(() => {
      togglePriority(title);
    }, 500);
  }
});

document.addEventListener("mouseup", () => clearTimeout(pressTimer));

function showBookmarks() {
  const sorted = [...bookmarks].sort((a, b) => {
    if (a.priority !== b.priority) return b.priority - a.priority;
    return b.time - a.time;
  });

  const filtered = sorted.map(b =>
    currentData.find(ch => ch.title === b.title)
  ).filter(Boolean);

  renderChapters(filtered);
}

/* =========================
   NAV SYSTEM
========================= */
function setActive(btn) {
  const buttons = document.querySelectorAll('.bottom-nav button');

  buttons.forEach((b, index) => {
    b.classList.remove('active');

    if (b === btn) {
      b.classList.add('active');
      currentIndex = index;

      moveIndicator(index);
      updateAmbient(index);
    }
  });
}

function moveIndicator(index) {
  const indicator = document.querySelector('.nav-indicator');
  if (!indicator) return;

  indicator.style.transform = `translateX(${index * 100}%)`;
}

function updateAmbient(index) {
  const colors = [
    "rgba(76,201,240,0.18)",
    "rgba(255,120,120,0.15)",
    "rgba(255,210,120,0.15)",
    "rgba(120,255,200,0.15)"
  ];

  document.body.style.background = `
    radial-gradient(circle at 50% 110%, ${colors[index]}, transparent 60%),
    linear-gradient(180deg, #0a0d16, #07090f)
  `;
}

/* =========================
   OFFLINE SUPPORT
========================= */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}

/* =========================
   INIT
========================= */
document.addEventListener("DOMContentLoaded", async () => {
  await loadCloudBookmarks();

  initSearch();
  loadSubject("biology");

  const firstBtn = document.querySelector('.bottom-nav button');
  if (firstBtn) setActive(firstBtn);
});