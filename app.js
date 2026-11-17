const VISUALS = {
  default: `
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="34" class="v-main" />
      <circle cx="60" cy="60" r="34" class="v-stroke" />
    </svg>
  `,
  compressed: `
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="34" class="v-main" />
      <circle cx="60" cy="60" r="34" class="v-stroke" />
      <path d="M34 60h52" class="v-line" />
    </svg>
  `,
  molded: `
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <rect x="36" y="32" width="48" height="56" rx="16" class="v-main" />
      <rect x="36" y="32" width="48" height="56" rx="16" class="v-stroke" />
      <circle cx="50" cy="50" r="3" class="v-dot" />
      <circle cx="66" cy="58" r="3" class="v-dot" />
      <circle cx="56" cy="70" r="3" class="v-dot" />
    </svg>
  `,
  multiple: `
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <rect x="28" y="38" width="64" height="22" rx="11" class="v-accent" />
      <rect x="28" y="60" width="64" height="22" rx="11" class="v-main" />
      <rect x="28" y="38" width="64" height="44" rx="11" class="v-stroke" />
    </svg>
  `,
  core: `
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="34" class="v-main" />
      <circle cx="60" cy="60" r="18" class="v-accent" />
      <circle cx="60" cy="60" r="34" class="v-stroke" />
    </svg>
  `,
  repeat: `
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="34" class="v-main" />
      <path d="M60 26a34 34 0 0 1 0 68" class="v-accent" />
      <circle cx="60" cy="60" r="34" class="v-stroke" />
      <path d="M60 42v18l12 8" class="v-line" />
    </svg>
  `,
  enteric: `
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="26" class="v-main" />
      <circle cx="60" cy="60" r="36" class="v-stroke" stroke-dasharray="8 6" />
      <path d="M42 60c8 12 28 12 36 0" class="v-line" />
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
  chewable: `
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="34" class="v-main" />
      <circle cx="60" cy="60" r="34" class="v-stroke" />
      <circle cx="88" cy="44" r="14" class="v-cut" />
      <path d="M76 52l8-8 8 8" class="v-line" />
    </svg>
  `,
  buccal: `
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <rect x="34" y="44" width="52" height="32" rx="16" class="v-main" />
      <rect x="34" y="44" width="52" height="32" rx="16" class="v-stroke" />
      <path d="M24 78c18 12 54 12 72 0" class="v-line" />
    </svg>
  `,
  sublingual: `
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <ellipse cx="60" cy="70" rx="26" ry="14" class="v-main" />
      <ellipse cx="60" cy="70" rx="26" ry="14" class="v-stroke" />
      <path d="M28 54c18-18 46-18 64 0" class="v-line" />
    </svg>
  `,
  lozenge: `
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <path d="M60 26l28 34-28 34-28-34z" class="v-main" />
      <path d="M60 26l28 34-28 34-28-34z" class="v-stroke" />
      <path d="M48 60h24" class="v-line" />
    </svg>
  `,
  dental: `
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <path d="M60 28l26 62H34z" class="v-main" />
      <path d="M60 28l26 62H34z" class="v-stroke" />
      <path d="M48 76h24" class="v-line" />
    </svg>
  `,
  implant: `
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <rect x="28" y="52" width="64" height="18" rx="9" class="v-main" />
      <rect x="28" y="52" width="64" height="18" rx="9" class="v-stroke" />
      <path d="M20 42h80" class="v-line" stroke-dasharray="6 6" />
    </svg>
  `,
  vaginal: `
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <ellipse cx="60" cy="62" rx="24" ry="32" class="v-main" />
      <ellipse cx="60" cy="62" rx="24" ry="32" class="v-stroke" />
      <path d="M60 40v44" class="v-line" opacity="0.45" />
    </svg>
  `,
  effervescent: `
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <rect x="38" y="54" width="44" height="28" rx="10" class="v-main" />
      <rect x="38" y="54" width="44" height="28" rx="10" class="v-stroke" />
      <circle cx="46" cy="42" r="5" class="v-bubble" />
      <circle cx="62" cy="34" r="7" class="v-bubble" />
      <circle cx="78" cy="44" r="4" class="v-bubble" />
    </svg>
  `,
  dispensing: `
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <path d="M38 34h44l-6 54H44z" class="v-glass" />
      <path d="M38 34h44l-6 54H44z" class="v-stroke" />
      <rect x="52" y="58" width="16" height="10" rx="4" class="v-main" />
    </svg>
  `,
  hypodermic: `
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <rect x="28" y="52" width="54" height="16" rx="4" class="v-main" />
      <rect x="28" y="52" width="54" height="16" rx="4" class="v-stroke" />
      <path d="M82 60h14M88 54v12" class="v-line" />
      <rect x="36" y="44" width="10" height="32" rx="3" class="v-accent" />
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
  book: `
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
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
  flask: `
    <path d="M9 3h6" />
    <path d="M10 3v6.5L4.8 18a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 9.5V3" />
    <path d="M7.5 14h9" />
  `,
  search: `
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  `,
  scale: `
    <path d="M12 3v18" />
    <path d="M5 7h14" />
    <path d="m5 7-3 6h6Z" />
    <path d="m19 7-3 6h6Z" />
    <path d="M8 21h8" />
  `,
  user: `
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  `,
  pill: `
    <path d="M10.5 20.5a5 5 0 0 1-7-7l7-7a5 5 0 0 1 7 7Z" />
    <path d="m8.5 8.5 7 7" />
  `,
  play: `
    <path d="M8 5v14l11-7Z" />
  `,
  close: `
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  `,
  chevron: `
    <path d="m6 9 6 6 6-6" />
  `,
  arrow: `
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  `,
  shield: `
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
  `,
  clock: `
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  `,
  package: `
    <path d="m7.5 4.3 9 5.1" />
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  `,
  syringe: `
    <path d="m18 2 4 4" />
    <path d="m17 7 3-3" />
    <path d="M19 9 9 19l-4 1 1-4L16 6" />
    <path d="m14 11 3 3" />
  `,
  droplet: `
    <path d="M12 2s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />
  `,
  tooth: `
    <path d="M12 2c-3 0-4 2-6 2S3 6 3 9c0 4 2 6 3 10 1 3 2 3 3 0 1-2 1-4 3-4s2 2 3 4c1 3 2 3 3 0 1-4 3-6 3-10 0-3-1-5-3-5s-3-2-6-2Z" />
  `,
  chart: `
    <path d="M3 3v18h18" />
    <path d="M7 15l3-3 3 3 5-6" />
  `
};

const EMOJI_CODE_MAP = {
  0x2139: "info",
  0x1f4cb: "clipboard",
  0x2705: "check",
  0x26a0: "alert",
  0x1f4da: "book",
  0x1f9f1: "layers",
  0x2699: "settings",
  0x1f9ea: "flask",
  0x1f50d: "search",
  0x2696: "scale"
};

const state = {
  role: localStorage.getItem("tab_role") || "",
  filter: "all",
  query: "",
  openDetailId: null
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

  $("#searchInput").addEventListener("input", (e) => {
    state.query = e.target.value.toLowerCase().trim();
    updateVisibility();
    render();
  });

  document.querySelectorAll("#filters .chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      setActiveFilter(btn.dataset.filter);
      render();
    });
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
    item.representative,
    item.route,
    item.preparation,
    item.summary,
    ...(item.tags || []),
    ...(item.categories || [])
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

window.setRole = function setRole(role) {
  state.role = role;
  localStorage.setItem("tab_role", role);

  $("#roleModal").classList.remove("is-open");
  document.body.classList.remove("locked");

  applyRole();
  updateVisibility();
  render();

  // Focus search only on larger screens to avoid mobile keyboard popping immediately.
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

  setActiveFilter("all");
  render();

  $("#roleModal").classList.add("is-open");
  document.body.classList.add("locked");
  closeDetail();
};

window.clearSearch = function clearSearch() {
  state.query = "";
  state.filter = "all";
  $("#searchInput").value = "";
  setActiveFilter("all");
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

function render() {
  const grid = $("#grid");
  const count = $("#resultCount");

  if (!state.query) {
    grid.innerHTML = "";
    count.textContent = "";
    return;
  }

  const items = TABLETS.filter((item) => {
    const matchesFilter =
      state.filter === "all" || item.categories.includes(state.filter);

    const searchText = item._searchText || getSearchText(item);
    const matchesQuery = searchText.includes(state.query);

    return matchesFilter && matchesQuery;
  });

  if (!items.length) {
    grid.innerHTML = `
      <div class="empty">
        No tablet types match this search.
      </div>
    `;
  } else {
    grid.innerHTML = items.map(cardHTML).join("");
  }

  count.textContent = `${items.length} tablet type${
    items.length === 1 ? "" : "s"
  }`;
}

function cardHTML(item) {
  return `
    <article class="card" onclick="openDetail('${item.id}')">
      <div class="card-visual">
        ${mediaHTML(item)}
      </div>
      <div class="card-body">
        <div class="card-top">
          <span class="badge">${item.route}</span>
          <span class="mini">${item.categories[0]}</span>
        </div>
        <h3>${item.name}</h3>
        <p class="rep">${item.representative}</p>
        <p class="sum">${item.summary}</p>
        <div class="tags">
          ${(item.tags || [])
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
    { label: "Route / use", value: item.route },
    {
      label: "Classification",
      value: item.categories.map(capitalize).join(" / ")
    },
    { label: "Representative", value: item.representative },
    {
      label: "Preparation",
      value: item.preparation || "See technical sections"
    }
  ];

  $("#detailContent").innerHTML = `
    <div class="detail-hero">
      <div>
        ${mediaHTML(item, "large")}
      </div>
      <div>
        <div class="detail-badges">
          <span>${item.route}</span>
          <span>${item.preparation || "Tablet type"}</span>
          <span>${perspective} view</span>
        </div>
        <h2>${item.name}</h2>
        <p class="detail-rep"><strong>Representative:</strong> ${item.representative}</p>
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
          .map((section, index) => sectionHTML(section, index, perspective))
          .join("")}
      </div>
    </div>
  `;
}

