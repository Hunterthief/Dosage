const VISUALS = {
  default: `
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="34" class="v-main" />
      <circle cx="60" cy="60" r="34" class="v-stroke" />
    </svg>
  `,
  sugar: `
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="62" r="32" class="v-main" />
      <circle cx="60" cy="62" r="32" class="v-stroke" />
      <path d="M42 48c8-10 24-12 34-2" class="v-gloss" />
      <circle cx="84" cy="34" r="3" class="v-spark" />
      <circle cx="92" cy="48" r="2" class="v-spark" />
    </svg>
  `,
  film: `
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="28" class="v-main" />
      <circle cx="60" cy="60" r="34" class="v-stroke" stroke-width="3" />
      <path d="M38 52c10-12 34-12 44 0" class="v-gloss" />
    </svg>
  `,
  enteric: `
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="26" class="v-main" />
      <circle cx="60" cy="60" r="36" class="v-stroke" stroke-dasharray="8 6" />
      <path d="M42 60c8 12 28 12 36 0" class="v-line" />
    </svg>
  `,
  chewable: `
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="34" class="v-main" />
      <circle cx="60" cy="60" r="34" class="v-stroke" />
      <circle cx="88" cy="44" r="14" class="v-cut" />
      <path d="M76 52l8-8 8 8" class="v-line" />
    </svg>
  `
};

const ICONS = {
  info: `
    <circle cx="12" cy="12" r="9" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  `,
  clipboard: `
    <rect x="8" y="3" width="8" height="4" rx="1" />
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
    <path d="M9 12h6" />
    <path d="M9 16h4" />
  `,
  check: `
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12.5 2.5 2.5 4.5-5" />
  `,
  alert: `
    <path d="M10.3 3.9 2.8 17a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  `,
  shield: `
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
  `,
  flask: `
    <path d="M9 3h6" />
    <path d="M10 3v6.5L4.8 18a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 9.5V3" />
    <path d="M7.5 14h9" />
  `,
  layers: `
    <path d="m12 2 9 5-9 5-9-5 9-5Z" />
    <path d="m3 12 9 5 9-5" />
    <path d="m3 17 9 5 9-5" />
  `,
  settings: `
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
  `,
  package: `
    <path d="m7.5 4.3 9 5.1" />
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  `,
  chevron: `
    <path d="m6 9 6 6 6-6" />
  `,
  arrow: `
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  `
};

const FILTER_LABELS = {
  all: "All types",
  sugar: "Sugar-coated",
  film: "Film-coated",
  enteric: "Enteric-coated",
  chewable: "Chewable"
};

const FILTER_ORDER = ["all", "sugar", "film", "enteric", "chewable"];

const state = {
  role: localStorage.getItem("tab_role") || "",
  filter: "all",
  query: "",
  openDetailId: null,
  autoOpenedId: null,
  suppressAutoOpen: false
};

function $(selector) {
  return document.querySelector(selector);
}

document.addEventListener("DOMContentLoaded", init);

function init() {
  buildSearchIndex();

  if (state.role) {
    applyRole();
  } else {
    $("#roleModal").classList.add("is-open");
    document.body.classList.add("locked");
  }

  buildFilters();

  $("#searchInput").addEventListener("input", (e) => {
    state.query = e.target.value.toLowerCase().trim();
    resetAutoOpen();
    updateVisibility();
    render();
  });

  $("#filters").addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;

    resetAutoOpen();
    setActiveFilter(btn.dataset.filter);
    render();
  });

  $("#detailModal").addEventListener("click", (event) => {
    if (event.target.id === "detailModal") {
      closeDetail();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDetail();
    }
  });

  updateVisibility();
  render();
}

function buildSearchIndex() {
  if (typeof TABLETS === "undefined") return;

  TABLETS.forEach((item) => {
    item._searchText = getSearchText(item);
  });
}

