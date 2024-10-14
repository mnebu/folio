// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project data (replace with your own projects)
const projects = [
    {
        title: "Project 1",
        description: "Description of Project 1",
        image: "project1.jpg",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveDemo: "#",
        github: "#"
    },
    {
        title: "Project 2",
        description: "Description of Project 2",
        image: "project2.jpg",
        technologies: ["React", "Node.js", "MongoDB"],
        liveDemo: "#",
        github: "#"
    },
    // Add more projects as needed
];

// Populate projects section
const projectGrid = document.querySelector('.project-grid');
projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p>Technologies: ${project.technologies.join(', ')}</p>
            <a href="${project.liveDemo}" target="_blank">Live Demo</a>
            <a href="${project.github}" target="_blank">GitHub</a>
        </div>
    `;
    projectGrid.appendChild(projectCard);
});

// Skills data (replace with your own skills)
const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "Python", level: 65 },
    // Add more skills as needed
];

// Populate skills section
const skillsContainer = document.querySelector('.skills-container');
skills.forEach(skill => {
    const skillBar = document.createElement('div');
    skillBar.classList.add('skill-bar');
    skillBar.innerHTML = `
        <div class="skill-name">${skill.name}</div>
        <div class="skill-bar">
            <div class="skill-progress" style="width: ${skill.level}%"></div>
        </div>
    `;
    skillsContainer.appendChild(skillBar);
});

// Form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically send the form data to a server
    // For this example, we'll just log it to the console
    console.log('Form submitted:', {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
    });
    alert('Thank you for your message! I\'ll get back to you soon.');
    this.reset();
});

// Animate skill bars on scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        if (barTop < window.innerHeight) {
            bar.style.width = bar.parentElement.getAttribute('data-progress') + '%';
        }
    });
}

window.addEventListener('scroll', animateSkillBars);
animateSkillBars(); // Initial call to animate skills that are already in view
