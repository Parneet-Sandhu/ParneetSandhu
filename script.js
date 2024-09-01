// Constants
const MODAL_ID = 'modal';
const MODAL_BODY_ID = 'modal-body';
const NAV_LINK_SELECTOR = 'nav ul li a';
const SECTION_CLASS = '.section-padding';
const SCROLL_OFFSET = 60;

// Open modal with specific section content
function openModal(section) {
    const modal = document.getElementById(MODAL_ID);
    const modalBody = document.getElementById(MODAL_BODY_ID);

    modal.style.display = 'block';
    modalBody.innerHTML = getModalContent(section);
}

// Get modal content based on section
function getModalContent(section) {
    switch (section) {
        case 'experience':
            return '<h2>Experience</h2>\
       <div class="experience-item"><img src="assets/dosh.jpg" alt="Dosh.ai Logo" class="company-logo"><h3>Data Science Intern at Dosh.ai</h3><p>Jun 2024 - Jul 2024</p><ul><li>Web Scraped and preprocessed over 10,000 data points using Beautiful Soup, ensured 95% data quality for analysis. </li><li>Developed predictive models with 90% accuracy by implementing machine learning algorithms and optimizing hyperparameters using Optuna.</li><li>Applied NLP techniques with Spacy for a multi-class classification project, achieving 85% accuracy in predicting labels. </li><li>Collaborated with a team of 5 to implement and fine-tune machine learning models, contributing to a 20% improvement in overall prediction accuracy. </li><li>Presented weekly progress reports to senior management, effectively communicating technical concepts to non-technical stakeholders.</li></ul></div>\
            <div class="experience-item"><img src="assets/technopedia.jpg" alt="Technopedia Solutions Pvt Ltd Logo" class="company-logo"><h3>Python Developer Intern at Technopedia Solutions Pvt Ltd</h3><p>Jun 2023 - Jul 2023</p><ul><li>Automated data processing and analysis tasks, reducing manual workload by 30% with efficient Python scripts. </li><li>Conceptualized and executed new web application features such as Flask/Django, Boosting user engagement by 15%. </li><li>Executed python projects using MySQL for backend data management.</li></ul></div>';
        case 'education':
            return '<h2>Education</h2><p>Details about your education...</p>';
        case 'blog':
            return '<h2>Skills</h2><p>Details about your skills...</p>';
        case 'project-image':
            return '<h2>Project Image</h2><img src="assets/Project 1.png" alt="Project Image"> <h2>Project Image</h2><img src="assets/Project 2.png" alt="Project Image">';
        default:
            return '';
    }
}

// Close modal
function closeModal() {
    document.getElementById(MODAL_ID).style.display = 'none';
}

// Close modal when clicking outside of the content
window.onclick = function (event) {
    if (event.target === document.getElementById(MODAL_ID)) {
        closeModal();
    }
}

// Smooth scrolling for navigation links with adjusted offset
function setupScrolling() {
    const navLinks = document.querySelectorAll(NAV_LINK_SELECTOR);

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - SCROLL_OFFSET,
                behavior: 'smooth'
            });
        });
    });
}

// Scroll animations
function setupScrollAnimations() {
    const sections = document.querySelectorAll(SECTION_CLASS);
    const options = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Initialize functions
document.addEventListener('DOMContentLoaded', function () {
    setupScrolling();
    setupScrollAnimations();
});