// Projects Component
class Projects {
    constructor() {
        this.container = document.getElementById('projects-grid') || document.getElementById('projects-container');
        this.projects = [
            {
                accentClass: "accent-purple",
                title: "Kinzoo App",
                description: "Kids-safe all-in-one platform with messaging, calls, games, stickers, Kai AI art, and interactive Paths Center stories.",
                technologies: ["Manual Testing", "API Testing", "Postman", "JIRA", "Firebase"],
                metricLabel: "50+ bugs found",
                metricContext: "100+ test cases across iOS, Android and Website.",
                modal: {
                    theme: "purple",
                    title: "Kinzoo App",
                    overview: "Kinzoo App is a COPPA-certified kids-safe all-in-one digital platform with no ads and no strangers. Testing covered messaging, video calls, games, stickers, Kai AI art tool, and the Paths Center interactive stories on iOS and Android.",
                    stats: [
                        { value: "100+", label: "Test Cases" },
                        { value: "50+", label: "Bugs Found" },
                        { value: "3", label: "Platforms (iOS/Android/Website)" }
                    ],
                    testingApproach: ["Manual Testing", "API Testing"],
                    bugsBreakdown: { critical: 25, major: 35, minor: 50 },
                    criticalBug: {
                        title: "Parental approval flow not triggering when child accepts invite in certain network conditions",
                        description: "Under unstable network transitions, child invite acceptance bypassed expected parent-approval trigger, creating a high-risk safety workflow gap."
                    },
                    endpointMethods: [],
                    tools: ["Postman", "JIRA"],
                    outcome: "Strengthened safety-critical flows and improved release confidence across core family interactions on both mobile platforms."
                },
                link: "#"
            },
            {
                accentClass: "accent-teal",
                title: "Kinzoo Messenger",
                description: "Child-safe family messenger for texts, voice notes, videos, GIFs, stickers, and parent-approved video calls.",
                technologies: ["Manual Testing", "API Testing", "Selenium WebDriver", "Postman", "JIRA"],
                metricLabel: "30+ bugs found",
                metricContext: "70+ test cases across iOS, Android, and Website.",
                modal: {
                    theme: "teal",
                    title: "Kinzoo Messenger",
                    overview: "Kinzoo Messenger is a child-safe messaging app for families where kids can communicate only with parent-approved contacts. QA covered texts, voice messages, videos, GIFs, stickers, and video calling across iOS, Android, and Amazon devices.",
                    stats: [
                        { value: "70+", label: "Test Cases" },
                        { value: "30+", label: "Bugs Found" },
                        { value: "3", label: "Platforms (iOS/Android/Website)" }
                    ],
                    testingApproach: ["Manual Testing", "API Testing", "Automation (Selenium WebDriver)"],
                    bugsBreakdown: { critical: 20, major: 27, minor: 40 },
                    criticalBug: {
                        title: "Video call drops silently without error notification on low bandwidth",
                        description: "When network quality degraded, active video sessions disconnected without user feedback or retry prompts, causing failed communication attempts for families."
                    },
                    endpointMethods: [],
                    tools: ["Selenium WebDriver", "Postman", "JIRA"],
                    outcome: "Improved messaging and calling reliability through combined manual, API, and automation coverage for real-world family communication scenarios."
                },
                link: "#"
            },
            {
                accentClass: "accent-coral",
                title: "Kinzoo Studio",
                description: "Creative storytelling for kids — animated stories, characters, Zoonies currency, and sharing inside Kinzoo Messenger.",
                technologies: ["Manual Testing", "API Testing", "Postman", "JIRA"],
                metricLabel: "25+ bugs found",
                metricContext: "35+ test cases on iOS and Android.",
                modal: {
                    theme: "coral",
                    title: "Kinzoo Studio",
                    overview: "Kinzoo Studio is a creative storytelling tool for kids. Children build animated stories, dress characters, customize outfits with Zoonies currency, and share creations inside Kinzoo Messenger.",
                    stats: [
                        { value: "35+", label: "Test Cases" },
                        { value: "12", label: "Bugs Found" },
                        { value: "2", label: "Platforms (iOS & Android)" }
                    ],
                    testingApproach: ["Manual Testing", "API Testing"],
                    bugsBreakdown: { critical: 10, major: 15, minor: 25 },
                    criticalBug: {
                        title: "Story save fails silently when device storage is below threshold — no user feedback shown",
                        description: "When available storage dropped below the required threshold, story saves failed without warning, causing data loss perception and repeat attempts."
                    },
                    endpointMethods: [],
                    tools: ["Postman", "JIRA"],
                    outcome: "Improved save reliability and user feedback for storage-related failures across creative workflows."
                },
                link: "#"
            },
            {
                accentClass: "accent-blue",
                title: "Rollbar",
                description: "Real-time error monitoring SaaS — captures errors, ML grouping, stack traces, session replays, and integrations.",
                technologies: ["Manual Testing", "Cypress", "Cucumber Gherkin", "JIRA"],
                metricLabel: "30+ bugs found",
                metricContext: "150+ test cases on the web platform.",
                modal: {
                    theme: "blue",
                    title: "Rollbar",
                    overview: "Rollbar is a real-time error monitoring and debugging platform. It captures application errors, groups them intelligently using ML, shows stack traces and session replays, and integrates with GitHub, Slack, and JIRA.",
                    stats: [
                        { value: "150+", label: "Test Cases" },
                        { value: "30", label: "Bugs Found" },
                        { value: "Web", label: "Platform (SaaS)" }
                    ],
                    testingApproach: ["Manual Testing", "Automation (Cypress + Cucumber Gherkin)"],
                    bugsBreakdown: { critical: 15, major: 8, minor: 25 },
                    criticalBug: {
                        title: "Error grouping incorrectly merges two distinct errors into one item causing missed alerts",
                        description: "Distinct error signatures were grouped into a single issue, reducing alert visibility and delaying triage for production incidents."
                    },
                    endpointMethods: [],
                    tools: ["Cypress", "Cucumber Gherkin", "JIRA"],
                    outcome: "Improved monitoring accuracy and alert fidelity for teams relying on grouped error intelligence."
                },
                link: "#"
            },
            {
                accentClass: "accent-amber",
                title: "Home Sifu Rental",
                description: "Home rental platform for landlords and tenants — listings, search, filters, booking, and authentication.",
                technologies: ["Manual Testing", "JIRA", "Trello"],
                metricLabel: "100+ bugs found",
                metricContext: "60+ test cases across iOS, Android.",
                modal: {
                    theme: "amber",
                    title: "Home Sifu Rental",
                    overview: "Home Sifu Rental is a mobile app where landlords list properties and tenants search, filter, and book rental homes. Features include property listings, booking flows, filters, and user authentication.",
                    stats: [
                        { value: "42+", label: "Test Cases" },
                        { value: "100+", label: "Bugs Found" },
                        { value: "2", label: "Platforms (iOS/Android)" }
                    ],
                    testingApproach: ["Manual Testing"],
                    bugsBreakdown: { critical: 20, major: 30, minor: 60 },
                    criticalBug: {
                        title: "Booking confirmation email not sent when user completes payment through certain browsers",
                        description: "Cross-browser payment completion did not consistently trigger confirmation emails, leaving users uncertain about booking status."
                    },
                    endpointMethods: [],
                    tools: ["JIRA", "Trello"],
                    outcome: "Strengthened booking and notification reliability for end-to-end rental journeys."
                },
                link: "#"
            },
            {
                accentClass: "accent-green",
                title: "Nibble Buddy",
                description: "Food and nutrition platform — meal tracking, recipes, dietary goals, calculators, and profiles.",
                technologies: ["Manual Testing", "JIRA", "Trello"],
                metricLabel: "40+ bugs found",
                metricContext: "30+ test cases across web flows, Android and iOS.",
                modal: {
                    theme: "green",
                    title: "Nibble Buddy",
                    overview: "Nibble Buddy is a food and nutrition web and mobile app helping users track meals, discover recipes, and manage dietary goals. Features include data entry forms, nutrition calculators, and user profile management.",
                    stats: [
                        { value: "30+", label: "Test Cases" },
                        { value: "40+", label: "Bugs Found" },
                        { value: "3", label: "Platforms (Web/Android/iOS)" }
                    ],
                    testingApproach: ["Manual Testing"],
                    bugsBreakdown: { critical: 15, major: 20, minor: 50 },
                    criticalBug: {
                        title: "Nutrition calculator returns incorrect values when decimal inputs are entered in non-English locale",
                        description: "Locale-specific decimal separators caused parsing errors, producing incorrect nutrition outputs for international users."
                    },
                    endpointMethods: [],
                    tools: ["JIRA", "Trello"],
                    outcome: "Improved calculation accuracy and input handling for diverse global users."
                },
                link: "#"
            },
            {
                accentClass: "accent-pink",
                title: "Prime Logic AI Paint Estimator",
                description: "AI-powered web tool estimating paint costs from room dimensions, surfaces, and finish quality.",
                technologies: ["Manual Testing", "JIRA", "Trello"],
                metricLabel: "13 bugs found",
                metricContext: "38+ test cases for contractors and homeowners.",
                modal: {
                    theme: "pink",
                    title: "Prime Logic AI Paint Estimator",
                    overview: "Prime Logic AI Paint Estimator is an AI-powered web tool that estimates painting costs based on room dimensions, surface types, and finish quality — designed for contractors and homeowners to get instant paint job quotes.",
                    stats: [
                        { value: "38+", label: "Test Cases" },
                        { value: "70", label: "Bugs Found" },
                        { value: "Web", label: "Platform (AI)" }
                    ],
                    testingApproach: ["Manual Testing"],
                    bugsBreakdown: { critical: 20, major: 50, minor: 90 },
                    criticalBug: {
                        title: "AI estimation returns $0 when non-standard room dimensions are entered instead of showing a validation error",
                        description: "Edge-case dimensions produced invalid estimates without blocking input, risking misleading quotes for users."
                    },
                    endpointMethods: [],
                    tools: ["JIRA", "Trello", "Postman"],
                    outcome: "Improved validation and trust in AI-generated estimates for real-world quoting scenarios."
                },
                link: "#"
            }
        ];
    }

