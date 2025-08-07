// Content data for each entry
const contentData = {
  // reflect 1 Days
    interaction1: {
    date: "22 July 2025",
    title: "Interaction 1 - The Friends of Glasgow Botanic Gardens",
    content: `
        <h3>Project Launch & Initial Discoveries</h3>
        <p>Before conducting the stakeholder interview, we first learned how to ask effective, unbiased questions. This included avoiding leading questions that might influence responses, double-barrelled questions that combine multiple queries, and self-predictive questions that often yield inaccurate answers. We also focused on asking about recent experiences rather than distant memories, which tend to be unreliable. Importantly, we were introduced to the MOM Test, a method that emphasizes understanding the problem before proposing a solution.</p>

        <p>With these principles in mind, we quickly brainstormed and refined a set of thoughtful, open-ended questions. During the interview, we asked:</p>

        <p>- What do you think about using sensors to track how people move through public spaces ? </p>
        <p>- What does your organisation do for Kibble Palace ?</p>
        <p>- Why do you want to implement footfall tracking now ?</p>
        <p>- Can you rank the priority of accuracy, budget, and aesthetics ?</p>
        <p>- Have there been other attempts to solve this issue and why did they fail ?</p>
        <p>- What are the key constraints we should be aware of ?</p>

        <p>These questions helped us dive deeper into the stakeholder’s needs and priorities, giving us a much clearer picture of the problem space. By the end of the session, we had gained valuable insights that directly shaped our early ideation and prototyping process.</p>

        <p>Through the conversation, it became clear that the stakeholder’s primary goal is to measure footfall accurately while keeping costs low. Given that the Kibble Palace is a Category A Listed building, they also emphasized the importance of preserving its structure and ensuring the safety of both the plants and animals housed within it.</p>

        <p>From this, we identified three key insights to guide our design: sustainability to protect the ecosystem, risk-averse compliance to uphold accountability, and modular design to ensure flexibility and minimal disruption. These guiding principles aim to balance environmental care, safety, and adaptability.</p>

        <p>We also learned about several previous implementations they had tried. While these solutions aimed to address the same problem, they often fell short, lacking in accuracy and becoming increasingly costly to maintain over time. These failures underscored the need for a more reliable and sustainable solution moving forward.</p>

        <p>This experience taught us the importance of preparation and critical questioning when engaging with stakeholders. By learning how to ask effective, unbiased questions and applying the MOM Test, we were able to focus on understanding the real problem rather than jumping to premature solutions. The interview not only clarified the stakeholder’s priorities, such as accuracy, cost-effectiveness, and non-intrusiveness, but also revealed the constraints posed by the heritage status of the Kibble Palace. It taught us that successful design requires more than technical feasibility, it demands sensitivity to context, sustainability, and long-term practicality. The insights we gained shaped our direction and reminded us that understanding the needs and limitations from the outset is key to creating meaningful, user-aligned solutions.</p>
    `,
    },


    interaction2: {
    date: "31 July 2025",
    title: "Interaction 2 -  Visitor to the Glasgow Botanic Garden",
    content: `
        <h3>Direct Stakeholder Engagement & User Perspective</h3>
        <p>Our second interaction was with a visitor to the Glasgow Botanic Garden. This interaction helped guide our solution by ensuring it also aligns with the expectations and comfort of the public, keeping user experience at the forefront. Using the same principles and style of open-ended questioning, we aimed to better understand public perception of sensor technologies in shared spaces. We asked:</p>

        <p>What do you think about using sensors to track how people move through public spaces ?</p>
        <p>Would you feel uncomfortable knowing your movements were being tracked anonymously ?</p>
        <p>What kind of information would you not want this system to collect ?</p>
        <p>Do you have any concerns or suggestions about using this kind of technology here ?</p>
        <p>What would make you feel more comfortable with such a system in public gardens ?</p>

        <p>From this conversation, we uncovered several key preferences that helped shape a more visitor-centric approach. Comfort was a top priority, the visitor expressed a strong preference for minimal, short-term tracking, stating: “the less time monitored, the better.” Privacy was equally important: no images should be taken, and any data collection should be communicated in advance. Lastly, they favoured non-contact technology, preferring systems that don’t require physical interaction.</p>

        <p>These insights led us to define three additional guiding principles for our design:</p>

        <p>Respecting visitors’ need for control by minimising monitoring duration.<br />
        Upholding dignity and consent through transparent and non-invasive data practices.<br />
        Prioritising non-intrusive interaction by eliminating physical contact.</p>

        <p>Combined with the stakeholder’s input, these principles form a well-rounded foundation for our solution, one that balances operational effectiveness with public trust and comfort, ensuring it is both responsible and respectful within a public garden setting.</p>

        <p>This interaction reinforced the critical importance of centering the user experience when designing technology for public spaces. While operational goals such as accuracy and cost are essential, the visitor’s feedback highlighted that comfort, privacy, and consent are equally vital. We learned that people want to maintain control over their personal data and prefer transparency around how and when data is collected. The strong preference for minimal, short-term tracking and non-contact technology emphasizes the need for solutions that are as unobtrusive and respectful as possible. These insights deepened our understanding that technological innovation must be balanced with ethical considerations and public trust. Integrating these values into our design ensures that our solution is not only effective but also socially responsible and user-friendly in sensitive environments like public gardens.</p>
    `,
    },


    interaction3: {
    date: "4 August 2025",
    title: "Interaction 3 - The Friends of Glasgow Botanic Gardens",
    content: `
        <h3>Successful Stakeholder Engagement and Final Discoveries</h3>
        <p>For our third interaction, we had a brief Teams call with a representative from Friends of Glasgow. Even though this was originally meant to be our second meeting, it was rescheduled and became the third. This experience taught us the importance of flexibility and adaptability when working with stakeholders. During the call, we presented our prototype and shared the progress we had made over the past three weeks. We sought her feedback to confirm whether we were moving in the right direction and to identify any potential improvements. She responded positively, expressing enthusiasm for the concept. Additionally, she highlighted the importance of inclusivity, suggesting that this aspect could be incorporated into the final product through programming enhancements.</p>

        <p>This interaction provided valuable validation that our prototype is heading in the right direction, boosting our confidence in the approach we have taken so far. Positive feedback from a knowledgeable community representative reinforced that our design addresses key needs effectively. At the same time, her suggestion about incorporating inclusivity reminded us of the importance of considering diverse user needs. It highlighted that even at the prototyping stage, there is room to expand the solution’s accessibility and relevance. This feedback encourages us to think beyond technical functionality and focus on creating an inclusive product that serves all members of the community.</p>
    `,
    },



    prototype: {
    date: "8 August 2025",
    title: "Prototyping Process Reflection",
    content: `
        <p>Our prototyping process closely followed the Double Diamond model, providing a structured and iterative approach to problem-solving. In Week 1, we began by receiving the problem statement and conducting research to deepen our understanding. We developed targeted questions for Friends of Glasgow and the Botanic Gardens to gather valuable insights. Based on their responses, we initiated ideation to explore possible solutions and prototype some of them.</p>

        <p>In Week 2, we made use of the prototypes created and tested them with visitors to the Botanic Gardens. During this phase, we applied the MOM Test to ensure that feedback focused on understanding the core problem rather than steering us toward specific solutions.</p>

        <p>Following this testing, we entered a second round of ideation, incorporating lessons from class on integrative thinking. Using tools like the pro-pro and tension tables, we refined our concepts to balance competing priorities such as affordability and accuracy. This process culminated in our final prototype: a LiDAR system powered by a Raspberry Pi.</p>

        <p>Alongside the hardware prototype, we developed a dashboard prototype. We began by identifying the essential features required for a minimum viable product (MVP). Through further research and iterative testing, we explored additional functionalities that the client might require, ultimately finalizing the dashboard design based on these insights.</p>

        <p>Throughout the prototyping journey, we learned three key lessons that enhanced both our process and teamwork. First, we deepened our empathy for user needs, ensuring our design directly addressed real pain points and priorities.</p>

        <p>Second, we recognized that team members sometimes had different interpretations of the problem and potential solutions. Rather than being a setback, this diversity of perspectives was valuable; it enriched our ideation process by allowing us to consider multiple points of view and generate more creative solutions.</p>

        <p>Third, we discovered the importance of building a shared mental model through discussions and sketches, which helped us stay coordinated and focused throughout the project. Having this common understanding ensured everyone was on the same page about what the prototype meant and how it functioned, crucial for the smooth progression and future development of the project. Prototyping played a key role in creating and reinforcing this shared vision.</p>

        <p>This process highlighted the importance of following a structured, iterative approach like the Double Diamond model. By beginning with thorough research and crafting open-ended questions using the MOM Test, we ensured that our inquiries stayed focused on uncovering real user needs rather than leading respondents toward specific solutions. This approach helped us gain a deep understanding of the problem space.</p>

        <p>Furthermore, integrative thinking tools such as the pro-pro and tension tables enabled us to creatively balance competing priorities, leading to a more robust and well-rounded final prototype. Through multiple iterations, we continuously improved the design’s functionality, cost-effectiveness, and user experience.</p>

        <p>Ultimately, by combining Raspberry Pi and LiDAR technologies, we created a hybrid solution that offered both affordability and the accuracy and privacy advantages of LiDAR, an outcome that would not have emerged from a single-technology mindset.</p>

        <p>The parallel development of the dashboard emphasized the importance of defining a minimal viable product upfront and iterating based on ongoing team evaluations and reflections.</p>

        <p>Throughout the project, we learned the critical value of remaining flexible and open to change, adapting our approach as new insights emerged. Overall, this process highlighted the significance of flexibility, critical reflection, teamwork, and user-centered design in creating meaningful, effective solutions.</p>
    `,
    },


  "pitch-reflect1": {
    date: "25 July 2025",
    title: "reflectly Pitch 1 - Project Foundation & LiDAR Proposal",
    content: `
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/VcRT75NhIhA"
                        frameborder="0" 
                        allowfullscreen>
                </iframe>
            </div>
            
        `,
  },

  // Additional Pages
};

