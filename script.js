// State Management
let currentRole = localStorage.getItem('tab_role') || null;
let tabletData = [];

// DOM Elements
const roleModal = document.getElementById('role-modal');
const detailModal = document.getElementById('detail-modal');
const gridContainer = document.getElementById('tablet-grid');
const userBadge = document.getElementById('user-badge');
const filterBtns = document.querySelectorAll('.filter-btn');

// Initialization
document.addEventListener('DOMContentLoaded', async () => {
    await loadData();
    
    if (currentRole) {
        applyRole(currentRole);
    } else {
        roleModal.classList.add('active');
    }

    // Setup Filter Listeners
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filter = e.target.dataset.filter;
            renderGrid(filter);
            
            // Update Active Class
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
});

// Fetch Data
async function loadData() {
    try {
        const response = await fetch('/data/tablets.json');
        tabletData = await response.json();
        renderGrid('all');
    } catch (error) {
        console.error("Error loading data:", error);
        gridContainer.innerHTML = "<p>Error loading tablet data. Check console.</p>";
    }
}

// Set User Role
function setRole(role) {
    currentRole = role;
    localStorage.setItem('tab_role', role);
    applyRole(role);
    roleModal.classList.remove('active');
}

function resetRole() {
    currentRole = null;
    localStorage.removeItem('tab_role');
    location.reload(); // Simple reload to show modal again
}

function applyRole(role) {
    document.body.setAttribute('data-role', role);
    userBadge.textContent = role === 'patient' ? 'Patient Mode' : 'Pharmacist Mode';
    userBadge.className = `user-badge badge-${role}`;
    
    // Re-render grid to ensure any role-specific card previews update if needed
    renderGrid(document.querySelector('.filter-btn.active').dataset.filter);
}

// Render Grid
function renderGrid(categoryFilter) {
    gridContainer.innerHTML = '';
    
    let filteredData = tabletData;
    if (categoryFilter !== 'all') {
        filteredData = tabletData.filter(item => item.category === categoryFilter);
    }

    filteredData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => openDetail(item.id);

        // Determine short description based on role if desired, otherwise generic
        const desc = item.descriptionShort;

        card.innerHTML = `
            <div class="card-img-placeholder">
                <img src="${item.imagePath}" alt="${item.name}" style="width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none'; this.parentElement.innerText='Image Placeholder'">
            </div>
            <div class="card-body">
                <div class="card-subtitle">${item.route}</div>
                <h3 class="card-title">${item.name}</h3>
                <p class="card-desc">${desc}</p>
                <div class="card-footer">
                    <span class="tag">${item.representativeDrug.split('(')[0]}</span>
                    <span style="color:var(--accent-${currentRole}); font-weight:bold;">View Details →</span>
                </div>
            </div>
        `;
        gridContainer.appendChild(card);
    });
}

