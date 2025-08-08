document.addEventListener('DOMContentLoaded', function() {
    
    // --- Dynamic Gradient Background ---
    const background = document.getElementById('gradient-background');
    document.addEventListener('mousemove', function(e) {
        const x = e.clientX;
        const y = e.clientY;
        background.style.setProperty('--mouse-x', x + 'px');
        background.style.setProperty('--mouse-y', y + 'px');
    });

    // --- Smooth Scroll & Active Nav Link ---
    const navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // --- Scroll Animations ---
    const animatedElements = document.querySelectorAll('.animated-section, .animated-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Animate child items with a delay
                const animatedItems = entry.target.querySelectorAll('.animated-item');
                animatedItems.forEach((item, index) => {
                    item.style.setProperty('--item-index', index);
                });
            }
        });
    }, {
        threshold: 0.15 // Element is considered visible when 15% is in view
    });

    animatedElements.forEach(el => observer.observe(el));

});