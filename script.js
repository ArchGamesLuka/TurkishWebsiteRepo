const CONTACT = {
  whatsappNumber: "905330923297",
  phoneDisplay: "+90 533 092 32 97",
  phoneTel: "+905330923297",
  instagramUrl: "https://instagram.com/diamondlipsantalya"
};

const GALLERY_IMAGES = [
  "lips07.webp",
  "lips08.webp",
  "lips09.webp",
  "lips010.webp",
  "lips011.webp",
  "lips012.webp",
].map((file, i) => ({ id: i + 1, src: `Assets/Gallery/${file}` }));

const translations = {
  en: {
    "nav.services": "Services",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "hero.title": "BEAUTY",
    "hero.script": "is in the details.",
    "hero.desc": "We bring out the best version of you<br>with natural, aesthetic and personalized care.",
    "hero.cta.whatsapp": "WhatsApp Us",
    "hero.cta.instagram": "Instagram",
    "hero.orCall": "or call",
    "services.heading": "OUR SERVICES",
    "service.lip.title": "Lip Filler",
    "service.lip.desc": "Adds volume and shape for natural, beautiful lips.",
    "service.jaw.title": "Chin Filler / Jawline",
    "service.jaw.desc": "Defines facial contours and enhances a sharper appearance.",
    "service.eye.title": "Under Eye Filler",
    "service.eye.desc": "Reduces dark circles and hollows, brings brightness and a fresh look.",
    "service.botox.title": "Botox",
    "service.botox.desc": "Reduces wrinkles and fine lines, for a younger and relaxed look.",
    "service.lipolysis.title": "Injectable Lipolysis",
    "service.lipolysis.desc": "Helps reduce stubborn fat in unwanted areas.",
    "service.skin.title": "Skin Rejuvenation Protocols",
    "service.skin.desc": "Improves skin quality, adds radiance and provides a healthy appearance.",
    "service.lift.title": "Non-Surgical Face Lift Protocols",
    "service.lift.desc": "Provides a lifting effect, a tighter and younger looking appearance.",
    "faq.heading": "FAQ",
    "faq.booking.q": "How do I book an appointment?",
    "faq.booking.a": "We don't take bookings on the site — reach us directly and we'll confirm your appointment.",
    "faq.booking.cta.whatsapp": "WhatsApp",
    "faq.booking.cta.instagram": "DM",
    "faq.booking.cta.phone": "Call Us",
    "faq.process.q": "I would like information about the procedures and the process.",
    "faq.process.a": "Our team will walk you through every step of the procedure, expected downtime, and aftercare before you book — get in touch and we'll send full details.",
    "faq.skin.q": "I would like a free skin analysis for my concerns and complaints.",
    "faq.skin.a": "We offer a complimentary skin analysis so we can recommend the right protocol for your goals. Message us to schedule yours.",
    "faq.date.q": "Can I get an appointment for a specific date?",
    "faq.date.a": "Yes — send us your preferred date and we'll confirm availability as soon as possible.",
    "faq.vip.q": "Can I get picked up from my address?",
    "faq.vip.a": "Yes — just tell us where you're staying when you book, and we'll arrange pickup for you.",
    "contact.heading": "Quick Contact",
    "contact.whatsapp.title": "WhatsApp",
    "contact.whatsapp.sub": "Message Now",
    "contact.instagram.title": "Instagram",
    "contact.instagram.sub": "Follow Us",
    "contact.phone.title": "Phone",
    "contact.quote": "If you're sad,<br>add more lipstick and attack.",
    "footer.location.title": "Antalya",
    "footer.location.sub": "Bahçelievler, Muratpaşa<br>Tarık Akıltopu Cd., Antalya",
    "footer.hours.title": "Working Hours",
    "footer.hours.sub": "Monday - Saturday<br>10:00 AM - 07:00 PM",
    "footer.safe.title": "Safe & Quality",
    "footer.safe.sub": "Hygienic Environment<br>Quality Products",
    "footer.bottom.right": "QUEEN OF LIPS"
  },
  tr: {
    "nav.services": "Hizmetler",
    "nav.faq": "SSS",
    "nav.contact": "İletişim",
    "hero.title": "GÜZELLİK",
    "hero.script": "detaylarda gizli.",
    "hero.desc": "Doğal, estetik ve size özel bakımla<br>en iyi halinizi ortaya çıkarıyoruz.",
    "hero.cta.whatsapp": "WhatsApp'tan Yazın",
    "hero.cta.instagram": "Instagram",
    "hero.orCall": "veya arayın",
    "services.heading": "HİZMETLERİMİZ",
    "service.lip.title": "Dudak Dolgusu",
    "service.lip.desc": "Doğal ve güzel dudaklar için hacim ve şekil kazandırır.",
    "service.jaw.title": "Çene Dolgusu / Çene Hattı",
    "service.jaw.desc": "Yüz hatlarını belirginleştirir ve daha keskin bir görünüm sağlar.",
    "service.eye.title": "Göz Altı Dolgusu",
    "service.eye.desc": "Koyu halkaları ve çukurluğu azaltır, aydınlık ve dinç bir görünüm kazandırır.",
    "service.botox.title": "Botoks",
    "service.botox.desc": "Kırışıklıkları azaltır, daha genç ve dinlenmiş bir görünüm sağlar.",
    "service.lipolysis.title": "Enjeksiyon ile Yağ Eritme",
    "service.lipolysis.desc": "İstenmeyen bölgelerdeki inatçı yağların azaltılmasına yardımcı olur.",
    "service.skin.title": "Cilt Yenileme Protokolleri",
    "service.skin.desc": "Cilt kalitesini artırır, parlaklık kazandırır ve sağlıklı bir görünüm sağlar.",
    "service.lift.title": "Cerrahisiz Yüz Germe Protokolleri",
    "service.lift.desc": "Sıkılaştırıcı bir etki sağlayarak daha genç ve dinç bir görünüm kazandırır.",
    "faq.heading": "SSS",
    "faq.booking.q": "Randevumu nasıl alabilirim?",
    "faq.booking.a": "Randevuları site üzerinden almıyoruz — bize doğrudan ulaşın, randevunuzu birlikte netleştirelim.",
    "faq.booking.cta.whatsapp": "WhatsApp",
    "faq.booking.cta.instagram": "DM",
    "faq.booking.cta.phone": "Bizi Arayın",
    "faq.process.q": "Uygulamalar ve süreç hakkında bilgi almak istiyorum.",
    "faq.process.a": "Ekibimiz size uygulamanın tüm aşamalarını, iyileşme sürecini ve bakımını anlatır — bize ulaşın, detaylı bilgi gönderelim.",
    "faq.skin.q": "Cilt sorunlarım için ücretsiz cilt analizi istiyorum.",
    "faq.skin.a": "Hedeflerinize en uygun protokolü belirleyebilmemiz için ücretsiz cilt analizi sunuyoruz. Randevu için bize yazın.",
    "faq.date.q": "Belirli bir tarih için randevu alabilir miyim?",
    "faq.date.a": "Evet — tercih ettiğiniz tarihi bize iletin, uygunluğu en kısa sürede teyit edelim.",
    "faq.vip.q": "Adresimden alınabilir miyim?",
    "faq.vip.a": "Evet — randevu alırken kaldığınız yeri bize bildirin, sizi almamızı ayarlayalım.",
    "contact.heading": "Hızlı İletişim",
    "contact.whatsapp.title": "WhatsApp",
    "contact.whatsapp.sub": "Hemen Yazın",
    "contact.instagram.title": "Instagram",
    "contact.instagram.sub": "Takip Edin",
    "contact.phone.title": "Telefon",
    "contact.quote": "Kendini kötü hissediyorsan,<br>daha fazla ruj sür ve saldır.",
    "footer.location.title": "Antalya",
    "footer.location.sub": "Bahçelievler, Muratpaşa<br>Tarık Akıltopu Cd., Antalya",
    "footer.hours.title": "Çalışma Saatleri",
    "footer.hours.sub": "Pazartesi - Cumartesi<br>10:00 - 19:00",
    "footer.safe.title": "Güvenli & Kaliteli",
    "footer.safe.sub": "Hijyenik Ortam<br>Kaliteli Ürünler",
    "footer.bottom.right": "QUEEN OF LIPS"
  },
  ru: {
    "nav.services": "Услуги",
    "nav.faq": "Вопросы",
    "nav.contact": "Контакты",
    "hero.title": "КРАСОТА",
    "hero.script": "в деталях.",
    "hero.desc": "Мы раскрываем вашу лучшую версию<br>с естественным, эстетичным и индивидуальным уходом.",
    "hero.cta.whatsapp": "Написать в WhatsApp",
    "hero.cta.instagram": "Instagram",
    "hero.orCall": "или позвоните",
    "services.heading": "НАШИ УСЛУГИ",
    "service.lip.title": "Филлеры для губ",
    "service.lip.desc": "Придают объём и форму для естественных, красивых губ.",
    "service.jaw.title": "Филлеры для подбородка / линии челюсти",
    "service.jaw.desc": "Подчёркивают черты лица и создают более чёткий контур.",
    "service.eye.title": "Филлеры под глаза",
    "service.eye.desc": "Уменьшают тёмные круги и впадины, придают свежий, сияющий вид.",
    "service.botox.title": "Ботокс",
    "service.botox.desc": "Разглаживает морщины, придаёт более молодой и отдохнувший вид.",
    "service.lipolysis.title": "Инъекционный липолиз",
    "service.lipolysis.desc": "Помогает уменьшить локальные жировые отложения.",
    "service.skin.title": "Протоколы омоложения кожи",
    "service.skin.desc": "Улучшают качество кожи, придают сияние и здоровый вид.",
    "service.lift.title": "Безоперационный лифтинг лица",
    "service.lift.desc": "Обеспечивает эффект подтяжки, делает контур более упругим и молодым.",
    "faq.heading": "Вопросы",
    "faq.booking.q": "Как записаться на приём?",
    "faq.booking.a": "Мы не принимаем записи через сайт — напишите или позвоните нам напрямую, и мы подтвердим ваш визит.",
    "faq.booking.cta.whatsapp": "WhatsApp",
    "faq.booking.cta.instagram": "DM",
    "faq.booking.cta.phone": "Позвонить",
    "faq.process.q": "Хочу узнать о процедурах и процессе.",
    "faq.process.a": "Наша команда расскажет обо всех этапах процедуры, восстановлении и уходе — напишите нам, и мы пришлём все детали.",
    "faq.skin.q": "Хочу получить бесплатный анализ кожи по моей проблеме.",
    "faq.skin.a": "Мы предлагаем бесплатный анализ кожи, чтобы подобрать подходящий протокол. Напишите нам, чтобы записаться.",
    "faq.date.q": "Можно ли записаться на конкретную дату?",
    "faq.date.a": "Да — сообщите удобную дату, и мы как можно скорее подтвердим наличие свободного времени.",
    "faq.vip.q": "Можно ли меня забрать с моего адреса?",
    "faq.vip.a": "Да — просто сообщите, где вы остановились, при записи, и мы организуем, чтобы вас забрали.",
    "contact.heading": "Быстрая связь",
    "contact.whatsapp.title": "WhatsApp",
    "contact.whatsapp.sub": "Написать сейчас",
    "contact.instagram.title": "Instagram",
    "contact.instagram.sub": "Подписаться",
    "contact.phone.title": "Телефон",
    "contact.quote": "Если тебе грустно,<br>нанеси больше помады и атакуй.",
    "footer.location.title": "Анталья",
    "footer.location.sub": "Бахчелиевлер, Муратпаша<br>Tarık Akıltopu Cd., Анталья",
    "footer.hours.title": "Часы работы",
    "footer.hours.sub": "Понедельник - Суббота<br>10:00 - 19:00",
    "footer.safe.title": "Безопасность & Качество",
    "footer.safe.sub": "Гигиеничная обстановка<br>Качественные препараты",
    "footer.bottom.right": "QUEEN OF LIPS"
  }
};

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key]) el.innerHTML = dict[key];
  });

  document.documentElement.lang = lang;
  localStorage.setItem("diamondLipsLang", lang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  document.querySelectorAll(".acc-item.open .acc-panel").forEach((panel) => {
    panel.style.maxHeight = panel.scrollHeight + "px";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });

  document.querySelectorAll(".acc-item").forEach((item) => {
    const trigger = item.querySelector(".acc-trigger");
    const panel = item.querySelector(".acc-panel");

    trigger.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      document.querySelectorAll(".acc-item.open").forEach((other) => {
        if (other !== item) {
          other.classList.remove("open");
          other.querySelector(".acc-panel").style.maxHeight = null;
        }
      });

      item.classList.toggle("open", !isOpen);
      panel.style.maxHeight = !isOpen ? panel.scrollHeight + "px" : null;
    });
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  document.querySelectorAll('[data-contact="whatsapp"]').forEach((el) => {
    el.href = `https://wa.me/${CONTACT.whatsappNumber}`;
    el.target = "_blank";
    el.rel = "noopener";
  });

  document.querySelectorAll('[data-contact="phone"]').forEach((el) => {
    el.href = `tel:${CONTACT.phoneTel}`;
  });

  document.querySelectorAll('[data-contact="instagram"]').forEach((el) => {
    el.href = CONTACT.instagramUrl;
    el.target = "_blank";
    el.rel = "noopener";
  });

  document.querySelectorAll('[data-contact-display="phone"]').forEach((el) => {
    el.textContent = CONTACT.phoneDisplay;
  });

  const gallerySlots = document.querySelectorAll(".gallery-slot");
  let galleryOffset = 0;

  function renderGallerySlot(slotEl, imageData) {
    if (imageData && imageData.src) {
      slotEl.style.backgroundImage = `url(${imageData.src})`;
      slotEl.classList.add("has-image");
      slotEl.innerHTML = "";
    } else {
      slotEl.style.backgroundImage = "none";
      slotEl.classList.remove("has-image");
      slotEl.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M21 16l-5-4-4 3-3-2-6 5"/></svg><span>Photo ${imageData.id}</span>`;
    }
  }

  function renderGallery() {
    gallerySlots.forEach((slot, i) => {
      const imgIndex = (galleryOffset + i) % GALLERY_IMAGES.length;
      renderGallerySlot(slot, GALLERY_IMAGES[imgIndex]);
    });
  }

  function rotateGallery() {
    gallerySlots.forEach((slot) => slot.classList.add("fading"));
    setTimeout(() => {
      galleryOffset = (galleryOffset + 1) % GALLERY_IMAGES.length;
      renderGallery();
      gallerySlots.forEach((slot) => slot.classList.remove("fading"));
    }, 300);
  }

  if (gallerySlots.length) {
    renderGallery();
    setInterval(rotateGallery, 5000);
  }

  const savedLang = localStorage.getItem("diamondLipsLang");
  applyLanguage(savedLang && translations[savedLang] ? savedLang : "en");

  function syncHeroImageHeight() {
    const heroText = document.querySelector(".hero-text");
    const photo = document.querySelector(".hero-photo");
    if (!heroText || !photo) return;
    if (document.documentElement.clientWidth <= 980) {
      photo.style.height = "";
      return;
    }
    const h1 = heroText.querySelector("h1");
    const phoneLine = heroText.querySelector(".hero-phone-line");
    if (!h1 || !phoneLine) return;
    const h1Rect = h1.getBoundingClientRect();
    const phoneRect = phoneLine.getBoundingClientRect();
    const contentHeight = phoneRect.bottom - h1Rect.top;
    if (contentHeight > 0) {
      document.documentElement.style.setProperty("--hero-photo-height", (contentHeight + 80) + "px");
    }
  }

  function syncHeroDivider() {
    const photo = document.querySelector(".hero-photo");
    const hero = document.querySelector(".hero");
    const divider = document.getElementById("heroDivider");
    if (!photo || !hero || !divider) return;
    if (document.documentElement.clientWidth <= 980) {
      divider.style.display = "none";
      return;
    }
    divider.style.display = "";
    const photoRect = photo.getBoundingClientRect();
    const heroRect = hero.getBoundingClientRect();
    divider.style.top = (photoRect.bottom - heroRect.top) + "px";
  }

  syncHeroImageHeight();
  syncHeroDivider();
  window.addEventListener("resize", syncHeroImageHeight);
  window.addEventListener("resize", syncHeroDivider);
  window.addEventListener("load", syncHeroImageHeight);
  window.addEventListener("load", syncHeroDivider);
});
