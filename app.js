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
  if (state.role) {
    applyRole();
  } else {
    $("#roleModal").classList.add("is-open");
    document.body.classList.add("locked");
  }

  $("#searchInput").addEventListener("input", (e) => {
    state.query = e.target.value.toLowerCase().trim();
    render();
  });

  document.querySelectorAll("#filters .chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#filters .chip").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      state.filter = btn.dataset.filter;
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

  render();
}

window.setRole = function setRole(role) {
  state.role = role;
  localStorage.setItem("tab_role", role);
  $("#roleModal").classList.remove("is-open");
  document.body.classList.remove("locked");
  applyRole();
  render();
};

window.resetRole = function resetRole() {
  localStorage.removeItem("tab_role");
  state.role = "";
  document.body.removeAttribute("data-role");
  $("#roleBadge").textContent = "Select role";
  $("#roleBadge").className = "role-badge";
  $("#roleModal").classList.add("is-open");
  document.body.classList.add("locked");
  closeDetail();
};

function applyRole() {
  document.body.dataset.role = state.role;
  const badge = $("#roleBadge");
  badge.textContent = state.role === "patient" ? "Patient mode" : "Pharmacist mode";
  badge.className = `role-badge role-badge-${state.role}`;
}

function render() {
  const items = TABLETS.filter((item) => {
    const matchesFilter =
      state.filter === "all" ||
      item.categories.includes(state.filter);

    const searchable = [
      item.name,
      item.representative,
      item.route,
      item.preparation,
      item.summary,
      ...(item.tags || []),
      ...(item.categories || [])
    ]
      .join(" ")
      .toLowerCase();

    const matchesQuery = !state.query || searchable.includes(state.query);

    return matchesFilter && matchesQuery;
  });

  const grid = $("#grid");

  if (!items.length) {
    grid.innerHTML = `
      <div class="empty">
        No tablet types match this search or filter.
      </div>
    `;
  } else {
    grid.innerHTML = items.map(cardHTML).join("");
  }

  $("#resultCount").textContent = `${items.length} tablet type${items.length === 1 ? "" : "s"}`;
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
          ${(item.tags || []).map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <div class="card-cta">
          <span>Open dossier</span>
          <span>→</span>
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
    { label: "Classification", value: item.categories.map(capitalize).join(" • ") },
    { label: "Representative", value: item.representative },
    { label: "Preparation", value: item.preparation || "See technical sections" }
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
          <button class="${perspective === "patient" ? "active" : ""}" onclick="setPerspective('patient')">
            Patient view
          </button>
          <button class="${perspective === "pharmacist" ? "active" : ""}" onclick="setPerspective('pharmacist')">
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
        ${sections.map((section, index) => sectionHTML(section, index, perspective)).join("")}
      </div>
    </div>
  `;
}

function sectionHTML(section, index, perspective) {
  return `
    <details class="accordion" ${index === 0 ? "open" : ""}>
      <summary>
        <span class="acc-icon">${section.icon || "📄"}</span>
        <span>${section.title}</span>
        <span class="chev">⌄</span>
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
        ${section.pros ? `
          <div class="pros">
            <h4>Advantages</h4>
            <ul>
              ${section.pros.map((p) => `<li>${p}</li>`).join("")}
            </ul>
          </div>
        ` : ""}
        ${section.cons ? `
          <div class="cons">
            <h4>Limitations</h4>
            <ul>
              ${section.cons.map((c) => `<li>${c}</li>`).join("")}
            </ul>
          </div>
        ` : ""}
      </div>
    `;
  }

  if (section.warning) {
    html += `
      <div class="warning">
        <strong>⚠️ Safety note:</strong> ${section.warning}
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
    `${perspective === "patient" ? "Patient" : "Pharmacist"} explanation: ${section.title}`;

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
        <div class="play"></div>
        <div class="video-watermark">VIDEO PLACEHOLDER</div>
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

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
