(function () {
  "use strict";

  const STRINGS = {
    en: {
      logo: "Portfolio",
      nav_home: "Home",
      nav_about: "About",
      nav_skills: "Skills",
      nav_services: "Services",
      nav_projects: "Projects",
      nav_contact: "Contacts",
      hero_eyebrow: "Available for work",
      hero_name: "Doniyor Toshev",
      hero_role: "Frontend / Fullstack Developer",
      hero_desc:
        "Age 16 · Computer science & programming · I build fast interfaces and reliable backends. Stack: Node.js, HTML, CSS, JavaScript, React, Python, Django.",
      hero_cta_projects: "Projects",
      hero_stat_age: "Years old",
      hero_stat_projects: "Projects",
      hero_scroll: "Scroll",
      about_tag: "About",
      about_title: "Profile & focus",
      about_subtitle: "Structured clarity — who I am, what I know, where I’m headed.",
      about_who_title: "Who I am",
      about_who_text:
        "I’m a developer who cares about craft: typography, motion, and performance. I enjoy turning complex ideas into calm, intuitive products.",
      about_know_title: "What I know",
      about_know_text:
        "Modern JavaScript, React, Node.js, REST APIs, Python & Django, semantic HTML, scalable CSS, Git workflows, and pragmatic UI/UX decisions.",
      about_exp_title: "Experience",
      about_exp_text:
        "From coursework and personal builds to collaborative projects: shipping features, iterating on feedback, and learning production-minded patterns every week.",
      skills_tag: "Skills",
      skills_title: "Stack & depth",
      skills_subtitle: "Animated proficiency — tuned for a premium feel.",
      services_tag: "Services",
      services_title: "What I can do",
      services_subtitle: "End-to-end delivery with polish.",
      service_1_title: "Website development",
      service_1_text: "Landing pages, dashboards, and marketing sites with performance and SEO in mind.",
      service_1_price: "From $100 (affordable & high quality)",
      service_2_title: "Telegram bots",
      service_2_text: "Automation, notifications, and integrations inside Telegram ecosystems.",
      service_2_price: "From $70",
      service_3_title: "Telegram Mini Apps",
      service_3_text: "Lightweight web apps and Telegram Mini Apps with smooth UX.",
      service_3_price: "From $120",
      service_3_note: "Discount if you already have a Telegram bot",
      service_4_title: "UI / UX design",
      service_4_text: "Visual systems, micro-interactions, and component-ready specs.",
      service_5_title: "API integrations",
      service_5_text: "REST, webhooks, auth flows, and third-party services wired securely.",
      projects_tag: "Projects",
      projects_title: "Selected work",
      projects_subtitle: "Demo pieces plus a slot for your flagship build.",
      project_badge_demo: "Demo",
      project_badge_real: "Your project",
      project_1_title: "Nebula Analytics UI",
      project_1_desc: "Dark-mode dashboard concept with glass panels and real-time charts placeholder.",
      project_2_title: "Pulse Commerce",
      project_2_desc: "E-commerce front with motion-rich product cards and checkout flow mock.",
      project_3_title: "Your flagship project",
      project_3_desc: "Replace image, title, links, and description with your real case study.",
      btn_live: "Live",
      btn_github: "GitHub",
      contact_tag: "Connect",
      contact_title: "Contacts",
      contact_subtitle: "Ways to reach me — pick what’s convenient.",
      contact_label_phone: "Phone",
      contact_label_tg: "Telegram",
      contact_label_gh: "GitHub",
      contact_label_ig: "Instagram",
      footer_copy: "© 2026",
      footer_top: "Back to top",
    },
    ru: {
      logo: "Портфолио",
      nav_home: "Главная",
      nav_about: "Обо мне",
      nav_skills: "Навыки",
      nav_services: "Услуги",
      nav_projects: "Проекты",
      nav_contact: "Контакты",
      hero_eyebrow: "Открыт к проектам",
      hero_name: "Тошев Дониёр",
      hero_role: "Frontend / Fullstack разработчик",
      hero_desc:
        "Возраст 16 · Информатика и программирование · Создаю интерфейсы и надёжный бэкенд. Стек: Node.js, HTML, CSS, JavaScript, React, Python, Django.",
      hero_cta_projects: "Проекты",
      hero_stat_age: "Лет",
      hero_stat_projects: "Проектов",
      hero_scroll: "Вниз",
      about_tag: "Обо мне",
      about_title: "Профиль и фокус",
      about_subtitle: "Структурно и ясно — кто я, что умею, куда двигаюсь.",
      about_who_title: "Кто я",
      about_who_text:
        "Разработчик, которому важны детали: типографика, анимация и производительность. Люблю превращать сложные идеи в спокойные и понятные продукты.",
      about_know_title: "Что знаю",
      about_know_text:
        "Современный JavaScript, React, Node.js, REST API, Python и Django, семантический HTML, масштабируемый CSS, Git и прагматичный UI/UX.",
      about_exp_title: "Опыт",
      about_exp_text:
        "От учебных задач и личных проектов до командной работы: фичи, итерации по фидбеку и привычка думать как в продакшене.",
      skills_tag: "Навыки",
      skills_title: "Стек и глубина",
      skills_subtitle: "Анимированные уровни — для премиального ощущения.",
      services_tag: "Услуги",
      services_title: "Чем могу помочь",
      services_subtitle: "Полный цикл с вниманием к деталям.",
      service_1_title: "Разработка сайтов",
      service_1_text: "Лендинги, дашборды и маркетинговые сайты с упором на скорость и SEO.",
      service_1_price: "Цена от 100 $ (дёшево и качественно)",
      service_2_title: "Telegram-боты",
      service_2_text: "Автоматизация, уведомления и интеграции в экосистеме Telegram.",
      service_2_price: "Цена от 70 $",
      service_3_title: "Мини-приложения (Mini App)",
      service_3_text: "Лёгкие веб-приложения и Telegram Mini Apps с плавным UX.",
      service_3_price: "Цена от 120 $",
      service_3_note: "(если есть Telegram-бот — скидка)",
      service_4_title: "UI / UX дизайн",
      service_4_text: "Визуальные системы, микровзаимодействия и спеки под компоненты.",
      service_5_title: "Интеграции API",
      service_5_text: "REST, вебхуки, авторизация и сторонние сервисы — безопасно и аккуратно.",
      projects_tag: "Проекты",
      projects_title: "Избранные работы",
      projects_subtitle: "Два демо и слот под ваш главный кейс.",
      project_badge_demo: "Демо",
      project_badge_real: "Ваш проект",
      project_1_title: "Nebula Analytics UI",
      project_1_desc: "Концепт тёмного дашборда со стеклом и заглушкой графиков в реальном времени.",
      project_2_title: "Pulse Commerce",
      project_2_desc: "Витрина e-commerce с анимированными карточками и макетом чекаута.",
      project_3_title: "Ваш флагманский проект",
      project_3_desc: "Замените изображение, заголовок, ссылки и описание на реальный кейс.",
      btn_live: "Сайт",
      btn_github: "GitHub",
      contact_tag: "Связь",
      contact_title: "Контакты",
      contact_subtitle: "Как со мной связаться — выберите удобный способ.",
      contact_label_phone: "Телефон",
      contact_label_tg: "Telegram",
      contact_label_gh: "GitHub",
      contact_label_ig: "Instagram",
      footer_copy: "© 2026",
      footer_top: "Наверх",
    },
  };

  const THEME_KEY = "portfolio-theme";
  const LANG_KEY = "portfolio-lang";

  const loader = document.getElementById("loader");
  const scrollProgress = document.getElementById("scrollProgress");
  const themeToggle = document.getElementById("themeToggle");
  const navToggle = document.getElementById("navToggle");
  const navList = document.getElementById("navList");
  const cursor = document.getElementById("cursor");
  const cursorDot = document.getElementById("cursorDot");
  function getStoredTheme() {
    return localStorage.getItem(THEME_KEY);
  }

  function applyTheme(theme) {
    document.body.classList.remove("theme-dark", "theme-light");
    document.body.classList.add(theme === "light" ? "theme-light" : "theme-dark");
    localStorage.setItem(THEME_KEY, theme === "light" ? "light" : "dark");
    themeToggle.setAttribute("aria-label", theme === "light" ? "Switch to dark mode" : "Switch to light mode");
  }

  function initTheme() {
    const stored = getStoredTheme();
    if (stored === "light" || stored === "dark") {
      applyTheme(stored === "light" ? "light" : "dark");
    } else {
      applyTheme("dark");
    }
  }

  function getLang() {
    return localStorage.getItem(LANG_KEY) || "en";
  }

  function setLang(lang) {
    const next = lang === "ru" ? "ru" : "en";
    localStorage.setItem(LANG_KEY, next);
    document.documentElement.lang = next === "ru" ? "ru" : "en";
    applyStrings(next);
    document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
      const isRu = btn.getAttribute("data-lang") === "ru";
      const active = (next === "ru" && isRu) || (next === "en" && !isRu);
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function applyStrings(lang) {
    const dict = STRINGS[lang] || STRINGS.en;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = dict[key];
        } else {
          el.innerHTML = dict[key];
        }
      }
    });
  }

  function hideLoader() {
    if (!loader) return;
    window.setTimeout(() => {
      loader.classList.add("is-hidden");
    }, 650);
  }

  function onScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
    scrollProgress.style.width = pct + "%";
    scrollProgress.setAttribute("aria-valuenow", String(pct));
  }

  function initReveal() {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (entry.target.classList.contains("skill-row")) {
              const fill = entry.target.querySelector(".skill-row__fill");
              if (fill) {
                const w = fill.getAttribute("data-width") || "0";
                fill.style.setProperty("--target-width", w + "%");
              }
            }
          }
        });
      },
      { root: null, threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));

    document.querySelectorAll(".skill-row").forEach((row) => {
      const fill = row.querySelector(".skill-row__fill");
      if (fill) {
        const w = fill.getAttribute("data-width") || "0";
        fill.style.setProperty("--target-width", w + "%");
      }
    });
  }

  function initNavActive() {
    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll(".nav__link[data-nav]");
    const map = new Map();
    links.forEach((a) => {
      const id = a.getAttribute("data-nav");
      if (id) map.set(id, a);
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute("id");
          const link = map.get(id);
          if (!link) return;
          links.forEach((l) => l.classList.remove("is-active"));
          link.classList.add("is-active");
        });
      },
      { root: null, threshold: 0.35, rootMargin: "-20% 0px -50% 0px" }
    );

    sections.forEach((sec) => io.observe(sec));
  }

  function initCursor() {
    if (!cursor || !cursorDot || window.matchMedia("(pointer: coarse)").matches) return;

    let mx = 0;
    let my = 0;
    let cx = 0;
    let cy = 0;

    document.addEventListener(
      "mousemove",
      (e) => {
        mx = e.clientX;
        my = e.clientY;
        cursorDot.style.left = mx + "px";
        cursorDot.style.top = my + "px";
      },
      { passive: true }
    );

    function loop() {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      cursor.style.left = cx + "px";
      cursor.style.top = cy + "px";
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    const hoverSelectors = "a, button, .btn, input, textarea, .nav__toggle";
    document.querySelectorAll(hoverSelectors).forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("is-hover"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("is-hover"));
    });
  }

  function initMobileNav() {
    if (!navToggle || !navList) return;
    navToggle.addEventListener("click", () => {
      const open = navList.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navList.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        navList.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  themeToggle.addEventListener("click", () => {
    const isLight = document.body.classList.contains("theme-light");
    applyTheme(isLight ? "dark" : "light");
  });

  document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLang(btn.getAttribute("data-lang"));
    });
  });

  initTheme();
  setLang(getLang());
  window.addEventListener("scroll", onScrollProgress, { passive: true });
  onScrollProgress();
  initReveal();
  initNavActive();
  initCursor();
  initMobileNav();

  window.addEventListener("load", hideLoader);
  if (document.readyState === "complete") hideLoader();
})();
