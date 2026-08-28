/* ==========================================================================
   Final Table Catering — i18n dictionary + page behaviour
   Vanilla JS, no build step, no dependencies.
   ========================================================================== */

const I18N = {
  hu: {
    meta: { title: "Final Table Catering — Catering, akár 48 órán belül" },
    nav: {
      about: "Rólunk",
      lastMinute: "Last minute rendezvény",
      events: "Rendezvények",
      quote: "Ajánlatkérés",
      services: "Egyéb szolgáltatások",
      contact: "Kapcsolat"
    },
    common: {
      ctaQuote: "Ajánlatkérés",
      ctaCall: "Hívjon most",
      ctaEmail: "Írjon emailt",
      badge: "Catering, akár 48 órán belül",
      phonePlaceholder: "[Telefonszám]",
      emailPlaceholder: "[Email cím]",
      addressPlaceholder: "[Cím]"
    },
    hero: {
      eyebrow: "Catering, ami nem várat sokáig",
      title: "Finom fogások, felszabadult hangulat — bárhol, bármikor",
      lead: "A Final Table Catering a Final Table Budapest étterem kistestvéreként hozza ki a rendezvényedre a konyhát — barátságos csapattal, gyors szervezéssel, akár 48 órán belül."
    },
    about: {
      eyebrow: "Kik vagyunk",
      title: "A Final Table Budapest kistestvére — külön csapat, közös lelkesedés",
      text1: "A Final Table Catering önálló csapatként dolgozik, saját tempóban és saját stílusban, de a Final Table Budapest étterem gasztronómiai alapjaira épít. Amit az étteremben megszerettél, azt visszük ki hozzád — kicsit lazábban, kicsit gyorsabban, ugyanolyan igényesen.",
      text2: "Nálunk nincs túlbonyolítva a dolog: meghallgatjuk, mire van szükséged, utána mi intézzük a részleteket — a menütől a felszolgálásig, te csak érkezz a vendégeiddel.",
      photoAlt: "A Final Table csapata együtt dolgozik a konyhában, gourmet fogásokat készít elő"
    },
    lastMinute: {
      eyebrow: "A mi terepünk",
      title: "Last minute rendezvény? Ez a mi műfajunk.",
      lead: "Rövid a határidő? Nálunk ez természetes közeg — nem kapkodunk, csak gyorsak vagyunk. A hívástól az asztalig mindössze 48 óra.",
      step1Time: "0–2 óra",
      step1Title: "Első hívás",
      step1Text: "Felhívsz vagy írsz, mi pedig azonnal nekiállunk egyeztetni a részleteket.",
      step2Time: "2–24 óra",
      step2Title: "Menü & logisztika",
      step2Text: "Összerakjuk a testreszabott menüt, a személyzetet és az eszközöket.",
      step3Time: "24–48 óra",
      step3Title: "Helyszíni kiszolgálás",
      step3Text: "Megérkezünk, felállunk, te pedig csak élvezed az estét."
    },
    events: {
      eyebrow: "Alkalmak",
      title: "Milyen rendezvényekre foglalhatsz minket",
      lead: "Minden esemény más — ezért nálunk minden menü és kiszolgálási forma az adott alkalomhoz igazodik, legyen szó pár hetes előkészületről vagy last minute igényről.",
      card1Title: "Esküvő",
      card1Text: "Elegáns menüsorok és figyelmes kiszolgálás a nagy napra.",
      card2Title: "Vállalati rendezvény",
      card2Text: "Céges vacsorák, konferenciák és fogadások professzionális háttérrel.",
      card3Title: "Privát ünnepség",
      card3Text: "Szülinap, évforduló, családi összejövetel — otthonos, mégis igényes.",
      card4Title: "Gálavacsora",
      card4Text: "Többfogásos, letisztult tálalású vacsorák díszes alkalmakra.",
      card5Title: "Kültéri rendezvény",
      card5Text: "Kerti parti vagy szabadtéri esemény — teljes logisztikai háttérrel.",
      card6Title: "Céges / márka esemény",
      card6Text: "Precíz időzítés és letisztult megjelenés brand-eseményekhez.",
      photoAlt: "Elegánsan berendezett rendezvényterem gondosan megterített asztalokkal"
    },
    quote: {
      eyebrow: "Ajánlatkérés",
      title: "Ajánlatkérés — pár telefonhívásnyira",
      lead: "Online űrlap helyett inkább beszéljünk! Hívj fel, vagy írj emailt — 48 órán belüli eseményre is szívesen adunk ajánlatot.",
      callTitle: "Hívjon minket",
      callText: "A leggyorsabb út az ajánlathoz — főleg last minute esemény esetén.",
      emailTitle: "Írjon emailt",
      emailText: "Küldd el az esemény részleteit, hamarosan válaszolunk.",
      prepEyebrow: "Készülj fel",
      prepTitle: "Amit érdemes előre átgondolni",
      prep1: "Az esemény dátuma és várható időtartama",
      prep2: "Vendégek várható létszáma",
      prep3: "Helyszín (vagy hogy még keresed-e)",
      prep4: "Étkezési igények, allergének, speciális kérések",
      prep5: "Hozzávetőleges büdzsé",
      photoAlt: "Jegyzetelés egy rendezvény részleteiről, kávézó hangulatú térben"
    },
    services: {
      eyebrow: "Kínálatunk",
      title: "Amivel a menün túl is segítünk",
      card1Title: "Menütervezés",
      card1Text: "Egyedi büfé- és menüösszeállítás, étkezési igényekre szabva.",
      card2Title: "Bár & mixológia",
      card2Text: "Itallapok, koktélbár és felszolgáló személyzet a rendezvényre.",
      card3Title: "Dekoráció & terítés",
      card3Text: "Asztaldísz és tálalóeszközök az esemény hangulatához illesztve.",
      card4Title: "Felszolgáló személyzet",
      card4Text: "Gyakorlott csapat a zökkenőmentes kiszolgáláshoz.",
      card5Title: "Rendezvénylogisztika",
      card5Text: "Szállítás, időzítés és helyszíni koordináció a háttérben.",
      card6Title: "Desszert & cukrászat",
      card6Text: "Egyedi desszertasztal és tortakészítés az esemény karakteréhez.",
      photoAlt: "Bartender koktélt készít egy elegáns bárpultnál"
    },
    contact: {
      eyebrow: "Elérhetőségeink",
      title: "Beszéljünk a rendezvényedről",
      lead: "Kérdésed van, vagy szeretnél ajánlatot kérni? Vedd fel velünk a kapcsolatot az alábbi elérhetőségeken.",
      phoneLabel: "Telefon",
      emailLabel: "Email",
      addressLabel: "Székhely",
      hoursLabel: "Elérhetőség",
      hoursText: "Hétfő–Péntek: 09:00–19:00, sürgős esetben hétvégén is",
      socialLabel: "Kövess minket",
      parentNote: "A Final Table Catering a Final Table Budapest étterem catering márkája."
    },
    footer: {
      blurb: "A Final Table Budapest étterem kistestvéreként hozzuk ki a konyhát a rendezvényedre — barátságosan, gyorsan, igényesen.",
      linksTitle: "Menü",
      contactTitle: "Kapcsolat",
      parentNote: "A Final Table Budapest étterem catering márkája.",
      rights: "Minden jog fenntartva."
    }
  },

  en: {
    meta: { title: "Final Table Catering — Catering, ready in 48 hours" },
    nav: {
      about: "About Us",
      lastMinute: "Last-Minute Event",
      events: "Events",
      quote: "Request a Quote",
      services: "Other Services",
      contact: "Contact"
    },
    common: {
      ctaQuote: "Request a Quote",
      ctaCall: "Call now",
      ctaEmail: "Send an email",
      badge: "Catering | Ready in 48 hours",
      phonePlaceholder: "[Phone number]",
      emailPlaceholder: "[Email address]",
      addressPlaceholder: "[Address]"
    },
    hero: {
      eyebrow: "Catering that doesn't keep you waiting",
      title: "Great food, easy hosting — wherever, whenever",
      lead: "As the friendly little sibling of Final Table Budapest, Final Table Catering brings the kitchen to your event — fast planning, warm service, ready in as little as 48 hours."
    },
    about: {
      eyebrow: "Who we are",
      title: "The little sibling of Final Table Budapest — its own team, the same passion",
      text1: "Final Table Catering runs as an independent team, on its own schedule and in its own style, while building on the culinary foundations of Final Table Budapest. What you fell in love with at the restaurant, we bring to you — a little more relaxed, a little faster, just as thoughtfully made.",
      text2: "We keep it simple: we listen to what you need, then take care of the details — from the menu to the service — so you can just show up with your guests.",
      photoAlt: "The Final Table team working together in the kitchen, preparing gourmet dishes"
    },
    lastMinute: {
      eyebrow: "Our home turf",
      title: "Last-minute event? That's our specialty.",
      lead: "Short on time? For us, that's just business as usual — we don't rush, we're just fast. From your call to the table: 48 hours.",
      step1Time: "0–2 hours",
      step1Title: "First call",
      step1Text: "Call or message us, and we start planning the details right away.",
      step2Time: "2–24 hours",
      step2Title: "Menu & logistics",
      step2Text: "We put together your tailored menu, staff, and equipment.",
      step3Time: "24–48 hours",
      step3Title: "On-site service",
      step3Text: "We show up, set up, and you get to enjoy the evening."
    },
    events: {
      eyebrow: "Occasions",
      title: "The events we cater",
      lead: "Every event is different — so every menu and service style is tailored to the occasion, whether you have weeks to prepare or a last-minute need.",
      card1Title: "Weddings",
      card1Text: "Elegant menus and attentive service for your big day.",
      card2Title: "Corporate events",
      card2Text: "Company dinners, conferences, and receptions, handled professionally.",
      card3Title: "Private celebrations",
      card3Text: "Birthdays, anniversaries, family gatherings — homely, yet refined.",
      card4Title: "Gala dinners",
      card4Text: "Multi-course, cleanly presented dinners for formal occasions.",
      card5Title: "Outdoor events",
      card5Text: "Garden parties and outdoor events, fully supported end to end.",
      card6Title: "Corporate & brand events",
      card6Text: "Precise timing and polished presentation for brand events.",
      photoAlt: "Elegantly decorated event hall with beautifully set tables"
    },
    quote: {
      eyebrow: "Request a Quote",
      title: "A quote is just a call away",
      lead: "No online form — let's actually talk. Call us or send an email, and we're happy to quote events with as little as 48 hours' notice.",
      callTitle: "Call us",
      callText: "The fastest way to a quote — especially for last-minute events.",
      emailTitle: "Email us",
      emailText: "Send us your event details and we'll reply shortly.",
      prepEyebrow: "Be prepared",
      prepTitle: "Good to have ready",
      prep1: "Event date and expected duration",
      prep2: "Expected number of guests",
      prep3: "Venue (or whether you're still looking)",
      prep4: "Dietary needs, allergens, special requests",
      prep5: "Approximate budget",
      photoAlt: "Taking notes on event details in a relaxed, café-style setting"
    },
    services: {
      eyebrow: "What we offer",
      title: "How we help beyond the menu",
      card1Title: "Menu planning",
      card1Text: "Custom buffet and menu design, tailored to dietary needs.",
      card2Title: "Bar & mixology",
      card2Text: "Drink menus, cocktail bars, and bar staff for your event.",
      card3Title: "Decor & table styling",
      card3Text: "Table decor and serving ware matched to your event's mood.",
      card4Title: "Service staff",
      card4Text: "Experienced staff for seamless, attentive service.",
      card5Title: "Event logistics",
      card5Text: "Delivery, timing, and on-site coordination handled behind the scenes.",
      card6Title: "Desserts & pastry",
      card6Text: "Custom dessert tables and cakes matched to your event's character.",
      photoAlt: "Bartender preparing a cocktail at an elegant bar counter"
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Let's talk about your event",
      lead: "Have a question, or want to request a quote? Get in touch using the details below.",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLabel: "Office",
      hoursLabel: "Availability",
      hoursText: "Monday–Friday: 09:00–19:00, available weekends for urgent requests",
      socialLabel: "Follow us",
      parentNote: "Final Table Catering is the catering brand of Final Table Budapest restaurant."
    },
    footer: {
      blurb: "As the little sibling of Final Table Budapest, we bring the kitchen to your event — friendly, fast, and thoughtfully made.",
      linksTitle: "Menu",
      contactTitle: "Contact",
      parentNote: "The catering brand of Final Table Budapest restaurant.",
      rights: "All rights reserved."
    }
  }
};