// Mobile menu functionality
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");

      // Update aria-expanded attribute for accessibility
      const isExpanded = navMenu.classList.contains("active");
      mobileMenuToggle.setAttribute("aria-expanded", isExpanded);

      // Animate hamburger menu
      const spans = mobileMenuToggle.querySelectorAll("span");
      spans.forEach((span, index) => {
        if (isExpanded) {
          if (index === 0)
            span.style.transform = "rotate(45deg) translate(5px, 5px)";
          if (index === 1) span.style.opacity = "0";
          if (index === 2)
            span.style.transform = "rotate(-45deg) translate(7px, -6px)";
        } else {
          span.style.transform = "";
          span.style.opacity = "";
        }
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (event) {
      const isClickInsideNav =
        navMenu.contains(event.target) ||
        mobileMenuToggle.contains(event.target);

      if (!isClickInsideNav && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        mobileMenuToggle.setAttribute("aria-expanded", "false");

        // Reset hamburger menu
        const spans = mobileMenuToggle.querySelectorAll("span");
        spans.forEach((span) => {
          span.style.transform = "";
          span.style.opacity = "";
        });
      }
    });

    // Close mobile menu when pressing Escape key
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        mobileMenuToggle.setAttribute("aria-expanded", "false");
        mobileMenuToggle.focus(); // Return focus to toggle button

        // Reset hamburger menu
        const spans = mobileMenuToggle.querySelectorAll("span");
        spans.forEach((span) => {
          span.style.transform = "";
          span.style.opacity = "";
        });
      }
    });
  }
});