function sectionHTML(section, index, perspective) {
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
        ${videoHTML(section, index, perspective)}
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
          <strong>Safety note</strong>
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

function videoHTML(section, index, perspective) {
  if (section.video === false) return "";

  const v = section.video || {};
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
    "Placeholder for your recorded explanation. Replace with an MP4 file or YouTube/Vimeo embed inside data/tablets.js.";

  if (v.src) {
    return `
      <div class="video-block">
        <video class="real-video" controls src="${v.src}"></video>
        <div class="video-meta">
          <span>${title}</span>
          <span>${duration}</span>
        </div>
      </div>
    `;
  }

  if (v.embed) {
    return `
      <div class="video-block">
        <div class="embed-responsive">
          <iframe src="${v.embed}" allowfullscreen></iframe>
        </div>
        <div class="video-meta">
          <span>${title}</span>
          <span>${duration}</span>
        </div>
      </div>
    `;
  }

  return `
    <div class="video-block">
      <div class="video-stage">
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
      <div class="video-meta">
        <span>${title}</span>
        <span>${duration}</span>
      </div>
      <div class="video-note">${note}</div>
    </div>
  `;
}

function mediaHTML(item, size = "") {
  if (item.image) {
    return `
      <div class="visual visual--photo ${size}">
        <img src="${item.image}" alt="${item.name}" />
      </div>
    `;
  }

  return `
    <div class="visual visual--${item.visual || "default"} ${size}">
      ${VISUALS[item.visual] || VISUALS.default}
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

  const code = value.codePointAt(0);
  return EMOJI_CODE_MAP[code] || "info";
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
