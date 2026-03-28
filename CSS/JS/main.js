// Main Application Controller
class PortfolioApp {
    constructor() {
        this.init();
    }

    init() {
        // Initialize available components safely so one missing module
        // does not block the entire page (including the carousel).
        this.safeInit(typeof Header !== 'undefined' ? Header : null);
        this.safeInit(typeof Hero !== 'undefined' ? Hero : null);
        this.safeInit(typeof Skills !== 'undefined' ? Skills : null);
        this.safeInit(typeof Projects !== 'undefined' ? Projects : null);
        this.initTestedProjectsCarousel();
        this.initIntroductionModal();
        
        // Page load animations
        this.animateOnScroll();
        this.setupEventListeners();
    }

    safeInit(component) {
        if (component && typeof component.init === 'function') {
            component.init();
        }
    }

    setupEventListeners() {
        // Smooth scrolling for navigation
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
    }

    initTestedProjectsCarousel() {
        const carouselWrapper = document.getElementById('tested-carousel');
        const carouselTrack = document.getElementById('tested-carousel-track');

        if (!carouselWrapper || !carouselTrack) {
            return;
        }

        const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        let isPaused = false;
        let isAnimating = false;
        let timerId = null;
        let fallbackTimerId = null;

        const clearTicker = () => {
            if (timerId !== null) {
                window.clearInterval(timerId);
                timerId = null;
            }
            if (fallbackTimerId !== null) {
                window.clearTimeout(fallbackTimerId);
                fallbackTimerId = null;
            }
        };

        const getStepWidth = () => {
            const firstItem = carouselTrack.querySelector('.tested-carousel-item');
            if (!firstItem) {
                return 0;
            }
            return firstItem.getBoundingClientRect().width;
        };

        const moveNext = () => {
            if (isPaused || isAnimating || reducedMotionQuery.matches) {
                return;
            }

            const firstItem = carouselTrack.firstElementChild;
            if (!firstItem) {
                return;
            }

            const stepWidth = getStepWidth();
            if (stepWidth <= 0) {
                return;
            }

            isAnimating = true;
            carouselTrack.style.webkitTransition = '-webkit-transform 650ms ease';
            carouselTrack.style.transition = 'transform 650ms ease';
            carouselTrack.style.webkitTransform = `translateX(-${stepWidth}px)`;
            carouselTrack.style.transform = `translateX(-${stepWidth}px)`;

            const finishSlide = () => {
                carouselTrack.appendChild(firstItem);
                carouselTrack.style.webkitTransition = 'none';
                carouselTrack.style.transition = 'none';
                carouselTrack.style.webkitTransform = 'translateX(0)';
                carouselTrack.style.transform = 'translateX(0)';
                // Force reflow so transition reliably re-applies on next slide.
                carouselTrack.offsetHeight;
                isAnimating = false;
                carouselTrack.removeEventListener('transitionend', onTransitionEnd);
                carouselTrack.removeEventListener('webkitTransitionEnd', onTransitionEnd);
                if (fallbackTimerId !== null) {
                    window.clearTimeout(fallbackTimerId);
                    fallbackTimerId = null;
                }
            };

            const onTransitionEnd = (event) => {
                if (event && event.target !== carouselTrack) {
                    return;
                }
                finishSlide();
            };

            // Listen to both transition end event names for browser compatibility.
            carouselTrack.addEventListener('transitionend', onTransitionEnd);
            carouselTrack.addEventListener('webkitTransitionEnd', onTransitionEnd);

            // Safety fallback: if end event is missed, continue the loop.
            fallbackTimerId = window.setTimeout(finishSlide, 800);
        };

        const startTicker = () => {
            clearTicker();
            if (!isPaused && !reducedMotionQuery.matches) {
                timerId = window.setInterval(moveNext, 2000);
            }
        };

        const pauseCarousel = () => {
            isPaused = true;
            clearTicker();
        };

        const resumeCarousel = () => {
            isPaused = false;
            startTicker();
        };

        carouselWrapper.addEventListener('pointerenter', pauseCarousel);
        carouselWrapper.addEventListener('pointerleave', resumeCarousel);
        // Mouse event fallback for environments without Pointer Events.
        carouselWrapper.addEventListener('mouseenter', pauseCarousel);
        carouselWrapper.addEventListener('mouseleave', resumeCarousel);
        carouselWrapper.addEventListener('focusin', pauseCarousel);
        carouselWrapper.addEventListener('focusout', resumeCarousel);
        window.addEventListener('resize', startTicker);

        const onReducedMotionChange = () => {
            if (reducedMotionQuery.matches) {
                clearTicker();
                carouselTrack.style.webkitTransition = 'none';
                carouselTrack.style.transition = 'none';
                carouselTrack.style.webkitTransform = 'translateX(0)';
                carouselTrack.style.transform = 'translateX(0)';
            } else if (!isPaused) {
                startTicker();
            }
        };

        if (typeof reducedMotionQuery.addEventListener === 'function') {
            reducedMotionQuery.addEventListener('change', onReducedMotionChange);
        } else if (typeof reducedMotionQuery.addListener === 'function') {
            reducedMotionQuery.addListener(onReducedMotionChange);
        }

        startTicker();
    }

