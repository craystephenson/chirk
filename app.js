(function () {
  "use strict";

  const VIEWS = [
    { id: "all", label: "All" },
    { id: "ai", label: "AI" },
    { id: "tech", label: "Tech" },
  ];

  const projects = Array.isArray(window.PORTFOLIO_PROJECTS) ? window.PORTFOLIO_PROJECTS : [];
  const gridEl = document.getElementById("work-grid");
  const filterRoot = document.getElementById("work-filters");
  const emptyEl = document.getElementById("work-empty");
  const workIndexEl = document.getElementById("work-index");
  const detailEl = document.getElementById("project-detail");
  const navWork = document.getElementById("nav-work");
  const elTitle = document.getElementById("project-detail-title");
  const elBody = document.getElementById("project-detail-body");
  const elAwards = document.getElementById("project-detail-awards");
  const elBack = document.getElementById("project-back");
  const elCasePrev = document.getElementById("project-case-prev");
  const elCaseNext = document.getElementById("project-case-next");
  const elStage = document.getElementById("project-stage");
  const elThumbs = document.getElementById("project-thumbs");
  const btnPrev = document.getElementById("project-slide-prev");
  const btnNext = document.getElementById("project-slide-next");
  const elStills = document.getElementById("project-stills");
  const elStillsGrid = document.getElementById("project-stills-grid");
  const elStillsEmpty = document.getElementById("project-stills-empty");
  const elStillsLabel = document.getElementById("project-stills-label");
  const elStageNav = document.getElementById("project-stage-nav");
  const elStagePre = document.getElementById("project-stage-pre");
  const elRailExtra = document.getElementById("project-rail-extra");

  if (!gridEl || !filterRoot) return;

  const baseTitle = document.title;
  const thumbCache = new Map();
  const IMG_PLACEHOLDER =
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

  let currentSlide = 0;
  let currentProject = null;
  let currentMedia = [];

  /**
   * Video id plus optional privacy / unlisted hash (path or ?h=)
   * so player URLs work for links like vimeo.com/123/token.
   */
  function parseVimeoUrl(url) {
    const raw = String(url || "").trim();
    const withQuery = raw.split("#")[0];
    const idMatch = withQuery.match(/vimeo\.com\/(?:[^\d]*\/)*(\d{5,})\b/);
    if (!idMatch) return { id: null, h: null };
    const id = idMatch[1];
    let h = null;
    const qp = raw.match(/[?&#]h=([a-z0-9]{4,})\b/i);
    if (qp) h = qp[1];
    if (!h) {
      const pathH = raw.match(/vimeo\.com\/\d+\/([a-z0-9]{4,})\b/i);
      if (pathH && pathH[1] !== id) h = pathH[1];
    }
    return { id: id, h: h };
  }

  function vimeoIdFromUrl(url) {
    const p = parseVimeoUrl(url);
    return p.id;
  }

  function vimeoEmbedSrc(url) {
    const { id: vid, h } = parseVimeoUrl(url);
    if (!vid) return null;
    let qs = "title=0&byline=0&portrait=0&dnt=1";
    if (h) qs += "&h=" + encodeURIComponent(h);
    return "https://player.vimeo.com/video/" + encodeURIComponent(vid) + "?" + qs;
  }

  function projectSlug(p) {
    if (p.slug) return p.slug;
    return "project-" + p.id;
  }

  function getProjectBySlug(slug) {
    return projects.find((p) => projectSlug(p) === slug) || null;
  }

  function parseRoute() {
    const h = location.hash || "";
    const m = /^#\/project\/([^/]+)\/?$/.exec(h);
    if (m) return { kind: "project", slug: decodeURIComponent(m[1]) };
    const raw = h.replace(/^#/, "").toLowerCase();
    const v = raw === "general" || raw === "" ? "all" : raw;
    if (VIEWS.some((x) => x.id === v)) return { kind: "grid", view: v };
    return { kind: "grid", view: "all" };
  }

  function lastView() {
    const s = sessionStorage.getItem("portfolioLastView");
    if (s === "general" || !s) return "all";
    if (VIEWS.some((x) => x.id === s)) return s;
    return "all";
  }

  function workHash() {
    return "#" + lastView();
  }

  function normalizeMediaItem(m) {
    if (!m || !m.type) return null;
    if (m.type === "vimeo" && m.url) return { type: "vimeo", url: m.url, alt: m.alt || "" };
    if (m.type === "image" && m.src) return { type: "image", src: m.src, alt: m.alt || "" };
    return null;
  }

  function dedupeMediaList(list) {
    const seen = new Set();
    return list.filter(function (m) {
      var key;
      if (m.type === "vimeo" && m.url) key = "v:" + m.url;
      else if (m.type === "image" && m.src) key = "i:" + m.src;
      else return true;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function normalizeMedia(p) {
    const raw = p.detail && Array.isArray(p.detail.media) ? p.detail.media : [];
    const list = raw.map(normalizeMediaItem).filter(Boolean);
    if (list.length) return dedupeMediaList(list);
    if (p.vimeo) return [{ type: "vimeo", url: p.vimeo, alt: "" }];
    return [];
  }

  function normalizeTag(t) {
    return String(t || "")
      .trim()
      .toLowerCase();
  }

  function projectMatchesView(project, viewId) {
    if (project.onlyInView) {
      return normalizeTag(project.onlyInView) === normalizeTag(viewId);
    }
    if (viewId === "all") return true;
    return (project.tags || []).map(normalizeTag).includes(viewId);
  }

  function getCurrentView() {
    const r = parseRoute();
    if (r.kind === "grid") return r.view;
    return lastView();
  }

  function getFiltered() {
    const v = getCurrentView();
    return projects.filter((p) => projectMatchesView(p, v));
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
        /* */
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
      b.addEventListener("click", () => {
        setCurrentView(v.id);
        sessionStorage.setItem("portfolioLastView", v.id);
      });
      filterRoot.appendChild(b);
    });
  }

  function updateNavWorkLink() {
    if (!navWork) return;
    const r = parseRoute();
    if (r.kind === "grid") {
      navWork.setAttribute("href", "#" + r.view);
      navWork.setAttribute("aria-current", "page");
    } else {
      navWork.setAttribute("href", workHash());
      navWork.removeAttribute("aria-current");
    }
  }

  function renderStage() {
    elStage.innerHTML = "";
    if (!currentMedia.length) {
      const d = document.createElement("div");
      d.className = "project-stage__empty";
      d.textContent = "Add `detail.media` or a `vimeo` link in projects.js";
      elStage.appendChild(d);
      return;
    }
    const i = currentSlide % currentMedia.length;
    const m = currentMedia[i];
    if (m.type === "vimeo") {
      const srcEmbed = vimeoEmbedSrc(m.url);
      if (srcEmbed) {
        const frame = document.createElement("div");
        frame.className = "project-frame";
        const iframe = document.createElement("iframe");
        iframe.className = "project-frame__iframe";
        iframe.src = srcEmbed;
        iframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture");
        iframe.setAttribute("allowfullscreen", "");
        iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
        iframe.title = (currentProject && currentProject.title) || "Vimeo";
        frame.appendChild(iframe);
        elStage.appendChild(frame);
      } else {
        const d = document.createElement("div");
        d.className = "project-stage__empty";
        d.textContent = "Invalid Vimeo URL";
        elStage.appendChild(d);
      }
    } else {
      const fig = document.createElement("div");
      fig.className = "project-figure";
      const img = document.createElement("img");
      img.className = "project-figure__img";
      img.src = staticAssetUrl(m.src);
      img.alt = m.alt || "";
      img.width = 1600;
      img.height = 900;
      const d = currentProject && currentProject.detail;
      const fit =
        d &&
        typeof d.mediaImageObjectFit === "string" &&
        d.mediaImageObjectFit.trim();
      if (fit) {
        img.style.objectFit = fit.trim();
      }
      fig.appendChild(img);
      elStage.appendChild(fig);
    }
  }

  function renderThumbs() {
    elThumbs.innerHTML = "";
    if (elStageNav) elStageNav.hidden = currentMedia.length < 2;
    if (currentMedia.length < 2) {
      elThumbs.hidden = true;
      return;
    }
    elThumbs.hidden = false;
    currentMedia.forEach((m, i) => {
      const t = document.createElement("button");
      t.type = "button";
      t.className = "project-thumb" + (i === currentSlide % currentMedia.length ? " project-thumb--active" : "");
      t.setAttribute("role", "tab");
      t.setAttribute("aria-selected", i === (currentSlide % currentMedia.length) ? "true" : "false");
      t.setAttribute("aria-label", "Slide " + (i + 1));
      if (m.type === "vimeo") {
        const ph = document.createElement("div");
        ph.className = "project-thumb__ph";
        ph.textContent = "▶";
        t.appendChild(ph);
        fetchVimeoThumb(m.url).then((u) => {
          if (u && ph.parentNode) {
            const im = document.createElement("img");
            im.className = "project-thumb__img";
            im.src = u;
            im.alt = "";
            ph.replaceWith(im);
          }
        });
      } else {
        const im = document.createElement("img");
        im.className = "project-thumb__img";
        im.src = staticAssetUrl(m.src);
        im.alt = m.alt || "";
        t.appendChild(im);
      }
      t.addEventListener("click", () => {
        currentSlide = i;
        syncGallery();
      });
      elThumbs.appendChild(t);
    });
  }

  function syncGallery() {
    const n = currentMedia.length;
    if (n) {
      while (currentSlide < 0) currentSlide += n;
      currentSlide = currentSlide % n;
    }
    renderThumbs();
    renderStage();
  }

  /** Encode each path segment so + and other chars work on static hosts (e.g. Cloudflare Pages). */
  function staticAssetUrl(path) {
    if (!path || path.indexOf("http") === 0) return path;
    return path
      .split("/")
      .map(function (seg) {
        return encodeURIComponent(seg);
      })
      .join("/");
  }

  function setStillsLabel(d) {
    if (!elStillsLabel) return;
    if (d && d.stillsLabel === false) {
      elStillsLabel.hidden = true;
    } else if (d && typeof d.stillsLabel === "string" && d.stillsLabel.trim()) {
      elStillsLabel.hidden = false;
      elStillsLabel.textContent = d.stillsLabel.trim();
    } else {
      elStillsLabel.hidden = false;
      elStillsLabel.textContent = "Stills";
    }
  }

  function renderStills(p) {
    if (!elStills || !elStillsGrid) return;
    const d = p && p.detail;
    if (!d || !Object.prototype.hasOwnProperty.call(d, "stills")) {
      elStills.hidden = true;
      elStillsGrid.innerHTML = "";
      if (elStillsEmpty) elStillsEmpty.hidden = true;
      if (elStillsLabel) {
        elStillsLabel.hidden = false;
        elStillsLabel.textContent = "Stills";
      }
      return;
    }
    const stills = Array.isArray(d.stills) ? d.stills : [];
    elStillsGrid.innerHTML = "";
    if (stills.length === 0) {
      elStills.hidden = true;
      if (elStillsEmpty) elStillsEmpty.hidden = true;
      if (elStillsLabel) {
        elStillsLabel.hidden = false;
        elStillsLabel.textContent = "Stills";
      }
      return;
    }
    elStills.hidden = false;
    if (elStillsEmpty) elStillsEmpty.hidden = true;
    setStillsLabel(d);
    stills.forEach(function (s) {
      if (s && typeof s.section === "string" && s.section.trim()) {
        const wrap = document.createElement("div");
        wrap.className = "project-stills__section";
        wrap.setAttribute("role", "presentation");
        const h = document.createElement("h3");
        h.className = "project-stills__section-title";
        h.textContent = s.section.trim();
        wrap.appendChild(h);
        elStillsGrid.appendChild(wrap);
        return;
      }
      if (s && typeof s.subSection === "string" && s.subSection.trim()) {
        const wrap = document.createElement("div");
        wrap.className = "project-stills__subsection";
        wrap.setAttribute("role", "presentation");
        const h = document.createElement("h4");
        h.className = "project-stills__subsection-title";
        h.textContent = s.subSection.trim();
        wrap.appendChild(h);
        elStillsGrid.appendChild(wrap);
        return;
      }
      if (s && s.vimeo) {
        const emb = vimeoEmbedSrc(s.vimeo);
        const fallbackVid = vimeoIdFromUrl(s.vimeo);
        const srcIframe = emb ||
          (fallbackVid
            ? "https://player.vimeo.com/video/" + fallbackVid + "?title=0&byline=0&portrait=0"
            : null);
        if (srcIframe) {
          const item = document.createElement("div");
          item.className = "project-stills__item project-stills__item--embed";
          item.setAttribute("role", "listitem");
          const inner = document.createElement("div");
          inner.className = "project-stills__embed";
          const ifr = document.createElement("iframe");
          ifr.src = srcIframe;
          ifr.title = s.vimeoTitle || "Vimeo";
          ifr.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
          ifr.setAttribute("allow", "autoplay; fullscreen; picture-in-picture");
          ifr.setAttribute("allowfullscreen", "true");
          inner.appendChild(ifr);
          item.appendChild(inner);
          elStillsGrid.appendChild(item);
        }
        return;
      }
      if (!s || !s.src) return;
      const item = document.createElement("div");
      item.className = "project-stills__item";
      item.setAttribute("role", "listitem");
      const im = document.createElement("img");
      im.className = "project-stills__img";
      im.src = staticAssetUrl(s.src);
      im.alt = s.alt || "";
      im.loading = "lazy";
      im.decoding = "async";
      item.appendChild(im);
      elStillsGrid.appendChild(item);
    });
  }

  function updateCaseStudyNav(p) {
    const list = getFiltered();
    const slug = projectSlug(p);
    const idx = list.findIndex((x) => projectSlug(x) === slug);
    if (elCasePrev) {
      if (idx > 0) {
        const prev = list[idx - 1];
        const ps = projectSlug(prev);
        elCasePrev.href = "#/project/" + encodeURIComponent(ps);
        elCasePrev.hidden = false;
        elCasePrev.setAttribute("aria-label", "Previous case study: " + (prev.title || ""));
      } else {
        elCasePrev.hidden = true;
        elCasePrev.removeAttribute("href");
        elCasePrev.removeAttribute("aria-label");
      }
    }
    if (elCaseNext) {
      if (idx >= 0 && idx < list.length - 1) {
        const next = list[idx + 1];
        const ns = projectSlug(next);
        elCaseNext.href = "#/project/" + encodeURIComponent(ns);
        elCaseNext.hidden = false;
        elCaseNext.setAttribute("aria-label", "Next case study: " + (next.title || ""));
      } else {
        elCaseNext.hidden = true;
        elCaseNext.removeAttribute("href");
        elCaseNext.removeAttribute("aria-label");
      }
    }
  }

  function mountAudioPlaylist(root, playlist) {
    if (!root || !Array.isArray(playlist) || !playlist.length) return;
    root.innerHTML = "";
    const wrap = document.createElement("div");
    wrap.className = "project-audio";

    const h = document.createElement("p");
    h.className = "project-rail-h";
    h.textContent = "Audio";
    wrap.appendChild(h);

    const srcs = playlist.map(function (t) {
      if (!t) return "";
      const file = t.file || t.src;
      if (!file) return "";
      if (String(file).indexOf("http") === 0) return file;
      return staticAssetUrl(file.indexOf("audio/") === 0 ? file : "audio/" + file);
    });

    const audio = document.createElement("audio");
    audio.className = "project-audio__el";
    audio.preload = "metadata";
    audio.controls = true;
    audio.setAttribute(
      "aria-label",
      "Audio for this project. Select a track from the list below, or use these controls to play, pause, and seek."
    );

    const list = document.createElement("ol");
    list.className = "project-audio__list";
    const buttons = [];

    function setActive(i) {
      buttons.forEach(function (btn, j) {
        if (i >= 0 && j === i) {
          btn.classList.add("is-active");
          btn.setAttribute("aria-current", "true");
        } else {
          btn.classList.remove("is-active");
          btn.removeAttribute("aria-current");
        }
      });
    }

    function loadTrack(i) {
      if (i < 0 || i >= srcs.length || !srcs[i]) return;
      audio.src = srcs[i];
      audio.dataset.trackIndex = String(i);
      setActive(i);
      const p = audio.play();
      if (p && typeof p.catch === "function") {
        p.catch(function () {});
      }
    }

    wrap.appendChild(audio);
    wrap.appendChild(list);
    root.appendChild(wrap);

    playlist.forEach(function (t, i) {
      if (!srcs[i]) return;
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "project-audio__track";
      btn.textContent = t.label || t.title || t.file;
      btn.addEventListener("click", function () {
        const cur = parseInt(audio.dataset.trackIndex, 10);
        if (cur === i) {
          if (audio.paused) {
            const p2 = audio.play();
            if (p2 && typeof p2.catch === "function") p2.catch(function () {});
          } else {
            audio.pause();
          }
          return;
        }
        loadTrack(i);
      });
      li.appendChild(btn);
      list.appendChild(li);
      buttons.push(btn);
    });

    audio.addEventListener("ended", function () {
      const cur = parseInt(audio.dataset.trackIndex, 10);
      if (isNaN(cur) || cur < 0) return;
      if (cur < playlist.length - 1) {
        loadTrack(cur + 1);
      }
    });
  }

  function normalizePasswordPhrase(s) {
    return String(s || "")
      .trim()
      .replace(/\s+/g, " ")
      .toLowerCase();
  }

  function passwordStorageKey(slug) {
    return "portfolioPw:" + slug;
  }

  function isPasswordUnlocked(slug) {
    try {
      return sessionStorage.getItem(passwordStorageKey(slug)) === "1";
    } catch {
      return false;
    }
  }

  function setPasswordUnlocked(slug) {
    try {
      sessionStorage.setItem(passwordStorageKey(slug), "1");
    } catch {
      /* */
    }
  }

  function mountPasswordGateProject(p) {
    currentMedia = [];
    currentSlide = 0;

    if (elBody) {
      elBody.textContent = "";
      elBody.innerHTML = "";
      elBody.hidden = true;
      elBody.classList.remove("project-detail__body--html");
    }
    if (elAwards) {
      elAwards.innerHTML = "";
      elAwards.hidden = true;
    }
    if (elStagePre) {
      elStagePre.textContent = "";
      elStagePre.hidden = true;
    }
    if (elStills && elStillsGrid) {
      elStills.hidden = true;
      elStillsGrid.innerHTML = "";
    }
    if (elStillsEmpty) elStillsEmpty.hidden = true;
    if (elStillsLabel) {
      elStillsLabel.hidden = false;
      elStillsLabel.textContent = "Stills";
    }
    if (elRailExtra) {
      elRailExtra.innerHTML = "";
      elRailExtra.hidden = true;
    }
    if (elThumbs) elThumbs.hidden = true;
    if (elStageNav) elStageNav.hidden = true;

    elStage.innerHTML = "";
    const gate = document.createElement("div");
    gate.className = "project-password-gate";

    const lede = document.createElement("p");
    lede.className = "project-password-gate__lede";
    lede.textContent = "This section is password protected.";

    const form = document.createElement("form");
    form.className = "project-password-gate__form";
    form.setAttribute("novalidate", "");
    form.setAttribute("autocomplete", "off");

    const label = document.createElement("label");
    label.className = "project-password-gate__label";
    label.htmlFor = "project-password-input";
    label.textContent = "Password";

    const input = document.createElement("input");
    input.type = "text";
    input.id = "project-password-input";
    input.className = "project-password-gate__input";
    input.setAttribute("autocomplete", "off");
    input.setAttribute("spellcheck", "false");

    const submit = document.createElement("button");
    submit.type = "submit";
    submit.className = "project-password-gate__submit";
    submit.textContent = "Continue";

    const err = document.createElement("p");
    err.className = "project-password-gate__error";
    err.setAttribute("role", "alert");
    err.hidden = true;
    err.textContent = "That password doesn’t match. Try again.";

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(submit);
    form.appendChild(err);

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      err.hidden = true;
      const want = normalizePasswordPhrase(p.detail && p.detail.passwordPhrase);
      const got = normalizePasswordPhrase(input.value);
      if (want.length && got === want) {
        setPasswordUnlocked(projectSlug(p));
        mountProject(p, { forceUnlocked: true });
      } else {
        err.hidden = false;
      }
    });

    gate.appendChild(lede);
    gate.appendChild(form);
    elStage.appendChild(gate);

    if (elBack) elBack.setAttribute("href", workHash());
    const siteMatch = baseTitle.match(/—\s*(.+)$/);
    const siteName = siteMatch ? siteMatch[1].trim() : baseTitle;
    document.title = (p.title || "Project") + " — " + siteName;

    updateCaseStudyNav(p);
    requestAnimationFrame(function () {
      input.focus();
    });
  }

  function mountProject(p, opts) {
    opts = opts || {};
    currentProject = p;
    currentSlide = 0;
    if (elTitle) elTitle.textContent = p.title || "Project";

    const slug = projectSlug(p);
    const d = p.detail;
    const phrase = d && d.passwordPhrase;
    if (
      phrase &&
      !opts.forceUnlocked &&
      !isPasswordUnlocked(slug)
    ) {
      mountPasswordGateProject(p);
      return;
    }

    currentMedia = normalizeMedia(p);

    if (elBody) {
      elBody.classList.remove("project-detail__body--html");
    }
    if (d && d.bodyHTML) {
      elBody.innerHTML = d.bodyHTML;
      elBody.classList.add("project-detail__body--html");
      elBody.hidden = false;
    } else if (d && d.body) {
      elBody.textContent = d.body;
      elBody.hidden = false;
    } else {
      if (elBody) {
        elBody.textContent = "";
        elBody.innerHTML = "";
      }
      if (elBody) elBody.hidden = true;
    }

    if (d && d.awards && d.awards.length) {
      elAwards.innerHTML = "";
      d.awards.forEach((line) => {
        const li = document.createElement("li");
        li.textContent = line;
        elAwards.appendChild(li);
      });
      elAwards.hidden = false;
    } else {
      elAwards.innerHTML = "";
      elAwards.hidden = true;
    }

    if (elBack) elBack.setAttribute("href", workHash());
    const siteMatch = baseTitle.match(/—\s*(.+)$/);
    const siteName = siteMatch ? siteMatch[1].trim() : baseTitle;
    document.title = (p.title || "Project") + " — " + siteName;

    if (elStagePre) {
      if (d && typeof d.stageHeading === "string" && d.stageHeading.trim()) {
        elStagePre.textContent = d.stageHeading.trim();
        elStagePre.hidden = false;
      } else {
        elStagePre.textContent = "";
        elStagePre.hidden = true;
      }
    }

    renderStills(p);
    if (elRailExtra) {
      if (d && d.audioPlaylist && d.audioPlaylist.length) {
        mountAudioPlaylist(elRailExtra, d.audioPlaylist);
        elRailExtra.hidden = false;
      } else if (d && d.railHTML) {
        elRailExtra.innerHTML = d.railHTML;
        elRailExtra.hidden = false;
      } else {
        elRailExtra.innerHTML = "";
        elRailExtra.hidden = true;
      }
    }
    updateCaseStudyNav(p);
    syncGallery();
  }

  function unmountProject() {
    currentProject = null;
    currentMedia = [];
    document.title = baseTitle;
    if (elBody) {
      elBody.textContent = "";
      elBody.innerHTML = "";
      elBody.classList.remove("project-detail__body--html");
    }
    if (elStills) {
      elStills.hidden = true;
      if (elStillsGrid) elStillsGrid.innerHTML = "";
    }
    if (elRailExtra) {
      elRailExtra.innerHTML = "";
      elRailExtra.hidden = true;
    }
    if (elStillsLabel) {
      elStillsLabel.hidden = false;
      elStillsLabel.textContent = "Stills";
    }
    if (elStagePre) {
      elStagePre.textContent = "";
      elStagePre.hidden = true;
    }
    if (elCasePrev) {
      elCasePrev.hidden = true;
      elCasePrev.removeAttribute("href");
      elCasePrev.removeAttribute("aria-label");
    }
    if (elCaseNext) {
      elCaseNext.hidden = true;
      elCaseNext.removeAttribute("href");
      elCaseNext.removeAttribute("aria-label");
    }
  }

  function showDetail(slug) {
    const p = getProjectBySlug(slug);
    if (!p) {
      location.hash = "#" + lastView();
      return;
    }
    if (workIndexEl) workIndexEl.hidden = true;
    if (detailEl) {
      detailEl.hidden = false;
    }
    mountProject(p);
    if (navWork) {
      navWork.classList.add("nav__link--active");
    }
  }

  function showGrid() {
    if (detailEl) detailEl.hidden = true;
    if (workIndexEl) workIndexEl.hidden = false;
    unmountProject();
    if (navWork) {
      const r = parseRoute();
      if (r.kind === "grid") {
        navWork.classList.add("nav__link--active");
      }
    }
  }

  function makeTile(project) {
    const slug = projectSlug(project);
    const li = document.createElement("li");
    li.className = "work-grid__item";
    li.dataset.projectId = project.id;

    const a = document.createElement("a");
    a.className = "work-tile work-tile--loading";
    a.href = "#/project/" + encodeURIComponent(slug);
    a.setAttribute("aria-label", project.title || "Project");
    a.addEventListener("click", function () {
      const r = parseRoute();
      if (r.kind === "grid") sessionStorage.setItem("portfolioLastView", r.view);
    });

    const vimeo = project.vimeo;
    const cardImage = project.thumb || project.poster;

    const media = document.createElement("div");
    media.className = "work-tile__media";

    const img = document.createElement("img");
    img.className = "work-tile__img";
    img.alt = project.title || "Project";
    img.width = 1200;
    img.height = 896;
    img.decoding = "async";
    img.loading = "lazy";

    function loadVimeoThumbOrEmpty() {
      img.src = IMG_PLACEHOLDER;
      if (vimeo) {
        fetchVimeoThumb(vimeo).then((url) => {
          if (url) {
            img.src = url;
            a.classList.remove("work-tile--loading");
            a.classList.remove("work-tile--no-thumb");
          } else {
            a.classList.remove("work-tile--loading");
            a.classList.add("work-tile--no-thumb");
          }
        });
      } else {
        a.classList.remove("work-tile--loading");
        a.classList.add("work-tile--no-thumb");
      }
    }

    if (cardImage) {
      img.src = staticAssetUrl(cardImage);
      img.addEventListener(
        "load",
        function onCardLoad() {
          img.removeEventListener("load", onCardLoad);
          a.classList.remove("work-tile--loading");
        },
        { once: true }
      );
      img.addEventListener(
        "error",
        function onCardError() {
          img.removeEventListener("error", onCardError);
          loadVimeoThumbOrEmpty();
        },
        { once: true }
      );
    } else {
      img.src = IMG_PLACEHOLDER;
      loadVimeoThumbOrEmpty();
    }

    const overlay = document.createElement("span");
    overlay.className = "work-tile__overlay";
    const title = document.createElement("span");
    title.className = "work-tile__kicker";
    title.textContent = project.title || "Untitled";
    overlay.appendChild(title);
    const tagLine = project.cardTags || project.cardLabel || "";
    if (tagLine) {
      const tags = document.createElement("span");
      tags.className = "work-tile__tags";
      tags.textContent = tagLine;
      overlay.appendChild(tags);
    }
    media.appendChild(img);
    a.appendChild(media);
    a.appendChild(overlay);
    li.appendChild(a);

    return li;
  }

  function renderGrid() {
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

  function onRoute() {
    updateNavWorkLink();
    const r = parseRoute();
    if (r.kind === "project") {
      showDetail(r.slug);
    } else {
      if (r.kind === "grid") {
        sessionStorage.setItem("portfolioLastView", r.view);
      }
      showGrid();
      renderGrid();
    }
  }

  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      if (!currentMedia.length) return;
      currentSlide -= 1;
      syncGallery();
    });
  }
  if (btnNext) {
    btnNext.addEventListener("click", () => {
      if (!currentMedia.length) return;
      currentSlide += 1;
      syncGallery();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (detailEl && !detailEl.hidden) {
      if (e.key === "[" && elCasePrev && !elCasePrev.hidden) {
        e.preventDefault();
        elCasePrev.click();
        return;
      }
      if (e.key === "]" && elCaseNext && !elCaseNext.hidden) {
        e.preventDefault();
        elCaseNext.click();
        return;
      }
      if (e.key === "ArrowLeft" && currentMedia.length) {
        e.preventDefault();
        currentSlide -= 1;
        syncGallery();
      }
      if (e.key === "ArrowRight" && currentMedia.length) {
        e.preventDefault();
        currentSlide += 1;
        syncGallery();
      }
      if (e.key === "Escape") {
        location.hash = workHash();
      }
    }
  });

  window.addEventListener("hashchange", onRoute);
  onRoute();
})();
