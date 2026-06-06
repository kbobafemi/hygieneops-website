import { CONFIG } from "./supabase-config.js";

const modules = [
  ["Client Request & CRM Intake", "Capture enquiries, organisation type, contact details, service need, urgency, location, preferred schedule, estimated headcount and opportunity status.", "Prevents lost enquiries and creates a sales pipeline."],
  ["LPO / Contract Workspace", "Record agreed scope, site terms, rates, VAT treatment, payment terms, service level, start date, renewal date, cancellation notice and uploaded documents.", "Reduces contract ambiguity and supports finance."],
  ["Site Inspection & Readiness", "Mobile inspection forms with site condition, risk notes, materials, equipment, PPE, photos, hazards, access instructions and supervisor recommendation.", "Improves pricing accuracy and service readiness."],
  ["Workforce Compliance", "Hygiene partner profile, right-to-work status, DBS eligibility status, training, documents, expiry reminders, emergency contact and availability.", "Builds auditable workforce readiness."],
  ["Shift Allocation & Scheduling", "Create rotas by site, assign staff, manage substitutions, route instructions, overtime alerts and attendance exceptions.", "Improves deployment control."],
  ["Time, Attendance & Proof of Presence", "Mobile clock-in/out, GPS/geofence, QR/NFC option, supervisor approval and exception notes.", "Reduces time leakage and supports payroll/billing."],
  ["Task Execution & Proof of Service", "Site task lists, frequency schedules, photo evidence, issue logs, completion status, supervisor sign-off and client acceptance.", "Converts service into evidence."],
  ["SiteComms", "Controlled group communication by site with admin, supervisor, hygiene partners and appointed client representatives.", "Reduces operational confusion and keeps communication auditable."],
  ["Finance & Reporting", "Billing readiness, payroll-ready attendance, contract rates, KPI dashboards, service reports, invoice preparation and audit trail.", "Connects operational delivery to financial control."]
];

const onboardingSteps = [
  ["Account setup", "Company profile, admin users, roles and core settings."],
  ["Template setup", "Site inspection template, compliance checklist, shift types and report format."],
  ["Data import", "Clients, sites, workers and basic documents where available."],
  ["Pilot configuration", "Select one or two sites and define success metrics."],
  ["Training", "Admin training, supervisor mobile workflow and hygiene partner guidance."],
  ["Go-live support", "Monitor first shifts, handle exceptions and gather feedback."],
  ["Review", "Produce pilot report and agree expansion plan."]
];

const demo = {
  metrics: [
    ["Monthly revenue pipeline", "£42.8k", 72],
    ["Active clients", "14", 64],
    ["Active sites", "38", 81],
    ["Hygiene partners", "126", 76],
    ["Compliance readiness", "91%", 91],
    ["Attendance assurance", "96%", 96]
  ],
  leads: [
    ["Northgate University", "Education", "12 sites", "Inspection requested", "High"],
    ["FreshWorks Production Ltd", "Food production", "3 factories", "Pilot proposal", "High"],
    ["Civic Offices Group", "Offices", "8 locations", "Awaiting LPO", "Medium"]
  ],
  contracts: [
    ["Northgate University", "Daily hygiene support", "£18.50/hr", "20% VAT", "Draft"],
    ["FreshWorks Production Ltd", "Deep cleaning + audit support", "Fixed + variable", "20% VAT", "Active"],
    ["Civic Offices Group", "Multi-site cleaning", "£16.75/hr", "20% VAT", "Renewal due"]
  ],
  inspections: [
    ["NU Library Block", "Ready", "Low", "PPE standard", "Supervisor approved"],
    ["FreshWorks Line B", "Ready with conditions", "Medium", "Food-safe chemicals", "Client action required"],
    ["Civic HQ", "Pending", "TBC", "To inspect", "Awaiting access"]
  ],
  workforce: [
    ["A. Partner", "Supervisor", "RTW verified", "DBS eligible", "2 docs expiring"],
    ["M. Partner", "Hygiene partner", "RTW verified", "DBS not required", "Ready"],
    ["S. Partner", "Hygiene partner", "Pending review", "DBS eligible", "Training due"]
  ],
  shifts: [
    ["NU Library Block", "06:00-10:00", "4 assigned", "No gaps", "Tomorrow"],
    ["FreshWorks Line B", "22:00-02:00", "6 assigned", "1 overtime alert", "Tonight"],
    ["Civic HQ", "18:00-22:00", "3 assigned", "Supervisor needed", "Friday"]
  ],
  attendance: [
    ["NU Library Block", "4/4 clocked in", "Geofence matched", "0 exceptions", "Approved"],
    ["FreshWorks Line B", "5/6 clocked in", "1 late", "Supervisor review", "Pending"],
    ["Civic HQ", "Scheduled", "QR ready", "0 exceptions", "Awaiting shift"]
  ],
  service: [
    ["NU Library Block", "42/42 tasks", "18 photos", "Client signed", "Completed"],
    ["FreshWorks Line B", "31/35 tasks", "9 photos", "Issue logged", "In progress"],
    ["Civic HQ", "Template ready", "0 photos", "Not started", "Scheduled"]
  ],
  comms: [
    ["NU Library Block", "Client + supervisor + 4 partners", "Access door note pinned", "Active"],
    ["FreshWorks Line B", "Ops + night team", "Chemical store issue", "Action required"],
    ["Civic HQ", "Admin + client representative", "Pilot date proposed", "Pending"]
  ]
};