    static init() {
        const projects = new Projects();
        projects.render();
        return projects;
    }

    render() {
        if (!this.container) return;

        const projectsHTML = this.projects.map((project, index) => `
            <article class="featured-project-card">
                <div class="project-accent ${project.accentClass}" aria-hidden="true"></div>
                <div class="featured-project-body">
                    <h3 class="featured-project-title">${project.title}</h3>
                    <p class="featured-project-description">${project.description}</p>
                    <div class="featured-project-tags" aria-label="Tools used">
                        ${project.technologies.map(tech => `<span class="featured-project-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="featured-project-metric" role="note" aria-label="Project metric">
                        <p class="featured-project-metric-value">${project.metricLabel}</p>
                        <p class="featured-project-metric-text">${project.metricContext}</p>
                    </div>
                    <a href="${project.link}" class="featured-project-button js-project-details" data-project-index="${index}" aria-label="View details for ${project.title}">
                        View Details
                    </a>
                </div>
            </article>
        `).join('');

        this.container.innerHTML = projectsHTML;
        this.setupProjectModal();
    }

    setupProjectModal() {
        const modalMarkup = `
            <div id="project-details-modal" class="project-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" aria-hidden="true">
                <div class="project-modal">
                    <header class="project-modal-header project-modal-header-purple">
                        <h3 id="project-modal-title" class="project-modal-title"></h3>
                        <button type="button" class="project-modal-close" aria-label="Close project details">×</button>
                    </header>
                    <div class="project-modal-content"></div>
                </div>
            </div>
        `;

        let modal = document.getElementById('project-details-modal');
        if (!modal) {
            document.body.insertAdjacentHTML('beforeend', modalMarkup);
            modal = document.getElementById('project-details-modal');
        }

        if (!modal) return;

        const closeButton = modal.querySelector('.project-modal-close');
        const modalHeader = modal.querySelector('.project-modal-header');
        const modalTitle = modal.querySelector('#project-modal-title');
        const modalContent = modal.querySelector('.project-modal-content');
        const openButtons = this.container.querySelectorAll('.js-project-details');

        const themeClassMap = {
            purple: 'project-modal-header-purple',
            teal: 'project-modal-header-teal',
            coral: 'project-modal-header-coral',
            blue: 'project-modal-header-blue',
            amber: 'project-modal-header-amber',
            green: 'project-modal-header-green',
            pink: 'project-modal-header-pink'
        };

        const modalHeaderThemeClasses = [
            'project-modal-header-purple',
            'project-modal-header-teal',
            'project-modal-header-coral',
            'project-modal-header-blue',
            'project-modal-header-amber',
            'project-modal-header-green',
            'project-modal-header-pink'
        ];

        const renderModalContent = (projectModalData) => {
            if (!modalContent || !modalTitle || !modalHeader) {
                return;
            }

            modalHeaderThemeClasses.forEach((cls) => modalHeader.classList.remove(cls));
            modalHeader.classList.add(themeClassMap[projectModalData.theme] || themeClassMap.purple);
            modalTitle.textContent = projectModalData.title;

            const bugTotal = projectModalData.bugsBreakdown.critical + projectModalData.bugsBreakdown.major + projectModalData.bugsBreakdown.minor;
            const criticalWidth = bugTotal > 0 ? (projectModalData.bugsBreakdown.critical / bugTotal) * 100 : 0;
            const majorWidth = bugTotal > 0 ? (projectModalData.bugsBreakdown.major / bugTotal) * 100 : 0;
            const minorWidth = bugTotal > 0 ? (projectModalData.bugsBreakdown.minor / bugTotal) * 100 : 0;

            const endpointSummaryHTML = projectModalData.endpointMethods.length > 0
                ? `
                        <section class="project-modal-section">
                            <h4 class="project-modal-heading">API endpoint summary</h4>
                            <div class="project-modal-method-row">
                                ${projectModalData.endpointMethods.map(method => `<span class="project-modal-method-badge">${method}</span>`).join('')}
                            </div>
                        </section>
                `
                : '';

            const performanceInsightHTML = projectModalData.performanceInsight
                ? `
                        <section class="project-modal-section">
                            <h4 class="project-modal-heading">${projectModalData.performanceInsight.title}</h4>
                            <div class="project-modal-performance-note">
                                <p class="project-modal-performance-stable">Stable up to 100 users</p>
                                <p class="project-modal-performance-warning">Timeout errors above 100 users</p>
                                <p class="project-modal-performance-text">${projectModalData.performanceInsight.note}</p>
                            </div>
                        </section>
                `
                : '';

            modalContent.innerHTML = `
                <section class="project-modal-section">
                    <p class="project-modal-overview">${projectModalData.overview}</p>
                </section>

                <section class="project-modal-stats">
                    ${projectModalData.stats.map(stat => `
                        <div class="project-modal-stat-box">
                            <p class="project-modal-stat-value">${stat.value}</p>
                            <p class="project-modal-stat-label">${stat.label}</p>
                        </div>
                    `).join('')}
                </section>

                <section class="project-modal-section">
                    <h4 class="project-modal-heading">Testing approach</h4>
                    <div class="project-modal-tag-row">
                        ${projectModalData.testingApproach.map(tag => `<span class="project-modal-tag">${tag}</span>`).join('')}
                    </div>
                </section>

                <section class="project-modal-section">
                    <h4 class="project-modal-heading">Bugs breakdown</h4>
                    <div class="project-modal-bug-bar" aria-label="Bug distribution">
                        <span class="bug-segment bug-critical" style="width:${criticalWidth.toFixed(1)}%;"></span>
                        <span class="bug-segment bug-major" style="width:${majorWidth.toFixed(1)}%;"></span>
                        <span class="bug-segment bug-minor" style="width:${minorWidth.toFixed(1)}%;"></span>
                    </div>
                    <div class="project-modal-bug-legend">
                        <span class="bug-legend-item critical">Critical (${projectModalData.bugsBreakdown.critical})</span>
                        <span class="bug-legend-item major">Major (${projectModalData.bugsBreakdown.major})</span>
                        <span class="bug-legend-item minor">Minor (${projectModalData.bugsBreakdown.minor})</span>
                    </div>
                </section>

                <section class="project-modal-section">
                    <h4 class="project-modal-heading">Critical bug spotlight</h4>
                    <div class="project-modal-spotlight">
                        <p class="project-modal-spotlight-title">${projectModalData.criticalBug.title}</p>
                        <p class="project-modal-spotlight-text">${projectModalData.criticalBug.description}</p>
                    </div>
                </section>

                ${endpointSummaryHTML}
                ${performanceInsightHTML}

                <section class="project-modal-section">
                    <h4 class="project-modal-heading">Tools used</h4>
                    <div class="project-modal-tag-row">
                        ${projectModalData.tools.map(tool => `<span class="project-modal-tag">${tool}</span>`).join('')}
                    </div>
                </section>

                <section class="project-modal-section">
                    <h4 class="project-modal-heading">Outcome</h4>
                    <p class="project-modal-outcome">${projectModalData.outcome}</p>
                </section>
            `;
        };

        const openModal = () => {
            modal.classList.add('is-open');
            modal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('project-modal-open');
            if (closeButton) {
                closeButton.focus();
            }
        };

        const closeModal = () => {
            modal.classList.remove('is-open');
            modal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('project-modal-open');
        };

        openButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                const projectIndex = Number(button.getAttribute('data-project-index'));
                const selectedProject = this.projects[projectIndex];
                if (selectedProject && selectedProject.modal) {
                    renderModalContent(selectedProject.modal);
                }
                openModal();
            });
        });

        if (closeButton) {
            closeButton.addEventListener('click', closeModal);
        }

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modal.classList.contains('is-open')) {
                closeModal();
            }
        });
    }
}
