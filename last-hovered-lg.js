AFRAME.registerComponent("last-hovered-lg", {
  init: function () {
    this.el.setAttribute("material", "opacity", 0);
    this.el.addEventListener("mouseenter", () => {
      this.el.setAttribute("material", "opacity", 0.4);
    });
    this.el.addEventListener("mouseleave", () => {
      if (!this.el.hasAttribute("active")) {
        this.el.setAttribute("material", {
          opacity: 1,
        });
        this.el.setAttribute("material", "opacity", 0);
      }
    });
  },
});
