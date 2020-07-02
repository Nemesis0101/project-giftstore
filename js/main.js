const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav__list");
    const navItems = document.querySelectorAll(".nav__list li");
    const navLinks = document.querySelectorAll(".nav__link");

    burger.addEventListener("click", () => {
        //toggle nav
        nav.classList.toggle("nav__list-active");

        //animate links
        navItems.forEach((item, index) => {
            if (item.style.animation) {
                item.style.animation = "";
            } else {
                item.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //burger animation
        burger.classList.toggle("toggle");
    });

    navLinks.forEach((item) => {
        // close menu with link click
        item.addEventListener("click", () => {
            nav.classList.remove("nav__list-active");
            burger.classList.remove("toggle");

            navItems.forEach((item) => {
                item.style.animation = "";
            });
        });
    });
};

navSlide();
