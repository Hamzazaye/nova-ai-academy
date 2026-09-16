import { useEffect, useMemo, useState } from "react";
import {
  ArrowDownLeft,
  ArrowLeft,
  ArrowUpLeft,
  BrainCircuit,
  Check,
  ChevronDown,
  Clock3,
  Code2,
  Layers3,
  Linkedin,
  Menu,
  Play,
  Quote,
  Sparkles,
  Star,
  Target,
  UsersRound,
  X,
  Zap,
} from "lucide-react";

type Track = "الكل" | "الأساسيات" | "تطبيقي" | "متقدم";

type Course = {
  id: string;
  title: string;
  description: string;
  category: Exclude<Track, "الكل">;
  level: string;
  duration: string;
  lessons: string;
  accent: string;
  icon: typeof BrainCircuit;
  featured?: boolean;
};

const courses: Course[] = [
  {
    id: "01",
    title: "هندسة البرومبتات",
    description: "حوّل أفكارك إلى أوامر ذكية تصنع نتائج دقيقة وقابلة للتكرار.",
    category: "الأساسيات",
    level: "مبتدئ",
    duration: "4 أسابيع",
    lessons: "18 درسًا",
    accent: "violet",
    icon: Sparkles,
    featured: true,
  },
  {
    id: "02",
    title: "أدوات الذكاء الاصطناعي",
    description: "ابنِ سير عمل أسرع باستخدام أفضل الأدوات الإنتاجية والإبداعية.",
    category: "تطبيقي",
    level: "متوسط",
    duration: "6 أسابيع",
    lessons: "24 درسًا",
    accent: "lime",
    icon: Zap,
  },
  {
    id: "03",
    title: "بناء الوكلاء الذكيين",
    description: "صمّم وكلاء مستقلين يفكرون، يخططون، وينفذون المهام عنك.",
    category: "متقدم",
    level: "متقدم",
    duration: "8 أسابيع",
    lessons: "32 درسًا",
    accent: "cyan",
    icon: BrainCircuit,
  },
  {
    id: "04",
    title: "الذكاء الاصطناعي للأعمال",
    description: "استخدم البيانات والأتمتة لاتخاذ قرارات أذكى وبناء ميزة تنافسية.",
    category: "تطبيقي",
    level: "متوسط",
    duration: "5 أسابيع",
    lessons: "20 درسًا",
    accent: "orange",
    icon: Target,
  },
  {
    id: "05",
    title: "أساسيات تعلم الآلة",
    description: "افهم المنطق خلف النماذج وابنِ أول تجربة تعلم آلة بثقة.",
    category: "الأساسيات",
    level: "مبتدئ",
    duration: "6 أسابيع",
    lessons: "26 درسًا",
    accent: "pink",
    icon: Code2,
  },
  {
    id: "06",
    title: "مختبر الرؤية الحاسوبية",
    description: "من الصورة الخام إلى نموذج يرى، يصنف، ويستخرج المعنى.",
    category: "متقدم",
    level: "متقدم",
    duration: "7 أسابيع",
    lessons: "28 درسًا",
    accent: "blue",
    icon: Layers3,
  },
];

const testimonials = [
  {
    quote: "في أول أسبوع طبّقت ما تعلمته داخل عملي. NOVA لا تشرح التقنية فقط، بل تعلّمك كيف تستخدمها بذكاء.",
    name: "سارة العتيبي",
    role: "قائدة منتج — نمو",
    initials: "سع",
    color: "#b9ff3d",
  },
  {
    quote: "المنهج مكثف وواضح ومليء بالمشاريع. خرجت بملف أعمال حقيقي، وليس مجرد شهادة.",
    name: "عمر الحربي",
    role: "مهندس برمجيات",
    initials: "عه",
    color: "#9d7bff",
  },
  {
    quote: "المدربون يتعاملون مع الذكاء الاصطناعي كأداة تفكير، وهذه النقلة غيّرت طريقة بنائي للمنتجات.",
    name: "نورة السالم",
    role: "مصممة تجربة مستخدم",
    initials: "نس",
    color: "#61e5ff",
  },
];

