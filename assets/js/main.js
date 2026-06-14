// JGProd Portfolio - JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Mobile Menu
    const mobileBtn = document.querySelector(".mobile-menu-btn");
    const navList = document.querySelector(".nav-list");

    if (mobileBtn && navList) {
        mobileBtn.addEventListener("click", function() {
            this.classList.toggle("active");
            navList.classList.toggle("active");
        });
    }

    // Header scroll effect
    const header = document.querySelector(".header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 80) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Back to top button
    const backToTop = document.querySelector(".back-to-top");
    if (backToTop) {
        window.addEventListener("scroll", function() {
            if (window.scrollY > 500) {
                backToTop.classList.add("visible");
            } else {
                backToTop.classList.remove("visible");
            }
        });

        backToTop.addEventListener("click", function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const href = this.getAttribute("href");
            if (href !== "#") {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
                    window.scrollTo({ top: targetPosition, behavior: "smooth" });
                }
            }
        });
    });

    // Contact form
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm && formMessage) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();

            const name = this.elements.name.value;
            const email = this.elements.email.value;
            const message = this.elements.message.value;

            if (!name || !email || !message) {
                showFormMessage("Veuillez remplir tous les champs.", "error");
                return;
            }

            if (!validateEmail(email)) {
                showFormMessage("Veuillez entrer une adresse email valide.", "error");
                return;
            }

            // Simulate form submission (replace with real API call)
            showFormMessage("Message envoyé avec succès! Nous vous répondrons rapidement.", "success");
            this.reset();
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showFormMessage(message, type) {
        if (formMessage) {
            formMessage.textContent = message;
            formMessage.className = "form-message " + type;
            setTimeout(() => {
                formMessage.style.display = "none";
            }, 5000);
        }
    }
});
