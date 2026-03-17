// ===== Theme Toggle =====
(function() {
  const toggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  let theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', theme);
  updateToggleIcon();
  
  toggle && toggle.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    updateToggleIcon();
    // Rebuild charts with new colors
    setTimeout(() => {
      initCharts();
      renderSprintContent(currentSprint);
    }, 50);
  });
  
  function updateToggleIcon() {
    if (!toggle) return;
    toggle.innerHTML = theme === 'dark' 
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
})();

// ===== Data =====
const D = DASHBOARD_DATA;
let currentSprint = 'sprint_1';
let chartInstances = {};

// ===== Sort State =====
let rankingSortKey = 'sprints';  // default: sort by sprints count
let rankingSortDir = 'desc';     // default: descending

// ===== Utility Functions =====
function getCSS(prop) {
  return getComputedStyle(document.documentElement).getPropertyValue(prop).trim();
}

function scoreClass(score) {
  if (score >= 3.5) return 'score-high';
  if (score >= 2.5) return 'score-mid';
  if (score >= 1.5) return 'score-low';
  return 'score-vlow';
}

function classCSS(cls) {
  if (cls.includes('Destacado')) return 'class-destacado';
  if (cls.includes('Formación')) return 'class-formacion';
  if (cls.includes('Aprendiz')) return 'class-aprendiz';
  return 'class-insuficiente';
}

function avatarColor(id) {
  const colors = ['#3b2d7e','#0a7b6f','#c77d0a','#b5365a','#6b3fa0','#2a7a3a'];
  let hash = 0;
  for (let c of id) hash = ((hash << 5) - hash) + c.charCodeAt(0);
  return colors[Math.abs(hash) % colors.length];
}