const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

function hasSupabaseConfig() {
  return Boolean(CONFIG.supabaseUrl && CONFIG.supabaseAnonKey && CONFIG.supabaseUrl.startsWith("https://"));
}

function setDataMode() {
  const dataMode = $("#dataMode");
  if (!dataMode) return;
  dataMode.textContent = hasSupabaseConfig() ? "Supabase configured" : "Safe demo mode";
}

function renderModules() {
  const grid = $("#moduleGrid");
  if (!grid) return;
  grid.innerHTML = modules.map((item, index) => `
    <article class="module-card">
      <span class="tag">Module ${index + 1}</span>
      <h3>${escapeHtml(item[0])}</h3>
      <p>${escapeHtml(item[1])}</p>
      <p class="value">${escapeHtml(item[2])}</p>
    </article>
  `).join("");
}

function renderOnboarding() {
  const wrapper = $("#onboardingSteps");
  const progress = $("#onboardingProgress");
  if (!wrapper || !progress) return;
  wrapper.innerHTML = onboardingSteps.map((step, index) => `
    <button class="step ${index === 0 ? "active" : ""}" type="button" data-step="${index}">
      <span class="step-number">${index + 1}</span>
      <span><h3>${escapeHtml(step[0])}</h3><p>${escapeHtml(step[1])}</p></span>
    </button>
  `).join("");

  wrapper.addEventListener("click", (event) => {
    const step = event.target.closest(".step");
    if (!step) return;
    $$(".step", wrapper).forEach((el) => el.classList.remove("active"));
    step.classList.add("active");
    const index = Number(step.dataset.step);
    progress.style.width = `${((index + 1) / onboardingSteps.length) * 100}%`;
  });
}

function renderDashboard() {
  renderOverview();
  renderTablePanel("crm", "Client Request & CRM Intake", ["Organisation", "Sector", "Estimated need", "Status", "Priority"], demo.leads, crmForm());
  renderTablePanel("contracts", "LPO / Contract Workspace", ["Client", "Scope", "Rate", "VAT", "Status"], demo.contracts, contractForm());
  renderTablePanel("inspection", "Site Inspection & Readiness", ["Site", "Readiness", "Risk", "Required material", "Recommendation"], demo.inspections, inspectionForm());
  renderTablePanel("workforce", "Workforce Compliance", ["Worker", "Role", "Right to work", "DBS", "Action"], demo.workforce, workforceForm());
  renderTablePanel("scheduling", "Shift Allocation & Scheduling", ["Site", "Shift", "Staff", "Exception", "Date"], demo.shifts, schedulingForm());
  renderTablePanel("attendance", "Time, Attendance & Proof of Presence", ["Site", "Attendance", "Proof", "Exception", "Approval"], demo.attendance, attendanceForm());
  renderTablePanel("service", "Task Execution & Proof of Service", ["Site", "Tasks", "Evidence", "Client sign-off", "Status"], demo.service, serviceForm());
  renderTablePanel("comms", "SiteComms", ["Channel", "Members", "Pinned issue", "Status"], demo.comms, commsForm());
  renderAlphaOpsPanel();
}

