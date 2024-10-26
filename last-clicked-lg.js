let lastClickedEl = null;
AFRAME.registerComponent("last-clicked-lg", {
  schema: {
    active: { type: "boolean", default: false },
  },
  init: function () {
    this.el.setAttribute("material", {
      wireframe: true,
    });
    this.el.addEventListener("click", () => {
      if (this.data.active) {
        return;
      }
      console.log("log");
      if (lastClickedEl) {
        lastClickedEl.setAttribute("material", {
          color: "white",
          opacity: 0,
        });
        lastClickedEl.removeAttribute("active");
        lastClickedEl.components["last-clicked-lg"].data.active = false;
      }

      lastClickedEl = this.el;

      this.el.setAttribute("material", {
        color: "yellow",
        opacity: 0.4,
      });
      this.data.active = true;
      this.el.setAttribute("active", true);
    });
  },
});
