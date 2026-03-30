// Header Component (Page Object Model)
class Header {
    constructor() {
        this.header = document.getElementById('header');
        this.navToggle = null;
        this.isSticky = false;
    }

    static init() {
        const header = new Header();
        header.render();
        header.bindEvents();
        return header;
    }

    render() {
        this.header.style.position = 'fixed';
        this.header.style.top = '0';
        this.header.style.left = '0';
        this.header.style.right = '0';
        this.header.style.zIndex = '9998';  /* Below theme toggle z-[99999] */
        this.header.style.width = '100%';
        this.header.style.display = 'block';
        
        this.header.innerHTML = `
            <nav class="header-nav transition-all duration-300 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 shadow-2xl backdrop-blur-md border-b border-white/20" style="position: fixed; top: 0; left: 0; right: 0; z-index: 9998; width: 100%;">
                <div class="container mx-auto px-4 md:px-8 lg:px-12 h-20 flex items-center justify-between">
                    <!-- Desktop Menu -->
                    <ul class="hidden md:flex items-center space-x-8">
                        <li><a href="index.html" class="nav-link text-lg font-medium text-white/90 hover:text-yellow-200 transition-all py-2 drop-shadow-lg hover:drop-shadow-2xl hover:scale-105" style="text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Home</a></li>
                        <li><a href="about.html" class="nav-link text-lg font-medium text-white/90 hover:text-yellow-200 transition-all py-2 drop-shadow-lg hover:drop-shadow-2xl hover:scale-105" style="text-shadow: 0 1px 2px rgba(0,0,0,0.3);">About</a></li>
                        <li><a href="projects.html" class="nav-link text-lg font-medium text-white/90 hover:text-yellow-200 transition-all py-2 drop-shadow-lg hover:drop-shadow-2xl hover:scale-105" style="text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Projects</a></li>
                        <li><a href="contact.html" class="nav-link text-lg font-medium text-white/90 hover:text-yellow-200 transition-all py-2 drop-shadow-lg hover:drop-shadow-2xl hover:scale-105" style="text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Contact</a></li>
                    </ul>

                    <!-- Logo -->
                    <div class="flex items-center">
                        <h1 class="text-2xl md:text-3xl font-black bg-gradient-to-r from-white via-yellow-50 to-white bg-clip-text text-transparent drop-shadow-2xl" style="text-shadow: 0 4px 8px rgba(0,0,0,0.4);">
                            Rana Ans
                        </h1>
                    </div>

                    <!-- Theme Toggle & Mobile Menu Toggle -->
                    <div class="flex items-center space-x-4">
                        <button id="theme-toggle" class="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl transition-all duration-300 hover:scale-110 shadow-lg" aria-label="Toggle theme">
                            <i class="fas fa-moon text-yellow-400 text-xl drop-shadow-lg"></i>
                        </button>
                        <button id="mobile-toggle" class="md:hidden p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl transition-all duration-300 hover:scale-110 shadow-lg">
                            <i class="fas fa-bars text-xl text-white drop-shadow-lg"></i>
                        </button>
                    </div>
                </div>

                <!-- Mobile Menu -->
                <div id="mobile-menu" class="md:hidden hidden bg-black/50 backdrop-blur-xl border-t border-white/20 shadow-2xl">
                    <ul class="py-6 space-y-2 px-6">
                        <li><a href="index.html" class="block py-4 px-6 text-lg font-semibold text-white/95 hover:text-yellow-200 hover:bg-white/10 rounded-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm shadow-md">Home</a></li>
                        <li><a href="about.html" class="block py-4 px-6 text-lg font-semibold text-white/95 hover:text-yellow-200 hover:bg-white/10 rounded-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm shadow-md">About</a></li>
                        <li><a href="projects.html" class="block py-4 px-6 text-lg font-semibold text-white/95 hover:text-yellow-200 hover:bg-white/10 rounded-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm shadow-md">Projects</a></li>
                        <li><a href="contact.html" class="block py-4 px-6 text-lg font-semibold text-white/95 hover:text-yellow-200 hover:bg-white/10 rounded-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm shadow-md">Contact</a></li>
                    </ul>
                </div>
            </nav>`;
    }

    bindEvents() {
        this.navToggle = document.getElementById('mobile-toggle');
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Sticky header on scroll
        window.addEventListener('scroll', () => this.handleScroll());
    }

    toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        if (menu) {
            menu.classList.toggle('hidden');
        }
    }

    handleScroll() {
        const scrollY = window.scrollY;
        if (scrollY > 100 && !this.isSticky) {
            this.header.classList.add('sticky-header');
            this.isSticky = true;
        } else if (scrollY <= 100 && this.isSticky) {
            this.header.classList.remove('sticky-header');
            this.isSticky = false;
        }
    }
}

