AFRAME.registerComponent("edit-toggle", {
  schema: {
    toggle: { type: "boolean", default: false },
  },
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
    this.el.addEventListener("mouseleave", () => {
      this.isMouseEnter = false;
      if (!this.isMouseDown && !this.data.toggle) {
        this.el.setAttribute("material", { opacity: 0.8, color: "white" });
      }
    });

    this.el.addEventListener("mousedown", (event) => {
      if (event.detail && event.detail.cursorEl) {
        return;
      }
      this.isMouseDown = true;
      this.el.setAttribute("material", { opacity: 0.8, color: "red" });

      this.el.setAttribute("animation", {
        property: "position",
        from: `${this.originalPosition.x} ${this.originalPosition.y} ${this.originalPosition.z}`,
        to: `${this.originalPosition.x} ${this.originalPosition.y} ${newPositionZ}`,
        dur: 200,
        easing: "easeOutQuad",
      });

      this.el.addEventListener("mouseup", () => {
        if (this.isMouseDown) {
          this.isMouseDown = false;
        } else {
          return;
        }
        this.el.setAttribute("material", { opacity: 0.8, color: "orange" });
        if (this.data.toggle == true) {
          this.el.setAttribute("animation", {
            property: "position",
            from: `${this.originalPosition.x} ${this.originalPosition.y} ${newPositionZ}`,
            to: `${this.originalPosition.x} ${this.originalPosition.y} ${this.originalPosition.z}`,
            dur: 200,
            easing: "easeOutQuad",
          });
          this.data.toggle = false;
          setToggle(this.data.toggle);
        } else {
          this.data.toggle = true;
          setToggle(this.data.toggle);
        }
        if (!this.isMouseEnter) {
          this.el.setAttribute("material", { opacity: 0.8, color: "white" });
        }
      });
    });
  },
});
function setToggle(toggle) {
  this.sceneEl = document.querySelector("a-scene");
  const gates = this.sceneEl.querySelectorAll("#gates");
  if (toggle) {
    gates.forEach((entity) => {
      entity.setAttribute("last-clicked-lg", { setEdit: true, active: false });
    });
  } else {
    gates.forEach((entity) => {
      entity.setAttribute("last-clicked-lg", { setEdit: false });
    });
  }
}
