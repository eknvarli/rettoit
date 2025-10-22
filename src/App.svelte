<script>
    import { onMount } from "svelte";
    import { fade, slide, scale } from "svelte/transition";

    let darkMode = false;
    let isMenuOpen = false;
    let activeSection = "ana-sayfa";
    let scrollY = 0;

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
            aciklama:
                "Yapay zeka destekli kurumsal dönüşüm çözümleriyle iş süreçlerinizi optimize edin.",
            ikon: "🤖",
            ozellikler: [
                "Makine Öğrenimi Modelleri",
                "Tahmine Dayalı Analitik",
                "Doğal Dil İşleme",
                "Bilgisayarlı Görü",
            ],
            gradient: "from-purple-600 to-blue-600",
        },
        {
            id: 2,
            baslik: "Bulut Altyapı Çözümleri",
            aciklama:
                "Ölçeklenebilir ve güvenli bulut mimarileri ile dijital altyapınızı güçlendirin.",
            ikon: "☁️",
            ozellikler: [
                "Çoklu Bulut Stratejisi",
                "DevOps Uygulamaları",
                "Konteyner Orchestration",
                "Serverless Mimari",
            ],
            gradient: "from-blue-600 to-cyan-600",
        },
        {
            id: 3,
            baslik: "Siber Güvenlik Hizmetleri",
            aciklama:
                "Sıfır güven mimarisi ile kurumsal verilerinizi geleceğin tehditlerine karşı koruyun.",
            ikon: "🛡️",
            ozellikler: [
                "Tehdit İstihbaratı",
                "Zero Trust Mimarisi",
                "Olay Müdahalesi",
                "Güvenlik Denetimleri",
            ],
            gradient: "from-green-600 to-emerald-600",
        },
        {
            id: 4,
            baslik: "Dijital Dönüşüm Danışmanlığı",
            aciklama:
                "Geleneksel iş modellerinizi dijital çağa taşıyan kapsamlı dönüşüm stratejileri.",
            ikon: "🚀",
            ozellikler: [
                "Dijital Strateji",
                "Süreç Otomasyonu",
                "Legacy Modernizasyon",
                "Değişim Yönetimi",
            ],
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
            aciklama:
                "Penetrasyon testleri, güvenlik denetimleri, tehdit analizi",
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
            aciklama:
                "İhtiyaçlarınızı detaylı şekilde analiz ediyor, en uygun çözüm önerilerini sunuyoruz.",
            ikon: "🔍",
        },
        {
            adim: "02",
            baslik: "Tasarım ve Planlama",
            aciklama:
                "Projenizin mimarisini oluşturuyor, detaylı iş planı ve zaman çizelgesi hazırlıyoruz.",
            ikon: "📐",
        },
        {
            adim: "03",
            baslik: "Geliştirme ve Test",
            aciklama:
                "En son teknolojilerle geliştirme yapıyor, kapsamlı testlerle kaliteyi garanti ediyoruz.",
            ikon: "⚙️",
        },
        {
            adim: "04",
            baslik: "Teslim ve Destek",
            aciklama:
                "Projenizi teslim ediyor, sürekli destek ve bakım hizmetleri sunuyoruz.",
            ikon: "🚀",
        },
    ];

    onMount(() => {
        const savedTheme = localStorage.getItem("theme");
        darkMode = savedTheme === "dark";
        document.documentElement.classList.toggle("dark", darkMode);

        const handleScroll = () => {
            scrollY = window.scrollY;
            updateActiveSection();
        };

        window.addEventListener("scroll", handleScroll);

        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                const target = document.querySelector(
                    this.getAttribute("href"),
                );
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
    });

    function toggleTheme() {
        darkMode = !darkMode;
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function updateActiveSection() {
        const sections = [
            "ana-sayfa",
            "hakkimizda",
            "hizmetler",
            "surec",
            "referanslar",
            "iletisim",
        ];
        const current = sections.find((section) => {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >= 100;
            }
            return false;
        });
        if (current) activeSection = current;
    }