// Sidebar reflect toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const reflectToggles = document.querySelectorAll(".reflect-toggle");

  reflectToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const reflectId = this.dataset.reflect;
      const reflectContent = document.getElementById(reflectId);
      const isCollapsed = reflectContent.classList.contains("collapsed");

      if (isCollapsed) {
        reflectContent.classList.remove("collapsed");
        this.classList.remove("collapsed");
        this.setAttribute("aria-expanded", "true");
      } else {
        reflectContent.classList.add("collapsed");
        this.classList.add("collapsed");
        this.setAttribute("aria-expanded", "false");
      }
    });

    // Set initial aria-expanded state
    toggle.setAttribute("aria-expanded", "true");
  });
});

// Content loading functionality
document.addEventListener("DOMContentLoaded", function () {
  const contentLinks = document.querySelectorAll("[data-content]");
  const welcomeContent = document.getElementById("welcome-content");
  const dynamicContent = document.getElementById("dynamic-content");

  contentLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const contentId = this.dataset.content;
      const data = contentData[contentId];

      if (data) {
        // Remove active class from all links
        contentLinks.forEach((l) => l.classList.remove("active"));

        // Add active class to clicked link
        this.classList.add("active");

        // Hide welcome content, show dynamic content
        welcomeContent.classList.remove("active");
        dynamicContent.classList.add("active");

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
        const contentArea = document.querySelector(".content-area");
        if (contentArea) {
          contentArea.scrollTo(0, 0);
        }
      }
    });
  });

  // Handle logo click to return to welcome content
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#" || href === "" || href === null) {
        e.preventDefault();
        showWelcomeContent();
      }
    });
  }

  // Function to show welcome content
  function showWelcomeContent() {
    // Remove active class from all sidebar links
    contentLinks.forEach((l) => l.classList.remove("active"));

    // Show welcome content, hide dynamic content
    dynamicContent.classList.remove("active");
    welcomeContent.classList.add("active");

    // Scroll to top
    const contentArea = document.querySelector(".content-area");
    if (contentArea) {
      contentArea.scrollTo(0, 0);
    }
  }

  // Handle dropdown navigation clicks
  const dropdownLinks = document.querySelectorAll(
    ".dropdown-link[data-content]"
  );
  dropdownLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const contentId = this.dataset.content;
      const sidebarLink = document.querySelector(
        '.sidebar [data-content="' + contentId + '"]'
      );

      if (sidebarLink) {
        sidebarLink.click();
      }
    });
  });
});

