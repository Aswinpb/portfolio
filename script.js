// ======================
// AOS Animation
// ======================

AOS.init({
    duration: 1000,
    once: true
});

// ======================
// Typing Effect
// ======================

const roles = [
    "Python Developer",
    "Django Developer",
    "PHP Developer",
    "MCA Graduate",
    "Full Stack Developer"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement =
document.getElementById("typing");

function typeEffect() {

    if (charIndex < roles[roleIndex].length) {

        typingElement.textContent +=
            roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {

    if (charIndex > 0) {

        typingElement.textContent =
            roles[roleIndex].substring(
                0,
                charIndex - 1
            );

        charIndex--;

        setTimeout(eraseEffect, 50);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        setTimeout(typeEffect, 300);
    }
}

typeEffect();

// ======================
// Theme Toggle
// ======================

const toggleButton =
document.getElementById("theme-toggle");

const body =
document.body;

const savedTheme =
localStorage.getItem("theme");

if (savedTheme === "dark") {

    body.classList.add("dark");

    toggleButton.innerHTML =
        '<i class="fas fa-sun"></i>';

}

toggleButton.addEventListener("click", () => {

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {

        localStorage.setItem(
            "theme",
            "dark"
        );

        toggleButton.innerHTML =
            '<i class="fas fa-sun"></i>';

    } else {

        localStorage.setItem(
            "theme",
            "light"
        );

        toggleButton.innerHTML =
            '<i class="fas fa-moon"></i>';
    }

});

// ======================
// Navbar Background
// ======================

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.15)";

    } else {

        navbar.style.boxShadow = "none";
    }

});

// ======================
// Active Menu Highlight
// ======================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {
            current =
                section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");
        }

    });

});

// ======================
// Fade-In On Scroll
// ======================

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add(
                    "show"
                );
            }

        });

    },
    {
        threshold: 0.2
    }
);

document.querySelectorAll(
    ".skill-card,.project-card,.edu-card,.cert-card,.timeline-item"
).forEach(el => {

    observer.observe(el);

});

// ======================
// Smooth Scroll
// ======================

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener(
        "click",
        function (e) {

            e.preventDefault();

            document.querySelector(
                this.getAttribute("href")
            ).scrollIntoView({

                behavior: "smooth"

            });

        }
    );

});

// ======================
// Hero Image Glow Effect
// ======================

const profile =
document.querySelector(
    ".hero-image img"
);

if (profile) {

    profile.addEventListener(
        "mousemove",
        () => {

            profile.style.transform =
                "scale(1.03)";
        }
    );

    profile.addEventListener(
        "mouseleave",
        () => {

            profile.style.transform =
                "scale(1)";
        }
    );

}

// ======================
// Contact Form Demo
// ======================

const form =
document.querySelector("form");

if (form) {

    form.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            alert(
                "Thank you! Your message has been received."
            );

            form.reset();

        }
    );

}

// ======================
// Loading Animation
// ======================

// ======================
// Premium Loader
// ======================

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add(
            "loader-hidden"
        );

    }, 2200);

});