function renderOverview() {
  const panel = $("#panel-overview");
  if (!panel) return;
  panel.innerHTML = `
    <div class="metric-grid">
      ${demo.metrics.map((m) => `<article><span>${escapeHtml(m[0])}</span><strong>${escapeHtml(m[1])}</strong><div class="progress-line"><span style="width:${Number(m[2])}%"></span></div></article>`).join("")}
    </div>
    <div class="card-grid">
      <article class="card"><h3>Operational intelligence</h3><p>Connects sales, sites, shifts, proof of service and finance into a single company view.</p><span class="success">Pilot report ready</span></article>
      <article class="card"><h3>Compliance posture</h3><p>Highlights document expiry, training gaps, right-to-work review and DBS eligibility status.</p><span class="alert">3 records need review</span></article>
      <article class="card"><h3>Migration readiness</h3><p>Supports CSV import templates for clients, sites, workers, contracts and shift history.</p><span class="success">Import templates included</span></article>
    </div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Executive KPI</th><th>Current status</th><th>Management action</th></tr></thead>
        <tbody>
          <tr><td>Client acquisition</td><td>3 high-value opportunities in pipeline</td><td>Prepare pilot proposal and pricing assumptions</td></tr>
          <tr><td>Service assurance</td><td>96% attendance proof and task completion evidence increasing</td><td>Review exceptions before billing close</td></tr>
          <tr><td>Financial control</td><td>Contracts linked to service rates and shift data</td><td>Validate payroll and invoice readiness</td></tr>
          <tr><td>Scalability</td><td>Multi-site model with role-based workflows</td><td>Package pilot evidence for investor and endorsement discussion</td></tr>
        </tbody>
      </table>
    </div>
  `;
}

function renderTablePanel(key, title, headers, rows, formHtml) {
  const panel = $(`#panel-${key}`);
  if (!panel) return;
  panel.innerHTML = `
    <div class="card">
      <h3>${escapeHtml(title)}</h3>
      <p>This module is currently running with demonstration records. In production, the records should be stored in Supabase with Row-Level Security enabled.</p>
      ${formHtml}
      <div class="table-wrap">
        <table>
          <thead><tr>${headers.map((h) => `<th>${escapeHtml(h)}</th>`).join("")}</tr></thead>
          <tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>
      </div>
    </div>
  `;
}

function crmForm() {
  return `<form class="inline-form demo-record-form" data-record="crm"><label>Organisation<input name="organisation" required /></label><label>Service need<input name="service_need" required /></label><label class="full">Opportunity notes<textarea name="notes" rows="3"></textarea></label><button class="btn primary" type="submit">Save demo enquiry</button></form>`;
}
function contractForm() {
  return `<form class="inline-form demo-record-form" data-record="contract"><label>Client<input name="client" required /></label><label>Rate / terms<input name="rate" required /></label><label class="full">Scope<textarea name="scope" rows="3"></textarea></label><button class="btn primary" type="submit">Save demo contract</button></form>`;
}
function inspectionForm() {
  return `<form class="inline-form demo-record-form" data-record="inspection"><label>Site<input name="site" required /></label><label>Risk level<select name="risk"><option>Low</option><option>Medium</option><option>High</option></select></label><label class="full">Supervisor recommendation<textarea name="recommendation" rows="3"></textarea></label><button class="btn primary" type="submit">Save demo inspection</button></form>`;
}
function workforceForm() {
  return `<form class="inline-form demo-record-form" data-record="worker"><label>Worker name<input name="name" required /></label><label>Role<select name="role"><option>Supervisor</option><option>Hygiene partner</option><option>Operations manager</option></select></label><label class="full">Compliance notes<textarea name="notes" rows="3"></textarea></label><button class="btn primary" type="submit">Save demo worker</button></form>`;
}
function schedulingForm() {
  return `<form class="inline-form demo-record-form" data-record="shift"><label>Site<input name="site" required /></label><label>Shift time<input name="time" placeholder="06:00-10:00" required /></label><label class="full">Staff allocation<textarea name="allocation" rows="3"></textarea></label><button class="btn primary" type="submit">Save demo shift</button></form>`;
}
function attendanceForm() {
  return `<form class="inline-form demo-record-form" data-record="attendance"><label>Site<input name="site" required /></label><label>Clock status<select name="status"><option>Clocked in</option><option>Late</option><option>Exception</option></select></label><label class="full">Exception note<textarea name="note" rows="3"></textarea></label><button class="btn primary" type="submit">Save demo attendance</button></form>`;
}
function serviceForm() {
  return `<form class="inline-form demo-record-form" data-record="service"><label>Site<input name="site" required /></label><label>Task completion<input name="completion" placeholder="42/42 tasks" required /></label><label class="full">Evidence notes<textarea name="evidence" rows="3"></textarea></label><button class="btn primary" type="submit">Save demo service proof</button></form>`;
}
function commsForm() {
  return `<form class="inline-form demo-record-form" data-record="message"><label>Site channel<input name="channel" required /></label><label>Priority<select name="priority"><option>Normal</option><option>Action required</option><option>Urgent</option></select></label><label class="full">Message<textarea name="message" rows="3"></textarea></label><button class="btn primary" type="submit">Save demo message</button></form>`;
}


