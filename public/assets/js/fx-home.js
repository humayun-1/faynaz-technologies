/* Faynaz Technologies — homepage interactions (fx)
   Preloader · scroll reveal · project estimator · mobile nav · EN/AR language toggle. */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- i18n (English is authored in the DOM; Arabic overrides here) ---------- */
  var AR = {
    loading: "نُجهّز تجربتك",
    nav_services: "الخدمات", nav_models: "طرق العمل", nav_estimate: "التقدير", nav_work: "أعمالنا", nav_faq: "الأسئلة", nav_cta: "لنتحدّث",
    hero_eyebrow: "استوديو برمجيات وDevOps وأتمتة",
    hero_h1a: "برمجيات و", hero_h1b: "DevOps وأتمتة ذكاء اصطناعي", hero_h1c: " — نبنيها ونُشغّلها لك.",
    hero_lead: "وظّف مهندسي DevOps وذكاء اصطناعي وتطوير متكامل كبار — كفريق مخصّص أو كخدمة مُدارة. من الاستراتيجية إلى إصدار موثوق، بدون أعباء الوكالات.",
    hero_cta1: "لنتحدّث", hero_cta2: "قدّر مشروعك",
    hero_meta: "نستقبل مشاريع الربع الثالث — البدء عادةً خلال أسبوعين.",
    k_uptime: "التوافر هذا الربع", k_deploys: "الإصدارات المُطلَقة",
    m1: "تطوير متكامل", m2: "DevOps وسحابة", m3: "أتمتة ذكاء اصطناعي", m4: "وكلاء ذكاء", m5: "فرق مخصّصة", m6: "جودة وإصدار",
    trust_label: "فرق في التقنية المالية والرعاية الصحية وبرمجيات SaaS تثق بنا",
    svc_eyebrow: "الخدمات", svc_h2: "ثلاث ركائز تُسخّر الهندسة لصالحك.",
    svc_p: "عروض مُركّزة، محدّدة بوضوح، ومُسعّرة لتعرف ما تشتريه قبل أن نبدأ.",
    svc1_h: "تطوير متكامل", svc1_p: "تطبيقات ويب ومنصّات SaaS ونماذج أولية وواجهات برمجية تُبنى لتتوسّع.",
    svc2_h: "DevOps والسحابة", svc2_p: "CI/CD وكوبرنيتس وترحيل سحابي وبنية ككود وموثوقية أعلى.",
    svc3_h: "أتمتة الذكاء الاصطناعي", svc3_p: "أتمتة سير العمل ووكلاء الذكاء وتكامل النماذج اللغوية لتقليل العمل اليدوي.",
    svc_more: "اعرف المزيد",
    mdl_eyebrow: "طريقتان للعمل معنا", mdl_h2: "وظّف فريقًا، أو سلّمنا النتيجة.",
    mdl1_tag: "فريق مخصّص", mdl1_h: "وظّف مهندسين كبار", mdl1_p: "مهندسو DevOps وذكاء اصطناعي وتطوير متكامل يندمجون مع فريقك على أساس شهري.",
    mdl1_l1: "تحكّم كامل واندماج يومي", mdl1_l2: "مهندسون كبار فقط", mdl1_l3: "تكبير أو تصغير بمرونة",
    mdl1_cta: "وظّف مهندسًا",
    mdl2_tag: "خدمة مُدارة", mdl2_h: "سلّمنا النتيجة", mdl2_p: "نُحدّد النطاق ونبني ونُسلّم مُخرجًا مُتّفقًا عليه بسعر ثابت.",
    mdl2_l1: "نطاق وسعر ثابتان", mdl2_l2: "جودة وإصدار مُدمجان", mdl2_l3: "تملك الكود بالكامل",
    mdl2_cta: "لنتحدّث",
    est_eyebrow: "مُقدّر المشروع", est_h2: "احصل على تقدير مبدئي في أقل من دقيقة.",
    est_p: "اختر ما تبنيه، والتقدير يتحدّث فورًا — دون نماذج أو انتظار مكالمة مبيعات.",
    est_q1: "ماذا تبني؟", est_q2: "أي منصّات؟", est_q3: "الميزات الأساسية", est_q4: "الجدول الزمني",
    t_web: "موقع", t_app: "تطبيق ويب", t_mobile: "تطبيق موبايل", t_ai: "ذكاء / أتمتة",
    p_web: "ويب", p_ios: "iOS", p_android: "أندرويد",
    f_auth: "حسابات المستخدمين", f_pay: "المدفوعات", f_dash: "لوحة تحكّم", f_api: "تكاملات / API", f_ai: "ميزات ذكاء", f_cms: "إدارة محتوى",
    tl_std: "قياسي", tl_fast: "مسار سريع",
    est_rl: "الاستثمار التقديري", est_hours: "ساعات الهندسة", est_weeks: "مدّة التسليم", est_wk: "أسابيع", est_team: "حجم الفريق",
    est_book: "لنتحدّث لتدقيق التقدير", est_note: "تقديري فقط. يُحدَّد النطاق النهائي بعد الاكتشاف.",
    why_eyebrow: "لماذا تختارنا الفِرق", why_h2: "عمل احترافي دون احتكاك الوكالات.",
    why_p: "يجلس أصحاب التفكير في الغرفة نفسها مع كاتبي الكود.",
    why1_h: "سرعة يمكنك التخطيط حولها", why1_p: "فرق صغيرة خبيرة ونطاق محكم يعنيان إصدارًا أوّل خلال أسابيع بمواعيد نلتزم بها.",
    why2_h: "تواصل مباشر", why2_p: "تتحدّث إلى المهندسين والقائد — دون طبقة حسابات تترجم المتطلبات مرّتين.",
    why3_h: "عمق تقني حقيقي", why3_p: "قرارات المعمارية والأداء يتّخذها من نفّذوها من قبل.",
    why4_h: "مبني حول الأعمال", why4_p: "نبدأ من النتيجة التي تُقاس بها، ثم نختار التقنية.",
    proc_eyebrow: "كيف نعمل", proc_h2: "ارتباط من أربع خطوات، من البداية إلى التوسّع.",
    proc_s1n: "خطوة 01", proc_s2n: "خطوة 02", proc_s3n: "خطوة 03", proc_s4n: "خطوة 04",
    proc1_h: "الاكتشاف", proc1_p: "نرسم الهدف والقيود ومقياس النجاح قبل أي كود.",
    proc2_h: "التصميم", proc2_p: "مسارات وواجهات ومعمارية — متّفق عليها ومحدّدة بخطة ثابتة.",
    proc3_h: "البناء", proc3_p: "مهندسون كبار يُطلقون في دورات قصيرة مع جودة في كل إصدار.",
    proc4_h: "الإطلاق والتوسّع", proc4_p: "نُطلق ونراقب الأرقام ونُبقي النظام جاهزًا لما هو آتٍ.",
    work_eyebrow: "أعمال مختارة", work_h2: "تُقاس بالنتائج لا بالصور.",
    work1_h: "إعادة بناء لوحة عمليات قلّصت زمن المعالجة الداخلي.", work1_p: "دمج أربع أدوات يدوية في مسار واحد، وإزالة عمليات التسليم اليومية.", work1_f: "منصّة عمليات · بناء 8 أسابيع",
    work2_h: "إعادة بناء مُركّزة على التحويل رفعت الطلبات المؤهّلة.", work2_p: "رسائل وتسلسل وسرعة جديدة حوّلت الزوّار إلى مكالمات محجوزة.", work2_f: "موقع تسويقي · بناء 5 أسابيع",
    work3_h: "أتمتة سير عمل حتى تسليم يدوي شبه معدوم.", work3_p: "نماذج مُهيكلة وتوجيه بالقواعد حلّت محل الجداول وإعادة الإدخال.", work3_f: "أتمتة سير عمل · بناء 7 أسابيع",
    voi_eyebrow: "بكلماتهم", voi_h2: "ما يقوله المؤسّسون بعد الإطلاق.",
    q1: "«حدّدوا النطاق بصدق، والتزموا بالمواعيد، والنظام يفعل ما نحتاجه بالضبط.»",
    q2: "«حصلنا على شريك يفهم الأعمال. الطلبات ارتفعت والمنتج صار يعبّر عنّا.»",
    faq_eyebrow: "الأسئلة الشائعة", faq_h2: "الأسئلة التي يطرحها صنّاع القرار.",
    faq1_q: "كيف تُسعّرون المشاريع؟", faq1_a: "معظم المشاريع بنطاق وسعر ثابتين يُتّفق عليهما بعد الاكتشاف. الفرق المخصّصة عبر اشتراك شهري.",
    faq2_q: "متى يمكنكم البدء؟", faq2_a: "عادةً خلال أسبوعين. نبقى صغارًا عمدًا ليتوفّر فريق خبير قريبًا لا بعد أشهر.",
    faq3_q: "هل نملك الكود والملكية الفكرية؟", faq3_a: "نعم بالكامل. تملك المستودع والبنية وكل الملكية الفكرية من اليوم الأوّل.",
    faq4_q: "أين يقع فريقكم؟", faq4_a: "مقرّنا دبي، ونعمل عن بُعد مع عملاء في المملكة المتحدة وأوروبا وأستراليا وسنغافورة والولايات المتحدة.",
    faq5_q: "ماذا يحدث بعد الإطلاق؟", faq5_a: "نراقب الإصدار ونُصلح ما يظهر ويمكننا البقاء على اشتراك دعم أو تسليم كود موثّق.",
    cta_eyebrow: "ابدأ مشروعًا", cta_h2: "لنُحدّد نطاق إصدارك القادم.",
    cta_p: "أخبرنا بما تريد تحريكه، ونعود إليك بخطة صادقة وجدول وسعر ثابت.",
    cta_b1: "لنتحدّث", cta_b2: "استخدم المُقدّر",
    foot_about: "استوديو برمجيات يبني تطوير متكامل وDevOps وأتمتة ذكاء اصطناعي للفِرق التي تريد إنجازًا متقنًا.",
    foot_addr: "أبراج بحيرات جميرا — دبي، الإمارات",
    foot_email_l: "البريد:", foot_phone_l: "الهاتف:",
    foot_company: "الشركة", fl_about: "من نحن", fl_models: "طرق العمل", fl_work: "أعمالنا", fl_faq: "الأسئلة", fl_contact: "تواصل",
    foot_services: "الخدمات", fs_full: "تطوير متكامل", fs_devops: "DevOps وسحابة", fs_ai: "أتمتة ذكاء", fs_hire: "وظّف مهندسين", fs_qa: "الجودة والإصدار", fs_solutions: "حلول حسب القطاع",
    foot_legal: "القانوني والموارد", fr_terms: "شروط الخدمة", fr_privacy: "سياسة الخصوصية", fr_est: "مُقدّر المشروع",
    foot_recognition: "تقديرات", foot_copy: "© 2026 فايناز تكنولوجيز. جميع الحقوق محفوظة.", lang_label: "English"
  };

  var EN = {};
  var nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach(function (el) { EN[el.getAttribute("data-i18n")] = el.innerHTML; });
  var langLabel = document.getElementById("fx-lang-label");
  EN.lang_label = "العربية";
  var cur = "en";
  function setLang(lang) {
    cur = lang;
    var dict = lang === "ar" ? AR : EN;
    nodes.forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.innerHTML = dict[k];
      else if (EN[k] != null) el.innerHTML = EN[k];
    });
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", lang);
    if (langLabel) langLabel.textContent = lang === "ar" ? AR.lang_label : EN.lang_label;
  }
  var langBtn = document.getElementById("fx-lang");
  if (langBtn) langBtn.addEventListener("click", function () { setLang(cur === "en" ? "ar" : "en"); });

  /* ---------- header scroll + mobile nav ---------- */
  var header = document.getElementById("fx-header");
  if (header) {
    var onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 8); };
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  }
  var burger = document.getElementById("fx-burger");
  var mnav = document.getElementById("fx-mobile-nav");
  if (burger && mnav) {
    burger.addEventListener("click", function () { mnav.classList.toggle("open"); });
    mnav.addEventListener("click", function (e) { if (e.target.tagName === "A") mnav.classList.remove("open"); });
  }

  /* ---------- estimator ---------- */
  var RATE = 85;
  function calc() {
    var base = 0, mult = 1, add = 0;
    document.querySelectorAll('[data-group="type"] .fx-opt[aria-pressed="true"]').forEach(function (b) { base += +b.dataset.cost; });
    document.querySelectorAll('[data-group="platform"] .fx-opt[aria-pressed="true"]').forEach(function (b) { add += +b.dataset.cost; });
    document.querySelectorAll('[data-group="features"] .fx-opt[aria-pressed="true"]').forEach(function (b) { add += +b.dataset.cost; });
    var tl = document.querySelector('[data-group="timeline"] .fx-opt[aria-pressed="true"]');
    if (tl) mult = +tl.dataset.mult;
    var total = (base + add) * mult; if (total <= 0) total = 12000;
    var min = Math.round(total * 0.9 / 500) * 500, max = Math.round(total * 1.25 / 500) * 500;
    var hours = Math.round(total / RATE / 10) * 10;
    var weeks = Math.max(3, Math.round(hours / 60)); if (mult > 1) weeks = Math.max(3, Math.round(weeks * 0.8));
    var team = total > 45000 ? "4–5" : total > 26000 ? "3–4" : "2–3";
    set("fx-est-min", min.toLocaleString("en-US"));
    set("fx-est-max", max.toLocaleString("en-US"));
    set("fx-est-hours", hours.toLocaleString("en-US"));
    set("fx-est-weeks", weeks);
    set("fx-est-team", team);
  }
  function set(id, v) { var el = document.getElementById(id); if (el) el.textContent = v; }
  document.querySelectorAll(".fx-opts").forEach(function (group) {
    var mode = group.dataset.mode;
    group.addEventListener("click", function (e) {
      var btn = e.target.closest(".fx-opt"); if (!btn) return;
      if (mode === "single") {
        group.querySelectorAll(".fx-opt").forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
        btn.setAttribute("aria-pressed", "true");
      } else {
        btn.setAttribute("aria-pressed", btn.getAttribute("aria-pressed") === "true" ? "false" : "true");
      }
      calc();
    });
  });
  if (document.getElementById("fx-est-min")) calc();

  /* ---------- scroll reveal ---------- */
  var reveals = document.querySelectorAll(".fx-reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------- preloader (wall-clock; never traps a backgrounded tab) ---------- */
  var pre = document.getElementById("fx-pre");
  if (pre) {
    var num = document.getElementById("fx-pl-num"), fill = document.getElementById("fx-pl-fill");
    document.body.classList.add("fx-loading");
    var dur = reduce ? 350 : 1500, startTime = Date.now(), done = false;
    var finish = function () {
      if (done) return; done = true;
      if (num) num.textContent = 100; if (fill) fill.style.width = "100%";
      pre.classList.add("done"); document.body.classList.remove("fx-loading");
      setTimeout(function () { pre.style.display = "none"; }, 900);
    };
    var step = function () {
      var p = Math.min(1, (Date.now() - startTime) / dur);
      var val = Math.round((1 - Math.pow(1 - p, 2)) * 100);
      if (num) num.textContent = val; if (fill) fill.style.width = val + "%";
      if (p < 1) requestAnimationFrame(step); else setTimeout(finish, 180);
    };
    requestAnimationFrame(step);
    setTimeout(finish, dur + 1400);
  }
})();
