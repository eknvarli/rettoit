<script>
    import { onMount } from 'svelte';
    
    let darkMode = false;
    
    onMount(() => {
        const savedTheme = localStorage.getItem('theme');
        darkMode = savedTheme === 'dark';
        document.documentElement.classList.toggle('dark', darkMode);
        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    });
    
    function toggleTheme() {
        darkMode = !darkMode;
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }
</script>

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
</svelte:head>

<div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <nav class="fixed w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div class="container mx-auto px-6 py-4">
            <div class="flex justify-between items-center">
                <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg">
                        <img src="https://avatars.githubusercontent.com/u/126869909?s=200&v=4" class="rounded-xl" alt="RettoIT Logo">
                    </div>
                    <div>
                        <span class="text-2xl font-bold text-gray-900 dark:text-white">Retto<span class="text-red-600">IT</span></span>
                        <div class="h-1 w-8 bg-red-600 rounded-full mt-1"></div>
                    </div>
                </div>

                <div class="hidden lg:flex space-x-10">
                    <a href="#home" class="text-gray-700 dark:text-gray-300 hover:text-red-600 font-semibold transition-colors relative group">
                        Ana Sayfa
                        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
                    </a>
                    <a href="#services" class="text-gray-700 dark:text-gray-300 hover:text-red-600 font-semibold transition-colors relative group">
                        Çözümlerimiz
                        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
                    </a>
                    <a href="https://bionluk.com/ekinvarli" class="text-gray-700 dark:text-gray-300 hover:text-red-600 font-semibold transition-colors relative group">
                        İş
                        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
                    </a>
                    <a href="mailto:info@rettoit.com" class="text-gray-700 dark:text-gray-300 hover:text-red-600 font-semibold transition-colors relative group">
                        İletişim
                        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
                    </a>
                </div>

                <div class="flex items-center space-x-4">
                    <button style="display: none !important;"
                        on:click={toggleTheme}
                        class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                        {#if darkMode}
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                            </svg>
                        {:else}
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                            </svg>
                        {/if}
                    </button>
                    <a href="https://calendly.com/ekiniltervarli/30min"
                        class="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                        Ücretsiz Danışmanlık
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <section id="home" class="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div class="container mx-auto max-w-7xl">
            <div class="flex flex-col lg:flex-row items-center">
                <div class="lg:w-1/2 mb-16 lg:mb-0">
                    <div class="inline-flex items-center px-4 py-2 bg-red-50 dark:bg-red-900/20 rounded-full mb-6 border border-red-100 dark:border-red-800">
                        <span class="w-2 h-2 bg-red-600 rounded-full mr-2 animate-pulse"></span>
                        <span class="text-red-700 dark:text-red-300 font-medium text-sm">Uzmanlaşılmış Sertifikasyonlarla</span>
                    </div>
                    <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                        Dijital Dönüşümde
                        <span class="text-red-600 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Güvenilir</span>
                        Ortağınız
                    </h1>
                    <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
                        Çağımıza ayak uydurmanız ve teknolojik inovasyonlardan geri kalmamanız için Retto IT olarak, sizlere
                        Yazılım & Yapay Zeka modülleri, bulut güvenliği, siber güvenlik ve e-Ticaret hizmetleri veriyoruz.
                    </p>
                    <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                        <button class="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                            </svg>
                            Projenizi Başlatalım
                        </button>
                        <button class="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-red-600 hover:text-red-600 transition-all flex items-center justify-center">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            Tanıtım Videosu
                        </button>
                    </div>

                    <div class="mt-12 flex items-center space-x-8">
                        <div class="flex items-center space-x-3">
                            <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <div>
                                <div class="font-bold text-gray-900 dark:text-white">%98</div>
                                <div class="text-sm text-gray-600 dark:text-gray-400">Müşteri Memnuniyeti</div>
                            </div>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"/>
                                </svg>
                            </div>
                            <div>
                                <div class="font-bold text-gray-900 dark:text-white">100+</div>
                                <div class="text-sm text-gray-600 dark:text-gray-400">Tamamlanan Proje</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:w-1/2 relative">
                    <div class="relative z-10">
                        <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
                            <div class="flex space-x-2 mb-6">
                                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <div class="space-y-6">
                                <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                                    <div class="flex items-center justify-between mb-4">
                                        <h3 class="font-bold text-gray-900 dark:text-white">Retto IT ile,</h3>
                                        <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">Aktif</span>
                                    </div>
                                    <div class="space-y-3">
                                        <div class="flex justify-between text-sm">
                                            <span class="text-gray-600 dark:text-gray-400">Yapay Zeka Entegrasyonları</span>
                                            <span class="font-semibold text-gray-900 dark:text-white">%100</span>
                                        </div>
                                        <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                            <div class="bg-green-600 h-2 rounded-full" style="width: 100%"></div>
                                        </div>
                                        <div class="flex justify-between text-sm">
                                            <span class="text-gray-600 dark:text-gray-400">Yazılım & Bulut Çözümleri</span>
                                            <span class="font-semibold text-gray-900 dark:text-white">%100</span>
                                        </div>
                                        <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                            <div class="bg-green-600 h-2 rounded-full" style="width: 100%"></div>
                                        </div>
                                        <div class="flex justify-between text-sm">
                                            <span class="text-gray-600 dark:text-gray-400">Harcayacağınız Efor</span>
                                            <span class="font-semibold text-gray-900 dark:text-white">%5</span>
                                        </div>
                                        <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                            <div class="bg-blue-600 h-2 rounded-full" style="width: 5%"></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="grid grid-cols-2 gap-4">
                                    <div class="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 border border-red-100 dark:border-red-800">
                                        <div class="text-red-600 dark:text-red-400 font-bold text-2xl mb-1">7/24</div>
                                        <div class="text-red-700 dark:text-red-300 text-sm">Teknik Destek</div>
                                    </div>
                                    <div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-100 dark:border-blue-800">
                                        <div class="text-blue-600 dark:text-blue-400 font-bold text-2xl mb-1">99.9%</div>
                                        <div class="text-blue-700 dark:text-blue-300 text-sm">Uptime Garantisi</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="absolute -top-6 -right-6 w-24 h-24 bg-red-100 dark:bg-red-900/20 rounded-2xl rotate-12 opacity-60"></div>
                    <div class="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-3xl -rotate-12 opacity-40"></div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-12 bg-gray-50 dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div class="container mx-auto px-6 max-w-7xl">
            <div class="text-center mb-8">
                <p class="text-gray-600 dark:text-gray-400 font-medium">Hazır sistemlerimizin kurulumlarını yaparak gücünüze güç katıyoruz.</p>
            </div>
            <div class="flex flex-wrap justify-center items-center gap-12 opacity-60">
                <div class="text-2xl font-bold text-gray-400">LİSANS YAZILIMI</div>
                <div class="text-2xl font-bold text-gray-400">SUNUCU GÜVENLİK PANELİ</div>
                <div class="text-2xl font-bold text-gray-400">E-TİCARET</div>
                <div class="text-2xl font-bold text-gray-400">YAPAY ZEKA CRM</div>
            </div>
			<div class="text-center mt-16">
                <p class="text-gray-600 dark:text-gray-400 font-medium">Ve çok daha fazlası...</p>
            </div>
        </div>
    </section>

    <section id="services" class="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div class="container mx-auto px-6 max-w-7xl">
            <div class="text-center mb-16">
                <div class="inline-flex items-center px-4 py-2 bg-red-50 dark:bg-red-900/20 rounded-full mb-4 border border-red-100 dark:border-red-800">
                    <span class="text-red-700 dark:text-red-300 font-medium text-sm">UZMANLIK ALANLARIMIZ</span>
                </div>
                <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Kapsamlı Teknoloji Çözümleri</h2>
                <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    İş süreçlerinizi dijitalleştirerek verimliliği artırıyor, güvenliği ön planda tutarak kurumsal değerinizi koruyoruz.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-600 hover:shadow-2xl transition-all duration-300 hover:border-red-200 dark:hover:border-red-600">
                    <div class="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Özel Yazılım Geliştirme</h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        Kurumsal ihtiyaçlarınıza özel, ölçeklenebilir ve yüksek performanslı yazılım çözümleri geliştiriyoruz.
                    </p>
                    <ul class="space-y-3 text-gray-600 dark:text-gray-300">
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                            </svg>
                            Web & Mobil Uygulamalar
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                            </svg>
                            ERP & CRM Sistemleri
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                            </svg>
                            API Entegrasyonları
                        </li>
                    </ul>
                </div>

                <div class="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-600 hover:shadow-2xl transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-600">
                    <div class="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2a10 10 0 0110 10 10 10 0 01-10 10 10 10 0 01-10-10A10 10 0 0112 2zm0 4v4l3 3"/>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Yapay Zeka Entegrasyonu</h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        İş süreçlerinize özel yapay zeka çözümleri sunuyor, otomasyon ve veri analizini bir üst seviyeye taşıyoruz.
                    </p>
                    <ul class="space-y-3 text-gray-600 dark:text-gray-300">
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                            </svg>
                            Akıllı Veri Analizi
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                            </svg>
                            Makine Öğrenimi Modelleri
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                            </svg>
                            Otomatik Raporlama & Tahminler
                        </li>
                    </ul>
                </div>

                <div class="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-600 hover:shadow-2xl transition-all duration-300 hover:border-red-200 dark:hover:border-red-600">
                    <div class="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Siber Güvenlik Çözümleri</h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        Kurumsal verilerinizi siber tehditlere karşı korumak için kapsamlı güvenlik çözümleri sunuyoruz.
                    </p>
                    <ul class="space-y-3 text-gray-600 dark:text-gray-300">
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                            </svg>
                            Penetrasyon Testleri
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                            </svg>
                            Güvenlik Denetimleri
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                            </svg>
                            7/24 İzleme & Müdahale
                        </li>
                    </ul>
                </div>

                <div class="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-600 hover:shadow-2xl transition-all duration-300 hover:border-red-200 dark:hover:border-red-600">
                    <div class="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Bulut Altyapı Çözümleri</h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        Esnek, güvenli ve yüksek performanslı bulut altyapıları ile iş sürekliliğinizi garanti altına alıyoruz.
                    </p>
                    <ul class="space-y-3 text-gray-600 dark:text-gray-300">
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                            </svg>
                            AWS & Azure Danışmanlığı
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                            </svg>
                            Bulut Geçiş Hizmetleri
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                            </svg>
                            Yedekleme & Disaster Recovery
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div class="container mx-auto px-6 max-w-7xl text-center">
            <h2 class="text-4xl font-bold mb-6">Projenize Hemen Başlayalım</h2>
            <p class="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Retto IT uzmanları ile projenizi değerlendirip, en uygun çözüm önerilerini sunalım. İlk danışmanlık görüşmemiz ücretsizdir.
            </p>
            <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="https://calendly.com/ekiniltervarli/30min"
                    class="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    Hemen Görüşelim
                </a>
                <a href="https://bionluk.com/ekinvarli"
                    class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center">
                    Teklif Alın
                </a>
            </div>
        </div>
    </section>

    <footer class="bg-gray-900 text-white py-12">
        <div class="container mx-auto px-6 max-w-7xl">
            <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                <p>&copy; 2025 Retto IT. Tüm hakları saklıdır.</p>
            </div>
        </div>
    </footer>
</div>

<style>
    body {
        font-family: 'Inter', sans-serif;
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
        background: #374151;
    }

    .dark ::-webkit-scrollbar-thumb {
        background: #dc2626;
    }

    .dark ::-webkit-scrollbar-thumb:hover {
        background: #b91c1c;
    }
</style>