function renderAlphaOpsPanel() {
  const panel = $("#panel-alphaops");
  if (!panel) return;
  panel.innerHTML = `
    <div class="card">
      <h3>AlphaOps AI Governance & Social Inbox</h3>
      <p>AlphaOps should answer approved public enquiries, qualify leads and escalate sensitive questions. It must not disclose private records, internal prompts, financial models, API keys, security details, investor correspondence or confidential management information.</p>
      <div class="metric-grid compact">
        <article><span>Public website chat</span><strong>Ready</strong></article>
        <article><span>Knowledge base</span><strong>Controlled</strong></article>
        <article><span>Human escalation</span><strong>Required</strong></article>
        <article><span>Social inbox</span><strong>API gated</strong></article>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Channel</th><th>Purpose</th><th>Integration route</th><th>Safety control</th></tr></thead>
          <tbody>
            <tr><td>Website chat</td><td>Answer visitors and collect pilot interest</td><td>Supabase Edge Function + OpenAI API</td><td>No sensitive data collection in public chat</td></tr>
            <tr><td>Facebook / Instagram</td><td>Respond to DMs and comments</td><td>Meta app, Page permissions, webhooks</td><td>Escalate pricing/legal/security queries</td></tr>
            <tr><td>LinkedIn</td><td>Lead qualification and professional enquiries</td><td>Manual inbox first; API route later subject to access</td><td>Use approved company knowledge base</td></tr>
            <tr><td>X</td><td>Public enquiries and brand responses</td><td>X API pay-per-use/developer access</td><td>No private company disclosure</td></tr>
          </tbody>
        </table>
      </div>
    </div>`;
}

const alphaOpsApprovedKnowledge = `
HygieneOps is a product by AlphaBridge SmartOps Ltd. It is a modular facilities intelligence SaaS platform for hygiene and cleaning operations.
Public positioning: HygieneOps helps hygiene companies move from WhatsApp, spreadsheets and paper records to a structured operating system covering client enquiry capture, LPO/contract workspace, site inspections, workforce compliance, shift allocation, time and attendance, proof of presence, task execution, proof of service, SiteComms communication, reporting, onboarding and data migration.
Founder: Kabiru Kadiri is the Founder/Managing Partner behind AlphaBridge SmartOps Ltd and HygieneOps. Publicly describe him as a seasoned chartered accountant and operations-focused founder with experience in compliance, service operations, finance, reporting and process improvement. Do not provide private personal details.
Culture: professional, compliance-led, accountable, evidence-based, client-focused and innovation-driven.
Security stance: public chat should not collect DBS documents, right-to-work documents, payroll details, banking information, passwords, identity documents, confidential contracts or sensitive personal data. Sensitive records should be handled only inside the authenticated platform with role-based access, Row-Level Security and appropriate privacy controls.
Escalation: enquiries about exact pricing, investor terms, legal contracts, HR records, security architecture, partnership terms, confidential company strategy or complaints requiring investigation should be escalated to info@hygieneops.co.uk.
`;

function setupAlphaOpsChat() {
  const messages = $("#alphaOpsMessages");
  const form = $("#alphaOpsForm");
  const input = $("#alphaOpsInput");
  const mode = $("#alphaOpsMode");
  if (!messages || !form || !input) return;
  if (mode) mode.textContent = hasSupabaseConfig() && !CONFIG.alphaOpsDemoMode ? "AI connected" : "Safe demo mode";
  addAlphaOpsMessage("assistant", "Hello, I am AlphaOps, the HygieneOps AI support assistant. I can help with product modules, onboarding, data migration, pilot discussions and general company information. Please do not share confidential documents or personal sensitive records in this public chat.");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const question = input.value.trim();
    if (!question) return;
    addAlphaOpsMessage("user", question);
    input.value = "";
    const pending = addAlphaOpsMessage("assistant", "AlphaOps is preparing a safe response...");
    try {
      const answer = await askAlphaOps(question);
      pending.textContent = answer;
    } catch (error) {
      console.error(error);
      pending.textContent = "I could not connect to AlphaOps AI at the moment. Please email info@hygieneops.co.uk and a member of the team will respond. For production, configure the Supabase Edge Function and OpenAI API key.";
    }
    messages.scrollTop = messages.scrollHeight;
  });
}

