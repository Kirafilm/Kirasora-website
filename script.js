/* ============================================================
   KIRASORA — 互動腳本（多頁 + 三語版）
   ============================================================ */
(function () {
  "use strict";

  const I18N = window.KIRASORA_I18N;

  /* ---------- 訂閱設定（EmailJS） ----------
     去 https://www.emailjs.com 免費註冊後，喺以下三個位填返：
       publicKey  → Account → General → Public Key
       serviceId  → Email Services → 你個服務嘅 Service ID
       templateId → Email Templates → 你個範本嘅 Template ID
     範本入面用 {{email}} 就會收到訂閱者填嘅 email。 */
  const SUBSCRIBE = {
    publicKey: "8kvY43PZXdAg8f6-K",
    serviceId: "service_kvhze6e",
    templateId: "template_tez4bpm"
  };

  /* ---------- 多語系 ---------- */
  const STORE_KEY = "kirasora-lang";
  const getLang = () => {
    const saved = localStorage.getItem(STORE_KEY);
    if (saved && I18N && I18N.LANGS.includes(saved)) return saved;
    return "zh-TW"; // 預設：繁體中文
  };
  const translate = (key, lang, vars) => {
    if (!I18N || !I18N.I18N[key]) return "";
    let str = I18N.I18N[key][lang] != null ? I18N.I18N[key][lang] : I18N.I18N[key]["zh-TW"];
    if (vars) Object.keys(vars).forEach((k) => (str = str.replace("{" + k + "}", vars[k])));
    return str;
  };
  const applyI18n = (lang) => {
    if (!I18N) return;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = translate(key, lang);
      if (val) el.innerHTML = val;
    });
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.getAttribute("data-i18n-attr")
        .split(";")
        .forEach((pair) => {
          const [attr, key] = pair.split(":").map((s) => s.trim());
          const val = translate(key, lang);
          if (val) el.setAttribute(attr, val);
        });
    });
    const btn = document.getElementById("langBtn");
    if (btn) btn.textContent = I18N.LANG_LABEL[lang];
    document.documentElement.lang = I18N.LANG_HTML[lang];
  };

  const currentLang = getLang();
  applyI18n(currentLang);

  const langBtn = document.getElementById("langBtn");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const idx = I18N.LANGS.indexOf(currentLang);
      const next = I18N.LANGS[(idx + 1) % I18N.LANGS.length];
      localStorage.setItem(STORE_KEY, next);
      location.reload(); // 重新載入以套用新語言
    });
  }

  /* ---------- 導覽列滾動樣式 ---------- */
  const nav = document.getElementById("nav");
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 30) nav.classList.add("nav--scrolled");
      else nav.classList.remove("nav--scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- 手機選單 ---------- */
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("is-open"));
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("is-open"))
    );
  }

  /* ---------- 多頁導覽高亮（根據當前 URL） ---------- */
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav__link").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === page || (page === "" && href === "index.html")) link.classList.add("is-active");
    else link.classList.remove("is-active");
  });

  /* ---------- 滾動揭示動畫 ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    const revealer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => revealer.observe(el));
  }

  /* ---------- 訂閱表單 → EmailJS ---------- */
  const form = document.getElementById("subForm");
  const note = document.getElementById("subNote");
  if (form && note) {
    // 初始化 EmailJS（有 SDK + public key 先）
    if (window.emailjs && SUBSCRIBE.publicKey) {
      emailjs.init({ publicKey: SUBSCRIBE.publicKey });
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("input");
      const btn = form.querySelector("button[type=submit]");
      const email = input.value.trim();
      if (!email) return;

      const ready = window.emailjs && SUBSCRIBE.publicKey && SUBSCRIBE.serviceId && SUBSCRIBE.templateId;
      if (!ready) {
        // 未設定 EmailJS 前嘅占位提示
        note.textContent = translate("index.subNoteDone", currentLang, { email });
        note.style.color = "var(--blue)";
        form.reset();
        return;
      }

      // 送出中
      btn.disabled = true;
      note.textContent = translate("index.subNoteSending", currentLang);
      note.style.color = "var(--muted)";

      emailjs
        .send(SUBSCRIBE.serviceId, SUBSCRIBE.templateId, { email: email })
        .then(() => {
          note.textContent = translate("index.subNoteDone", currentLang, { email });
          note.style.color = "var(--blue)";
          form.reset();
        })
        .catch(() => {
          note.textContent = translate("index.subNoteError", currentLang);
          note.style.color = "var(--red)";
        })
        .finally(() => {
          btn.disabled = false;
        });
    });
  }

  /* ---------- 試聽 / 播放按鈕（占位回饋） ---------- */
  document.querySelectorAll(".release__play, .track__play").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (btn.tagName === "A" && btn.href && !btn.href.endsWith("#")) return; // 外部連結不攔截
      e.preventDefault();
      const original = btn.textContent;
      btn.textContent = "♪ 準備中…";
      setTimeout(() => (btn.textContent = original), 1600);
    });
  });
})();
