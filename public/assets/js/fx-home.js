/* Faynaz Technologies — homepage interactions (fx)
   Preloader · scroll reveal · project estimator · mobile nav · EN/AR language toggle. */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- i18n (English is authored in the DOM; Arabic overrides here) ---------- */
  var AR = {
    loading: "نُجهّز تجربتك",
    nav_services: "الخدمات", nav_hire: "وظّف مهندسين", nav_solutions: "الحلول", nav_work: "أعمالنا", nav_insights: "مقالات", nav_about: "من نحن", nav_cta: "لنتحدّث",
    hero_eyebrow: "استوديو برمجيات وDevOps وأتمتة",
    hero_h1a: "برمجيات و", hero_h1b: "DevOps وأتمتة ذكاء اصطناعي", hero_h1c: " — نبنيها ونُشغّلها لك.",
    hero_lead: "وظّف مهندسي DevOps وذكاء اصطناعي وتطوير متكامل كبار — كفريق مخصّص أو كخدمة مُدارة. من الاستراتيجية إلى إصدار موثوق، بدون أعباء الوكالات.",
    hero_cta1: "لنتحدّث", hero_cta2: "قدّر مشروعك",
    hero_meta: "نستقبل مشاريع الربع الثالث — البدء عادةً خلال أسبوعين.",
    hp_build: "بناء", hp_test: "اختبارات آلية", hp_scan: "فحص أمني", hp_deploy: "نشر", hp_note: "هكذا نُطلق — آليًا ومُختبَرًا وموثوقًا.",
    m1: "تطوير متكامل", m2: "DevOps وسحابة", m3: "أتمتة ذكاء اصطناعي", m4: "وكلاء ذكاء", m5: "فرق مخصّصة", m6: "جودة وإصدار",
    trust_label: "التقنيات الحديثة التي نبني ونُطلق بها",
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
    est_q1: "ماذا تبني؟", est_q2: "حجم المشروع", est_q3: "أي منصّات؟", est_q4: "الميزات الأساسية", est_q5: "إضافات للمؤسسات", est_q6: "الجدول الزمني", est_q7: "دعم مستمر؟",
    t_web: "موقع", t_app: "تطبيق ويب", t_mobile: "تطبيق موبايل", t_saas: "منصّة SaaS", t_ai: "ذكاء / أتمتة",
    sc_mvp: "نموذج أولي (MVP)", sc_growth: "مرحلة النمو", sc_ent: "درجة المؤسسات",
    p_web: "ويب", p_ios: "iOS", p_android: "أندرويد",
    f_auth: "حسابات المستخدمين", f_pay: "المدفوعات", f_dash: "لوحة تحكّم", f_api: "تكاملات / API", f_ai: "ميزات ذكاء", f_cms: "إدارة محتوى", f_rt: "وقت حقيقي / محادثة", f_notif: "إشعارات", f_analytics: "تحليلات",
    a_design: "تصميم واجهة جديد", a_compliance: "أمن وامتثال (SOC 2 / HIPAA)", a_multitenant: "بنية متعددة المستأجرين", a_devops: "إعداد سحابة وDevOps",
    tl_std: "قياسي", tl_fast: "مسار سريع", su_no: "ليس الآن", su_yes: "خطة رعاية",
    est_rl: "الاستثمار التقديري", est_hours: "ساعات الهندسة", est_weeks: "مدّة التسليم", est_wk: "أسابيع", est_team: "حجم الفريق", est_care: "رعاية مستمرة", est_mo: "/شهر",
    est_book: "لنتحدّث لتدقيق التقدير", est_note: "نطاق تقديري. احجز مكالمة لعرض سعر ثابت ومُفصّل.", est_back_btn: "رجوع", est_next_btn: "التالي",
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
    out_eyebrow: "ما نُقدّمه", out_h2: "النتائج التي نُهندس من أجلها.",
    out1_h: "إطلاق أسرع بأعطال أقل", out1_p: "CI/CD وسحابة ومراقبة آلية لتُطلق فريقك بتكرار ويتعافى بسرعة عند حدوث خطأ.",
    out2_h: "تقليل العمل اليدوي", out2_p: "أتمتة سير العمل وذكاء اصطناعي عملي يزيل المهام المتكررة ويحرّر فريقك لعمل أعلى قيمة.",
    out3_h: "منتجات تتوسّع", out3_p: "تطبيقات ومنصّات مبنية لتبقى سريعة وقابلة للصيانة مع نمو مستخدميك وميزاتك.",
    com_eyebrow: "التزاماتنا", com_h2: "ما يمكنك الاعتماد عليه — كتابةً.",
    com1_h: "مهندسون كبار فقط", com1_p: "من تقابلهم في أوّل مكالمة هم من يُنفّذون. لا فريق مبتدئ ولا استبدال.",
    com2_h: "نطاق وسعر ثابتان", com2_p: "يُتّفق عليهما بعد اكتشاف قصير، فلا فواتير مفاجئة في منتصف المشروع.",
    com3_h: "تملك كل شيء", com3_p: "الكود والحسابات السحابية والملكية الفكرية لك من اليوم الأوّل. نبني على حساباتك دون تقييد.",
    cred_founded: "تأسّست 2021 · دبي، الإمارات", cred_clutch: "جِدنا على Clutch", cred_linkedin: "تواصل عبر LinkedIn",
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
    foot_company: "الشركة", fl_about: "من نحن", fl_work: "أعمالنا", fl_hire: "وظّف مهندسين", fl_solutions: "الحلول", fl_insights: "مقالات", fl_contact: "تواصل", fs_startups: "للشركات الناشئة",
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
  function sumPressed(group) {
    var s = 0;
    document.querySelectorAll('[data-group="' + group + '"] .fx-opt[aria-pressed="true"]').forEach(function (b) { s += +(b.dataset.cost || 0); });
    return s;
  }
  function multOf(group) {
    var el = document.querySelector('[data-group="' + group + '"] .fx-opt[aria-pressed="true"]');
    return el ? +(el.dataset.mult || 1) : 1;
  }
  function calc() {
    var base = sumPressed("type");
    var add = sumPressed("platform") + sumPressed("features") + sumPressed("addons");
    var scale = multOf("scale"), tmult = multOf("timeline");
    var supEl = document.querySelector('[data-group="support"] .fx-opt[aria-pressed="true"]');
    var support = supEl ? +(supEl.dataset.support || 0) : 0;
    var total = (base + add) * scale * tmult; if (total <= 0) total = 10000;
    var min = Math.round(total * 0.9 / 500) * 500, max = Math.round(total * 1.25 / 500) * 500;
    var hours = Math.round(total / RATE / 10) * 10;
    var weeks = Math.max(3, Math.round(hours / 60));
    if (tmult > 1) weeks = Math.max(3, Math.round(weeks * 0.8));
    if (scale > 1.3) weeks = Math.round(weeks * 1.15);
    var team = total > 60000 ? "5–6" : total > 40000 ? "4–5" : total > 24000 ? "3–4" : "2–3";
    var monthly = support ? Math.max(1500, Math.round(total * 0.08 / 250) * 250) : 0;
    animateNum("fx-est-min", min); animateNum("fx-est-max", max); animateNum("fx-est-hours", hours);
    setText("fx-est-weeks", weeks); setText("fx-est-team", team);
    animateNum("fx-est-care", monthly);
    var careRow = document.getElementById("fx-est-care-row");
    if (careRow) careRow.style.display = support ? "flex" : "none";
  }
  function setText(id, v) { var el = document.getElementById(id); if (el) el.textContent = v; }
  function animateNum(id, to) {
    var el = document.getElementById(id); if (!el) return;
    var from = parseInt((el.textContent || "0").replace(/[^0-9]/g, ""), 10) || 0;
    if (reduce || from === to) { el.textContent = to.toLocaleString("en-US"); return; }
    var start = null, dur = 450;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min(1, (ts - start) / dur);
      var val = Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3)));
      el.textContent = val.toLocaleString("en-US");
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
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

  /* ---------- estimator stepper (one question at a time) ---------- */
  (function () {
    var wrap = document.getElementById("fx-est-steps");
    if (!wrap) return;
    var steps = Array.prototype.slice.call(wrap.querySelectorAll(".fx-est-step"));
    if (!steps.length) return;
    var total = steps.length, idx = 0;
    var bar = document.getElementById("fx-est-bar"),
      cur = document.getElementById("fx-est-cur"),
      tot = document.getElementById("fx-est-total"),
      back = document.getElementById("fx-est-back"),
      next = document.getElementById("fx-est-next"),
      readout = document.querySelector(".fx-readout");
    if (tot) tot.textContent = total;

    function render() {
      steps.forEach(function (s, i) { s.classList.toggle("active", i === idx); });
      if (bar) bar.style.width = ((idx + 1) / total) * 100 + "%";
      if (cur) cur.textContent = idx + 1;
      if (back) back.disabled = idx === 0;
      var lbl = next && next.querySelector(".lbl");
      if (lbl) lbl.textContent = idx === total - 1 ? (curLang === "ar" ? "شاهد التقدير" : "See estimate") : (curLang === "ar" ? "التالي" : "Next");
    }
    function go(n) {
      idx = Math.max(0, Math.min(total - 1, n));
      render();
      steps[idx].scrollIntoView({ block: "nearest" });
    }
    if (back) back.addEventListener("click", function () { go(idx - 1); });
    if (next) next.addEventListener("click", function () {
      if (idx < total - 1) go(idx + 1);
      else if (readout) readout.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    });
    // auto-advance on single-select (skip the last step)
    steps.forEach(function (step, i) {
      var single = step.querySelector('.fx-opts[data-mode="single"]');
      if (single && i < total - 1) {
        single.addEventListener("click", function (e) {
          if (!e.target.closest(".fx-opt")) return;
          setTimeout(function () { if (idx === i) go(i + 1); }, 260);
        });
      }
    });
    render();
  })();

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
  var seen = false;
  try { seen = sessionStorage.getItem("fx-preloaded") === "1"; } catch (e) {}
  if (pre && seen) {
    // Already shown this session — don't tax every page load (protects LCP).
    pre.style.display = "none";
  } else if (pre) {
    try { sessionStorage.setItem("fx-preloaded", "1"); } catch (e) {}
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
