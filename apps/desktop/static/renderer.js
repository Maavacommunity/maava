const agentListEl = document.getElementById("agent-list");
const detailEl = document.getElementById("detail");
const statusEl = document.getElementById("status");

/** @type {Array<any>} */
let agents = [];
let selectedId = null;
/** @type {Record<string, string[]>} */
const logsByAgent = {};

function statusLabel(status) {
  switch (status) {
    case "not-installed":
      return "Not installed";
    case "installing":
      return "Installing…";
    case "installed":
      return "Installed";
    case "running":
      return "Running";
    case "error":
      return "Error";
    default:
      return status;
  }
}

function renderList() {
  agentListEl.innerHTML = "";
  for (const agent of agents) {
    const li = document.createElement("li");
    li.className = "agent-item" + (agent.id === selectedId ? " active" : "");
    li.addEventListener("click", () => selectAgent(agent.id));

    const left = document.createElement("div");
    const name = document.createElement("div");
    name.className = "agent-item-name";
    name.textContent = agent.name;
    const category = document.createElement("div");
    category.className = "agent-item-category";
    category.textContent = agent.category;
    left.appendChild(name);
    left.appendChild(category);

    const badge = document.createElement("span");
    badge.className = "badge " + agent.state.status;
    badge.textContent = statusLabel(agent.state.status);

    li.appendChild(left);
    li.appendChild(badge);
    agentListEl.appendChild(li);
  }
}

function actionButtons(agent) {
  const wrap = document.createElement("div");
  wrap.className = "actions";
  const status = agent.state.status;

  if (status === "not-installed" || status === "error") {
    const install = document.createElement("button");
    install.className = "btn btn-primary";
    install.textContent = status === "error" ? "Retry Install" : "Install";
    install.addEventListener("click", () => window.maava.install(agent.id));
    wrap.appendChild(install);
  }

  if (status === "installed") {
    const launch = document.createElement("button");
    launch.className = "btn btn-primary";
    launch.textContent = "Launch Agent";
    launch.addEventListener("click", () => window.maava.launch(agent.id));
    wrap.appendChild(launch);
  }

  if (status === "running") {
    const stop = document.createElement("button");
    stop.className = "btn";
    stop.textContent = "Stop";
    stop.addEventListener("click", () => window.maava.stop(agent.id));
    wrap.appendChild(stop);
  }

  if (status === "installed" || status === "running") {
    const uninstall = document.createElement("button");
    uninstall.className = "btn btn-danger";
    uninstall.textContent = "Uninstall";
    uninstall.addEventListener("click", () => window.maava.uninstall(agent.id));
    wrap.appendChild(uninstall);
  }

  if (status === "installing") {
    const disabled = document.createElement("button");
    disabled.className = "btn";
    disabled.textContent = "Installing…";
    disabled.disabled = true;
    wrap.appendChild(disabled);
  }

  return wrap;
}

function renderDetail() {
  const agent = agents.find((a) => a.id === selectedId);
  detailEl.innerHTML = "";
  if (!agent) {
    const p = document.createElement("p");
    p.className = "empty-state";
    p.textContent = "Select an agent from the library to view details.";
    detailEl.appendChild(p);
    return;
  }

  const header = document.createElement("div");
  header.className = "detail-header";

  const titleBlock = document.createElement("div");
  const title = document.createElement("h1");
  title.className = "detail-title";
  title.textContent = agent.name;
  const tagline = document.createElement("p");
  tagline.className = "detail-tagline";
  tagline.textContent = agent.tagline;
  titleBlock.appendChild(title);
  titleBlock.appendChild(tagline);

  header.appendChild(titleBlock);
  header.appendChild(actionButtons(agent));
  detailEl.appendChild(header);

  const meta = document.createElement("div");
  meta.className = "meta-row";
  meta.innerHTML = "";
  const metaItems = [
    ["Category", agent.category],
    ["Runtime", agent.runtime],
    ["Status", statusLabel(agent.state.status)],
  ];
  for (const [label, value] of metaItems) {
    const span = document.createElement("span");
    span.textContent = `${label}: ${value}`;
    meta.appendChild(span);
  }
  detailEl.appendChild(meta);

  const logPanel = document.createElement("div");
  logPanel.className = "log-panel";
  logPanel.id = "log-panel";
  const lines = logsByAgent[agent.id] ?? [];
  if (lines.length === 0) {
    logPanel.textContent = "No activity yet.";
  } else {
    for (const line of lines) {
      const div = document.createElement("div");
      div.className = "log-line" + (line.startsWith("$ ") ? " cmd" : "");
      div.textContent = line;
      logPanel.appendChild(div);
    }
  }
  detailEl.appendChild(logPanel);
  logPanel.scrollTop = logPanel.scrollHeight;
}

function selectAgent(id) {
  selectedId = id;
  renderList();
  renderDetail();
}

function appendLog(agentId, line) {
  if (!logsByAgent[agentId]) logsByAgent[agentId] = [];
  logsByAgent[agentId].push(line);
  if (agentId === selectedId) renderDetail();
}

function updateAgentState(agentId, state) {
  const agent = agents.find((a) => a.id === agentId);
  if (agent) agent.state = state;
  renderList();
  if (agentId === selectedId) renderDetail();
}

async function init() {
  agents = await window.maava.listAgents();
  statusEl.textContent = `${agents.length} agents in catalog`;
  renderList();
  if (agents.length > 0) selectAgent(agents[0].id);

  window.maava.onLog(appendLog);
  window.maava.onStateChange(updateAgentState);
  window.maava.onDeepLinkInstall((slug) => {
    selectAgent(slug);
    window.maava.install(slug);
  });
}

init();