function getSearchText(item) {
  const parts = [
    item.name,
    item.type,
    item.formulation,
    item.api,
    item.manufacturer,
    item.route,
    item.preparation,
    item.summary,
    ...(item.tags || []),
    ...(item.categories || []),
    ...(item.filters || [])
  ];

  const addSections = (sections = []) => {
    sections.forEach((section) => {
      if (section.title) parts.push(section.title);
      if (section.text) parts.push(section.text);
      if (section.warning) parts.push(section.warning);
      if (section.note) parts.push(section.note);

      if (section.list) {
        parts.push(section.list.join(" "));
      }

      if (section.facts) {
        section.facts.forEach((fact) => {
          parts.push(fact.label);
          parts.push(fact.value);
        });
      }

      if (section.pros) {
        parts.push(section.pros.join(" "));
      }

      if (section.cons) {
        parts.push(section.cons.join(" "));
      }

      if (section.video && section.video.title) {
        parts.push(section.video.title);
      }
    });
  };

  addSections(item.patient);
  addSections(item.pharmacist);

  return parts.filter(Boolean).join(" ").toLowerCase();
}

function buildFilters() {
  const set = new Set(["all"]);

  if (typeof TABLETS !== "undefined") {
    TABLETS.forEach((item) => {
      (item.filters || []).forEach((filter) => set.add(filter));
    });
  }

  const ordered = FILTER_ORDER.filter((key) => set.has(key));
  const extra = [...set].filter((key) => !FILTER_ORDER.includes(key));
  const keys = [...ordered, ...extra];

  $("#filters").innerHTML = keys
    .map(
      (key) => `
        <button
          class="chip ${state.filter === key ? "is-active" : ""}"
          data-filter="${key}"
        >
          ${FILTER_LABELS[key] || capitalize(key)}
        </button>
      `
    )
    .join("");
}

window.setRole = function setRole(role) {
  state.role = role;
  localStorage.setItem("tab_role", role);

  $("#roleModal").classList.remove("is-open");
  document.body.classList.remove("locked");

  applyRole();
  resetAutoOpen();
  updateVisibility();
  render();

  if (window.matchMedia("(min-width: 768px)").matches) {
    $("#searchInput").focus({ preventScroll: true });
  }
};

window.resetRole = function resetRole() {
  localStorage.removeItem("tab_role");
  state.role = "";
  state.query = "";
  state.filter = "all";

  $("#searchInput").value = "";
  document.body.removeAttribute("data-role");
  document.body.classList.remove("has-results");

  $("#roleBadge").textContent = "Select role";
  $("#roleBadge").className = "role-badge";

  resetAutoOpen();
  buildFilters();
  render();

  $("#roleModal").classList.add("is-open");
  document.body.classList.add("locked");
  closeDetail();
};

window.clearSearch = function clearSearch() {
  state.query = "";
  state.filter = "all";
  $("#searchInput").value = "";

  resetAutoOpen();
  buildFilters();
  updateVisibility();
  render();
  $("#searchInput").focus({ preventScroll: true });
};

function applyRole() {
  document.body.dataset.role = state.role;

  const badge = $("#roleBadge");
  badge.textContent =
    state.role === "patient" ? "Patient mode" : "Pharmacist mode";
  badge.className = `role-badge role-badge-${state.role}`;
}

function updateVisibility() {
  document.body.classList.toggle("has-results", Boolean(state.query));
}

function setActiveFilter(filter) {
  state.filter = filter;

  document.querySelectorAll("#filters .chip").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.filter === filter);
  });
}

function resetAutoOpen() {
  state.autoOpenedId = null;
  state.suppressAutoOpen = false;
}

