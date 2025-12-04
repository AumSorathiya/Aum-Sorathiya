/* 
====================================================================
    Aum Sorathiya - Portfolio Script
==================================================================== 
*/

document.addEventListener("DOMContentLoaded", () => {
  // =========================================
  // Typing Animation
  // =========================================
  const typingText = document.querySelector(".typing-text");
  const words = [
    "Frontend Developer",
    "IMCA Student",
    "AI Web Developer",
    "Tech Enthusiast",
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typingText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
    } else {
      typingText.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typeSpeed = 2000; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500; // Pause before typing next word
    }

    setTimeout(type, typeSpeed);
  }

  // Start typing animation
  if (typingText) {
    type();
  }

  // =========================================
  // Navbar & Scroll Effects
  // =========================================
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    let current = "";

    // Sticky Navbar
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Back to Top Button
    if (window.scrollY > 500) {
      backToTopBtn.classList.add("active");
    } else {
      backToTopBtn.classList.remove("active");
    }

    // Active Link Highlight
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  // Smooth Scroll for Back to Top
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // =========================================
  // Mobile Menu Toggle
  // =========================================
  const menuToggle = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  // Close mobile menu when clicking a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // =========================================
  // Scroll Reveal Animation
  // =========================================
  const revealElements = document.querySelectorAll("[data-reveal]");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    revealElements.forEach((reveal) => {
      const elementTop = reveal.getBoundingClientRect().top;

      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add("revealed");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  // Trigger once on load
  revealOnScroll();

  // =========================================
  // Contact Form Validation
  // =========================================
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Basic Validation
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      if (name && email && message) {
        // Simulate sending
        const btn = contactForm.querySelector("button");
        const originalText = btn.innerText;

        btn.innerText = "Sending...";
        btn.disabled = true;

        setTimeout(() => {
          alert(`Thank you, ${name}! Your message has been sent successfully.`);
          contactForm.reset();
          btn.innerText = originalText;
          btn.disabled = false;
        }, 1500);
      } else {
        alert("Please fill in all fields.");
      }
    });
  }

  // =========================================
  // Particle Background (using particles.js)
  // =========================================
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#8b5cf6",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#8b5cf6",
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  }
});

// =========================================
// Toggle More Projects Functionality
// =========================================
function toggleMoreProjects() {
  const moreProjects = document.getElementById("more-projects");
  const toggleBtn = document.getElementById("toggleProjectsBtn");

  if (
    moreProjects.style.display === "none" ||
    moreProjects.style.display === ""
  ) {
    toggleBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    setTimeout(() => {
      moreProjects.style.display = "contents";
      toggleBtn.innerHTML =
        '<i class="fas fa-chevron-up"></i> Show Less Projects';
    }, 300);
  } else {
    moreProjects.style.display = "none";
    toggleBtn.innerHTML =
      '<i class="fas fa-chevron-down"></i> View More Projects';

    // Scroll to projects section
    document
      .getElementById("projects")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
