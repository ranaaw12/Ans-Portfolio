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
        this.header.style.zIndex = '9999';
        this.header.style.width = '100%';
        this.header.style.display = 'block';
        
        this.header.innerHTML = `
            <nav class="header-nav transition-all duration-300" style="position: fixed; top: 0; left: 0; right: 0; z-index: 9999; width: 100%; background: linear-gradient(135deg, #6366f1 0%, #3b82f6 25%, #0ea5e9 50%, #06b6d4 75%, #0d9488 100%); box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.25), 0 4px 10px -2px rgba(0, 0, 0, 0.1); border-bottom: 3px solid rgba(255, 255, 255, 0.2);">
                <div class="container mx-auto px-4 md:px-8 lg:px-12 h-20 flex items-center justify-between">
                    <!-- Desktop Menu -->
                    <ul class="hidden md:flex items-center space-x-8">
                        <li><a href="index.html" class="nav-link text-lg font-medium text-white hover:text-yellow-200 transition-colors py-2 drop-shadow">Home</a></li>
                        <li><a href="about.html" class="nav-link text-lg font-medium text-white hover:text-yellow-200 transition-colors py-2 drop-shadow">About</a></li>
                        <li><a href="projects.html" class="nav-link text-lg font-medium text-white hover:text-yellow-200 transition-colors py-2 drop-shadow">Projects</a></li>
                        <li><a href="contact.html" class="nav-link text-lg font-medium text-white hover:text-yellow-200 transition-colors py-2 drop-shadow">Contact</a></li>
                    </ul>

                    <!-- Logo -->
                    <div class="flex items-center">
                        <h1 class="text-2xl md:text-3xl font-bold text-white drop-shadow-lg" style="text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);">
                            Rana Ans
                        </h1>
                    </div>

                    <!-- Mobile Menu Toggle -->
                    <button id="mobile-toggle" class="md:hidden p-2">
                        <i class="fas fa-bars text-2xl text-white drop-shadow"></i>
                    </button>
                </div>

                <!-- Mobile Menu -->
                <div id="mobile-menu" class="md:hidden hidden bg-gradient-to-r from-indigo-600 to-cyan-500 shadow-lg border-t border-white border-opacity-20">
                    <ul class="py-4 space-y-4 px-6">
                        <li><a href="index.html" class="block py-3 text-lg font-medium text-white hover:text-yellow-200 transition-colors">Home</a></li>
                        <li><a href="about.html" class="block py-3 text-lg font-medium text-white hover:text-yellow-200 transition-colors">About</a></li>
                        <li><a href="projects.html" class="block py-3 text-lg font-medium text-white hover:text-yellow-200 transition-colors">Projects</a></li>
                        <li><a href="contact.html" class="block py-3 text-lg font-medium text-white hover:text-yellow-200 transition-colors">Contact</a></li>
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