</script>

<svelte:head>
    <title
        >RettoIT - Dijital dönüşümde güvenilir ortağınız</title
    >
    <meta
        name="description"
        content="RettoIT, yapay zeka, bulut altyapı, siber güvenlik ve dijital dönüşüm alanlarında kurumsal çözümler sunan lider teknoloji firmasıdır."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
    />
    <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<div
    class="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-500 overflow-x-hidden"
>
    <nav
        class="fixed w-full z-50 transition-all duration-500 {scrollY > 100
            ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl py-3 lg:py-4 shadow-2xl border-b border-gray-200/50'
            : 'bg-transparent py-4 lg:py-6'}"
    >
        <div class="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div class="flex justify-between items-center">
                <div class="flex items-center space-x-3 group cursor-pointer">
                    <div
                        class="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg lg:shadow-2xl group-hover:scale-105 lg:group-hover:scale-110 transition-transform duration-300 overflow-hidden"
                    >
                        <img
                            src="https://avatars.githubusercontent.com/u/126869909?s=400&u=36b585b7fbed969c8421307f4ceef66908bf9cd4&v=4"
                            alt="RettoIT Logo"
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <div class="hidden sm:block">
                        <h1
                            class="text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
                        >
                            {companyData.name}
                        </h1>
                        <p
                            class="text-xs text-gray-500 dark:text-gray-400 tracking-wider"
                        >
                            {companyData.slogan}
                        </p>
                    </div>
                </div>

                <div class="hidden lg:flex items-center space-x-6 xl:space-x-8">
                    {#each ["ana-sayfa", "hakkimizda", "hizmetler", "surec", "referanslar", "iletisim"] as item}
                        <a
                            href="#{item}"
                            class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 transition-colors duration-300 relative group py-2 uppercase tracking-wider"
                        >
                            {#if item === "ana-sayfa"}
                                Ana Sayfa
                            {:else if item === "hakkimizda"}
                                Hakkımızda
                            {:else if item === "hizmetler"}
                                Hizmetler
                            {:else if item === "surec"}
                                Süreç
                            {:else if item === "referanslar"}
                                Referanslar
                            {:else}
                                İletişim
                            {/if}
                            <span
                                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"
                            ></span>
                        </a>
                    {/each}
                </div>

                <div class="flex items-center space-x-3 lg:space-x-4">
                    <button
                        style="display: none !important;"
                        on:click={toggleTheme}
                        class="p-2 lg:p-3 rounded-xl lg:rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 lg:hover:scale-110 shadow-lg"
                    >
                        {#if darkMode}
                            <svg
                                class="w-4 h-4 lg:w-5 lg:h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            </svg>
                        {:else}
                            <svg
                                class="w-4 h-4 lg:w-5 lg:h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                            </svg>
                        {/if}
                    </button>

                    <a
                        href="#iletisim"
                        class="hidden sm:flex bg-gradient-to-r from-red-600 to-red-800 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl lg:rounded-2xl font-semibold hover:from-red-700 hover:to-red-900 transition-all duration-300 shadow-xl lg:shadow-2xl hover:shadow-2xl lg:hover:shadow-3xl transform hover:-translate-y-0.5 items-center space-x-2 group text-sm lg:text-base"
                    >
                        <span>Proje Başlat</span>
                        <svg
                            class="w-3 h-3 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </a>

                    <button
                        on:click={toggleMenu}
                        class="lg:hidden p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    >
                        <svg
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {#if isMenuOpen}
                <div
                    class="lg:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-800"
                    in:fade
                >
                    <div class="flex flex-col space-y-3">
                        {#each ["ana-sayfa", "hakkimizda", "hizmetler", "surec", "referanslar", "iletisim"] as item}
                            <a
                                href="#{item}"
                                class="text-gray-700 dark:text-gray-300 hover:text-red-600 font-medium transition-colors py-2 uppercase tracking-wider text-sm"
                                on:click={toggleMenu}
                            >
                                {#if item === "ana-sayfa"}
                                    Ana Sayfa
                                {:else if item === "hakkimizda"}
                                    Hakkımızda
                                {:else if item === "hizmetler"}
                                    Hizmetler
                                {:else if item === "surec"}
                                    Süreç
                                {:else if item === "referanslar"}
                                    Referanslar
                                {:else}
                                    İletişim
                                {/if}
                            </a>
                        {/each}
                        <a
                            href="#iletisim"
                            class="sm:hidden bg-gradient-to-r from-red-600 to-red-800 text-white px-4 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-red-900 transition-all duration-300 shadow-xl text-center mt-2"
                        >
                            Proje Başlat
                        </a>
                    </div>
                </div>
            {/if}
        </div>
    </nav>

    <section
        id="ana-sayfa"
        class="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 lg:pt-20"
    >
        <div
            class="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/20"
        ></div>
        <div
            class="absolute top-1/4 left-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse"
        ></div>
        <div
            class="absolute bottom-1/4 right-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"
        ></div>

        <div class="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
            <div class="text-center">
                <div
                    class="inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 bg-red-50 dark:bg-red-900/20 rounded-full mb-6 lg:mb-8 border border-red-200 dark:border-red-800 shadow-lg"
                    in:slide
                >
                    <div
                        class="w-2 h-2 bg-red-600 rounded-full mr-2 lg:mr-3 animate-pulse"
                    ></div>
                    <span
                        class="text-red-700 dark:text-red-300 text-xs lg:text-sm tracking-widest"
                        >DİJİTAL DÖNÜŞÜMDEKİ GÜVENİLİR ORTAĞINIZ</span
                    >
                </div>

                <h1
                    class="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8 leading-tight"
                    in:fade={{ delay: 200 }}
                >
                    <span
                        class="bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 dark:from-white dark:via-red-400 dark:to-white bg-clip-text text-transparent"
                    >
                        Hayal edin,
                    </span>
                    <br />
                    <span
                        class="text-2xl sm:text-3xl lg:text-5xl text-gray-600 dark:text-gray-400 font-light"
                    >
                        gerçekleştirelim.
                    </span>
                </h1>

                <p
                    class="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-8 lg:mb-12 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-4"
                    in:fade={{ delay: 400 }}
                >
                    {companyData.description}. İşletmenizin geleceğini
                    <span class="text-red-600 dark:text-red-400 font-semibold"
                        >yapay zeka</span
                    >,
                    <span class="text-blue-600 dark:text-blue-400 font-semibold"
                        >yazılım</span
                    >
                    ve
                    <span
                        class="text-green-600 dark:text-green-400 font-semibold"
                        >siber güvenlik</span
                    > çözümleriyle tasarlıyoruz.
                </p>

                <div
                    class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 mb-12 lg:mb-16 px-4"
                    in:fade={{ delay: 600 }}
                >
                    <a
                        href="#iletisim"
                        class="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-800 text-white px-8 sm:px-10 lg:px-12 py-4 lg:py-5 rounded-xl lg:rounded-2xl font-semibold text-base lg:text-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 shadow-xl lg:shadow-2xl hover:shadow-2xl lg:hover:shadow-3xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 lg:space-x-3 group"
                    >
                        <span>Yolculuğunuza Başlayın</span>
                        <svg
                            class="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 lg:group-hover:translate-x-2 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </a>

                    <a
                        href="#hizmetler"
                        class="w-full sm:w-auto border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 sm:px-10 lg:px-12 py-4 lg:py-5 rounded-xl lg:rounded-2xl font-semibold text-base lg:text-lg hover:border-red-600 hover:text-red-600 transition-all duration-300 flex items-center justify-center space-x-2 lg:space-x-3 group"
                    >
                        <span>Çözümleri Keşfedin</span>
                        <svg
                            class="w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </a>
                </div>

                <div
                    class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 max-w-2xl lg:max-w-4xl mx-auto px-4"
                    in:fade={{ delay: 800 }}
                >
                    {#each istatistikler as istatistik}
                        <div
                            class="text-center group hover:scale-105 transition-transform duration-300 p-3 lg:p-0"
                        >
                            <div
                                class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-1 lg:mb-2 group-hover:text-red-600 transition-colors"
                            >
                                {istatistik.deger}
                            </div>
                            <div
                                class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wider"
                            >
                                {istatistik.etiket}
                            </div>
                            <div
                                class="hidden sm:block text-xs text-gray-500 dark:text-gray-500 mt-1"
                            >
                                {istatistik.aciklama}
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>

        <div
            class="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
            <div
                class="w-5 h-8 lg:w-6 lg:h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
            >
                <div
                    class="w-1 h-3 lg:h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
                ></div>
            </div>
        </div>
    </section>

    <section
        id="hakkimizda"
        class="py-16 lg:py-20 bg-white dark:bg-gray-950 relative overflow-hidden"
    >
        <div class="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
                <div class="order-2 lg:order-1" in:slide={{ delay: 200 }}>
                    <div
                        class="inline-flex items-center px-3 py-1 lg:px-4 lg:py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-4 lg:mb-6 border border-blue-200 dark:border-blue-800"
                    >
                        <span
                            class="text-blue-700 dark:text-blue-300 text-xs lg:text-sm tracking-widest"
                            >HAKKIMIZDA</span
                        >
                    </div>

                    <h2
                        class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6"
                    >
                        Dijital Geleceği <span
                            class="text-red-600 dark:text-red-400"
                            >Tasarlıyoruz</span
                        >
                    </h2>

                    <p
                        class="text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-6 lg:mb-8 leading-relaxed"
                    >
                        {companyData.kurulus} yılında kurulan RettoIT, ileri teknoloji
                        ile gerçek dünya iş zorlukları arasındaki boşluğu kapatmak
                        için basit bir vizyondan doğdu. Bugün, dijital dönüşümde
                        küresel bir güç olarak yerimizi aldık.
                    </p>

                    <div class="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                        {#each [{ ikon: "🚀", metin: `${companyData.calisan} Uzman Ekip Üyesi` }, { ikon: "🌍", metin: `${companyData.ulke} Ülkede Faaliyet` }, { ikon: "💼", metin: `${companyData.proje}+ Başarılı Proje` }, { ikon: "🏆", metin: "Çoklu Sektör Ödülleri ve Tanınırlık" }] as item}
                            <div
                                class="flex items-center space-x-3 lg:space-x-4"
                            >
                                <div
                                    class="w-10 h-10 lg:w-12 lg:h-12 bg-gray-100 dark:bg-gray-800 rounded-xl lg:rounded-2xl flex items-center justify-center text-lg lg:text-xl flex-shrink-0"
                                >
                                    {item.ikon}
                                </div>
                                <span
                                    class="text-sm lg:text-base text-gray-700 dark:text-gray-300"
                                    >{item.metin}</span
                                >
                            </div>
                        {/each}
                    </div>
                </div>

                <div
                    class="order-1 lg:order-2 relative"
                    in:slide={{ delay: 400 }}
                >
                    <div
                        class="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl lg:shadow-2xl border border-gray-200 dark:border-gray-600"
                    >
                        <div class="grid grid-cols-2 gap-4 lg:gap-6">
                            {#each teknolojiYigini as teknoloji}
                                <div
                                    class="bg-white dark:bg-gray-800 rounded-xl lg:rounded-2xl p-4 lg:p-6 text-center group hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700"
                                >
                                    <div
                                        class="text-2xl lg:text-3xl mb-2 lg:mb-3 group-hover:scale-110 transition-transform"
                                    >
                                        {teknoloji.ikon}
                                    </div>
                                    <h3
                                        class="font-bold text-gray-900 dark:text-white mb-1 lg:mb-2 text-sm lg:text-base"
                                    >
                                        {teknoloji.isim}
                                    </h3>
                                    <p
                                        class="text-xs lg:text-sm text-gray-600 dark:text-gray-400"
                                    >
                                        {teknoloji.aciklama}
                                    </p>
                                </div>
                            {/each}
                        </div>
                    </div>

                    <div
                        class="hidden lg:block absolute -top-6 -right-6 w-24 h-24 bg-red-500/10 rounded-2xl rotate-12 animate-float"
                    ></div>
                    <div
                        class="hidden lg:block absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/10 rounded-3xl -rotate-12 animate-float-slow"
                    ></div>
                </div>
            </div>
        </div>
    </section>

    <section
        id="hizmetler"
        class="py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
        <div class="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div class="text-center mb-12 lg:mb-16">
                <div
                    class="inline-flex items-center px-3 py-1 lg:px-4 lg:py-2 bg-red-50 dark:bg-red-900/20 rounded-full mb-3 lg:mb-4 border border-red-200 dark:border-red-800"
                >
                    <span
                        class="text-red-700 dark:text-red-300 text-xs lg:text-sm tracking-widest"
                        >TEMEL UZMANLIK ALANLARIMIZ</span
                    >
                </div>
                <h2
                    class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4"
                >
                    Kurumsal Sınıf <span class="text-red-600 dark:text-red-400"
                        >Çözümler</span
                    >
                </h2>
                <p
                    class="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl lg:max-w-3xl mx-auto px-4"
                >
                    Ölçekte inovasyon ve büyümeyi desteklemek için tasarlanmış
                    kapsamlı teknoloji hizmetleri.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {#each anaHizmetler as hizmet, index}
                    <div
                        class="group bg-white dark:bg-gray-800 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl lg:shadow-2xl hover:shadow-2xl lg:hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 lg:hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                        in:slide={{ delay: index * 200 }}
                    >
                        <div
                            class="flex items-start justify-between mb-4 lg:mb-6"
                        >
                            <div
                                class="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br {hizmet.gradient} rounded-xl lg:rounded-2xl flex items-center justify-center text-xl lg:text-2xl text-white shadow-lg group-hover:scale-105 lg:group-hover:scale-110 transition-transform flex-shrink-0"
                            >
                                {hizmet.ikon}
                            </div>
                            <div
                                class="text-2xl lg:text-4xl font-bold text-gray-300 dark:text-gray-600 group-hover:text-red-300 transition-colors"
                            >
                                0{hizmet.id}
                            </div>
                        </div>

                        <h3
                            class="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4 group-hover:text-red-600 transition-colors"
                        >
                            {hizmet.baslik}
                        </h3>

                        <p
                            class="text-gray-600 dark:text-gray-400 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base"
                        >
                            {hizmet.aciklama}
                        </p>

                        <ul class="space-y-2 lg:space-y-3">
                            {#each hizmet.ozellikler as ozellik}
                                <li
                                    class="flex items-center text-gray-700 dark:text-gray-300 text-sm lg:text-base"
                                >
                                    <svg
                                        class="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-2 lg:mr-3 flex-shrink-0"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    {ozellik}
                                </li>
                            {/each}
                        </ul>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <section
        id="surec"
        class="py-16 lg:py-20 bg-white dark:bg-gray-950 relative overflow-hidden"
    >
        <div class="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div class="text-center mb-12 lg:mb-16">
                <div
                    class="inline-flex items-center px-3 py-1 lg:px-4 lg:py-2 bg-purple-50 dark:bg-purple-900/20 rounded-full mb-3 lg:mb-4 border border-purple-200 dark:border-purple-800"
                >
                    <span
                        class="text-purple-700 dark:text-purple-300 text-xs lg:text-sm tracking-widest"
                        >ÇALIŞMA SÜRECİMİZ</span
                    >
                </div>
                <h2
                    class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4"
                >
                    Projelerinizi <span
                        class="text-purple-600 dark:text-purple-400"
                        >Başarıya</span
                    > Taşıyoruz
                </h2>
                <p
                    class="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl lg:max-w-3xl mx-auto px-4"
                >
                    Projelerinizi başarıya ulaştırmak için izlediğimiz şeffaf ve
                    verimli çalışma süreci.
                </p>
            </div>

            <div
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            >
                {#each calismaSureci as adim, index}
                    <div
                        class="relative text-center group"
                        in:slide={{ delay: index * 200 }}
                    >
                        {#if index < calismaSureci.length - 1}
                            <div
                                class="hidden lg:block absolute top-12 lg:top-16 left-1/2 w-full h-0.5 bg-gray-300 dark:bg-gray-600 -z-10"
                            ></div>
                        {/if}
                        <div
                            class="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-105 lg:group-hover:scale-110 transition-transform shadow-lg"
                        >
                            <span class="text-xl lg:text-2xl text-white"
                                >{adim.ikon}</span
                            >
                        </div>
                        <div
                            class="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 w-6 h-6 lg:w-8 lg:h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-xs lg:text-sm font-bold"
                        >
                            {adim.adim}
                        </div>
                        <h3
                            class="text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-2 lg:mb-3"
                        >
                            {adim.baslik}
                        </h3>
                        <p
                            class="text-gray-600 dark:text-gray-300 leading-relaxed text-sm lg:text-base"
                        >
                            {adim.aciklama}
                        </p>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <section
        id="referanslar"
        class="py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
        <div class="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div class="text-center mb-12 lg:mb-16">
                <div
                    class="inline-flex items-center px-3 py-1 lg:px-4 lg:py-2 bg-green-50 dark:bg-green-900/20 rounded-full mb-3 lg:mb-4 border border-green-200 dark:border-green-800"
                >
                    <span
                        class="text-green-700 dark:text-green-300 text-xs lg:text-sm tracking-widest"
                        >MÜŞTERİ BAŞARI HİKAYELERİ</span
                    >
                </div>
                <h2
                    class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4"
                >
                    <span class="text-green-600 dark:text-green-400"
                        >Müşteri</span
                    > Değerlerine Önem Veriyoruz
                </h2>
            </div>

            <div
                class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16"
            >
                {#each referanslar as referans, index}
                    <div
                        class="bg-white dark:bg-gray-800 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl lg:shadow-2xl hover:shadow-2xl lg:hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 lg:hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                        in:slide={{ delay: index * 200 }}
                    >
                        <div
                            class="flex items-left justify-left space-x-1 mb-3 lg:mb-4"
                        >
                            {#each Array(5).fill(0) as _, index}
                                <svg
                                    class="w-5 h-5 lg:w-6 lg:h-6 text-yellow-400 fill-current"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                </svg>
                            {/each}
                        </div>
                        <p
                            class="text-gray-600 dark:text-gray-400 mb-4 lg:mb-6 italic leading-relaxed text-sm lg:text-base"
                        >
                            "{referans.icerik}"
                        </p>
                        <div>
                            <div
                                class="font-bold text-gray-900 dark:text-white text-base lg:text-lg"
                            >
                                {referans.isim}
                            </div>
                            <div
                                class="text-sm text-gray-500 dark:text-gray-500"
                            >
                                {referans.pozisyon}
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <section
        id="iletisim"
        class="py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-red-900 to-purple-900 text-white relative overflow-hidden"
    >
        <div class="absolute inset-0 bg-black/50"></div>
        <div class="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
            <div class="text-center mb-12 lg:mb-16">
                <h2
                    class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4"
                >
                    İşletmenizi <span class="text-red-400">Geliştirmeye</span> Hazır
                    mısınız?
                </h2>
                <p
                    class="text-lg lg:text-xl text-gray-300 max-w-2xl lg:max-w-3xl mx-auto px-4"
                >
                    Teknoloji çözümlerimizin dijital evriminizi nasıl ileri
                    taşıyabileceğini konuşalım.
                </p>
            </div>

            <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-4xl lg:max-w-6xl mx-auto"
            >
                <div>
                    <h3 class="text-xl lg:text-2xl font-bold mb-6 lg:mb-8">
                        İletişime Geçin
                    </h3>
                    <div class="group relative">
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"
                        ></div>
                        <div
                            class="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-red-400/30 transition-all duration-500"
                        >
                            <div class="flex items-center space-x-4">
                                <div
                                    class="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                                >
                                    ✉️
                                </div>
                                <div class="flex-1">
                                    <div
                                        class="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1"
                                    >
                                        İletişim
                                    </div>
                                    <a
                                        href="mailto:{companyData.email}"
                                        class="text-white font-semibold text-lg hover:text-red-300 transition-colors duration-300 block"
                                    >
                                        {companyData.email}
                                    </a>
                                    <div
                                        class="text-red-400 text-sm font-medium mt-1 flex items-center"
                                    >
                                        <div
                                            class="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"
                                        ></div>
                                        Aktif Destek
                                    </div>
                                </div>
                                <div
                                    class="text-2xl text-red-400/50 group-hover:text-red-400 transition-colors duration-300"
                                >
                                    →
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-white/10 backdrop-blur-lg rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/20"
                >
                    <h3 class="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">
                        Projenizi Başlatın
                    </h3>
                    <p class="text-gray-300 mb-6 lg:mb-8 text-sm lg:text-base">
                        Uzmanlarımızla ücretsiz bir danışmanlık görüşmesi
                        planlayarak teknoloji ihtiyaçlarınızı keşfedin.
                    </p>
                    <div class="space-y-3 lg:space-y-4">
                        <a
                            href="https://calendly.com/ekiniltervarli/30min"
                            class="w-full bg-white text-gray-900 px-6 lg:px-8 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl lg:shadow-2xl hover:shadow-2xl lg:hover:shadow-3xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 lg:space-x-3 group text-sm lg:text-base"
                        >
                            <span>Danışmanlık Planla</span>
                            <svg
                                class="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                        </a>

                        <a
                            href="https://bionluk.com/ekinvarli"
                            class="w-full border-2 border-white text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 lg:space-x-3 group text-sm lg:text-base"
                        >
                            <span>Portfolyo'yu Görüntüle</span>
                            <svg
                                class="w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer
        class="bg-gray-950 text-white py-8 lg:py-12 border-t border-gray-800"
    >
        <div class="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div
                class="text-center text-gray-500 text-xs lg:text-sm"
            >
                <p>
                    &copy; 2022 {companyData.name}. Tüm hakları saklıdır.
                </p>
            </div>
        </div>
    </footer>
</div>

<style>
    body {
        font-family: "Inter", sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: "Playfair Display", serif;
    }

    html {
        scroll-behavior: smooth;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: #dc2626;
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #b91c1c;
    }

    .dark ::-webkit-scrollbar-track {
        background: #1f2937;
    }

    .dark ::-webkit-scrollbar-thumb {
        background: #dc2626;
    }

    .dark ::-webkit-scrollbar-thumb:hover {
        background: #b91c1c;
    }

    @keyframes float {
        0%,
        100% {
            transform: translateY(0px) rotate(12deg);
        }
        50% {
            transform: translateY(-20px) rotate(12deg);
        }
    }

    @keyframes float-slow {
        0%,
        100% {
            transform: translateY(0px) rotate(-12deg);
        }
        50% {
            transform: translateY(-10px) rotate(-12deg);
        }
    }

    .animate-float {
        animation: float 6s ease-in-out infinite;
    }

    .animate-float-slow {
        animation: float-slow 8s ease-in-out infinite;
    }

    @media (max-width: 640px) {
        .container {
            padding-left: 1rem;
            padding-right: 1rem;
        }
    }
</style>
