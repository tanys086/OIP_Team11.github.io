// Content data for each entry
const contentData = {
    // Week 1 Days
    'day1-week1': {
        date: 'Monday, 22 July 2025',
        title: 'Day 1 - Project Kickoff & Initial Research',
        content: `
            <h3>Team Formation & Project Overview</h3>
            <p>Started our journey with the Kibble Palace footfall measurement project. Met with stakeholders from Glasgow City Council to understand their requirements for visitor analytics. Conducted initial site reconnaissance to assess the architectural constraints and heritage preservation requirements of this Category A Listed building.</p>
            
            <h3>Research Initiation</h3>
            <p>Began comprehensive research into existing visitor counting technologies. Explored various approaches including thermal imaging, computer vision, and sensor-based solutions. Identified key challenges related to heritage building constraints and the need for non-invasive measurement techniques in sensitive environments.</p>
        `
    },
    'day2-week1': {
        date: 'Tuesday, 23 July 2025',
        title: 'Day 2 - Technology Assessment & Site Analysis',
        content: `
            <h3>Technology Comparison Matrix</h3>
            <p>Developed detailed comparison matrices for different visitor counting technologies. Evaluated each solution against criteria including accuracy, heritage compliance, cost-effectiveness, and environmental resilience. Started narrowing down potential approaches based on Kibble Palace's unique requirements and Listed Building regulations.</p>
            
            <h3>Detailed Site Study</h3>
            <p>Conducted in-depth analysis of the Kibble Palace architecture, visitor flow patterns, and environmental conditions. Documented potential sensor placement locations while considering the glasshouse environment's humidity, temperature variations, and impact on historic plants and wildlife within the space.</p>
        `
    },
    'day3-week1': {
        date: 'Wednesday, 24 July 2025',
        title: 'Day 3 - LiDAR Technology Deep Dive',
        content: `
            <h3>LiDAR Technology Research</h3>
            <p>Focused research efforts on LiDAR technology applications for visitor counting. Investigated different types of LiDAR sensors, their accuracy ranges, and suitability for indoor heritage environments. Analyzed case studies of LiDAR implementations in similar heritage and museum settings worldwide.</p>
            
            <h3>Regulatory Compliance Review</h3>
            <p>Reviewed Listed Building regulations and heritage preservation guidelines. Consulted with conservation experts about acceptable installation methods for temporary monitoring equipment. Ensured our proposed LiDAR solution would meet all regulatory requirements while providing accurate visitor analytics.</p>
        `
    },
    'day4-week1': {
        date: 'Thursday, 25 July 2025',
        title: 'Day 4 - Concept Development & Initial Prototyping',
        content: `
            <h3>Solution Conceptualization</h3>
            <p>Developed initial concepts for LiDAR-based visitor counting system specifically tailored for the Kibble Palace. Created preliminary design documents outlining sensor placement strategies, data processing workflows, and dashboard interface concepts. Established technical specifications and system architecture frameworks.</p>
            
            <h3>Prototype Planning</h3>
            <p>Planned our prototyping approach and identified key components needed for proof-of-concept development. Researched suppliers for LiDAR sensors and supporting hardware. Began outlining the software architecture needed for real-time data processing and visualization dashboard development.</p>
        `
    },
    'pitch-week1': {
        date: 'Friday, 26 July 2025',
        title: 'Weekly Pitch 1 - Project Foundation & LiDAR Proposal',
        content: `
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/VcRT75NhIhA"
                        frameborder="0" 
                        allowfullscreen>
                </iframe>
            </div>
            
            <h3>Stakeholder Presentation</h3>
            <p>Presented our week's research findings to Glasgow City Council representatives...</p>
            
            <h3>Solution Validation</h3>
            <p>Validated our LiDAR approach with heritage preservation experts...</p>
        `
    },

    // Week 2 Days
    'day1-week2': {
        date: 'Monday, 28 July 2025',
        title: 'Day 5 - Prototype Development Begins',
        content: `
            <h3>Hardware Procurement & Setup</h3>
            <p>Acquired LiDAR sensors and supporting hardware components for prototype development. Set up initial testing environment to validate sensor accuracy and range capabilities. Configured development workstation with necessary software tools for LiDAR data processing and analysis algorithms.</p>
            
            <h3>Algorithm Development</h3>
            <p>Started developing core algorithms for visitor detection and counting using LiDAR point cloud data. Implemented basic filtering and noise reduction techniques to improve accuracy in the glasshouse environment. Created initial data structures for real-time processing and visitor tracking.</p>
        `
    },
    'day2-week2': {
        date: 'Tuesday, 29 July 2025',
        title: 'Day 6 - Sensor Testing & Calibration',
        content: `
            <h3>Controlled Environment Testing</h3>
            <p>Conducted extensive testing of LiDAR sensors in controlled laboratory conditions. Calibrated sensors for optimal performance in various lighting conditions and humidity levels similar to the Kibble Palace environment. Established baseline accuracy measurements and performance benchmarks for visitor counting.</p>
            
            <h3>Data Processing Pipeline</h3>
            <p>Developed robust data processing pipeline for converting raw LiDAR readings into actionable visitor analytics. Implemented real-time filtering algorithms to distinguish between visitors and environmental noise. Created preliminary data visualization tools to monitor sensor performance and counting accuracy.</p>
        `
    },
    'day3-week2': {
        date: 'Wednesday, 30 July 2025',
        title: 'Day 7 - Dashboard Interface Development',
        content: `
            <h3>User Interface Design</h3>
            <p>Designed intuitive dashboard interface for Glasgow City Council staff to monitor visitor analytics in real-time. Created wireframes and user experience flows for accessing daily, weekly, and monthly visitor statistics. Ensured interface accessibility and ease of use for non-technical staff members.</p>
            
            <h3>Data Visualization Components</h3>
            <p>Developed interactive charts and graphs for displaying visitor patterns, peak hours, and occupancy trends. Implemented responsive design principles to ensure dashboard accessibility across desktop and mobile devices. Created export functionality for generating reports and sharing analytics with stakeholders.</p>
        `
    },
    'day4-week2': {
        date: 'Thursday, 31 July 2025',
        title: 'Day 8 - Integration & System Testing',
        content: `
            <h3>System Integration</h3>
            <p>Integrated LiDAR sensors with data processing algorithms and dashboard interface to create comprehensive visitor analytics system. Conducted end-to-end testing to ensure seamless data flow from sensors to user interface. Resolved integration challenges and optimized system performance for real-world deployment scenarios.</p>
            
            <h3>Performance Optimization</h3>
            <p>Optimized algorithm performance for real-time processing of LiDAR data streams. Implemented efficient memory management and processing techniques to handle continuous operation. Conducted stress testing to validate system stability under various visitor volume scenarios and environmental conditions.</p>
        `
    },
    'day5-week2': {
        date: 'Friday, 1 August 2025',
        title: 'Day 9 - Field Testing Preparation',
        content: `
            <h3>Pre-Deployment Testing</h3>
            <p>Prepared comprehensive testing protocols for field deployment at the Kibble Palace. Developed installation procedures that comply with heritage building requirements and minimize disruption to daily operations. Created backup systems and contingency plans to ensure reliable data collection during testing phases.</p>
            
            <h3>Documentation & Training Materials</h3>
            <p>Created detailed documentation for system operation, maintenance, and troubleshooting procedures. Developed training materials for Glasgow City Council staff who will operate the visitor analytics system. Prepared user manuals and quick reference guides to facilitate smooth system adoption and operation.</p>
        `
    },
    'pitch-week2': {
        date: 'Saturday, 2 August 2025',
        title: 'Weekly Pitch 2 - Prototype Demonstration & Testing Results',
        content: `
            <div class="video-container">
                <iframe src="https://youtube.com/embed/IHbARJpyCKE" 
                        frameborder="0" 
                        allowfullscreen>
                </iframe>
            </div>
            
            <h3>Prototype Demonstration</h3>
            <p>Presented fully functional LiDAR visitor counting prototype...</p>
        `
    },

    // Week 3 Days
    'day1-week3': {
        date: 'Monday, 4 August 2025',
        title: 'Day 10 - Field Deployment & Installation',
        content: `
            <h3>On-Site Installation</h3>
            <p>Deployed LiDAR sensors at the Kibble Palace following heritage-compliant installation procedures. Worked closely with conservation staff to ensure minimal impact on the historic building and plant collections. Successfully installed sensors at optimal locations for comprehensive visitor coverage while maintaining aesthetic integrity.</p>
            
            <h3>System Commissioning</h3>
            <p>Commissioned the visitor analytics system for live operation at the Kibble Palace. Conducted initial calibration using real visitor traffic patterns and environmental conditions. Verified data transmission reliability and dashboard functionality under actual operating conditions with Glasgow City Council staff observation.</p>
        `
    },
    'day2-week3': {
        date: 'Tuesday, 5 August 2025',
        title: 'Day 11 - Live Data Collection & Analysis',
        content: `
            <h3>Real-World Data Gathering</h3>
            <p>Initiated live data collection from LiDAR sensors during normal Kibble Palace operating hours. Monitored system performance and visitor counting accuracy throughout various times of day and visitor volume conditions. Collected baseline data for comparison with traditional manual counting methods.</p>
            
            <h3>Performance Monitoring</h3>
            <p>Conducted continuous monitoring of system performance metrics including sensor accuracy, data processing speed, and dashboard responsiveness. Identified and resolved minor calibration issues to optimize counting precision. Documented system behavior under different weather conditions and visitor density scenarios.</p>
        `
    },
    'day3-week3': {
        date: 'Wednesday, 6 August 2025',
        title: 'Day 12 - Data Validation & Accuracy Assessment',
        content: `
            <h3>Accuracy Validation Study</h3>
            <p>Conducted comprehensive accuracy validation by comparing LiDAR counting results with manual observer counts throughout the day. Achieved excellent correlation between automated and manual counting methods, validating our system's reliability. Identified specific scenarios where accuracy could be further improved through algorithm refinement.</p>
            
            <h3>Environmental Impact Assessment</h3>
            <p>Assessed system impact on the Kibble Palace environment, including effects on plant health and visitor experience. Confirmed minimal environmental disruption and positive feedback from staff regarding non-intrusive nature of LiDAR sensors. Validated compliance with all heritage building preservation requirements.</p>
        `
    },
    'day4-week3': {
        date: 'Thursday, 7 August 2025',
        title: 'Day 13 - System Refinement & Optimization',
        content: `
            <h3>Algorithm Enhancement</h3>
            <p>Refined visitor detection algorithms based on real-world performance data and environmental observations. Implemented advanced filtering techniques to improve accuracy in challenging conditions such as group movements and varying lighting. Enhanced system robustness for long-term operational reliability.</p>
            
            <h3>Dashboard Feature Enhancement</h3>
            <p>Enhanced dashboard functionality based on user feedback from Glasgow City Council staff. Added advanced analytics features including visitor pattern analysis, peak time predictions, and comparative reporting tools. Improved user interface responsiveness and added customizable reporting options for different stakeholder needs.</p>
        `
    },
    'day5-week3': {
        date: 'Friday, 8 August 2025',
        title: 'Day 14 - Final Testing & Documentation',
        content: `
            <h3>Comprehensive System Testing</h3>
            <p>Conducted final comprehensive testing of the complete visitor analytics system under various operational scenarios. Validated system performance during peak visitor hours, special events, and different weather conditions. Confirmed reliable operation and accurate data collection across all testing parameters.</p>
            
            <h3>Final Documentation & Handover Preparation</h3>
            <p>Completed comprehensive system documentation including technical specifications, operational procedures, and maintenance guidelines. Prepared handover materials for Glasgow City Council including training resources and ongoing support procedures. Finalized project deliverables and prepared for final presentation to stakeholders.</p>
        `
    },

    // Additional Pages

    'team-contract': {
    date: 'Team Agreement Document',
    title: 'Team Contract & Working Agreement',
    content: `
        <div class="pdf-container">
            <iframe src="documents/T11_Team_Contract.pdf" 
                    frameborder="0" 
                    type="application/pdf">
                <p>Your browser does not support PDF viewing. 
                   <a href="documents/T11_Team_Contract.pdf" target="_blank">Download the Team Contract PDF</a>
                </p>
            </iframe>
        </div>
        
        <h3>Document Overview</h3>
        <p>This team contract outlines our working agreements, roles, responsibilities, and collaboration protocols for the Kibble Palace LiDAR project. It establishes clear expectations for communication, decision-making processes, and conflict resolution procedures throughout our development cycle.</p>
        <p>The contract covers meeting schedules, task distribution, quality standards, deadline commitments, and individual accountability measures. These agreements ensure effective teamwork and successful project delivery while maintaining professional relationships and shared learning objectives.</p>
    `
    },
    'future-works': {
        date: 'Future Development Plans',
        title: 'Future Works & System Expansion',
        content: `
            <h3>Technology Advancement Opportunities</h3>
            <p>Identified several opportunities for advancing our LiDAR visitor analytics system including machine learning integration for predictive analytics, mobile app development for visitor engagement, and expanded sensor networks for comprehensive site monitoring. Planning integration with existing Glasgow City Council digital infrastructure systems.</p>
            
            <h3>Heritage Site Network Expansion</h3>
            <p>Proposed expansion of LiDAR visitor counting technology to other Glasgow heritage sites including additional botanic garden locations, historic buildings, and cultural venues. Developed scalable deployment framework that can be adapted for various heritage environments while maintaining preservation standards and regulatory compliance.</p>
        `
    },
    'reflection': {
        date: 'Project Reflection & Learning Outcomes',
        title: 'A word from the Team',
        content: `
            <h3></h3>

        `
    },
    'proud-page': {
        date: 'Project Achievements & Pride Points',
        title: 'What We\'re Proud Of',
        content: `
            <h3>Innovation in Heritage Preservation</h3>
            <p>Most proud of successfully developing a cutting-edge LiDAR solution that respects and preserves the heritage integrity of the Kibble Palace while providing accurate visitor analytics. Achieved seamless integration of modern technology with historic building requirements, setting new standards for heritage site technology implementation.</p>
            
            <h3>Stakeholder Impact & Future Benefits</h3>
            <p>Proud of delivering measurable value to Glasgow City Council through improved visitor understanding and operational efficiency. Created sustainable, non-invasive monitoring solution that will benefit Kibble Palace management for years to come while serving as a model for other heritage sites worldwide.</p>
        `
    }
};

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

