import '../styles/main.css';
import Typed from 'typed.js';
import AOS from 'aos';
import { initTheme } from './theme.js';
import { initMobileMenu } from './mobileMenu.js';
import { initProjects } from './projects.js';
import { initContact } from './contact.js';
import { skills } from './skills.js';
import { socialLinks } from './socialMedia.js';

// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Initialize Typed.js
new Typed('#typed-text', {
    strings: [
        'Full Stack Developer',
        'AI/ML Engineer',
        'Blockchain Developer',
        'Cybersecurity Expert'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    loop: true
});

// Initialize Skills
const skillsContainer = document.querySelector('#skills .grid');
skills.forEach((skill, index) => {
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-card';
    skillCard.setAttribute('data-aos', 'zoom-in');
    skillCard.setAttribute('data-aos-delay', (index * 100).toString());
    
    skillCard.innerHTML = `
        <div class="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="text-primary-500 mb-4">
                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    ${skill.icon}
                </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">${skill.title}</h3>
            <p class="text-gray-600 dark:text-gray-400">${skill.description}</p>
        </div>
    `;
    
    skillsContainer.appendChild(skillCard);
});

// Initialize Social Links
const socialLinksContainer = document.getElementById('social-links');
socialLinks.forEach(social => {
    const link = document.createElement('a');
    link.href = social.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors';
    link.setAttribute('aria-label', social.name);
    
    link.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            ${social.icon}
        </svg>
    `;
    
    socialLinksContainer.appendChild(link);
});

// Initialize all modules
initTheme();
initMobileMenu();
initProjects();
initContact();