const faqs = [
  ["هل أحتاج إلى خلفية تقنية؟", "أبدًا. تبدأ مساراتنا من الصفر وتتصاعد تدريجيًا، مع مسار واضح لكل مستوى وتجارب عملية بسيطة في البداية."],
  ["كيف تتم الدراسة؟", "تتعلم عبر دروس قصيرة مسجلة، جلسات مباشرة أسبوعية، مختبرات تطبيقية، ومجتمع مغلق للدعم والمراجعة."],
  ["هل أحصل على شهادة؟", "نعم، تحصل على شهادة إتمام موثقة من NOVA بعد إنهاء المشروع النهائي ومتطلبات المسار."],
  ["هل يمكنني التعلم بجانب عملي؟", "صُممت المسارات بمرونة لتناسب الموظفين والطلاب، بمعدل 3 إلى 5 ساعات أسبوعيًا."],
];

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function Logo() {
  return (
    <a className="brand" href="#top" aria-label="NOVA AI Academy">
      <span className="brand-mark"><span /><span /><span /></span>
      <span className="brand-name">NOVA<span>AI</span></span>
    </a>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow"><span className="eyebrow-dot" />{children}</div>;
}

export default function Home() {
  useReveal();
  const [activeTrack, setActiveTrack] = useState<Track>("الكل");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [openFaq, setOpenFaq] = useState(0);
  const [testimonial, setTestimonial] = useState(0);
  const [email, setEmail] = useState("");

  const filteredCourses = useMemo(
    () => activeTrack === "الكل" ? courses : courses.filter((course) => course.category === activeTrack),
    [activeTrack],
  );

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 3200);
  };

  const handleSubscribe = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email.trim()) return;
    setEmail("");
    showToast("تم الاشتراك — نراك في النشرة القادمة ✦");
  };

  return (
    <div className="site-shell" id="top">
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <div className="nav-wrap">
          <Logo />
          <nav className={mobileOpen ? "main-nav mobile-open" : "main-nav"} aria-label="التنقل الرئيسي">
            <a href="#programs" onClick={() => setMobileOpen(false)}>المسارات</a>
            <a href="#method" onClick={() => setMobileOpen(false)}>منهجنا</a>
            <a href="#community" onClick={() => setMobileOpen(false)}>المجتمع</a>
            <a href="#faq" onClick={() => setMobileOpen(false)}>الأسئلة الشائعة</a>
          </nav>
          <div className="nav-actions">
            <button className="text-button" onClick={() => showToast("قريبًا: تسجيل الدخول إلى مساحة الطالب")}>دخول</button>
            <button className="nav-cta" onClick={() => setModalOpen(true)}>ابدأ التعلم <ArrowLeft size={16} /></button>
            <button className="mobile-toggle" aria-label="فتح القائمة" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section section-pad">
          <div className="hero-bg" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy reveal">
              <div className="live-pill"><span className="live-dot" /> دفعة أكتوبر مفتوحة الآن <ArrowUpLeft size={14} /></div>
              <h1>تعلم الذكاء الاصطناعي.<br /><em>اصنع القادم.</em></h1>
              <p className="hero-lead">أكاديمية عملية تبني مهاراتك من الفكرة الأولى إلى مشروع حقيقي — بإيقاعك، وبصحبة مجتمع يؤمن بالمستقبل مثلك.</p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={() => document.querySelector("#programs")?.scrollIntoView({ behavior: "smooth" })}>استكشف المسارات <ArrowLeft size={17} /></button>
                <button className="button button-ghost" onClick={() => showToast("سنرسل لك جولة تعريفية قصيرة قريبًا")}> <span className="play-icon"><Play size={12} fill="currentColor" /></span> شاهد كيف نعلّم</button>
              </div>
              <div className="hero-trust">
                <div className="avatar-stack"><span>س</span><span>م</span><span>ع</span><span>ن</span></div>
                <div><strong>+4,800</strong><small>متعلم يثقون بنا</small></div>
                <div className="trust-stars"><div><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /></div><small>4.9 / 5 تقييم</small></div>
              </div>
            </div>
            <div className="hero-visual reveal reveal-delay-2">
              <div className="hero-image-card">
                <img src="./nova-hero.jpg" alt="شبكة عصبية مضيئة تمثل مستقبل الذكاء الاصطناعي" />
                <div className="image-overlay" />
                <div className="floating-chip chip-top"><span className="chip-icon"><BrainCircuit size={14} /></span><span><strong>AI LAB</strong><small>أفكار تتحول</small></span></div>
                <div className="floating-chip chip-bottom"><span className="metric-dot" /><span><strong>+72%</strong><small>نمو في المهارات</small></span><ArrowUpLeft size={16} /></div>
                <div className="visual-caption"><span>01</span><span>من الفضول إلى التأثير</span><i /></div>
              </div>
              <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
            </div>
          </div>
          <div className="hero-scroll"><span>مرر لاكتشاف المزيد</span><ArrowDownLeft size={16} /></div>
        </section>

        <section className="logo-strip section-pad-sm reveal" aria-label="شركاء المجتمع">
          <div className="container logo-strip-inner">
            <span className="strip-label">يتعلم معنا أفراد من</span>
            <div className="logo-word">MISK<span>↗</span></div><div className="logo-word">stc<span>cloud</span></div><div className="logo-word mono">SDAIA</div><div className="logo-word serif">إثراء</div><div className="logo-word">Salla<span className="salla-dot">•</span></div>
          </div>
        </section>

        <section className="programs-section section-pad" id="programs">
          <div className="container">
            <div className="section-heading reveal"><div><SectionEyebrow>مسارات مصممة لتصنع فرقًا</SectionEyebrow><h2>لا تتعلم الأداة.<br /><span>تعلم كيف تفكر.</span></h2></div><div className="heading-side"><p>من أول سطر برومبت إلى بناء نظام ذكي كامل. اختر نقطة انطلاقك، ودع الباقي علينا.</p><a className="arrow-link" href="#method">اكتشف منهجنا <ArrowLeft size={16} /></a></div></div>
            <div className="track-tabs reveal"><span className="tab-label">تصفية المسارات</span>{(["الكل", "الأساسيات", "تطبيقي", "متقدم"] as Track[]).map((track) => <button key={track} className={activeTrack === track ? "active" : ""} onClick={() => setActiveTrack(track)}>{track}</button>)}</div>
            <div className="courses-grid">
              {filteredCourses.map((course, index) => {
                const Icon = course.icon;
                return <article key={course.id} className={`course-card ${course.accent} reveal`} style={{ "--delay": `${index * 55}ms` } as React.CSSProperties}>
                  {course.featured && <div className="featured-label"><Sparkles size={12} /> الأكثر طلبًا</div>}
                  <div className="course-top"><span className="course-number">{course.id}</span><span className="course-icon"><Icon size={21} /></span></div>
                  <div className="course-body"><div className="course-meta"><span>{course.category}</span><i /> <span>{course.level}</span></div><h3>{course.title}</h3><p>{course.description}</p></div>
                  <div className="course-footer"><span><Clock3 size={14} /> {course.duration}</span><span><Layers3 size={14} /> {course.lessons}</span><button aria-label={`عرض ${course.title}`} onClick={() => setModalOpen(true)}><ArrowUpLeft size={17} /></button></div>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section className="method-section section-pad" id="method">
          <div className="container method-layout">
            <div className="method-visual reveal"><div className="method-number">02</div><div className="method-circle circle-a" /><div className="method-circle circle-b" /><div className="method-core"><BrainCircuit size={58} strokeWidth={1.2} /><span>BUILD<br />WITH AI</span></div><div className="method-tag tag-a">تعلم</div><div className="method-tag tag-b">طبّق</div><div className="method-tag tag-c">توسع</div><div className="method-bottom-label"><span className="green-pulse" /> منهج مبني على المشاريع</div></div>
            <div className="method-copy reveal reveal-delay-1"><SectionEyebrow>لماذا NOVA؟</SectionEyebrow><h2>المعرفة وحدها<br /><em>لا تكفي.</em></h2><p>نؤمن أن أفضل طريقة لفهم الذكاء الاصطناعي هي أن تستخدمه لصنع شيء مهم بالنسبة لك. لذلك صممنا تجربة تجمع بين الوضوح، التطبيق، والمجتمع.</p><div className="principles"><div><span className="principle-icon"><Target size={18} /></span><div><strong>مسار واضح</strong><small>من أساسيات التفكير إلى بناء حلول متقدمة.</small></div></div><div><span className="principle-icon"><Code2 size={18} /></span><div><strong>مشاريع حقيقية</strong><small>تخرج بملف أعمال يعكس قدراتك فعلًا.</small></div></div><div><span className="principle-icon"><UsersRound size={18} /></span><div><strong>مجتمع داعم</strong><small>تتعلم أسرع حين لا تتعلم وحدك.</small></div></div></div><button className="arrow-link solid-link" onClick={() => setModalOpen(true)}>انضم إلى الدفعة القادمة <ArrowLeft size={16} /></button></div>
          </div>
        </section>

        <section className="stats-section section-pad-sm" id="community">
          <div className="container stats-grid"><div className="stat reveal"><strong>4.9<span>/5</span></strong><p>متوسط رضا المتعلمين</p></div><div className="stat reveal reveal-delay-1"><strong>+4.8K</strong><p>متعلم في المجتمع</p></div><div className="stat reveal reveal-delay-2"><strong>86<span>%</span></strong><p>أكملوا مشروعهم الأول</p></div><div className="stat reveal reveal-delay-3"><strong>24</strong><p>خبيرًا ومدربًا</p></div></div>
        </section>

        <section className="testimonial-section section-pad">
          <div className="container testimonial-layout"><div className="testimonial-intro reveal"><SectionEyebrow>قصص من المجتمع</SectionEyebrow><h2>خطوتك التالية<br /><em>تبدأ هنا.</em></h2><p>لا نعدك بطريق مختصر. نعدك بأن يكون طريقًا يستحق.</p><div className="testimonial-controls"><button aria-label="السابق" onClick={() => setTestimonial((testimonial - 1 + testimonials.length) % testimonials.length)}><ArrowRightIcon /></button><span>0{testimonial + 1} <i /> 0{testimonials.length}</span><button aria-label="التالي" onClick={() => setTestimonial((testimonial + 1) % testimonials.length)}><ArrowLeft size={17} /></button></div></div><div className="quote-card reveal reveal-delay-2"><Quote size={33} className="quote-mark" /><div className="quote-stars"><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /></div><blockquote>“{testimonials[testimonial].quote}”</blockquote><div className="quote-author"><span style={{ background: testimonials[testimonial].color }}>{testimonials[testimonial].initials}</span><div><strong>{testimonials[testimonial].name}</strong><small>{testimonials[testimonial].role}</small></div><Linkedin size={16} /></div></div></div>
        </section>

        <section className="faq-section section-pad" id="faq"><div className="container faq-layout"><div className="faq-heading reveal"><SectionEyebrow>أسئلة في بالك؟</SectionEyebrow><h2>كل ما تحتاج<br /><span>أن تعرفه.</span></h2><p>وإن لم تجد إجابتك، فريقنا على بعد رسالة واحدة.</p><a className="arrow-link" href="mailto:hello@nova-ai.academy">تحدث مع الفريق <ArrowLeft size={16} /></a></div><div className="faq-list reveal reveal-delay-1">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{question}</span><ChevronDown size={18} /></button><div className="faq-answer"><p>{answer}</p></div></div>)}</div></div></section>

        <section className="join-section section-pad"><div className="container join-card reveal"><div className="join-shape shape-one" /><div className="join-shape shape-two" /><SectionEyebrow>المستقبل لا ينتظر</SectionEyebrow><h2>هل أنت مستعد<br /><em>لصنعه؟</em></h2><p>احجز مكانك في الدفعة القادمة وابدأ ببناء مهارة ستبقى معك.</p><button className="button button-lime" onClick={() => setModalOpen(true)}>احجز مقعدك الآن <ArrowLeft size={17} /></button><span className="join-note">لا توجد بطاقة ائتمانية مطلوبة · إلغاء في أي وقت</span></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><div><Logo /><p>نحوّل فضولك إلى قدرة.<br />ونحوّل قدرتك إلى أثر.</p></div><div className="footer-links"><div><strong>استكشف</strong><a href="#programs">المسارات</a><a href="#method">منهجنا</a><a href="#community">المجتمع</a></div><div><strong>تواصل</strong><a href="mailto:hello@nova-ai.academy">البريد الإلكتروني</a><a href="#faq">مركز المساعدة</a><a href="#top">لينكدإن</a></div><div className="newsletter"><strong>نشرة NOVA</strong><p>أفكار ذكية، مرة واحدة أسبوعيًا.</p><form onSubmit={handleSubscribe}><input type="email" placeholder="بريدك الإلكتروني" aria-label="بريدك الإلكتروني" value={email} onChange={(event) => setEmail(event.target.value)} required /><button aria-label="الاشتراك"><ArrowLeft size={16} /></button></form></div></div></div><div className="container footer-bottom"><span>© 2024 NOVA AI Academy</span><span>صُنع بشغف للمستقبل <Sparkles size={13} /></span><span>الرياض · السعودية</span></div></footer>

      {modalOpen && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setModalOpen(false)}><div className="signup-modal" role="dialog" aria-modal="true" aria-labelledby="signup-title"><button className="modal-close" onClick={() => setModalOpen(false)} aria-label="إغلاق"><X size={18} /></button><span className="modal-kicker"><Sparkles size={14} /> دفعة أكتوبر 2024</span><h2 id="signup-title">ابدأ رحلتك<br /><em>نحو القادم.</em></h2><p>اترك بياناتك وسيتواصل معك مستشار التعلم خلال 24 ساعة.</p><form onSubmit={(event) => { event.preventDefault(); setModalOpen(false); showToast("تم استلام طلبك — سنتواصل معك قريبًا ✦"); }}><input placeholder="الاسم الكامل" required /><input type="email" placeholder="البريد الإلكتروني" required /><select defaultValue=""><option value="" disabled>اختر المسار المفضل</option><option>هندسة البرومبتات</option><option>أدوات الذكاء الاصطناعي</option><option>بناء الوكلاء الذكيين</option></select><button className="button button-primary" type="submit">أرسل الطلب <ArrowLeft size={17} /></button></form><small>بالإرسال أنت توافق على سياسة الخصوصية الخاصة بنا.</small></div></div>}
      {toast && <div className="toast"><Check size={16} /> {toast}</div>}
    </div>
  );
}

function ArrowRightIcon() { return <ArrowLeft size={17} className="arrow-right" />; }