// Open Detail Modal
function openDetail(id) {
    const item = tabletData.find(t => t.id === id);
    if (!item) return;

    const contentDiv = document.getElementById('detail-content');
    const roleContent = item.content[currentRole];
    const otherRole = currentRole === 'patient' ? 'pharmacist' : 'patient';
    const otherContent = item.content[otherRole];

    // Build HTML for the modal
    contentDiv.innerHTML = `
        <div class="detail-header">
            <h2>${item.name}</h2>
            <p><strong>Category:</strong> ${item.category.toUpperCase()} | <strong>Route:</strong> ${item.route}</p>
            <p><strong>Representative Drug:</strong> ${item.representativeDrug}</p>
        </div>
        
        <div class="detail-body">
            <!-- Left Column: Visuals & Video -->
            <div class="visual-col">
                <div class="image-preview" style="background:#eee; height:250px; display:flex; align-items:center; justify-content:center; border-radius:8px; margin-bottom:1rem;">
                     <img src="${item.imagePath}" alt="${item.name}" style="max-width:100%; max-height:100%;">
                </div>
                
                <div class="video-section">
                    <h4 class="section-title">Explanation Video (${currentRole})</h4>
                    <div class="video-placeholder">
                        <!-- Replace src with actual video path -->
                        <video controls style="width:100%; height:100%; background:black;">
                            <source src="${roleContent.videoId}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <p style="font-size:0.8rem; color:#666; margin-top:0.5rem;">Placeholder: Insert recorded lecture/explanation here.</p>
                </div>
            </div>

            <!-- Right Column: Text Info -->
            <div class="info-col">
                ${generateInfoBlock(roleContent)}
                
                <hr style="margin: 2rem 0; border:0; border-top:1px dashed #ccc;">
                
                <details>
                    <summary style="cursor:pointer; color:#666; font-weight:bold;">Toggle to see ${otherRole} perspective</summary>
                    <div style="margin-top:1rem; background:#f9f9f9; padding:1rem; border-radius:8px;">
                         ${generateInfoBlock(otherContent, true)}
                    </div>
                </details>
            </div>
        </div>
    `;

    detailModal.classList.add('show');
    detailModal.classList.remove('hidden');
}

