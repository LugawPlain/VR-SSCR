AFRAME.registerComponent("toggle", {
  init: function () {
    this.isMouseDown = false;
    this.isMouseEnter = false;

    const position = this.el.getAttribute("position");
    this.originalPosition = { x: position.x, y: position.y, z: position.z };
    const newPositionZ = this.originalPosition.z - 0.1;
    this.el.addEventListener("mouseenter", () => {
      this.isMouseEnter = true;
      if (!this.isMouseDown) {
        this.el.setAttribute("material", { opacity: 0.8, color: "orange" });
      }
    });

    this.el.addEventListener("mousedown", (event) => {
      if (event.detail && event.detail.cursorEl) {
        return;
      }
      console.log(
        "Clicked button:",
        this.el.querySelector("a-text").getAttribute("value")
      );
      this.isMouseDown = true;
      this.el.setAttribute("material", { opacity: 0.8, color: "red" });

      this.el.setAttribute("animation", {
        property: "position",
        from: `${this.originalPosition.x} ${this.originalPosition.y} ${this.originalPosition.z}`,
        to: `${this.originalPosition.x} ${this.originalPosition.y} ${newPositionZ}`,
        dur: 200,
        easing: "easeOutQuad",
      });
    });

    this.el.addEventListener("mouseleave", () => {
      this.isMouseEnter = false;
      if (!this.isMouseDown) {
        this.el.setAttribute("material", { opacity: 0.8, color: "white" });
      }
    });

    this.el.addEventListener("mouseup", () => {
      if (this.isMouseDown) {
        this.isMouseDown = false;
      } else {
        return;
      }
      this.el.setAttribute("material", { opacity: 0.8, color: "orange" });

      if (!this.isMouseEnter) {
        this.el.setAttribute("material", { opacity: 0.8, color: "white" });
      }
    });
  },
});
