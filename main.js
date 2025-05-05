document.addEventListener('DOMContentLoaded', function() {
  // Theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Check for saved theme preference or default to light
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
  }
  
  // Theme toggle event listener
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
  });
  
  // Typing effect for hero section
  const typedTextElement = document.getElementById('typed-text');
  // const text = "Frontend Developer";
  const text = "Full stack Developer";
  let i = 0;
  
  function typeWriter() {
    if (i < text.length) {
      typedTextElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  
  // Start typing effect
  typeWriter();
  
  // Responsive header
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileCloseBtn = document.querySelector('.mobile-close-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  
  mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.add('show');
    document.body.style.overflow = 'hidden';
  });
  
  mobileCloseBtn.addEventListener('click', () => {
    mobileNav.classList.remove('show');
    document.body.style.overflow = '';
  });
  
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('show');
      document.body.style.overflow = '';
    });
  });
  
  // Smooth scrolling for all internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(navLink => {
          navLink.classList.remove('active');
        });
        document.querySelector(`.nav-link[href="#${targetId}"]`)?.classList.add('active');
      }
    });
  });
  
  // Update active nav link on scroll
  const sections = document.querySelectorAll('section');
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    document.querySelectorAll('.nav-link').forEach(navLink => {
      navLink.classList.remove('active');
      if (navLink.getAttribute('href') === `#${current}`) {
        navLink.classList.add('active');
      }
    });
  });
  
  // Load Skills
  function populateSkills() {
    const frontendSkillsContainer = document.getElementById('frontend-skills');
    const backendSkillsContainer = document.getElementById('backend-skills');
    const toolsSkillsContainer = document.getElementById('tools-skills');
    
    // Filter skills by category
    const frontendSkills = skills.filter(skill => skill.category === 'Frontend Development');
    const backendSkills = skills.filter(skill => skill.category === 'Backend Development');
    const toolsSkills = skills.filter(skill => skill.category === 'Tools & Others');
    
    // Generate HTML for each skill category
    function createSkillHTML(skill) {
      return `
        <div class="skill-item">
          <div class="skill-header">
            <span class="skill-name">${skill.name}</span>
            <span class="skill-percentage">${skill.proficiency}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" style="width: 0%;" data-width="${skill.proficiency}%"></div>
          </div>
        </div>
      `;
    }
    
    // Populate containers
    frontendSkillsContainer.innerHTML = frontendSkills.map(createSkillHTML).join('');
    backendSkillsContainer.innerHTML = backendSkills.map(createSkillHTML).join('');
    toolsSkillsContainer.innerHTML = toolsSkills.map(createSkillHTML).join('');
    
    // Animate skill bars on scroll
    animateSkillBars();
  }
  
  // Animate skill bars when they come into view
  function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.width = entry.target.dataset.width;
          }, 200);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    skillBars.forEach(bar => {
      observer.observe(bar);
    });
  }
  
  // Load Projects
  function populateProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    // Function to create project HTML
    function createProjectHTML(project) {
      return `
        <div class="project-card" data-category="${project.category}">
          <img src="${project.imageUrl}" alt="${project.title}" class="project-image">
          <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
              ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
                <i class="fab fa-github"></i> GitHub
              </a>
              <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
                <i class="fas fa-external-link-alt"></i> Live Demo
              </a>
            </div>
          </div>
        </div>
      `;
    }
    
    // Render all projects initially
    projectsGrid.innerHTML = projects.map(createProjectHTML).join('');
    
    // Project filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filterCategory = button.dataset.category;
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
          if (filterCategory === 'all' || card.dataset.category === filterCategory) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
  
  // Load Work Experience
  function populateExperience() {
    const timelineContainer = document.getElementById('timeline-items');
    
    // Sort experiences by id (assuming higher id means more recent)
    const sortedExperiences = [...experiences].sort((a, b) => a.id - b.id).reverse();
    
    timelineContainer.innerHTML = sortedExperiences.map(exp => `
      <div class="timeline-item">
        <div class="timeline-dot ${exp.isActive ? 'active' : ''}"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <h4 class="timeline-role">${exp.title}</h4>
            <div class="timeline-company">${exp.company}</div>
            <div class="timeline-period">${exp.period}</div>
          </div>
          <p class="timeline-description">${exp.description}</p>
        </div>
      </div>
    `).join('');
  }
  
  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // In a real implementation, you would send this data to a server
    // For now, we'll just show an alert
    const formData = new FormData(contactForm);
    const formValues = Object.fromEntries(formData.entries());
    
    alert('Thank you for your message! In a real implementation, this would be sent to a server.');
    contactForm.reset();
  });
  
  // Update copyright year
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Call functions to populate data
  populateSkills();
  populateProjects();
  populateExperience();
  
  // Initially hide the mobile menu
  mobileNav.classList.remove('show');
});