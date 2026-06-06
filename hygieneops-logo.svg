:root {
  --ink: #0b1726;
  --muted: #516174;
  --line: #dbe3ee;
  --soft: #f5f8fb;
  --paper: #ffffff;
  --brand: #07335f;
  --brand-2: #0e7c7b;
  --brand-3: #31b37d;
  --warning: #b16b00;
  --danger: #b42318;
  --shadow: 0 24px 60px rgba(9, 30, 66, 0.14);
  --radius: 22px;
  --radius-sm: 14px;
  --max: 1180px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--ink);
  background: var(--paper);
  line-height: 1.55;
}

a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
button, input, select, textarea { font: inherit; }

.container { width: min(var(--max), calc(100% - 40px)); margin: 0 auto; }
.section { padding: 84px 0; }
.section.soft { background: var(--soft); }

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(219,227,238,0.8);
}
.nav { display: flex; align-items: center; justify-content: space-between; min-height: 74px; gap: 20px; }
.brand { display: flex; align-items: center; gap: 12px; font-weight: 800; }
.brand img { width: 44px; height: 44px; }
.brand small { display: block; color: var(--muted); font-weight: 600; font-size: 12px; margin-top: -4px; }
.nav-links { display: flex; align-items: center; gap: 22px; color: var(--muted); font-weight: 700; font-size: 14px; }
.nav-links a:hover { color: var(--brand); }
.nav-cta { padding: 10px 16px; border-radius: 999px; background: var(--brand); color: #fff !important; }
.menu-toggle { display: none; border: 0; background: transparent; font-size: 26px; color: var(--brand); }

.hero {
  padding: 92px 0 78px;
  background:
    radial-gradient(circle at 18% 20%, rgba(49, 179, 125, 0.18), transparent 34%),
    radial-gradient(circle at 80% 15%, rgba(14, 124, 123, 0.16), transparent 28%),
    linear-gradient(135deg, #f8fbff 0%, #ffffff 52%, #eef8f5 100%);
}
.hero-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 44px; align-items: center; }
.eyebrow { color: var(--brand-2); text-transform: uppercase; letter-spacing: .12em; font-size: 12px; font-weight: 900; margin: 0 0 12px; }
.hero h1, .section-heading h2, .two-column h2, .split-panel h2, .contact-grid h2 { font-size: clamp(34px, 5vw, 60px); line-height: 1.02; letter-spacing: -0.045em; margin: 0 0 20px; }
.hero-text { font-size: 19px; color: var(--muted); max-width: 720px; }
.hero-actions { display: flex; gap: 14px; flex-wrap: wrap; margin: 28px 0 24px; }
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; border: 1px solid transparent; border-radius: 999px; padding: 13px 20px; min-height: 48px; font-weight: 850; cursor: pointer; transition: transform .2s, box-shadow .2s, background .2s; }
.btn:hover { transform: translateY(-1px); }
.btn.primary { background: linear-gradient(135deg, var(--brand), var(--brand-2)); color: #fff; box-shadow: 0 14px 30px rgba(7, 51, 95, .24); }
.btn.ghost { background: #fff; border-color: var(--line); color: var(--brand); }
.trust-row { display: flex; flex-wrap: wrap; gap: 10px; }
.trust-row span, .mode-pill, .tag { border: 1px solid var(--line); border-radius: 999px; padding: 7px 11px; color: var(--muted); background: rgba(255,255,255,.82); font-size: 12px; font-weight: 800; }

.hero-panel, .wizard-card, .import-card, .contact-form, .security-card, .dashboard-shell, .card, .module-card { background: rgba(255,255,255,.94); border: 1px solid var(--line); border-radius: var(--radius); box-shadow: var(--shadow); }
.hero-panel { padding: 24px; }
.panel-header, .dashboard-topbar, .sidebar-brand { display: flex; align-items: center; gap: 10px; }
.status-dot { width: 11px; height: 11px; border-radius: 50%; background: var(--brand-3); box-shadow: 0 0 0 6px rgba(49,179,125,.15); }
.metric-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
.metric-grid.compact { grid-template-columns: repeat(2, 1fr); margin: 22px 0; }
.metric-grid article { background: linear-gradient(180deg, #ffffff, #f7fbfd); border: 1px solid var(--line); border-radius: 18px; padding: 16px; }
.metric-grid span { display: block; color: var(--muted); font-size: 13px; font-weight: 750; }
.metric-grid strong { display: block; font-size: 30px; letter-spacing: -.04em; color: var(--brand); margin-top: 4px; }
.timeline.mini { display: grid; gap: 12px; }
.timeline.mini div { display: grid; grid-template-columns: 30px 1fr; gap: 11px; align-items: start; }
.timeline.mini span { display: grid; place-items: center; width: 28px; height: 28px; border-radius: 50%; background: var(--brand); color: #fff; font-weight: 900; font-size: 12px; }
.timeline.mini p { margin: 1px 0 0; color: var(--muted); }

.section-heading { max-width: 790px; margin-bottom: 34px; }
.section-heading h2, .two-column h2, .split-panel h2, .contact-grid h2 { font-size: clamp(30px, 4vw, 46px); }
.section-heading p, .two-column p, .split-panel p, .contact-grid p { color: var(--muted); font-size: 17px; }
.module-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.module-card { padding: 22px; box-shadow: none; position: relative; overflow: hidden; }
.module-card::before { content: ""; position: absolute; inset: 0 0 auto 0; height: 4px; background: linear-gradient(90deg, var(--brand), var(--brand-2), var(--brand-3)); }
.module-card h3 { margin: 10px 0 10px; font-size: 18px; }
.module-card p { color: var(--muted); margin: 0; font-size: 14px; }
.module-card .value { margin-top: 14px; color: var(--brand); font-weight: 850; }

.two-column, .split-panel, .contact-grid { display: grid; grid-template-columns: .85fr 1.15fr; gap: 42px; align-items: start; }
.wizard-card { padding: 24px; }
.progress-bar { height: 10px; border-radius: 999px; background: #e5edf6; overflow: hidden; margin-bottom: 22px; }
.progress-bar span { display: block; height: 100%; width: 14%; background: linear-gradient(90deg, var(--brand), var(--brand-3)); border-radius: inherit; transition: width .25s; }
.wizard-steps { display: grid; gap: 12px; }
.step { display: grid; grid-template-columns: 42px 1fr; gap: 12px; padding: 14px; border: 1px solid var(--line); border-radius: 16px; background: #fff; cursor: pointer; }
.step.active { border-color: rgba(14,124,123,.45); background: #f1faf7; }
.step-number { width: 36px; height: 36px; display: grid; place-items: center; border-radius: 12px; background: var(--brand); color: #fff; font-weight: 900; }
.step h3 { margin: 0 0 4px; font-size: 15px; }
.step p { margin: 0; font-size: 13px; color: var(--muted); }

.split-panel { align-items: stretch; }
.check-list { margin: 24px 0 0; padding: 0; list-style: none; display: grid; gap: 10px; }
.check-list li { position: relative; padding-left: 30px; color: var(--muted); }
.check-list li::before { content: "✓"; position: absolute; left: 0; top: 0; width: 21px; height: 21px; display: grid; place-items: center; border-radius: 50%; background: #e8f8f1; color: var(--brand-2); font-weight: 900; font-size: 12px; }
.import-card, .contact-form { padding: 24px; display: grid; gap: 16px; }
label { display: grid; gap: 7px; color: var(--ink); font-weight: 800; font-size: 14px; }
input, select, textarea { width: 100%; border: 1px solid var(--line); border-radius: 14px; padding: 12px 13px; background: #fff; color: var(--ink); outline: none; }
input:focus, select:focus, textarea:focus { border-color: rgba(14,124,123,.55); box-shadow: 0 0 0 4px rgba(14,124,123,.12); }
.form-note { margin: 0; color: var(--muted); font-size: 13px; }
.table-wrap { margin-top: 24px; overflow-x: auto; border: 1px solid var(--line); border-radius: 18px; background: #fff; }
table { width: 100%; border-collapse: collapse; font-size: 14px; }
th, td { padding: 12px 14px; border-bottom: 1px solid var(--line); text-align: left; vertical-align: top; }
th { background: #f0f5fa; color: var(--brand); font-size: 12px; text-transform: uppercase; letter-spacing: .05em; }

.dashboard-shell { display: grid; grid-template-columns: 260px 1fr; overflow: hidden; min-height: 760px; }
.sidebar { background: var(--brand); color: #fff; padding: 20px; display: flex; flex-direction: column; gap: 8px; }
.sidebar-brand { margin-bottom: 14px; font-weight: 900; }
.sidebar-brand img { width: 34px; height: 34px; }
.dash-tab { width: 100%; text-align: left; color: rgba(255,255,255,.82); background: transparent; border: 0; padding: 12px 13px; border-radius: 13px; cursor: pointer; font-weight: 800; }
.dash-tab:hover, .dash-tab.active { background: rgba(255,255,255,.12); color: #fff; }
.dashboard-main { padding: 28px; background: #fbfdff; }
.dashboard-topbar { justify-content: space-between; margin-bottom: 22px; }
.dashboard-topbar h2 { margin: 0; letter-spacing: -.03em; }
.dashboard-topbar .eyebrow { margin-bottom: 4px; }
.dash-panel { display: none; }
.dash-panel.active { display: block; }
.card-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 20px 0; }
.card { padding: 20px; box-shadow: none; }
.card h3 { margin: 0 0 10px; }
.card p { color: var(--muted); margin: 0 0 12px; }
.kpi-number { font-size: 34px; color: var(--brand); letter-spacing: -.04em; font-weight: 900; }
.progress-line { height: 8px; background: #e6eef7; border-radius: 999px; overflow: hidden; }
.progress-line span { display: block; height: 100%; background: linear-gradient(90deg, var(--brand-2), var(--brand-3)); }
.action-row { display: flex; gap: 10px; flex-wrap: wrap; margin: 14px 0; }
.inline-form { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin: 16px 0 20px; }
.inline-form .full { grid-column: 1 / -1; }
.alert { padding: 13px 14px; border-radius: 14px; border: 1px solid #f1c27d; background: #fff8eb; color: var(--warning); font-weight: 750; }
.success { padding: 13px 14px; border-radius: 14px; border: 1px solid #a9e7c8; background: #effcf6; color: #0c6b4c; font-weight: 750; }
.security-card { padding: 18px; box-shadow: none; background: #f1faf7; }
.security-card p { margin-bottom: 0; }
.footer { border-top: 1px solid var(--line); padding: 34px 0; background: #07182a; color: #fff; }
.footer p { margin: 2px 0 0; color: rgba(255,255,255,.72); }
.footer-grid { display: flex; justify-content: space-between; gap: 24px; align-items: center; }
.footer-links { display: flex; gap: 16px; flex-wrap: wrap; color: rgba(255,255,255,.78); font-weight: 750; }
.footer-links a:hover { color: #fff; }

@media (max-width: 980px) {
  .hero-grid, .two-column, .split-panel, .contact-grid, .dashboard-shell { grid-template-columns: 1fr; }
  .module-grid, .card-grid { grid-template-columns: repeat(2, 1fr); }
  .sidebar { flex-direction: row; overflow-x: auto; }
  .sidebar-brand { min-width: 190px; }
  .dash-tab { white-space: nowrap; }
}

@media (max-width: 720px) {
  .container { width: min(100% - 28px, var(--max)); }
  .section { padding: 62px 0; }
  .menu-toggle { display: block; }
  .nav-links { display: none; position: absolute; left: 14px; right: 14px; top: 74px; padding: 16px; background: #fff; border: 1px solid var(--line); border-radius: 18px; box-shadow: var(--shadow); flex-direction: column; align-items: stretch; }
  .nav-links.open { display: flex; }
  .metric-grid, .metric-grid.compact, .module-grid, .card-grid, .inline-form { grid-template-columns: 1fr; }
  .footer-grid { align-items: flex-start; flex-direction: column; }
  .dashboard-main { padding: 18px; }
}

/* AlphaOps AI assistant */
.alphaops-grid { display: grid; grid-template-columns: .95fr 1.05fr; gap: 42px; align-items: start; }
.alphaops-card { border: 1px solid var(--line); border-radius: 26px; background: #fff; box-shadow: var(--shadow); overflow: hidden; }
.alphaops-header { display: flex; justify-content: space-between; gap: 16px; align-items: center; padding: 18px 20px; background: linear-gradient(135deg, var(--brand), #102a43); color: #fff; }
.alphaops-header strong { display: block; font-size: 20px; }
.alphaops-header span { display: block; color: rgba(255,255,255,.78); font-size: 13px; margin-top: 3px; }
.alphaops-header small { padding: 8px 10px; border-radius: 999px; background: rgba(255,255,255,.14); white-space: nowrap; font-weight: 800; }
.alphaops-messages { min-height: 330px; max-height: 440px; overflow-y: auto; padding: 18px; background: #f7fbff; display: grid; gap: 12px; align-content: start; }
.alphaops-bubble { max-width: 86%; padding: 13px 15px; border-radius: 18px; font-size: 14px; line-height: 1.5; white-space: pre-wrap; }
.alphaops-bubble.assistant { background: #fff; border: 1px solid var(--line); color: var(--ink); }
.alphaops-bubble.user { justify-self: end; background: var(--brand); color: #fff; }
.alphaops-form { padding: 16px; display: grid; grid-template-columns: 1fr auto; gap: 12px; border-top: 1px solid var(--line); }
.alphaops-form textarea { resize: vertical; min-height: 54px; }
.alphaops-card .form-note { padding: 0 16px 16px; }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
@media (max-width: 980px) { .alphaops-grid { grid-template-columns: 1fr; } }
@media (max-width: 720px) { .alphaops-form { grid-template-columns: 1fr; } .alphaops-bubble { max-width: 100%; } }
