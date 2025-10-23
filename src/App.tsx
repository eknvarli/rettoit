import { useEffect, useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("ana-sayfa");
  const [scrollY, setScrollY] = useState(0);

  const companyData = {
    name: "RettoIT",
    slogan: "Yazılım & Yapay Zeka Çözümleri",
    description: "Küresel teknoloji çözümlerinde sınırları aşan inovasyon",
    kurulus: "2022",
    calisan: "50+",
    ulke: "5+",
    proje: "50+",
    email: "info@rettoit.com",
  };

  const anaHizmetler = [
    {
      id: 1,
      baslik: "Kurumsal Yapay Zeka Çözümleri",
      aciklama: "Yapay zeka destekli kurumsal dönüşüm çözümleriyle iş süreçlerinizi optimize edin.",
      ikon: "🤖",
      ozellikler: ["Makine Öğrenimi Modelleri", "Tahmine Dayalı Analitik", "Doğal Dil İşleme", "Bilgisayarlı Görü"],
      gradient: "from-purple-600 to-blue-600",
    },
    {
      id: 2,
      baslik: "Bulut Altyapı Çözümleri",
      aciklama: "Ölçeklenebilir ve güvenli bulut mimarileri ile dijital altyapınızı güçlendirin.",
      ikon: "☁️",
      ozellikler: ["Çoklu Bulut Stratejisi", "DevOps Uygulamaları", "Konteyner Orchestration", "Serverless Mimari"],
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      id: 3,
      baslik: "Siber Güvenlik Hizmetleri",
      aciklama: "Sıfır güven mimarisi ile kurumsal verilerinizi geleceğin tehditlerine karşı koruyun.",
      ikon: "🛡️",
      ozellikler: ["Tehdit İstihbaratı", "Zero Trust Mimarisi", "Olay Müdahalesi", "Güvenlik Denetimleri"],
      gradient: "from-green-600 to-emerald-600",
    },
    {
      id: 4,
      baslik: "Dijital Dönüşüm Danışmanlığı",
      aciklama: "Geleneksel iş modellerinizi dijital çağa taşıyan kapsamlı dönüşüm stratejileri.",
      ikon: "🚀",
      ozellikler: ["Dijital Strateji", "Süreç Otomasyonu", "Legacy Modernizasyon", "Değişim Yönetimi"],
      gradient: "from-orange-600 to-red-600",
    },
  ];

  const teknolojiYigini = [
    {
      isim: "Yapay Zeka & Makine Öğrenmesi",
      ikon: "🧠",
      aciklama: "TensorFlow, OpenAI, PyTorch, LLM entegrasyonları",
      detay: "Derin öğrenme modelleri ve generative AI çözümleri",
      renk: "from-purple-500 to-blue-500",
      seviye: "İleri Seviye",
    },
    {
      isim: "Bulut Mimarisi & DevOps",
      ikon: "⚡",
      aciklama: "AWS, Azure, Linux, Docker, Kubernetes, CI/CD",
      detay: "Microservices mimarisi ve container orchestration",
      renk: "from-blue-500 to-cyan-500",
      seviye: "Uzman",
    },
    {
      isim: "Full-Stack Yazılım Geliştirme",
      ikon: "💻",
      aciklama: "Django, DRF, Svelte, React, Node.js, TypeScript",
      detay: "Modern web ve mobil uygulama geliştirme",
      renk: "from-green-500 to-emerald-500",
      seviye: "Profesyonel",
    },
    {
      isim: "Kurumsal Siber Güvenlik",
      ikon: "🛡️",
      aciklama: "Penetrasyon testleri, güvenlik denetimleri, tehdit analizi",
      detay: "SQL Injection, XSS, DDoS ve sıfır gün açıklarına karşı koruma",
      renk: "from-red-500 to-orange-500",
      seviye: "Sertifikalı",
    },
  ];

  const referanslar = [
    {
      isim: "aenr11",
      pozisyon: "Freelance Müşteri",
      icerik: "Hızlı, temiz, güvenilir.",
    },
    {
      isim: "fatihacur",
      pozisyon: "Freelance Müşteri",
      icerik: "İkinci defa birlikte çalıştık. Zamanında ve hızlı bir şekilde sorunlarımı giderdi.",
    },
    {
      isim: "tarikkamat",
      pozisyon: "Freelance Müşteri",
      icerik: "Raporlama var, İletişim var, Zamanında teslim var, Verdiğim projede eksiksiz teslim.",
    },
  ];

  const istatistikler = [
    {
      deger: "%99.5",
      etiket: "Müşteri Memnuniyeti",
      aciklama: "Tekrarlayan müşteri oranı",
    },
    {
      deger: "50+",
      etiket: "Küresel Proje",
      aciklama: "5+ ülkede tamamlanan proje",
    },
    {
      deger: "Aktif",
      etiket: "profesyonel takım",
      aciklama: "Kaliteli işçilik, kaliteli iş",
    },
    {
      deger: "%98",
      etiket: "Zamanında Teslimat",
      aciklama: "Proje teslim oranı",
    },
  ];

  const calismaSureci = [
    {
      adim: "01",
      baslik: "Keşif ve Analiz",
      aciklama: "İhtiyaçlarınızı detaylı şekilde analiz ediyor, en uygun çözüm önerilerini sunuyoruz.",
      ikon: "🔍",
    },
    {
      adim: "02",
      baslik: "Tasarım ve Planlama",
      aciklama: "Projenizin mimarisini oluşturuyor, detaylı iş planı ve zaman çizelgesi hazırlıyoruz.",
      ikon: "📐",
    },
    {
      adim: "03",
      baslik: "Geliştirme ve Test",
      aciklama: "En son teknolojilerle geliştirme yapıyor, kapsamlı testlerle kaliteyi garanti ediyoruz.",
      ikon: "⚙️",
    },
    {
      adim: "04",
      baslik: "Teslim ve Destek",
      aciklama: "Projenizi teslim ediyor, sürekli destek ve bakım hizmetleri sunuyoruz.",
      ikon: "🚀",
    },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const initialDarkMode = savedTheme === "dark";
    setDarkMode(initialDarkMode);
    document.documentElement.classList.toggle("dark", initialDarkMode);

    const handleScroll = () => {
      setScrollY(window.scrollY);
      updateActiveSection();
    };

    window.addEventListener("scroll", handleScroll);

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href") || "");
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const updateActiveSection = () => {
    const sections = ["ana-sayfa", "hakkimizda", "hizmetler", "surec", "referanslar", "iletisim"];
    const current = sections.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });
    if (current) setActiveSection(current);
  };

  const getSectionName = (item: string) => {
    switch (item) {
      case "ana-sayfa":
        return "Ana Sayfa";
      case "hakkimizda":
        return "Hakkımızda";
      case "hizmetler":
        return "Hizmetler";
      case "surec":
        return "Süreç";
      case "referanslar":
        return "Referanslar";
      default:
        return "İletişim";
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-500 overflow-x-hidden">
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrollY > 100
            ? "bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl py-3 lg:py-4 shadow-2xl border-b border-gray-200/50"
            : "bg-transparent py-4 lg:py-6"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg lg:shadow-2xl group-hover:scale-105 lg:group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                <img
                  src="https://avatars.githubusercontent.com/u/126869909?s=400&u=36b585b7fbed969c8421307f4ceef66908bf9cd4&v=4"
                  alt="RettoIT Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  {companyData.name}
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 tracking-wider">{companyData.slogan}</p>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {["ana-sayfa", "hakkimizda", "hizmetler", "surec", "referanslar", "iletisim"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 transition-colors duration-300 relative group py-2 uppercase tracking-wider"
                >
                  {getSectionName(item)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-3 lg:space-x-4">
              <button
                style={{ display: "none !important" }}
                onClick={toggleTheme}
                className="p-2 lg:p-3 rounded-xl lg:rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 lg:hover:scale-110 shadow-lg"
              >
                {darkMode ? (
                  <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>

              <a
                href="#iletisim"
                className="hidden sm:flex bg-gradient-to-r from-red-600 to-red-800 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl lg:rounded-2xl font-semibold hover:from-red-700 hover:to-red-900 transition-all duration-300 shadow-xl lg:shadow-2xl hover:shadow-2xl lg:hover:shadow-3xl transform hover:-translate-y-0.5 items-center space-x-2 group text-sm lg:text-base"
              >
                <span>Proje Başlat</span>
                <svg
                  className="w-3 h-3 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
              <div className="flex flex-col space-y-3">
                {["ana-sayfa", "hakkimizda", "hizmetler", "surec", "referanslar", "iletisim"].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-red-600 font-medium transition-colors py-2 uppercase tracking-wider text-sm"
                    onClick={toggleMenu}
                  >
                    {getSectionName(item)}
                  </a>
                ))}
                <a
                  href="#iletisim"
                  className="sm:hidden bg-gradient-to-r from-red-600 to-red-800 text-white px-4 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-red-900 transition-all duration-300 shadow-xl text-center mt-2"
                >
                  Proje Başlat
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section
        id="ana-sayfa"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 lg:pt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 bg-red-50 dark:bg-red-900/20 rounded-full mb-6 lg:mb-8 border border-red-200 dark:border-red-800 shadow-lg">
              <div className="w-2 h-2 bg-red-600 rounded-full mr-2 lg:mr-3 animate-pulse"></div>
              <span className="text-red-700 dark:text-red-300 text-xs lg:text-sm tracking-widest">
                DİJİTAL DÖNÜŞÜMDEKİ GÜVENİLİR ORTAĞINIZ
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 dark:from-white dark:via-red-400 dark:to-white bg-clip-text text-transparent">
                Hayal edin,
              </span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-5xl text-gray-600 dark:text-gray-400 font-light">
                gerçekleştirelim.
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-8 lg:mb-12 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-4">
              {companyData.description}. İşletmenizin geleceğini&nbsp;
              <span className="text-red-600 dark:text-red-400 font-semibold">yapay zeka</span>,&nbsp;
              <span className="text-blue-600 dark:text-blue-400 font-semibold">yazılım</span>&nbsp;
              ve&nbsp;
              <span className="text-green-600 dark:text-green-400 font-semibold">siber güvenlik</span> çözümleriyle
              tasarlıyoruz.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 mb-12 lg:mb-16 px-4">
              <a
                href="#iletisim"
                className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-800 text-white px-8 sm:px-10 lg:px-12 py-4 lg:py-5 rounded-xl lg:rounded-2xl font-semibold text-base lg:text-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 shadow-xl lg:shadow-2xl hover:shadow-2xl lg:hover:shadow-3xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 lg:space-x-3 group"
              >
                <span>Yolculuğunuza Başlayın</span>
                <svg
                  className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 lg:group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              <a
                href="#hizmetler"
                className="w-full sm:w-auto border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 sm:px-10 lg:px-12 py-4 lg:py-5 rounded-xl lg:rounded-2xl font-semibold text-base lg:text-lg hover:border-red-600 hover:text-red-600 transition-all duration-300 flex items-center justify-center space-x-2 lg:space-x-3 group"
              >
                <span>Çözümleri Keşfedin</span>
                <svg
                  className="w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 max-w-2xl lg:max-w-4xl mx-auto px-4">
              {istatistikler.map((istatistik, index) => (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300 p-3 lg:p-0"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-1 lg:mb-2 group-hover:text-red-600 transition-colors">
                    {istatistik.deger}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wider">
                    {istatistik.etiket}
                  </div>
                  <div className="hidden sm:block text-xs text-gray-500 dark:text-gray-500 mt-1">
                    {istatistik.aciklama}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 lg:h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      <section id="hakkimizda" className="py-16 lg:py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-1 lg:px-4 lg:py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-4 lg:mb-6 border border-blue-200 dark:border-blue-800">
                <span className="text-blue-700 dark:text-blue-300 text-xs lg:text-sm tracking-widest">HAKKIMIZDA</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">
                Dijital Geleceği <span className="text-red-600 dark:text-red-400">Tasarlıyoruz</span>
              </h2>

              <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-6 lg:mb-8 leading-relaxed">
                {companyData.kurulus} yılında kurulan RettoIT, ileri teknoloji ile gerçek dünya iş zorlukları arasındaki
                boşluğu kapatmak için basit bir vizyondan doğdu. Bugün, dijital dönüşümde küresel bir güç olarak yerimizi
                aldık.
              </p>

              <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                {[
                  { ikon: "🚀", metin: `${companyData.calisan} Uzman Ekip Üyesi` },
                  { ikon: "🌍", metin: `${companyData.ulke} Ülkede Faaliyet` },
                  { ikon: "💼", metin: `${companyData.proje} Başarılı Proje` },
                  { ikon: "🏆", metin: "Çoklu Sektör Ödülleri ve Tanınırlık" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 lg:space-x-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-100 dark:bg-gray-800 rounded-xl lg:rounded-2xl flex items-center justify-center text-lg lg:text-xl flex-shrink-0">
                      {item.ikon}
                    </div>
                    <span className="text-sm lg:text-base text-gray-700 dark:text-gray-300">{item.metin}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl lg:shadow-2xl border border-gray-200 dark:border-gray-600">
                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                  {teknolojiYigini.map((teknoloji, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-xl lg:rounded-2xl p-4 lg:p-6 text-center group hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700"
                    >
                      <div className="text-2xl lg:text-3xl mb-2 lg:mb-3 group-hover:scale-110 transition-transform">
                        {teknoloji.ikon}
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1 lg:mb-2 text-sm lg:text-base">
                        {teknoloji.isim}
                      </h3>
                      <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">{teknoloji.aciklama}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden lg:block absolute -top-6 -right-6 w-24 h-24 bg-red-500/10 rounded-2xl rotate-12 animate-float"></div>
              <div className="hidden lg:block absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/10 rounded-3xl -rotate-12 animate-float-slow"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="hizmetler" className="py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center px-3 py-1 lg:px-4 lg:py-2 bg-red-50 dark:bg-red-900/20 rounded-full mb-3 lg:mb-4 border border-red-200 dark:border-red-800">
              <span className="text-red-700 dark:text-red-300 text-xs lg:text-sm tracking-widest">
                TEMEL UZMANLIK ALANLARIMIZ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4">
              Kurumsal Sınıf <span className="text-red-600 dark:text-red-400">Çözümler</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl lg:max-w-3xl mx-auto px-4">
              Ölçekte inovasyon ve büyümeyi desteklemek için tasarlanmış kapsamlı teknoloji hizmetleri.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {anaHizmetler.map((hizmet, index) => (
              <div
                key={hizmet.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl lg:shadow-2xl hover:shadow-2xl lg:hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 lg:hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start justify-between mb-4 lg:mb-6">
                  <div
                    className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${hizmet.gradient} rounded-xl lg:rounded-2xl flex items-center justify-center text-xl lg:text-2xl text-white shadow-lg group-hover:scale-105 lg:group-hover:scale-110 transition-transform flex-shrink-0`}
                  >
                    {hizmet.ikon}
                  </div>
                  <div className="text-2xl lg:text-4xl font-bold text-gray-300 dark:text-gray-600 group-hover:text-red-300 transition-colors">
                    0{hizmet.id}
                  </div>
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4 group-hover:text-red-600 transition-colors">
                  {hizmet.baslik}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
                  {hizmet.aciklama}
                </p>

                <ul className="space-y-2 lg:space-y-3">
                  {hizmet.ozellikler.map((ozellik, index) => (
                    <li key={index} className="flex items-center text-gray-700 dark:text-gray-300 text-sm lg:text-base">
                      <svg
                        className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-2 lg:mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {ozellik}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="surec" className="py-16 lg:py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center px-3 py-1 lg:px-4 lg:py-2 bg-purple-50 dark:bg-purple-900/20 rounded-full mb-3 lg:mb-4 border border-purple-200 dark:border-purple-800">
              <span className="text-purple-700 dark:text-purple-300 text-xs lg:text-sm tracking-widest">
                ÇALIŞMA SÜRECİMİZ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4">
              Projelerinizi <span className="text-purple-600 dark:text-purple-400">Başarıya</span> Taşıyoruz
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl lg:max-w-3xl mx-auto px-4">
              Projelerinizi başarıya ulaştırmak için izlediğimiz şeffaf ve verimli çalışma süreci.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {calismaSureci.map((adim, index) => (
              <div key={index} className="relative text-center group">
                {index < calismaSureci.length - 1 && (
                  <div className="hidden lg:block absolute top-12 lg:top-16 left-1/2 w-full h-0.5 bg-gray-300 dark:bg-gray-600 -z-10"></div>
                )}
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-105 lg:group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-xl lg:text-2xl text-white">{adim.ikon}</span>
                </div>
                <div className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 w-6 h-6 lg:w-8 lg:h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-xs lg:text-sm font-bold">
                  {adim.adim}
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-2 lg:mb-3">
                  {adim.baslik}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm lg:text-base">
                  {adim.aciklama}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="referanslar" className="py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center px-3 py-1 lg:px-4 lg:py-2 bg-green-50 dark:bg-green-900/20 rounded-full mb-3 lg:mb-4 border border-green-200 dark:border-green-800">
              <span className="text-green-700 dark:text-green-300 text-xs lg:text-sm tracking-widest">
                MÜŞTERİ BAŞARI HİKAYELERİ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4">
              <span className="text-green-600 dark:text-green-400">Müşteri</span> Değerlerine Önem Veriyoruz
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {referanslar.map((referans, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl lg:shadow-2xl hover:shadow-2xl lg:hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 lg:hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-left justify-left space-x-1 mb-3 lg:mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 lg:mb-6 italic leading-relaxed text-sm lg:text-base">
                  "{referans.icerik}"
                </p>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white text-base lg:text-lg">{referans.isim}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-500">{referans.pozisyon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="iletisim"
        className="py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-red-900 to-purple-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4">
              İşletmenizi <span className="text-red-400">Geliştirmeye</span> Hazır mısınız?
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 max-w-2xl lg:max-w-3xl mx-auto px-4">
              Teknoloji çözümlerimizin dijital evriminizi nasıl ileri taşıyabileceğini konuşalım.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-4xl lg:max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold mb-6 lg:mb-8">İletişime Geçin</h3>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-red-400/30 transition-all duration-500">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      ✉️
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">İletişim</div>
                      <a
                        href={`mailto:${companyData.email}`}
                        className="text-white font-semibold text-lg hover:text-red-300 transition-colors duration-300 block"
                      >
                        {companyData.email}
                      </a>
                      <div className="text-red-400 text-sm font-medium mt-1 flex items-center">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
                        Aktif Destek
                      </div>
                    </div>
                    <div className="text-2xl text-red-400/50 group-hover:text-red-400 transition-colors duration-300">
                      →
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/20">
              <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">Projenizi Başlatın</h3>
              <p className="text-gray-300 mb-6 lg:mb-8 text-sm lg:text-base">
                Uzmanlarımızla ücretsiz bir danışmanlık görüşmesi planlayarak teknoloji ihtiyaçlarınızı keşfedin.
              </p>
              <div className="space-y-3 lg:space-y-4">
                <a
                  href="https://calendly.com/ekiniltervarli/30min"
                  className="w-full bg-white text-gray-900 px-6 lg:px-8 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl lg:shadow-2xl hover:shadow-2xl lg:hover:shadow-3xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 lg:space-x-3 group text-sm lg:text-base"
                >
                  <span>Danışmanlık Planla</span>
                  <svg
                    className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </a>

                <a
                  href="https://bionluk.com/ekinvarli"
                  className="w-full border-2 border-white text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 lg:space-x-3 group text-sm lg:text-base"
                >
                  <span>Portfolyo'yu Görüntüle</span>
                  <svg
                    className="w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 text-white py-8 lg:py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center text-gray-500 text-xs lg:text-sm">
            <p>&copy; 2022 {companyData.name}. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;