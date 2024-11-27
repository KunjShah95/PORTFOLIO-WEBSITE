const projects = [
    {
        title: 'AI-Powered Analytics Platform',
        description: 'Advanced analytics platform using machine learning for predictive insights.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
        tags: ['Python', 'TensorFlow', 'React', 'AWS'],
        link: '#'
    },
    {
        title: 'Blockchain Voting System',
        description: 'Secure and transparent voting system built on Ethereum.',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0',
        tags: ['Solidity', 'Web3.js', 'Node.js'],
        link: '#'
    },
    {
        title: 'Cybersecurity Scanner',
        description: 'Automated vulnerability scanner for web applications.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
        tags: ['Python', 'Docker', 'REST API'],
        link: '#'
    }
];

export function initProjects() {
    const projectsContainer = document.querySelector('#projects .grid');
    
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-aos', 'fade-up');
        projectCard.setAttribute('data-aos-delay', (index * 100).toString());
        
        projectCard.innerHTML = `
            <div class="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">${project.title}</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.tags.map(tag => `
                            <span class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm">
                                ${tag}
                            </span>
                        `).join('')}
                    </div>
                    <a href="${project.link}" class="inline-block px-6 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors">
                        View Project
                    </a>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}