// Sidebar week toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const weekToggles = document.querySelectorAll('.week-toggle');
    
    weekToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const weekId = this.dataset.week;
            const weekContent = document.getElementById(weekId);
            const isCollapsed = weekContent.classList.contains('collapsed');
            
            if (isCollapsed) {
                weekContent.classList.remove('collapsed');
                this.classList.remove('collapsed');
                this.setAttribute('aria-expanded', 'true');
            } else {
                weekContent.classList.add('collapsed');
                this.classList.add('collapsed');
                this.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Set initial aria-expanded state
        toggle.setAttribute('aria-expanded', 'true');
    });
});

// Content loading functionality
document.addEventListener('DOMContentLoaded', function() {
    const contentLinks = document.querySelectorAll('[data-content]');
    const welcomeContent = document.getElementById('welcome-content');
    const dynamicContent = document.getElementById('dynamic-content');
    
    contentLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const contentId = this.dataset.content;
            const data = contentData[contentId];
            
            if (data) {
                // Remove active class from all links
                contentLinks.forEach(l => l.classList.remove('active'));
                
                // Add active class to clicked link
                this.classList.add('active');
                
                // Hide welcome content, show dynamic content
                welcomeContent.classList.remove('active');
                dynamicContent.classList.add('active');
                
                // Load content
                dynamicContent.innerHTML = `
                    <div class="entry-header">
                        <div class="entry-date">${data.date}</div>
                        <h1 class="entry-title">${data.title}</h1>
                    </div>
                    <div class="entry-content">
                        ${data.content}
                    </div>
                `;
                
                // Scroll to top of content
                const contentArea = document.querySelector('.content-area');
                if (contentArea) {
                    contentArea.scrollTo(0, 0);
                }
            }
        });
    });
    
    // Handle logo click to return to welcome content
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '' || href === null) {
                e.preventDefault();
                showWelcomeContent();
            }
        });
    }
    
    // Function to show welcome content
    function showWelcomeContent() {
        // Remove active class from all sidebar links
        contentLinks.forEach(l => l.classList.remove('active'));
        
        // Show welcome content, hide dynamic content
        dynamicContent.classList.remove('active');
        welcomeContent.classList.add('active');
        
        // Scroll to top
        const contentArea = document.querySelector('.content-area');
        if (contentArea) {
            contentArea.scrollTo(0, 0);
        }
    }
    
    // Handle dropdown navigation clicks
    const dropdownLinks = document.querySelectorAll('.dropdown-link[data-content]');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const contentId = this.dataset.content;
            const sidebarLink = document.querySelector('.sidebar [data-content="' + contentId + '"]');
            
            if (sidebarLink) {
                sidebarLink.click();
            }
        });
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'linear-gradient(135deg, #96ddc0, #7bc49a)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #a8e6cf, #88c999)';
            header.style.backdropFilter = 'none';
        }
    }
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
    const main = document.querySelector('.content-area');
    if (main) {
        main.id = 'main-content';
        main.setAttribute('tabindex', '-1');
    }
});

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

// Replace the existing scroll event listener with debounced version
const optimizedScrollHandler = debounce(function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'linear-gradient(135deg, #96ddc0, #7bc49a)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #a8e6cf, #88c999)';
            header.style.backdropFilter = 'none';
        }
    }
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Console welcome message
console.log('%c📊 Welcome to the Work Portfolio!', 'color: #3498db; font-size: 16px; font-weight: bold;');
console.log('%cExplore our daily progress and weekly achievements!', 'color: #2c3e50; font-size: 12px;');