    initIntroductionModal() {
        const openButton = document.getElementById('open-intro-modal');
        const closeButton = document.getElementById('close-intro-modal');
        const overlay = document.getElementById('intro-modal-overlay');
        const panel = document.getElementById('intro-modal-panel');
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (!openButton || !closeButton || !overlay || !panel) {
            return;
        }

        const resetAnimatedItems = () => {
            panel.querySelectorAll('.intro-pill').forEach((pill) => {
                pill.classList.remove('in-view');
            });
            panel.querySelectorAll('.intro-step').forEach((step) => {
                step.classList.remove('in-view');
            });
        };

        const animateCounters = () => {
            panel.querySelectorAll('.intro-stat-value').forEach((counter) => {
                const target = Number(counter.getAttribute('data-target') || '0');
                const suffix = counter.getAttribute('data-suffix') || '';
                if (Number.isNaN(target)) {
                    return;
                }

                if (reducedMotion) {
                    counter.textContent = `${target}${suffix}`;
                    return;
                }

                const durationMs = 800;
                const startTime = performance.now();
                const step = (timestamp) => {
                    const progress = Math.min((timestamp - startTime) / durationMs, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = Math.round(eased * target);
                    counter.textContent = `${current}${suffix}`;
                    if (progress < 1) {
                        requestAnimationFrame(step);
                    }
                };
                requestAnimationFrame(step);
            });
        };

        const animatePillsAndSteps = () => {
            const pills = Array.from(panel.querySelectorAll('.intro-pill'));
            const steps = Array.from(panel.querySelectorAll('.intro-step'));

            pills.forEach((pill, index) => {
                const delay = reducedMotion ? 0 : index * 40;
                window.setTimeout(() => pill.classList.add('in-view'), delay);
            });

            steps.forEach((step, index) => {
                const delay = reducedMotion ? 0 : index * 200;
                window.setTimeout(() => step.classList.add('in-view'), delay);
            });
        };

        const openModal = () => {
            document.body.classList.remove('intro-modal-closing');
            document.body.classList.add('intro-modal-open');
            overlay.setAttribute('aria-hidden', 'false');
            resetAnimatedItems();
            animateCounters();
            animatePillsAndSteps();
        };

        const closeModal = () => {
            if (!document.body.classList.contains('intro-modal-open')) {
                return;
            }
            document.body.classList.add('intro-modal-closing');
            document.body.classList.remove('intro-modal-open');
            overlay.setAttribute('aria-hidden', 'true');
            window.setTimeout(() => {
                document.body.classList.remove('intro-modal-closing');
                resetAnimatedItems();
            }, 320);
        };

        openButton.addEventListener('click', openModal);
        closeButton.addEventListener('click', closeModal);
        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) {
                closeModal();
            }
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        });
    }

    animateOnScroll() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});