function generateInfoBlock(data, isSecondary = false) {
    let html = '';
    
    // Patient Specific Fields
    if (data.usage) {
        html += `<div class="section-block"><h4 class="section-title" style="color:${isSecondary ? '#666' : 'var(--accent-patient)'}">Usage Instructions</h4><p>${data.usage}</p></div>`;
    }
    if (data.benefits) {
        html += `<div class="section-block"><h4 class="section-title" style="color:${isSecondary ? '#666' : 'var(--accent-patient)'}">Benefits</h4><ul><li>${Array.isArray(data.benefits) ? data.benefits.join('</li><li>') : data.benefits}</li></ul></div>`;
    }
    if (data.warning) {
        html += `<div class="section-block" style="background:#fff3cd; padding:1rem; border-left:4px solid #ffc107;"><strong>⚠️ Warning:</strong> ${data.warning}</div>`;
    }

    // Pharmacist Specific Fields
    if (data.manufacturing) {
        html += `<div class="section-block"><h4 class="section-title" style="color:${isSecondary ? '#666' : 'var(--accent-pharmacist)'}">Manufacturing Process</h4><p>${data.manufacturing}</p></div>`;
    }
    if (data.excipients) {
        html += `<div class="section-block"><h4 class="section-title" style="color:${isSecondary ? '#666' : 'var(--accent-pharmacist)'}">Key Excipients</h4><ul><li>${Array.isArray(data.excipients) ? data.excipients.join('</li><li>') : data.excipients}</li></ul></div>`;
    }
    if (data.qcTests) {
        html += `<div class="section-block"><h4 class="section-title" style="color:${isSecondary ? '#666' : 'var(--accent-pharmacist)'}">Quality Control</h4><p>${data.qcTests}</p></div>`;
    }
    if (data.advantages || data.disadvantages) {
        html += `<div class="section-block"><h4 class="section-title" style="color:${isSecondary ? '#666' : 'var(--accent-pharmacist)'}">Pros & Cons</h4>
                 <p><strong>+</strong> ${data.advantages || ''}</p>
                 <p><strong>-</strong> ${data.disadvantages || ''}</p></div>`;
    }
    if (data.mechanism) {
        html += `<div class="section-block"><h4 class="section-title" style="color:${isSecondary ? '#666' : 'var(--accent-pharmacist)'}">Mechanism/Purpose</h4><p>${data.mechanism}</p></div>`;
    }
    if (data.absorption) {
        html += `<div class="section-block"><h4 class="section-title" style="color:${isSecondary ? '#666' : 'var(--accent-pharmacist)'}">Absorption Pathway</h4><p>${data.absorption}</p></div>`;
    }
    if (data.formulation) {
        html += `<div class="section-block"><h4 class="section-title" style="color:${isSecondary ? '#666' : 'var(--accent-pharmacist)'}">Formulation Notes</h4><p>${data.formulation}</p></div>`;
    }
    if (data.stability) {
        html += `<div class="section-block"><h4 class="section-title" style="color:${isSecondary ? '#666' : 'var(--accent-pharmacist)'}">Stability</h4><p>${data.stability}</p></div>`;
    }
    if (data.packaging) {
        html += `<div class="section-block"><h4 class="section-title" style="color:${isSecondary ? '#666' : 'var(--accent-pharmacist)'}">Packaging Requirements</h4><p>${data.packaging}</p></div>`;
    }
    if (data.base) {
        html += `<div class="section-block"><h4 class="section-title" style="color:${isSecondary ? '#666' : 'var(--accent-pharmacist)'}">Base Composition</h4><p>${data.base}</p></div>`;
    }
    if (data.shape) {
        html += `<div class="section-block"><h4 class="section-title" style="color:${isSecondary ? '#666' : 'var(--accent-pharmacist)'}">Shape/Design</h4><p>${data.shape}</p></div>`;
    }
    if (data.dissolution) {
        html += `<div class="section-block"><h4 class="section-title" style="color:${isSecondary ? '#666' : 'var(--accent-pharmacist)'}">Dissolution Profile</h4><p>${data.dissolution}</p></div>`;
    }
    if (data.composition) {
        html += `<div class="section-block"><h4 class="section-title" style="color:${isSecondary ? '#666' : 'var(--accent-pharmacist)'}">Composition</h4><p>${data.composition}</p></div>`;
    }
    if (data.release) {
        html += `<div class="section-block"><h4 class="section-title" style="color:${isSecondary ? '#666' : 'var(--accent-pharmacist)'}">Release Mechanism</h4><p>${data.release}</p></div>`;
    }
    if (data.binders) {
        html += `<div class="section-block"><h4 class="section-title" style="color:${isSecondary ? '#666' : 'var(--accent-pharmacist)'}">Binders Used</h4><p>${data.binders}</p></div>`;
    }
    if (data.purpose) {
        html += `<div class="section-block"><h4 class="section-title" style="color:${isSecondary ? '#666' : 'var(--accent-pharmacist)'}">Primary Purpose</h4><p>${data.purpose}</p></div>`;
    }
    if (data.appearance) {
        html += `<div class="section-block"><h4 class="section-title" style="color:${isSecondary ? '#666' : 'var(--accent-pharmacist)'}">Appearance</h4><p>${data.appearance}</p></div>`;
    }
    if (data.hardness) {
        html += `<div class="section-block"><h4 class="section-title" style="color:${isSecondary ? '#666' : 'var(--accent-pharmacist)'}">Hardness Specs</h4><p>${data.hardness}</p></div>`;
    }
    if (data.disintegrants) {
        html += `<div class="section-block"><h4 class="section-title" style="color:${isSecondary ? '#666' : 'var(--accent-pharmacist)'}">Disintegrants</h4><p>${data.disintegrants}</p></div>`;
    }
    if (data.chemistry) {
        html += `<div class="section-block"><h4 class="section-title" style="color:${isSecondary ? '#666' : 'var(--accent-pharmacist)'}">Chemistry</h4><p>${data.chemistry}</p></div>`;
    }
    if (data.solubility) {
        html += `<div class="section-block"><h4 class="section-title" style="color:${isSecondary ? '#666' : 'var(--accent-pharmacist)'}">Solubility</h4><p>${data.solubility}</p></div>`;
    }

    return html;
}

// Close Detail Modal
function closeDetail() {
    detailModal.classList.remove('show');
    setTimeout(() => detailModal.classList.add('hidden'), 300);
}

// Close on outside click
window.onclick = function(event) {
    if (event.target == detailModal) {
        closeDetail();
    }
}