function render() {
  const grid = $("#grid");
  const count = $("#resultCount");

  if (!state.query) {
    grid.innerHTML = "";
    count.textContent = "";
    return;
  }

  if (typeof TABLETS === "undefined") {
    grid.innerHTML = `
      <div class="empty">
        Data file not loaded. Check <code>data/tablets.js</code>.
      </div>
    `;
    count.textContent = "";
    return;
  }

  const items = TABLETS.filter((item) => {
    const matchesFilter =
      state.filter === "all" ||
      (item.filters || []).includes(state.filter);

    const searchText = item._searchText || getSearchText(item);
    const matchesQuery = searchText.includes(state.query);

    return matchesFilter && matchesQuery;
  });

  if (!items.length) {
    grid.innerHTML = `
      <div class="empty">
        No results match this search.
      </div>
    `;
  } else {
    grid.innerHTML = items.map(cardHTML).join("");
  }

  count.textContent = `${items.length} result${
    items.length === 1 ? "" : "s"
  }`;

  if (
    items.length === 1 &&
    !state.suppressAutoOpen &&
    state.autoOpenedId !== items[0].id
  ) {
    state.autoOpenedId = items[0].id;
    openDetail(items[0].id);
  } else if (items.length !== 1) {
    state.autoOpenedId = null;
  }
}

function cardHTML(item) {
  return `
    <article class="card" onclick="openDetail('${item.id}')">
      <div class="card-visual">
        ${mediaHTML(item)}
      </div>
      <div class="card-body">
        <div class="card-top">
          <span class="badge">${item.type}</span>
          <span class="mini">${item.filters[0] || item.categories[0]}</span>
        </div>
        <h3>${item.name}</h3>
        <p class="rep">${item.api}</p>
        <p class="sum">${item.summary}</p>
        <div class="tags">
          ${(item.tags || [])
            .slice(0, 5)
            .map((tag) => `<span>${tag}</span>`)
            .join("")}
        </div>
        <div class="card-cta">
          <span>Open dossier</span>
          ${iconHTML("arrow")}
        </div>
      </div>
    </article>
  `;
}

window.openDetail = function openDetail(id) {
  const item = TABLETS.find((x) => x.id === id);
  if (!item) return;

  state.openDetailId = id;
  renderDetail(item, state.role || "pharmacist");

  $("#detailModal").classList.add("is-open");
  document.body.classList.add("locked");
};

window.closeDetail = function closeDetail() {
  $("#detailModal").classList.remove("is-open");

  if (!$("#roleModal").classList.contains("is-open")) {
    document.body.classList.remove("locked");
  }

  state.openDetailId = null;
  state.suppressAutoOpen = true;
};

window.setPerspective = function setPerspective(perspective) {
  const item = TABLETS.find((x) => x.id === state.openDetailId);
  if (item) {
    renderDetail(item, perspective);
  }
};

function renderDetail(item, perspective) {
  const sections = perspective === "patient" ? item.patient : item.pharmacist;

  const facts = [
    { label: "Type", value: item.type },
    { label: "API", value: item.api },
    { label: "Manufacturer", value: item.manufacturer },
    { label: "Route / use", value: item.route }
  ];

  $("#detailContent").innerHTML = `
    <div class="detail-hero">
      <div>
        ${mediaHTML(item, "large")}
      </div>
      <div>
        <div class="detail-badges">
          <span>${item.type}</span>
          <span>${item.formulation}</span>
          <span>${perspective} view</span>
        </div>
        <h2>${item.name}</h2>
        <p class="detail-rep"><strong>API:</strong> ${item.api}</p>
        <p>${item.summary}</p>

        <div class="perspective-toggle">
          <button class="${
            perspective === "patient" ? "active" : ""
          }" onclick="setPerspective('patient')">
            Patient view
          </button>
          <button class="${
            perspective === "pharmacist" ? "active" : ""
          }" onclick="setPerspective('pharmacist')">
            Pharmacist view
          </button>
        </div>
      </div>
    </div>

    <div class="detail-body">
      <aside class="quick-facts">
        <h3>Quick facts</h3>
        ${facts
          .map(
            (f) => `
              <div class="fact">
                <span>${f.label}</span>
                <strong>${f.value}</strong>
              </div>
            `
          )
          .join("")}
      </aside>

      <div class="accordions">
        ${sections
          .map((section, index) =>
            sectionHTML(section, index, perspective, item)
          )
          .join("")}
      </div>
    </div>
  `;
}

