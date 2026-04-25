(function () {
  "use strict";

  const VIEWS = [
    { id: "general", label: "General" },
    { id: "ai", label: "AI" },
    { id: "tech", label: "Tech" },
  ];

  const projects = Array.isArray(window.PORTFOLIO_PROJECTS) ? window.PORTFOLIO_PROJECTS : [];
  const gridEl = document.getElementById("work-grid");
  const filterRoot = document.getElementById("work-filters");
  const emptyEl = document.getElementById("work-empty");

  if (!gridEl || !filterRoot) return;

  const thumbCache = new Map();
  const IMG_PLACEHOLDER =
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

  function normalizeTag(t) {
    return String(t || "")
      .trim()
      .toLowerCase();
  }

  function projectMatchesView(project, viewId) {
    const tags = (project.tags || []).map(normalizeTag);
    return tags.includes(viewId);
  }

  function getFiltered() {
    const v = getCurrentView();
    return projects.filter((p) => projectMatchesView(p, v));
  }

  function getCurrentView() {
    const h = (location.hash || "#general").replace(/^#/, "").toLowerCase();
    if (VIEWS.some((x) => x.id === h)) return h;
    return "general";
  }

  function setCurrentView(id) {
    if (!VIEWS.some((x) => x.id === id)) return;
    const next = "#" + id;
    if (location.hash !== next) location.hash = next;
    else render();
  }

  function fetchVimeoThumb(vimeoUrl) {
    if (thumbCache.has(vimeoUrl)) return thumbCache.get(vimeoUrl);
    const p = (async () => {
      const tryVimeoOembed = async () => {
        const u = "https://vimeo.com/api/oembed.json?url=" + encodeURIComponent(vimeoUrl) + "&width=1600";
        const r = await fetch(u);
        if (!r.ok) throw new Error("oembed");
        const j = await r.json();
        return j.thumbnail_url || null;
      };
      const tryNoembed = async () => {
        const u = "https://noembed.com/embed?url=" + encodeURIComponent(vimeoUrl) + "&format=json";
        const r = await fetch(u);
        if (!r.ok) return null;
        const j = await r.json();
        return j.thumbnail_url || null;
      };
      try {
        const t1 = await tryVimeoOembed();
        if (t1) return t1;
      } catch {
        /* try fallback */
      }
      try {
        return await tryNoembed();
      } catch {
        return null;
      }
    })().catch(function () {
      return null;
    });
    thumbCache.set(vimeoUrl, p);
    return p;
  }

  function buildFilterButtons() {
    filterRoot.innerHTML = "";
    const current = getCurrentView();
    VIEWS.forEach((v) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "work-filters__btn";
      b.setAttribute("aria-pressed", v.id === current ? "true" : "false");
      b.setAttribute("data-view", v.id);
      b.textContent = v.label;
      b.addEventListener("click", () => setCurrentView(v.id));
      filterRoot.appendChild(b);
    });
  }

  function makeTile(project) {
    const vimeo = project.vimeo;
    const href = vimeo || "#";
    const li = document.createElement("li");
    li.className = "work-grid__item";
    li.dataset.projectId = project.id;

    const a = document.createElement("a");
    a.className = "work-tile work-tile--loading";
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.setAttribute("aria-label", (project.title || "Project") + " (opens Vimeo)");

    const img = document.createElement("img");
    img.className = "work-tile__img";
    img.alt = project.title || "Video project";
    img.width = 1600;
    img.height = 1200;
    const poster = project.poster;
    if (poster) {
      img.src = poster;
      img.removeAttribute("loading");
      a.classList.remove("work-tile--loading");
    } else {
      img.src = IMG_PLACEHOLDER;
      img.decoding = "async";
    }

    const overlay = document.createElement("span");
    overlay.className = "work-tile__overlay";
    const title = document.createElement("span");
    title.className = "work-tile__title";
    title.textContent = project.title || "Untitled";
    const hint = document.createElement("span");
    hint.className = "work-tile__hint";
    hint.textContent = "— view on vimeo —";
    overlay.appendChild(title);
    overlay.appendChild(hint);

    a.appendChild(img);
    a.appendChild(overlay);
    li.appendChild(a);

    if (!poster && vimeo) {
      fetchVimeoThumb(vimeo).then((url) => {
        if (url) {
          img.src = url;
          a.classList.remove("work-tile--loading");
        } else {
          a.classList.remove("work-tile--loading");
          a.classList.add("work-tile--no-thumb");
        }
      });
    } else if (!poster && !vimeo) {
      a.classList.remove("work-tile--loading");
      a.classList.add("work-tile--no-thumb");
    }

    return li;
  }

  function render() {
    buildFilterButtons();
    const list = getFiltered();
    gridEl.innerHTML = "";
    if (list.length === 0) {
      if (emptyEl) emptyEl.hidden = false;
      return;
    }
    if (emptyEl) emptyEl.hidden = true;
    const frag = document.createDocumentFragment();
    list.forEach((p) => frag.appendChild(makeTile(p)));
    gridEl.appendChild(frag);
  }

  function onHash() {
    render();
  }

  window.addEventListener("hashchange", onHash);
  onHash();
})();