// Add scroll effect to navbar
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (header) {
    if (window.scrollY > 100) {
      header.style.background = "linear-gradient(135deg, #96ddc0, #7bc49a)";
      header.style.backdropFilter = "blur(10px)";
    } else {
      header.style.background = "linear-gradient(135deg, #a8e6cf, #88c999)";
      header.style.backdropFilter = "none";
    }
  }
});

// Enhanced accessibility: Skip to main content
document.addEventListener("DOMContentLoaded", function () {
  // Create skip link
  const skipLink = document.createElement("a");
  skipLink.href = "#main-content";
  skipLink.textContent = "Skip to main content";
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

  skipLink.addEventListener("focus", function () {
    this.style.top = "6px";
  });

  skipLink.addEventListener("blur", function () {
    this.style.top = "-40px";
  });

  document.body.insertBefore(skipLink, document.body.firstChild);

  // Add id to main content
  const main = document.querySelector(".content-area");
  if (main) {
    main.id = "main-content";
    main.setAttribute("tabindex", "-1");
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
const optimizedScrollHandler = debounce(function () {
  const header = document.querySelector("header");
  if (header) {
    if (window.scrollY > 100) {
      header.style.background = "linear-gradient(135deg, #96ddc0, #7bc49a)";
      header.style.backdropFilter = "blur(10px)";
    } else {
      header.style.background = "linear-gradient(135deg, #a8e6cf, #88c999)";
      header.style.backdropFilter = "none";
    }
  }
}, 10);

window.addEventListener("scroll", optimizedScrollHandler);

// Console welcome message
console.log(
  "%c📊 Welcome to the Work Portfolio!",
  "color: #3498db; font-size: 16px; font-weight: bold;"
);
console.log(
  "%cExplore our daily progress and reflectly achievements!",
  "color: #2c3e50; font-size: 12px;"
);
