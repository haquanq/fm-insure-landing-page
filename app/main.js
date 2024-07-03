const menu = {
    btn: document.querySelector(".nav__menu__button"),
    wrapper: document.querySelector(".menu__wrapper"),
    isShowing: false,
    show() {
        document.querySelector("body").style.overflow = "hidden";
        this.wrapper.classList.add("shown");
        this.isShowing = true;
    },
    hide() {
        document.querySelector("body").style.overflow = "";
        this.wrapper.classList.remove("shown");
        this.isShowing = false;
    },
    init() {
        this.btn.addEventListener("click", () => {
            if (this.isShowing) menu.hide();
            else menu.show();
        });

        window.addEventListener("resize", (e) => {
            const mediaQuery = window.matchMedia("(min-width: 768px)");
            if (mediaQuery.matches && this.isShowing) menu.hide();
        });
    },
};

menu.init();
