// Theme Toggle Functionality
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme();
        this.createToggleButton();
        this.bindEvents();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        document.body.setAttribute('data-theme', this.currentTheme);
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.currentTheme);
        this.animateToggleIcon();
        this.applyTheme();
        this.updateToggleIcon();
    }

    createToggleButton() {
        // Theme toggle button in header
        const toggle = document.getElementById('theme-toggle');
        if (toggle) {
            toggle.onclick = () => this.toggleTheme();
            this.updateToggleIcon();
        }
    }

    animateToggleIcon() {
        const toggle = document.getElementById('theme-toggle');
        if (toggle) {
            const icon = toggle.querySelector('i');
            if (icon) {
                icon.classList.add('theme-icon-transition');
                setTimeout(() => {
                    icon.classList.remove('theme-icon-transition');
                }, 600);
            }
        }
    }

    updateToggleIcon() {
        // Theme toggle button (separate from portfolio icon)
        const toggle = document.getElementById('theme-toggle');
        if (toggle) {
            const icon = toggle.querySelector('i');
            if (icon) {
                icon.className = `fas ${this.currentTheme === 'light' ? 'fa-moon' : 'fa-sun'} text-yellow-400 transition-transform duration-300 ${this.currentTheme === 'light' ? 'rotate-0' : 'rotate-180'}`;
            }
            toggle.setAttribute('aria-label', `Switch to ${this.currentTheme === 'light' ? 'dark' : 'light'} mode`);
        }
    }

    bindEvents() {
        // Bind theme toggle button
        const toggle = document.getElementById('theme-toggle');
        if (toggle) {
            toggle.onclick = () => this.toggleTheme();
        }

        // System preference support
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                this.currentTheme = e.matches ? 'dark' : 'light';
                this.applyTheme();
                this.updateToggleIcon();
            }
        });
    }
}

// Global init
window.ThemeManager = ThemeManager;

