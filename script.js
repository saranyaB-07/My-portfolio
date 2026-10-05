/* =================================
   TYPING EFFECT
================================= */

const roles = [
    "Software Developer",
    "IoT Enthusiast",
    "Machine Learning Learner",
    "ECE Student"
];

const typingText = document.querySelector(".hero h2");

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }

        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();



/* =================================
   SCROLL REVEAL ANIMATION
================================= */

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .info-box, .timeline-item, .certificate-card"
);


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});



/* =================================
   ACTIVE NAVIGATION
================================= */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar nav a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});



/* =================================
   NAVBAR BACKGROUND ON SCROLL
================================= */

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* =================================
   CURRENT YEAR
================================= */

const year = new Date().getFullYear();

const copyright =
    document.querySelector(".copyright");


if (copyright) {

    copyright.textContent =
        `© ${year} Saranya Barani. All Rights Reserved.`;

}



/* =================================
   PROJECT CARD CLICK EFFECT
================================= */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px)";

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0)";

    });

});



/* =================================
   CONSOLE MESSAGE
================================= */

console.log(
    "Welcome to Saranya Barani's Portfolio!"
);

console.log(
    "Portfolio successfully loaded."
);