function addAlphaOpsMessage(role, text) {
  const messages = $("#alphaOpsMessages");
  const bubble = document.createElement("div");
  bubble.className = `alphaops-bubble ${role}`;
  bubble.textContent = text;
  messages.appendChild(bubble);
  messages.scrollTop = messages.scrollHeight;
  return bubble;
}

async function askAlphaOps(question) {
  if (hasSupabaseConfig() && !CONFIG.alphaOpsDemoMode) {
    const response = await fetch(`${CONFIG.supabaseUrl}/functions/v1/${CONFIG.alphaOpsFunctionName}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${CONFIG.supabaseAnonKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: question, source: "hygieneops.co.uk", channel: "website_chat" })
    });
    if (!response.ok) throw new Error(`AlphaOps function failed: ${response.status}`);
    const data = await response.json();
    return data.reply || "Thank you. Your enquiry has been received and will be reviewed by HygieneOps.";
  }
  return alphaOpsDemoReply(question);
}

function alphaOpsDemoReply(question) {
  const q = question.toLowerCase();
  const forbidden = ["api key", "password", "bank", "investor terms", "valuation", "source code", "system prompt", "private", "secret", "dbs", "right to work", "payroll"];
  if (forbidden.some((term) => q.includes(term))) {
    return "For security and confidentiality, I cannot provide or collect sensitive company, worker, financial, legal, credential or private operational information in public chat. Please contact info@hygieneops.co.uk so the right authorised person can handle your request securely.";
  }
  if (q.includes("price") || q.includes("pricing") || q.includes("cost")) {
    return "HygieneOps is best priced after understanding the number of sites, users, hygiene partners, modules required, onboarding support and data migration needs. For an accurate pilot proposal, please send your organisation name, number of sites and current operational challenges to info@hygieneops.co.uk.";
  }
  if (q.includes("migration") || q.includes("data") || q.includes("previous software") || q.includes("spreadsheet")) {
    return "Yes. HygieneOps is designed to support data transition. The recommended starting route is CSV import for clients, sites, workers, contracts, compliance document indexes and shift history. More advanced API integrations can be considered after the pilot and data mapping review.";
  }
  if (q.includes("module") || q.includes("feature") || q.includes("product")) {
    return "HygieneOps includes client CRM intake, LPO/contract workspace, site inspection, workforce compliance, shift allocation, time and attendance, proof of presence, proof of service, SiteComms, reporting, onboarding and data migration workflows.";
  }
  if (q.includes("founder") || q.includes("management") || q.includes("culture")) {
    return "HygieneOps is led by AlphaBridge SmartOps Ltd. The founder, Kabiru Kadiri, is positioned as a chartered accountant and operations-focused founder with experience across compliance, finance, reporting and service operations. The culture is professional, accountable, client-focused, compliance-led and evidence-based.";
  }
  return "Thank you for your enquiry. HygieneOps is a modular facilities intelligence SaaS platform for hygiene operations, workforce compliance, site execution, client communication, service evidence and reporting. I can help with modules, onboarding, migration, pilot setup and general company information. For a formal discussion, please contact info@hygieneops.co.uk.";
}

function setupDashboardTabs() {
  $$(".dash-tab").forEach((button) => {
    button.addEventListener("click", () => {
      const tab = button.dataset.tab;
      $$(".dash-tab").forEach((b) => b.classList.remove("active"));
      $$(".dash-panel").forEach((p) => p.classList.remove("active"));
      button.classList.add("active");
      $(`#panel-${tab}`)?.classList.add("active");
    });
  });
}

