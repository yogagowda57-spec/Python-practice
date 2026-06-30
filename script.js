/**
 * script.js — PyPractice App Logic
 */

// ── State ──────────────────────────────────────────────────────
let activeConcept = "all";
let activeDiff    = "all";
let searchQuery   = "";

// ── Icons for each concept ─────────────────────────────────────
const CONCEPT_ICONS = {
  "Variables":              "📦",
  "Input & Output":         "🖥️",
  "Operators":              "➕",
  "Conditional Statements": "🔀",
  "Loops":                  "🔁",
  "Functions":              "🔧",
  "Strings":                "📝",
  "Lists":                  "📋",
  "Tuples":                 "📌",
  "Dictionaries":           "📖",
  "Sets":                   "🔢",
  "File Handling":          "📂",
  "OOP":                    "🏗️"
};

// ── Boot ───────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  buildSidebar();
  buildHomeCategoryGrid();
  renderQuestions();
  updateStatTotal();
  startTypingEffect();
  setupHamburger();
});

// ── Typing effect ──────────────────────────────────────────────
function startTypingEffect() {
  const words  = ["Solving Problems.", "Writing Code.", "Thinking Logically.", "Practising Daily."];
  const el     = document.getElementById("typed-text");
  if (!el) return;
  let wi = 0, ci = 0, deleting = false;

  function tick() {
    const word = words[wi];
    if (!deleting) {
      el.textContent = word.slice(0, ++ci);
      if (ci === word.length) { deleting = true; setTimeout(tick, 1800); return; }
    } else {
      el.textContent = word.slice(0, --ci);
      if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
    }
    setTimeout(tick, deleting ? 60 : 100);
  }
  tick();
}

// ── Home stat ──────────────────────────────────────────────────
function updateStatTotal() {
  const el = document.getElementById("stat-total");
  if (el) el.textContent = QUESTIONS.length;
}

// ── Page navigation ────────────────────────────────────────────
function showPage(name) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".nav-link").forEach(l => {
    l.classList.toggle("active", l.dataset.page === name);
  });
  const page = document.getElementById("page-" + name);
  if (page) page.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
  // close mobile menu
  document.getElementById("navLinks").classList.remove("open");
}

// ── Hamburger ──────────────────────────────────────────────────
function setupHamburger() {
  document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("open");
  });
}

// ── Sidebar ────────────────────────────────────────────────────
function buildSidebar() {
  const list = document.getElementById("sidebar-list");
  list.innerHTML = `<li class="sidebar-item ${activeConcept==='all'?'active':''}" onclick="setConcept('all')">
    <span class="sidebar-icon">🐍</span> All Concepts
  </li>`;
  CONCEPTS.forEach(c => {
    const li = document.createElement("li");
    li.className = `sidebar-item ${activeConcept===c?'active':''}`;
    li.onclick = () => setConcept(c);
    li.innerHTML = `<span class="sidebar-icon">${CONCEPT_ICONS[c]||"📌"}</span> ${c}`;
    list.appendChild(li);
  });
}

// ── Home category grid ─────────────────────────────────────────
function buildHomeCategoryGrid() {
  const grid = document.getElementById("home-category-grid");
  if (!grid) return;
  CONCEPTS.forEach(c => {
    const count = QUESTIONS.filter(q => q.concept === c).length;
    const card  = document.createElement("div");
    card.className = "cat-card";
    card.innerHTML = `
      <span class="cat-icon">${CONCEPT_ICONS[c]||"📌"}</span>
      <span class="cat-name">${c}</span>
      <span class="cat-count">${count} Q</span>
    `;
    card.onclick = () => { showPage("concepts"); setConcept(c); };
    grid.appendChild(card);
  });
}

// ── Filtering helpers ──────────────────────────────────────────
function setConcept(c) {
  activeConcept = c;
  buildSidebar();
  renderQuestions();
  // update content title
  document.getElementById("content-title").textContent = c === "all" ? "All Questions" : c;
}

function setDiff(d) {
  activeDiff = d;
  document.querySelectorAll(".chip").forEach(ch => {
    ch.classList.toggle("active", ch.dataset.diff === d);
  });
  renderQuestions();
}

