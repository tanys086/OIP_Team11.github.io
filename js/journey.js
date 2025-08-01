// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Update aria-expanded attribute for accessibility
            const isExpanded = navMenu.classList.contains('active');
            mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
            
            // Animate hamburger menu
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (isExpanded) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    span.style.transform = '';
                    span.style.opacity = '';
                }
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target) || mobileMenuToggle.contains(event.target);
            
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                
                // Reset hamburger menu
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = '';
                    span.style.opacity = '';
                });
            }
        });

        // Close mobile menu when pressing Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                mobileMenuToggle.focus(); // Return focus to toggle button
                
                // Reset hamburger menu
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = '';
                    span.style.opacity = '';
                });
            }
        });
    }
});

// Smooth scrolling for internal links and journey navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Add temporary highlight to target section
            target.style.transition = 'background-color 0.3s ease';
            target.style.backgroundColor = 'rgba(52, 152, 219, 0.05)';
            setTimeout(() => {
                target.style.backgroundColor = '';
            }, 2000);
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'linear-gradient(135deg, #96ddc0, #7bc49a)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #a8e6cf, #88c999)';
        header.style.backdropFilter = 'none';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Add special animation for timeline items
            if (entry.target.classList.contains('timeline-item')) {
                entry.target.style.transform = 'translateX(0) translateY(0)';
            }
        }
    });
}, observerOptions);

// Apply fade-in animations to various elements
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll(
        '.split-content, .timeline-item, .prototype-card, .comparison-table, .justification-points'
    );
    
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        // Special animation for timeline items
        if (element.classList.contains('timeline-item')) {
            if (element.classList.contains('left')) {
                element.style.transform = 'translateX(-50px) translateY(30px)';
            } else {
                element.style.transform = 'translateX(50px) translateY(30px)';
            }
        }
        
        observer.observe(element);
    });
});

// Interactive table row highlighting
document.addEventListener('DOMContentLoaded', function() {
    const tableRows = document.querySelectorAll('tbody tr');
    
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Prototype card enhanced interactions
document.querySelectorAll('.prototype-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.prototype-icon');
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
            icon.style.transition = 'transform 0.3s ease';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.prototype-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
    
    card.addEventListener('click', function() {
        // Add click feedback
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Journey navigation highlight active section
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.journey-nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Add active styles for journey navigation
const style = document.createElement('style');
style.textContent = `
    .journey-nav-link.active {
        background: rgba(255,255,255,0.2);
        border-color: rgba(255,255,255,0.8);
        transform: translateY(-2px);
    }
`;
document.head.appendChild(style);

// Keyboard navigation for dropdowns
document.querySelectorAll('.dropdown').forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');
    const links = menu.querySelectorAll('.dropdown-link');
    
    toggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            menu.style.opacity = menu.style.opacity === '1' ? '0' : '1';
            menu.style.visibility = menu.style.visibility === 'visible' ? 'hidden' : 'visible';
            
            if (menu.style.visibility === 'visible') {
                links[0].focus();
            }
        }
    });
    
    links.forEach((link, index) => {
        link.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const nextIndex = (index + 1) % links.length;
                links[nextIndex].focus();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prevIndex = index === 0 ? links.length - 1 : index - 1;
                links[prevIndex].focus();
            } else if (e.key === 'Escape') {
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
                toggle.focus();
            }
        });
    });
});

// Timeline marker animation on scroll
const timelineMarkers = document.querySelectorAll('.timeline-marker');
const timelineObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const marker = entry.target;
            marker.style.transform = 'scale(1.2)';
            marker.style.transition = 'transform 0.3s ease';
            
            setTimeout(() => {
                marker.style.transform = 'scale(1)';
            }, 300);
        }
    });
}, { threshold: 0.5 });

timelineMarkers.forEach(marker => {
    timelineObserver.observe(marker);
});

// Enhanced accessibility: Skip to main content
document.addEventListener('DOMContentLoaded', function() {
    // Create skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #2c3e50;
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 10000;
        border-radius: 4px;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add id to main content
    const main = document.querySelector('main');
    if (main) {
        main.id = 'main-content';
        main.setAttribute('tabindex', '-1');
    }
});

// Button interaction feedback
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Replace scroll event listeners with debounced versions
const optimizedScrollHandler = debounce(function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'linear-gradient(135deg, #96ddc0, #7bc49a)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #a8e6cf, #88c999)';
        header.style.backdropFilter = 'none';
    }
}, 10);

const optimizedJourneyNavHandler = debounce(function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.journey-nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}, 50);

// Replace existing scroll listeners
window.addEventListener('scroll', optimizedScrollHandler);
window.addEventListener('scroll', optimizedJourneyNavHandler);

// Console welcome message
console.log('%c🚀 Welcome to our Project Journey!', 'color: #3498db; font-size: 16px; font-weight: bold;');
console.log('%cExplore our innovative LiDAR solution development process!', 'color: #2c3e50; font-size: 12px;');