function initials(name) {
  if (name.startsWith('Student_')) return name.slice(8, 10);
  return name.split(' ').filter(Boolean).map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

function levelLabel(score) {
  if (score >= 3.5) return 'Destacado';
  if (score >= 2.5) return 'Competente';
  if (score >= 1.5) return 'En Desarrollo';
  return 'Emergente';
}

function sprintLabel(id) {
  const s = D.meta.sprints.find(s => s.id === id);
  return s ? `${s.emoji} ${s.name}` : id;
}

function shortSprintLabel(id) {
  const num = id.replace('sprint_', '');
  const emojis = { '1': '🧪', '2': '🛡️', '3': '🧩', '4': '🔮' };
  return `${emojis[num] || ''} Sprint ${num}`;
}

// ===== Sparkline SVG =====
function sparklineSVG(scores, sprintKeys) {
  if (scores.length < 2) return '';
  const w = 80, h = 24, pad = 4;
  const min = 1, max = 4;
  const points = scores.map((s, i) => {
    const x = pad + (i / (scores.length - 1)) * (w - 2 * pad);
    const y = h - pad - ((s - min) / (max - min)) * (h - 2 * pad);
    return `${x},${y}`;
  });
  const color = scores[scores.length - 1] >= scores[0] ? getCSS('--color-green') || '#2a7a3a' : getCSS('--color-rose') || '#b5365a';
  return `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
    <polyline points="${points.join(' ')}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    ${points.map((p, i) => `<circle cx="${p.split(',')[0]}" cy="${p.split(',')[1]}" r="2.5" fill="${color}"/>`).join('')}
  </svg>`;
}

// ===== Charts =====
function destroyChart(id) {
  if (chartInstances[id]) {
    chartInstances[id].destroy();
    delete chartInstances[id];
  }
}

function initCharts() {
  const textColor = getCSS('--color-text') || '#1a1814';
  const textMuted = getCSS('--color-text-muted') || '#9e9b93';
  const gridColor = getCSS('--color-divider') || '#ece9e3';
  
  Chart.defaults.color = textMuted;
  Chart.defaults.font.family = "'Satoshi', 'Inter', sans-serif";
  Chart.defaults.font.size = 12;
  
  // Classification Doughnut
  destroyChart('classificationChart');
  const classCtx = document.getElementById('classificationChart');
  if (classCtx) {
    chartInstances['classificationChart'] = new Chart(classCtx, {
      type: 'doughnut',
      data: {
        labels: ['Destacado (5)', 'En Formación (20)', 'Aprendiz Activo (27)'],
        datasets: [{
          data: [
            D.overview.classifications['🔮 Alquimista Destacado'],
            D.overview.classifications['⚗️ Alquimista en Formación'],
            D.overview.classifications['🧪 Aprendiz Activo']
          ],
          backgroundColor: [
            getCSS('--color-amber') || '#c77d0a',
            getCSS('--color-teal') || '#0a7b6f',
            getCSS('--color-violet') || '#6b3fa0'
          ],
          borderWidth: 0,
          hoverOffset: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '65%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: { padding: 16, usePointStyle: true, pointStyle: 'circle', font: { size: 12 } }
          },
          tooltip: {
            backgroundColor: getCSS('--color-surface') || '#fff',
            titleColor: textColor,
            bodyColor: textColor,
            borderColor: gridColor,
            borderWidth: 1,
            padding: 12,
            cornerRadius: 8,
            callbacks: {
              label: function(ctx) {
                const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
                const pct = ((ctx.raw / total) * 100).toFixed(0);
                return ` ${ctx.raw} estudiantes (${pct}%)`;
              }
            }
          }
        }
      }
    });
  }
  
  // Level Distribution Bar
  destroyChart('levelChart');
  const levelCtx = document.getElementById('levelChart');
  if (levelCtx) {
    chartInstances['levelChart'] = new Chart(levelCtx, {
      type: 'bar',
      data: {
        labels: ['Destacado', 'Competente', 'En Desarrollo', 'Emergente'],
        datasets: [{
          data: [
            D.overview.level_distribution['Destacado'],
            D.overview.level_distribution['Competente'],
            D.overview.level_distribution['En Desarrollo'],
            D.overview.level_distribution['Emergente']
          ],
          backgroundColor: [
            getCSS('--color-green') || '#2a7a3a',
            getCSS('--color-teal') || '#0a7b6f',
            getCSS('--color-amber') || '#c77d0a',
            getCSS('--color-rose') || '#b5365a'
          ],
          borderRadius: 6,
          maxBarThickness: 48
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: getCSS('--color-surface') || '#fff',
            titleColor: textColor,
            bodyColor: textColor,
            borderColor: gridColor,
            borderWidth: 1,
            padding: 12,
            cornerRadius: 8,
            callbacks: {
              label: function(ctx) { return ` ${ctx.raw} evaluaciones`; }
            }
          }
        },
        scales: {
          y: { 
            beginAtZero: true, 
            grid: { color: gridColor, drawBorder: false },
            ticks: { stepSize: 10 }
          },
          x: { 
            grid: { display: false },
            ticks: { font: { weight: 500 } }
          }
        }
      }
    });
  }
  
  // Sprint Performance (combined bar + line)
  destroyChart('sprintChart');
  const sprintCtx = document.getElementById('sprintChart');
  if (sprintCtx) {
    const sprintLabels = ['Sprint 1', 'Sprint 2', 'Sprint 3', 'Sprint 4'];
    const sprintIds = ['sprint_1', 'sprint_2', 'sprint_3', 'sprint_4'];
    const participation = sprintIds.map(id => D.overview.sprint_participation[id] || 0);
    const avgScores = sprintIds.map(id => D.overview.sprint_averages[id] || 0);
    
    chartInstances['sprintChart'] = new Chart(sprintCtx, {
      type: 'bar',
      data: {
        labels: sprintLabels,
        datasets: [
          {
            label: 'Participantes',
            data: participation,
            backgroundColor: getCSS('--color-primary') || '#3b2d7e',
            borderRadius: 6,
            maxBarThickness: 56,
            yAxisID: 'y',
            order: 2
          },
          {
            label: 'Promedio',
            data: avgScores,
            type: 'line',
            borderColor: getCSS('--color-amber') || '#c77d0a',
            backgroundColor: getCSS('--color-amber') || '#c77d0a',
            pointBackgroundColor: getCSS('--color-amber') || '#c77d0a',
            pointRadius: 6,
            pointHoverRadius: 8,
            borderWidth: 3,
            tension: 0.3,
            yAxisID: 'y1',
            order: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            align: 'end',
            labels: { usePointStyle: true, pointStyle: 'circle', padding: 16, font: { size: 12 } }
          },
          tooltip: {
            backgroundColor: getCSS('--color-surface') || '#fff',
            titleColor: textColor,
            bodyColor: textColor,
            borderColor: gridColor,
            borderWidth: 1,
            padding: 12,
            cornerRadius: 8
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 55,
            grid: { color: gridColor, drawBorder: false },
            title: { display: true, text: 'Participantes', font: { size: 11 } }
          },
          y1: {
            position: 'right',
            min: 1,
            max: 4,
            grid: { display: false },
            title: { display: true, text: 'Promedio', font: { size: 11 } },
            ticks: { stepSize: 0.5 }
          },
          x: { grid: { display: false } }
        }
      }
    });
  }
}

// ===== Sprint Tab Content =====
function renderSprintContent(sprintId) {
  currentSprint = sprintId;
  const container = document.getElementById('sprintContent');
  const sprint = D.meta.sprints.find(s => s.id === sprintId);
  
  // Get students for this sprint
  const sprintStudents = D.students
    .filter(s => s.sprints[sprintId])
    .map(s => ({
      ...s,
      sprint_score: s.sprints[sprintId].score,
      sprint_level: s.sprints[sprintId].level,
      sprint_data: s.sprints[sprintId]
    }))
    .sort((a, b) => b.sprint_score - a.sprint_score);
  
  const count = sprintStudents.length;
  const avg = count > 0 ? (sprintStudents.reduce((sum, s) => sum + s.sprint_score, 0) / count).toFixed(2) : '—';
  
  // Calculate criteria averages
  const criteriaAvgs = {};
  sprintStudents.forEach(s => {
    Object.entries(s.sprint_data.criteria || {}).forEach(([name, data]) => {
      if (!criteriaAvgs[name]) criteriaAvgs[name] = { total: 0, count: 0 };
      criteriaAvgs[name].total += data.score;
      criteriaAvgs[name].count++;
    });
  });
  
  // Level distribution for this sprint
  const levels = { Destacado: 0, Competente: 0, 'En Desarrollo': 0, Emergente: 0 };
  sprintStudents.forEach(s => { if (levels.hasOwnProperty(s.sprint_level)) levels[s.sprint_level]++; });
  
  const top5 = sprintStudents.slice(0, 5);
  
  container.innerHTML = `
    <div class="sprint-detail animate-in">
      <div class="sprint-info-card">
        <div class="sprint-info-title">Resumen</div>
        <div style="display:flex;flex-direction:column;gap:var(--space-3);">
          <div>
            <div class="sprint-info-value" style="color:var(--color-primary);">${avg}</div>
            <div style="font-size:var(--text-xs);color:var(--color-text-muted);">Promedio del sprint</div>
          </div>
          <div>
            <div class="sprint-info-value">${count}</div>
            <div style="font-size:var(--text-xs);color:var(--color-text-muted);">Respuestas evaluadas</div>
          </div>
          <div style="margin-top:var(--space-2);">
            <div style="font-size:var(--text-xs);font-weight:600;color:var(--color-text-secondary);margin-bottom:var(--space-1);">Distribución de niveles</div>
            <div style="display:flex;gap:var(--space-2);flex-wrap:wrap;">
              ${Object.entries(levels).filter(([,v]) => v > 0).map(([k, v]) => 
                `<span class="class-badge ${k === 'Destacado' ? 'class-destacado' : k === 'Competente' ? 'class-formacion' : k === 'En Desarrollo' ? 'class-aprendiz' : 'class-insuficiente'}">${v} ${k}</span>`
              ).join('')}
            </div>
          </div>
        </div>
      </div>
      
      <div class="sprint-info-card">
        <div class="sprint-info-title">Top 5 del Sprint</div>
        <div class="sprint-top-list">
          ${top5.map((s, i) => `
            <div class="sprint-top-item" onclick="openStudentModal('${s.id}')">
              <span class="sprint-top-rank">${i + 1}</span>
              <span class="sprint-top-name${s.name.startsWith('Student_') ? ' student-anonymous' : ''}">${s.name}</span>
              <span class="sprint-top-score score-pill ${scoreClass(s.sprint_score)}">${s.sprint_score.toFixed(1)}</span>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="sprint-info-card full-width">
        <div class="sprint-info-title">Criterios de Evaluación — Promedios</div>
        <div class="sprint-criteria-list">
          ${Object.entries(criteriaAvgs).map(([name, data]) => {
            const avg = (data.total / data.count).toFixed(2);
            const pct = ((avg / 4) * 100).toFixed(0);
            return `
              <div class="sprint-criterion">
                <span class="criterion-name">${name}</span>
                <div class="criterion-bar-wrapper">
                  <div class="criterion-bar" style="width:${pct}%"></div>
                </div>
                <span class="criterion-score">${avg}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

// ===== Ranking Table =====
function sortStudents(students) {
  const key = rankingSortKey;
  const dir = rankingSortDir === 'asc' ? 1 : -1;
  
  const classOrder = {
    '🔮 Alquimista Destacado': 0,
    '⚗️ Alquimista en Formación': 1,
    '🧪 Aprendiz Activo': 2
  };
  
  return [...students].sort((a, b) => {
    let cmp = 0;
    switch (key) {
      case 'name':
        cmp = a.name.localeCompare(b.name, 'es');
        break;
      case 'class':
        cmp = (classOrder[a.alchemist_class] ?? 9) - (classOrder[b.alchemist_class] ?? 9);
        if (cmp === 0) cmp = b.avg_score - a.avg_score; // secondary: avg desc
        break;
      case 'avg':
        cmp = b.avg_score - a.avg_score; // natural: higher is better
        if (dir === -1) cmp = cmp; // desc is natural
        else cmp = a.avg_score - b.avg_score;
        return cmp || b.sprints_count - a.sprints_count;
      case 'sprints':
        cmp = b.sprints_count - a.sprints_count; // natural: more is better
        if (dir === -1) cmp = cmp; // desc is natural
        else cmp = a.sprints_count - b.sprints_count;
        return cmp || b.avg_score - a.avg_score;
      default:
        cmp = 0;
    }
    // For name and class, apply direction multiplier
    if (key === 'name' || key === 'class') return cmp * dir;
    return cmp;
  });
}

function updateSortHeaders() {
  document.querySelectorAll('.ranking-table th.sortable').forEach(th => {
    const sortKey = th.dataset.sort;
    const arrow = th.querySelector('.sort-arrow');
    if (sortKey === rankingSortKey) {
      th.classList.add('active-sort');
      arrow.textContent = rankingSortDir === 'desc' ? '▼' : '▲';
      arrow.className = 'sort-arrow ' + rankingSortDir;
    } else {
      th.classList.remove('active-sort');
      arrow.textContent = '';
      arrow.className = 'sort-arrow';
    }
  });
}

function renderRanking(students) {
  const tbody = document.getElementById('rankingBody');
  const countEl = document.getElementById('rankingCount');
  
  // Apply current sort
  const sorted = sortStudents(students);
  
  tbody.innerHTML = sorted.map((s, i) => {
    const isTop3 = i < 3 && sorted.length > 3;
    const sprintKeys = ['sprint_1', 'sprint_2', 'sprint_3', 'sprint_4'];
    const orderedScores = [];
    const activeSprints = [];
    sprintKeys.forEach(sk => {
      if (s.sprints[sk]) {
        orderedScores.push(s.sprints[sk].score);
        activeSprints.push(sk);
      }
    });
    
    return `
      <tr class="${isTop3 ? 'rank-top' : ''}">
        <td class="col-rank"><span class="rank-num">${i + 1}</span></td>
        <td class="col-name">
          <div class="student-name-cell">
            <div class="student-avatar" style="background:${avatarColor(s.id)};">${initials(s.name)}</div>
            <span class="student-name${s.name.startsWith('Student_') ? ' student-anonymous' : ''}">${s.name}</span>
          </div>
        </td>
        <td class="col-class"><span class="class-badge ${classCSS(s.alchemist_class)}">${s.alchemist_class.replace(/[🔮⚗️🧪⚠️]/g, '').trim()}</span></td>
        <td class="col-avg"><span class="score-pill ${scoreClass(s.avg_score)}">${s.avg_score.toFixed(1)}</span></td>
        <td class="col-sprints">
          <div class="sprint-dots">
            ${sprintKeys.map(sk => {
              const has = !!s.sprints[sk];
              const score = has ? s.sprints[sk].score : 0;
              const dotClass = has ? (score >= 3.5 ? 'active high' : score >= 2.5 ? 'active mid' : 'active low') : '';
              return `<span class="sprint-dot ${dotClass}" title="${has ? shortSprintLabel(sk) + ': ' + score.toFixed(1) : 'No participó'}"></span>`;
            }).join('')}
          </div>
        </td>
        <td class="col-sparkline">
          <div class="sparkline-cell">${sparklineSVG(orderedScores, activeSprints)}</div>
        </td>
        <td class="col-action">
          <button class="btn-detail" onclick="openStudentModal('${s.id}')" title="Ver detalle">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </td>
      </tr>
    `;
  }).join('');
  
  countEl.textContent = `Mostrando ${sorted.length} de ${D.students.length} estudiantes evaluados`;
  updateSortHeaders();
}

function filterStudents() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  const classFilter = document.getElementById('classFilter').value;
  const sprintFilter = document.getElementById('sprintFilter').value;
  
  let filtered = D.students.filter(s => {
    if (search && !s.name.toLowerCase().includes(search)) return false;
    if (classFilter !== 'all' && s.alchemist_class !== classFilter) return false;
    if (sprintFilter !== 'all' && !s.sprints[sprintFilter]) return false;
    return true;
  });
  
  // When filtering by sprint, sort by that sprint's score by default
  if (sprintFilter !== 'all') {
    filtered.sort((a, b) => (b.sprints[sprintFilter]?.score || 0) - (a.sprints[sprintFilter]?.score || 0));
  }
  
  renderRanking(filtered);
}

// ===== Alchemist Spotlight =====
function renderAlchemists() {
  const grid = document.getElementById('alchemistGrid');
  
  // Get top students: Destacados first, then highest scores
  const highlighted = D.students
    .filter(s => s.alchemist_class.includes('Destacado') || (s.avg_score >= 3.5 && s.sprints_count >= 2))
    .sort((a, b) => {
      if (a.alchemist_class.includes('Destacado') && !b.alchemist_class.includes('Destacado')) return -1;
      if (!a.alchemist_class.includes('Destacado') && b.alchemist_class.includes('Destacado')) return 1;
      return b.avg_score - a.avg_score || b.sprints_count - a.sprints_count;
    });
  
  grid.innerHTML = highlighted.map(s => {
    // Collect all signals
    const signals = [];
    Object.values(s.sprints).forEach(sp => {
      (sp.alchemist_signals || []).forEach(sig => signals.push(sig));
    });
    
    return `
      <div class="alchemist-card animate-in" onclick="openStudentModal('${s.id}')">
        <div class="alchemist-header">
          <div class="alchemist-avatar">${s.alchemist_class.includes('Destacado') ? '🔮' : '⚗️'}</div>
          <div>
            <div class="alchemist-name${s.name.startsWith('Student_') ? ' student-anonymous' : ''}">${s.name}</div>
            <div class="alchemist-class">${s.alchemist_class}</div>
          </div>
        </div>
        <div class="alchemist-stats">
          <div class="alchemist-stat">
            <div class="alchemist-stat-value" style="color:var(--color-primary);">${s.avg_score.toFixed(1)}</div>
            <div class="alchemist-stat-label">Promedio</div>
          </div>
          <div class="alchemist-stat">
            <div class="alchemist-stat-value">${s.sprints_count}</div>
            <div class="alchemist-stat-label">Sprints</div>
          </div>
          <div class="alchemist-stat">
            <div class="alchemist-stat-value" style="color:${s.progression > 0 ? 'var(--color-green)' : s.progression < 0 ? 'var(--color-rose)' : 'var(--color-text-muted)'};">${s.progression > 0 ? '+' : ''}${s.progression.toFixed(1)}</div>
            <div class="alchemist-stat-label">Progresión</div>
          </div>
        </div>
        ${signals.length > 0 ? `
          <div class="alchemist-signals">
            <p class="alchemist-signal">${signals[0].length > 180 ? signals[0].slice(0, 180) + '...' : signals[0]}</p>
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
}

// ===== Student Modal =====
function openStudentModal(studentId) {
  const s = D.students.find(st => st.id === studentId);
  if (!s) return;
  
  const modal = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');
  
  const sprintKeys = ['sprint_1', 'sprint_2', 'sprint_3', 'sprint_4'];
  
  content.innerHTML = `
    <div class="modal-header">
      <div class="modal-avatar" style="background:${avatarColor(s.id)};">${initials(s.name)}</div>
      <div>
        <div class="modal-student-name${s.name.startsWith('Student_') ? ' student-anonymous' : ''}">${s.name}</div>
        <div class="modal-student-meta">
          <span class="class-badge ${classCSS(s.alchemist_class)}">${s.alchemist_class}</span>
        </div>
      </div>
    </div>
    
    <div class="modal-kpis">
      <div class="modal-kpi">
        <div class="modal-kpi-value" style="color:var(--color-primary);">${s.avg_score.toFixed(2)}</div>
        <div class="modal-kpi-label">Promedio General</div>
      </div>
      <div class="modal-kpi">
        <div class="modal-kpi-value">${s.sprints_count}/${s.total_sprints_with_work || s.sprints_count}</div>
        <div class="modal-kpi-label">Sprints Evaluados</div>
      </div>
      <div class="modal-kpi">
        <div class="modal-kpi-value" style="color:${s.progression > 0 ? 'var(--color-green)' : s.progression < 0 ? 'var(--color-rose)' : 'var(--color-text-muted)'};">${s.progression > 0 ? '+' : ''}${s.progression.toFixed(1)}</div>
        <div class="modal-kpi-label">Progresión</div>
      </div>
    </div>
    
    ${sprintKeys.map(sk => {
      const sp = s.sprints[sk];
      if (!sp) return '';
      
      return `
        <div class="modal-sprint">
          <div class="modal-sprint-header" onclick="this.nextElementSibling.classList.toggle('open')">
            <span class="modal-sprint-title">${sprintLabel(sk)}</span>
            <span class="modal-sprint-score score-pill ${scoreClass(sp.score)}">${sp.score.toFixed(1)} — ${sp.level}</span>
          </div>
          <div class="modal-sprint-body open">
            <div class="modal-criteria">
              ${Object.entries(sp.criteria || {}).map(([name, data]) => `
                <div class="modal-criterion">
                  <div class="modal-criterion-header">
                    <span class="modal-criterion-name">${name}</span>
                    <span class="modal-criterion-score score-pill ${scoreClass(data.score)}">${data.score}/4</span>
                  </div>
                  <p class="modal-criterion-justification">${data.justification}</p>
                </div>
              `).join('')}
            </div>
            
            ${sp.strengths && sp.strengths.length > 0 ? `
              <div class="modal-section-title">Fortalezas</div>
              <ul class="modal-list strengths">
                ${sp.strengths.map(str => `<li>${str}</li>`).join('')}
              </ul>
            ` : ''}
            
            ${sp.recommendations && sp.recommendations.length > 0 ? `
              <div class="modal-section-title">Recomendaciones</div>
              <ul class="modal-list recommendations">
                ${sp.recommendations.map(rec => `<li>${rec}</li>`).join('')}
              </ul>
            ` : ''}
            
            ${sp.alchemist_signals && sp.alchemist_signals.length > 0 ? `
              <div class="modal-section-title">Señales de Alquimista</div>
              <ul class="modal-list signals">
                ${sp.alchemist_signals.map(sig => `<li>${sig}</li>`).join('')}
              </ul>
            ` : ''}
          </div>
        </div>
      `;
    }).join('')}
  `;
  
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ===== Navigation =====
function updateNavActive() {
  const sections = ['overview', 'sprints', 'ranking', 'alchemists'];
  const scrollY = window.scrollY + 100;
  
  let current = sections[0];
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollY) current = id;
  }
  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.section === current);
  });
}

// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.getElementById(link.dataset.section);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== Column Sort Click Handlers =====
document.querySelectorAll('.ranking-table th.sortable').forEach(th => {
  th.addEventListener('click', () => {
    const key = th.dataset.sort;
    if (rankingSortKey === key) {
      // Toggle direction
      rankingSortDir = rankingSortDir === 'desc' ? 'asc' : 'desc';
    } else {
      rankingSortKey = key;
      // Default direction: desc for numeric, asc for name
      rankingSortDir = key === 'name' ? 'asc' : 'desc';
    }
    filterStudents();
  });
});

// ===== Event Listeners =====
document.getElementById('searchInput').addEventListener('input', filterStudents);
document.getElementById('classFilter').addEventListener('change', filterStudents);
document.getElementById('sprintFilter').addEventListener('change', filterStudents);

document.querySelectorAll('.sprint-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.sprint-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderSprintContent(tab.dataset.sprint);
  });
});

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

window.addEventListener('scroll', updateNavActive, { passive: true });

// ===== Initialize =====
initCharts();
renderSprintContent('sprint_1');
renderRanking(D.students);
renderAlchemists();
