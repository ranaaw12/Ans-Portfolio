// Tech Stack Mastery Component
class TechStackMastery {
    constructor() {
        this.container = document.getElementById('techStackApp');
        this.tools = [
            // Test Management - Purple #7F77DD
            { id: 'jira', name: 'JIRA', initials: 'JR', category: 'Test Management', proficiency: 90, label: 'Expert', usedAt: 'Black Box Labs & Projectz', description: 'Create bug reports with severity and priority, link bugs to user stories, manage test cycles in sprints, track resolution status and generate QA reports', color: '#7F77DD' },
            { id: 'trello', name: 'Trello', initials: 'TR', category: 'Test Management', proficiency: 70, label: 'Intermediate', usedAt: 'Projectz', description: 'Create kanban boards for test progress tracking, organize test cases into To Test, In Progress and Done columns, manage personal QA task flow', color: '#1D9E75' },
            
            // Automation Testing - Teal #1D9E75
            { id: 'cypress', name: 'Cypress', initials: 'CY', category: 'Automation Testing', proficiency: 75, label: 'Intermediate', usedAt: 'Rollbar (Black Box Labs)', description: 'Write end-to-end test scripts, create BDD feature files with Cucumber Gherkin, run automated regression suites, capture screenshots on failure', color: '#1D9E75' },
            { id: 'playwright', name: 'Playwright', initials: 'PW', category: 'Automation Testing', proficiency: 55, label: 'Beginner–Intermediate', usedAt: 'Personal practice and portfolio projects', description: 'Cross-browser automation across Chrome, Firefox and Safari from single scripts, testing complex UI interactions', color: '#2563EB' },
            { id: 'selenium', name: 'Selenium WebDriver', initials: 'SW', category: 'Automation Testing', proficiency: 72, label: 'Intermediate', usedAt: 'Kinzoo Messenger (Black Box Labs)', description: 'Automate browser interactions — login flows, form submissions, navigation, contact approval system regression testing', color: '#2563EB' },
            { id: 'cucumber', name: 'Cucumber Gherkin', initials: 'CG', category: 'Automation Testing', proficiency: 70, label: 'Intermediate', usedAt: 'Rollbar project with Cypress', description: 'Write BDD feature files in plain English Given/When/Then format, making test scenarios readable for both technical and non-technical stakeholders', color: '#D85A30' },
            
            // API Testing - Amber #BA7517
            { id: 'postman', name: 'Postman', initials: 'PM', category: 'API Testing', proficiency: 85, label: 'Advanced', usedAt: 'Kinzoo, Kinzoo Messenger, Kinzoo Studio (Black Box Labs)', description: 'Create API collections, write test scripts, validate status codes, response bodies and headers, test authentication endpoints, run collection runners', color: '#BA7517' },
            
            // Performance Testing - Coral #D85A30  
            { id: 'jmeter', name: 'Apache JMeter', initials: 'JM', category: 'Performance Testing', proficiency: 65, label: 'Intermediate', usedAt: 'Personal projects and practice', description: 'Create thread groups, simulate virtual users, run load and stress tests, analyze response time and throughput results, identify performance bottlenecks', color: '#D85A30' },
            
            // Bug Reporting & Documentation - Green #639922 / Pink #EC4899? (using Coral for Confluence, Green Notion, Pink Loom)
            { id: 'confluence', name: 'Confluence', initials: 'CF', category: 'Bug Reporting & Documentation', proficiency: 70, label: 'Intermediate', usedAt: 'Black Box Labs', description: 'Write test plans, document test strategies, store QA reports and share findings with the team in an organized wiki-style format', color: '#D85A30' },
            { id: 'notion', name: 'Notion', initials: 'NT', category: 'Bug Reporting & Documentation', proficiency: 68, label: 'Intermediate', usedAt: 'Personal workspace', description: 'Organize personal QA notes, maintain checklists, document learning progress and manage portfolio content', color: '#639922' },
            { id: 'loom', name: 'Loom', initials: 'LM', category: 'Bug Reporting & Documentation', proficiency: 70, label: 'Intermediate', usedAt: 'Black Box Labs & Projectz', description: 'Record short bug reproduction videos, annotate screenshots and attach visual evidence to JIRA bug reports for developer clarity', color: '#EC4899' },
            
            // Version Control - Gray #888780
            { id: 'git', name: 'Git', initials: 'GT', category: 'Version Control', proficiency: 60, label: 'Beginner–Intermediate', usedAt: 'Automation projects', description: 'Initialize repositories, commit automation script changes, push to GitHub, manage branches for test script versions', color: '#888780' },
            { id: 'github', name: 'GitHub', initials: 'GH', category: 'Version Control', proficiency: 62, label: 'Beginner–Intermediate', usedAt: 'Portfolio and automation projects', description: 'Host automation test repositories, manage portfolio code, share QA project documentation publicly', color: '#888780' }
        ];
        this.currentCategory = 'All';
        this.observer = null;
        this.init();
    }