function setupForms() {
  document.addEventListener("submit", async (event) => {
    if (event.target.matches(".demo-record-form")) {
      event.preventDefault();
      const form = event.target;
      const data = Object.fromEntries(new FormData(form).entries());
      const key = `hygieneops_demo_${form.dataset.record}`;
      const existing = JSON.parse(localStorage.getItem(key) || "[]");
      existing.push({ ...data, savedAt: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(existing));
      form.reset();
      toast(form, "Demo record saved locally. Configure Supabase before storing production client or worker records.");
    }
  });

  const pilotForm = $("#pilotForm");
  if (pilotForm) {
    pilotForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const status = $("#pilotStatus");
      const payload = Object.fromEntries(new FormData(pilotForm).entries());
      payload.created_at = new Date().toISOString();
      status.textContent = "Submitting pilot request...";
      try {
        await submitPilotRequest(payload);
        pilotForm.reset();
        status.textContent = "Thank you. Your pilot request has been submitted successfully.";
      } catch (error) {
        console.error(error);
        status.textContent = "Submission could not be completed. Please email info@hygieneops.co.uk directly.";
      }
    });
  }

  const importForm = $("#importForm");
  if (importForm) {
    importForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      await previewImport(importForm);
    });
  }
}

async function submitPilotRequest(payload) {
  // First preference: Supabase public_leads table, when project credentials have been configured.
  if (hasSupabaseConfig()) {
    const response = await fetch(`${CONFIG.supabaseUrl}/rest/v1/public_leads`, {
      method: "POST",
      headers: {
        "apikey": CONFIG.supabaseAnonKey,
        "Authorization": `Bearer ${CONFIG.supabaseAnonKey}`,
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        organisation: payload.organisation,
        interest_type: payload.interestType,
        message: payload.message,
        source: payload.source || "hygieneops.co.uk",
        status: "new"
      })
    });
    if (!response.ok) throw new Error(`Supabase submission failed: ${response.status}`);
    return;
  }

  // Fallback: Formspree validation endpoint configured by HygieneOps.
  const response = await fetch(CONFIG.formspreeEndpoint, {
    method: "POST",
    headers: { "Accept": "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!response.ok) throw new Error(`Formspree submission failed: ${response.status}`);
}

async function previewImport(form) {
  const status = $("#importStatus");
  const preview = $("#importPreview");
  const file = form.csvFile.files[0];
  if (!file) {
    status.textContent = "Please choose a CSV file to preview.";
    return;
  }
  const text = await file.text();
  const rows = parseCSV(text).slice(0, 20);
  if (!rows.length) {
    status.textContent = "No rows found in the selected file.";
    return;
  }
  const headers = rows[0];
  const bodyRows = rows.slice(1);
  preview.hidden = false;
  preview.innerHTML = `
    <table>
      <thead><tr>${headers.map((h) => `<th>${escapeHtml(h)}</th>`).join("")}</tr></thead>
      <tbody>${bodyRows.map((row) => `<tr>${headers.map((_, index) => `<td>${escapeHtml(row[index] || "")}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
  `;
  const audit = {
    sourceType: form.sourceType.value,
    recordType: form.recordType.value,
    fileName: file.name,
    rowCount: Math.max(rows.length - 1, 0),
    previewedAt: new Date().toISOString()
  };
  const audits = JSON.parse(localStorage.getItem("hygieneops_import_previews") || "[]");
  audits.push(audit);
  localStorage.setItem("hygieneops_import_previews", JSON.stringify(audits));
  status.textContent = `${audit.rowCount} rows previewed locally. Review field mapping before production import.`;
}

function parseCSV(text) {
  const rows = [];
  let row = [];
  let value = "";
  let insideQuotes = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (char === '"' && insideQuotes && next === '"') {
      value += '"';
      i += 1;
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === "," && !insideQuotes) {
      row.push(value.trim());
      value = "";
    } else if ((char === "\n" || char === "\r") && !insideQuotes) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(value.trim());
      if (row.some(Boolean)) rows.push(row);
      row = [];
      value = "";
    } else {
      value += char;
    }
  }
  row.push(value.trim());
  if (row.some(Boolean)) rows.push(row);
  return rows;
}

function toast(form, message) {
  let note = form.querySelector(".form-note");
  if (!note) {
    note = document.createElement("p");
    note.className = "form-note";
    form.appendChild(note);
  }
  note.textContent = message;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setupMenu() {
  const toggle = $("[data-menu-toggle]");
  const links = $("[data-nav-links]");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.addEventListener("click", (event) => {
    if (event.target.matches("a")) links.classList.remove("open");
  });
}

function init() {
  renderModules();
  renderOnboarding();
  renderDashboard();
  setupDashboardTabs();
  setupForms();
  setupMenu();
  setupAlphaOpsChat();
  setDataMode();
}

document.addEventListener("DOMContentLoaded", init);
