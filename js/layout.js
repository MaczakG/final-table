/* ==========================================================================
   Final Table Catering — shared header & footer injection
   Keeps navigation/footer markup in one place across all pages.
   ========================================================================== */

const FT_PAGES = [
  { key: "home", href: "index.html" },
  { key: "about", href: "about.html" },
  { key: "lastMinute", href: "last-minute.html" },
  { key: "events", href: "events.html" },
  { key: "quote", href: "quote.html" },
  { key: "services", href: "services.html" },
  { key: "contact", href: "contact.html" }
];

function ftBuildHeader(activePage) {
  const navItems = FT_PAGES.map((p) => {
    const current = p.key === activePage ? ' aria-current="page"' : "";
    return `<li><a href="${p.href}" data-i18n="nav.${p.key}"${current}></a></li>`;
  }).join("");

  return `
    <div class="container-wide header-inner">
      <a class="brand" href="index.html" aria-label="Final Table Catering — Home">
        <!-- LOGO_PLACEHOLDER — csere a végleges logóra érkezéskor / replace with final logo asset when delivered -->
        <span class="logo-placeholder-stack">
          <span class="logo-placeholder">
            <span class="logo-word">Final</span>
            <span class="t-motif logo-word">Table</span>
          </span>
          <span class="logo-sub" data-i18n="brand.sub"></span>
        </span>
      </a>

      <button class="nav-toggle" id="ftNavToggle" aria-expanded="false" aria-controls="ftMainNav">
        <span></span><span></span><span></span>
        <span class="visually-hidden">Menu</span>
      </button>

      <nav class="main-nav" id="ftMainNav" aria-label="Main navigation">
        <ul class="nav-list">
          ${navItems}
        </ul>
        <div class="lang-switch" role="group" aria-label="Language switch">
          <button type="button" data-lang-btn="hu">HU</button>
          <button type="button" data-lang-btn="en">EN</button>
        </div>
      </nav>
    </div>
  `;
}

function ftBuildFooter() {
  const navItems = FT_PAGES.map(
    (p) => `<li><a href="${p.href}" data-i18n="nav.${p.key}"></a></li>`
  ).join("");

  return `
    <div class="container">
      <div class="footer-grid">
        <div>
          <!-- LOGO_PLACEHOLDER — csere a végleges logóra érkezéskor / replace with final logo asset when delivered -->
          <span class="logo-placeholder">
            <span class="logo-word">Final</span>
            <span class="t-motif logo-word">Table</span>
          </span>
          <p style="margin-top:14px;" data-i18n="footer.aboutText"></p>
        </div>
        <div>
          <h4 data-i18n="footer.linksTitle"></h4>
          <ul>${navItems}</ul>
        </div>
        <div>
          <h4 data-i18n="footer.contactTitle"></h4>
          <ul>
            <li><a href="tel:+3612345678">+36 1 234 5678</a></li>
            <li><a href="mailto:catering@finaltable-budapest.hu">catering@finaltable-budapest.hu</a></li>
          </ul>
          <h4 style="margin-top:22px;" data-i18n="footer.hoursTitle"></h4>
          <p data-i18n="footer.hoursText" style="margin-bottom:4px;"></p>
          <p data-i18n="footer.hoursTextWeekend" style="font-size:0.85rem;"></p>
        </div>
      </div>
      <div class="footer-bottom">
        <span data-i18n="common.parentNote"></span>
        <span>&copy; <span id="ftYear"></span> Final Table Catering. <span data-i18n="footer.rights"></span></span>
      </div>
    </div>
  `;
}

function ftInitLayout(activePage) {
  const headerEl = document.getElementById("site-header");
  const footerEl = document.getElementById("site-footer");
  if (headerEl) headerEl.innerHTML = ftBuildHeader(activePage);
  if (footerEl) footerEl.innerHTML = ftBuildFooter();

  const yearEl = document.getElementById("ftYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.getElementById("ftNavToggle");
  const nav = document.getElementById("ftMainNav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      ftApplyLang(btn.getAttribute("data-lang-btn"));
    });
  });

  ftTranslate(ftGetLang());
}
