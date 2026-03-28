// Skills Component
class Skills {
    constructor() {
        this.skillsGrid = document.getElementById('skills-grid');
        this.detailedSkillsGrid = document.getElementById('detailed-skills-grid');
        this.skills = [
            {
                name: "Manual Testing",
                icon: "fas fa-clipboard-check",
                level: 95,
                description: "Comprehensive manual testing including functional, regression, integration, and user acceptance testing.",
                color: "from-blue-500 to-blue-600"
            },
            {
                name: "Selenium Automation",
                icon: "fas fa-robot",
                level: 45,
                description: "Expert in Selenium WebDriver with Java, TestNG, and Page Object Model for robust test automation.",
                color: "from-green-500 to-green-600"
            },
            {
                name: "API Testing",
                icon: "fas fa-code",
                level: 85,
                description: "REST and SOAP API testing using Postman, RestAssured, and custom automation frameworks.",
                color: "from-purple-500 to-purple-600"
            },
            {
                name: "Test Management",
                icon: "fas fa-tasks",
                level: 75,
                description: "Jira, TestRail, and HP ALM for test case management, defect tracking, and reporting.",
                color: "from-orange-500 to-orange-600"
            },
            {
                name: "Performance Testing",
                icon: "fas fa-tachometer-alt",
                level: 60,
                description: "Load and performance testing using JMeter, LoadRunner, and cloud-based testing tools.",
                color: "from-red-500 to-red-600"
            },
            {
                name: "Database Testing",
                icon: "fas fa-database",
                level: 40,
                description: "SQL proficiency for database validation, data integrity testing, and ETL process verification.",
                color: "from-indigo-500 to-indigo-600"
            },
            {
                name: "Mobile Testing",
                icon: "fas fa-mobile-alt",
                level: 78,
                description: "Cross-platform mobile testing for iOS and Android using Appium and real device testing.",
                color: "from-pink-500 to-pink-600"
            },
            {
                name: "CI/CD Integration",
                icon: "fas fa-cogs",
                level: 50,
                description: "Jenkins, GitLab CI, and GitHub Actions for automated testing in CI/CD pipelines.",
                color: "from-teal-500 to-teal-600"
            }
        ];
    }

    static init() {
        const skills = new Skills();
        skills.render();
        return skills;
    }

    render() {
        if (this.skillsGrid) {
            this.renderOverviewSkills();
        }
        if (this.detailedSkillsGrid) {
            this.renderDetailedSkills();
        }
    }

    renderOverviewSkills() {
        const skillsHTML = this.skills.map(skill => `
            <div class="skill-card">
                <div class="skill-icon bg-gradient-to-r ${skill.color}">
                    <i class="${skill.icon}"></i>
                </div>
                <h3 class="text-xl font-bold mb-4 text-gray-800">${skill.name}</h3>
                <div class="progress-bar">
                    <div class="progress-fill bg-gradient-to-r ${skill.color}" style="width: ${skill.level}%"></div>
                </div>
                <p class="text-sm text-gray-600 mt-2">${skill.level}% Proficiency</p>
            </div>
        `).join('');

        this.skillsGrid.innerHTML = skillsHTML;
    }

    renderDetailedSkills() {
        const skillsHTML = this.skills.map(skill => `
            <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div class="flex items-start space-x-6">
                    <div class="skill-icon bg-gradient-to-r ${skill.color} flex-shrink-0">
                        <i class="${skill.icon}"></i>
                    </div>
                    <div class="flex-1">
                        <h3 class="text-2xl font-bold mb-4 text-gray-800">${skill.name}</h3>
                        <p class="text-gray-600 mb-6 leading-relaxed">${skill.description}</p>
                        <div class="progress-bar">
                            <div class="progress-fill bg-gradient-to-r ${skill.color}" style="width: ${skill.level}%"></div>
                        </div>
                        <p class="text-sm text-gray-600 mt-2 font-semibold">${skill.level}% Proficiency</p>
                    </div>
                </div>
            </div>
        `).join('');

        this.detailedSkillsGrid.innerHTML = skillsHTML;
    }
}