function handleSearch(val) {
  searchQuery = val.trim().toLowerCase();
  document.getElementById("searchClear").style.display = searchQuery ? "flex" : "none";
  if (searchQuery) {
    activeConcept = "all";
    buildSidebar();
    document.getElementById("content-title").textContent = `Results for "${val.trim()}"`;
  }
  renderQuestions();
}

function clearSearch() {
  document.getElementById("search").value = "";
  searchQuery = "";
  document.getElementById("searchClear").style.display = "none";
  document.getElementById("content-title").textContent = activeConcept === "all" ? "All Questions" : activeConcept;
  renderQuestions();
}

// ── Render questions ───────────────────────────────────────────
function renderQuestions() {
  const grid  = document.getElementById("questions-grid");
  const empty = document.getElementById("empty-state");

  let filtered = QUESTIONS.filter(q => {
    const matchConcept = activeConcept === "all" || q.concept === activeConcept;
    const matchDiff    = activeDiff    === "all" || q.difficulty === activeDiff;
    const matchSearch  = !searchQuery  ||
      q.title.toLowerCase().includes(searchQuery) ||
      q.concept.toLowerCase().includes(searchQuery) ||
      q.problem.toLowerCase().includes(searchQuery);
    return matchConcept && matchDiff && matchSearch;
  });

  // Count
  const countEl = document.getElementById("q-count");
  countEl.textContent = filtered.length + (filtered.length === 1 ? " question" : " questions");

  grid.innerHTML = "";
  if (filtered.length === 0) {
    empty.style.display = "flex";
    return;
  }
  empty.style.display = "none";

  filtered.forEach((q, i) => {
    const card = document.createElement("div");
    card.className = "q-card";
    card.style.animationDelay = `${i * 40}ms`;
    card.innerHTML = `
      <div class="q-card-top">
        <span class="q-concept">${CONCEPT_ICONS[q.concept]||""} ${q.concept}</span>
        <span class="badge badge-${q.difficulty.toLowerCase()}">${q.difficulty}</span>
      </div>
      <h3 class="q-title">${q.title}</h3>
      <p class="q-preview">${q.problem.slice(0, 100)}${q.problem.length > 100 ? "…" : ""}</p>
      <button class="q-btn" onclick="openModal(${q.id})">View Question →</button>
    `;
    grid.appendChild(card);
  });
}

// ── Modal ──────────────────────────────────────────────────────
function openModal(id) {
  const q = QUESTIONS.find(q => q.id === id);
  if (!q) return;

  document.getElementById("modal-concept").textContent = `${CONCEPT_ICONS[q.concept]||""} ${q.concept}`;
  document.getElementById("modal-title").textContent   = q.title;
  document.getElementById("modal-problem").textContent = q.problem;
  document.getElementById("modal-input").textContent   = q.input  || "(no input required)";
  document.getElementById("modal-output").textContent  = q.output || "(no output)";

  // badge
  const badge = document.getElementById("modal-badge");
  badge.textContent  = q.difficulty;
  badge.className    = `modal-badge badge-${q.difficulty.toLowerCase()}`;

  // hint
  const hintWrap = document.getElementById("modal-hint-wrap");
  const hintBody = document.getElementById("hintBody");
  const hintToggleBtn = document.getElementById("hintToggle");
  if (q.hint) {
    hintWrap.style.display = "block";
    document.getElementById("modal-hint").textContent = q.hint;
    hintBody.style.display = "none";
    hintToggleBtn.innerHTML = '<span class="hint-icon">💡</span> Show Hint';
  } else {
    hintWrap.style.display = "none";
  }

  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function toggleHint() {
  const hintBody = document.getElementById("hintBody");
  const btn = document.getElementById("hintToggle");
  const visible = hintBody.style.display !== "none";
  hintBody.style.display = visible ? "none" : "block";
  btn.innerHTML = visible
    ? '<span class="hint-icon">💡</span> Show Hint'
    : '<span class="hint-icon">💡</span> Hide Hint';
}

function closeModal(e) {
  if (e && e.target !== document.getElementById("modalOverlay") && !e.target.classList.contains("modal-close")) return;
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

// Close modal on Escape key
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal({ target: document.getElementById("modalOverlay") });
});

// ── Navbar scroll effect ───────────────────────────────────────
window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 20);
});