    init() {
        this.renderTabs();
        this.renderTools();
        this.bindEvents();
        this.observeAnimations();
    }

    renderTabs() {
        const categories = ['All', ...new Set(this.tools.map(t => t.category))];
        const tabsHTML = categories.map(cat => 
            `<button class="tab-btn ${cat === 'All' ? 'active' : ''}" data-category="${cat}">${cat}</button>`
        ).join('');
        document.getElementById('tech-tabs').innerHTML = tabsHTML;
    }

renderTools(tools = this.tools) {
        const grid = document.getElementById('tech-grid');
        grid.innerHTML = tools.map(tool => `
            <div class="tool-card visible" data-category="${tool.category}" data-tool="${tool.id}" style="--accent-color: ${tool.color}">
                <div class="tool-icon" style="--accent-color: ${tool.color}">
                    <span>${tool.initials}</span>
                </div>
                <h3 class="tool-name">${tool.name}</h3>
                <div class="category-badge" style="--accent-color: ${tool.color}">${tool.category}</div>
                <div class="proficiency-container">
                    <div class="proficiency-label">Proficiency</div>
                    <div class="proficiency-bar">
                        <div class="proficiency-fill" data-width="${tool.proficiency}"></div>
                    </div>
                    <div class="proficiency-text">${tool.label}</div>
                </div>
                <div class="used-at">Used at: ${tool.usedAt}</div>
                <p class="tool-desc">${tool.description}</p>
            </div>
        `).join('');
        // Trigger initial animation
        requestAnimationFrame(() => this.container.classList.add('animate'));
    }

    bindEvents() {
        // Tab filtering
        document.getElementById('tech-tabs').addEventListener('click', (e) => {
            if (e.target.classList.contains('tab-btn')) {
                const category = e.target.dataset.category;
                document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                this.filterTools(category);
            }
        });

        // Horizontal tab scroll on mobile
        const tabs = document.getElementById('tech-tabs');
        tabs.addEventListener('wheel', (e) => {
            e.preventDefault();
            tabs.scrollLeft += e.deltaY;
        });
    }

    filterTools(category) {
        this.currentCategory = category;
        const cards = document.querySelectorAll('.tool-card');
        cards.forEach((card, index) => {
            const shouldShow = category === 'All' || card.dataset.category === category;
            card.style.transitionDelay = `${index * 50}ms`;
            if (shouldShow) {
                card.classList.add('visible');
            } else {
                card.classList.remove('visible');
            }
        });
    }

    observeAnimations() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateProficiencyBars();
                    this.animateCounters();
                }
            });
        }, { threshold: 0.1 });

        this.observer.observe(this.container);
    }

    animateProficiencyBars() {
        document.querySelectorAll('.proficiency-fill').forEach((fill, index) => {
            const width = fill.dataset.width;
            setTimeout(() => {
                fill.style.width = `${width}%`;
            }, index * 100);
        });
    }

    animateCounters() {
        const counters = [
            { el: '#counter-tools', target: 13 },
            { el: '#counter-years', target: 2 },
            { el: '#counter-projects', target: 10 },
            { el: '#counter-tests', target: 200 }
        ];

        counters.forEach(({ el, target }) => {
            const element = document.querySelector(el);
            if (element) {
                let start = 0;
                const increment = target / 50;
                const timer = setInterval(() => {
                    start += increment;
                    if (start >= target) {
                        element.textContent = target;
                        clearInterval(timer);
                    } else {
                        element.textContent = Math.floor(start);
                    }
                }, 20);
            }
        });
    }
}

// Initialize when DOM ready
document.addEventListener('DOMContentLoaded', () => {
    new TechStackMastery();
});