function sectionHTML(section, index, perspective, item) {
  const iconName = normalizeIcon(section.icon);

  return `
    <details class="accordion" ${index === 0 ? "open" : ""}>
      <summary>
        <span class="acc-icon">${iconHTML(iconName)}</span>
        <span class="acc-title">${section.title}</span>
        <span class="chev">${iconHTML("chevron")}</span>
      </summary>
      <div class="acc-body">
        ${sectionBodyHTML(section)}
        ${videoHTML(section, index, perspective, item)}
      </div>
    </details>
  `;
}

function sectionBodyHTML(section) {
  let html = "";

  if (section.text) {
    html += `<p>${section.text}</p>`;
  }

  if (section.list) {
    html += `
      <ul>
        ${section.list.map((li) => `<li>${li}</li>`).join("")}
      </ul>
    `;
  }

  if (section.facts) {
    html += `
      <div class="fact-grid">
        ${section.facts
          .map(
            (f) => `
              <div>
                <span>${f.label}</span>
                <strong>${f.value}</strong>
              </div>
            `
          )
          .join("")}
      </div>
    `;
  }

  if (section.pros || section.cons) {
    html += `
      <div class="pros-cons">
        ${
          section.pros
            ? `
              <div class="pros">
                <h4>${iconHTML("check")} Advantages</h4>
                <ul>
                  ${section.pros.map((p) => `<li>${p}</li>`).join("")}
                </ul>
              </div>
            `
            : ""
        }
        ${
          section.cons
            ? `
              <div class="cons">
                <h4>${iconHTML("alert")} Limitations</h4>
                <ul>
                  ${section.cons.map((c) => `<li>${c}</li>`).join("")}
                </ul>
              </div>
            `
            : ""
        }
      </div>
    `;
  }

  if (section.warning) {
    html += `
      <div class="warning">
        ${iconHTML("alert")}
        <div class="warning-copy">
          <strong>Important warning</strong>
          <p>${section.warning}</p>
        </div>
      </div>
    `;
  }

  if (section.note) {
    html += `<div class="note">${section.note}</div>`;
  }

  return html;
}

function videoHTML(section, index, perspective, item) {
  if (section.video === false) return "";

  const key = section.videoKey || slug(section.title);
  const v = section.video || {};
  const src = v.src || `./assets/videos/${item.id}_${key}.mp4`;
  const title =
    v.title ||
    `${
      perspective === "patient" ? "Patient" : "Pharmacist"
    } explanation: ${section.title}`;

  const duration =
    v.duration ||
    ["00:48", "01:12", "01:36", "00:58", "01:05"][index % 5];

  const note =
    v.note ||
    `Expected video file: <code>assets/videos/${item.id}_${key}.mp4</code>`;

  return `
    <div class="video-block">
      <div class="video-media">
        <video
          class="real-video"
          controls
          preload="metadata"
          src="${src}"
          onerror="this.closest('.video-block').classList.add('video-missing')"
        ></video>

        <div class="video-stage video-placeholder-stage">
          <div class="play">
            <svg class="play-svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7Z"></path>
            </svg>
          </div>
          <div class="video-watermark">Video placeholder</div>
          <div class="wave">
            ${Array.from({ length: 12 }, () => "<span></span>").join("")}
          </div>
        </div>
      </div>

      <div class="video-meta">
        <span>${title}</span>
        <span>${duration}</span>
      </div>
      <div class="video-note">${note}</div>
    </div>
  `;
}

function mediaHTML(item, size = "") {
  const visualKey = item.visual || "default";
  const imgPath = item.image || `./assets/images/${item.id}.png`;

  return `
    <div class="visual visual--${visualKey} ${size}">
      ${VISUALS[visualKey] || VISUALS.default}
      <img
        class="photo-overlay"
        src="${imgPath}"
        alt="${item.name}"
        onerror="this.style.display='none'"
      />
    </div>
  `;
}

function iconHTML(name, extraClass = "") {
  const key = ICONS[name] ? name : "info";
  return `
    <svg
      class="icon ${extraClass}"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      ${ICONS[key]}
    </svg>
  `;
}

function normalizeIcon(value) {
  if (!value) return "info";
  if (ICONS[value]) return value;
  return "info";
}

function slug(str) {
  return String(str)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