const FT_LANG_KEY = "ft-lang";

function ftGetLang() {
  const stored = localStorage.getItem(FT_LANG_KEY);
  if (stored === "hu" || stored === "en") return stored;
  return "hu";
}

function ftSetLang(lang) {
  localStorage.setItem(FT_LANG_KEY, lang);
}

function ftResolve(path, lang) {
  const parts = path.split(".");
  let node = I18N[lang];
  for (const part of parts) {
    if (node == null) return undefined;
    node = node[part];
  }
  return node;
}

function ftTranslate(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = ftResolve(el.getAttribute("data-i18n"), lang);
    if (typeof value === "string") el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const value = ftResolve(el.getAttribute("data-i18n-alt"), lang);
    if (typeof value === "string") el.alt = value;
  });

  const title = ftResolve("meta.title", lang);
  if (typeof title === "string") document.title = title;

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.getAttribute("data-lang-btn") === lang ? "true" : "false");
  });
}

function ftApplyLang(lang) {
  ftSetLang(lang);
  ftTranslate(lang);
}

/* --------------------------------------------------------------------------
   Page behaviour: sticky header, mobile nav, reveal-on-scroll
   -------------------------------------------------------------------------- */
function ftInitHeader() {
  const header = document.getElementById("siteHeader");
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}

function ftInitReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || items.length === 0) {
    items.forEach((el) => el.classList.add("in-view"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach((el) => observer.observe(el));
}

function ftInitLangSwitch() {
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => ftApplyLang(btn.getAttribute("data-lang-btn")));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  ftTranslate(ftGetLang());
  ftInitHeader();
  ftInitReveal();
  ftInitLangSwitch();

  const yearEl = document.getElementById("ftYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
