let runState = false;
AFRAME.registerComponent("run-toggle", {
  schema: {
    toggle: { type: "boolean", default: false },
  },
  init: function () {
    //     this.isMouseDown = false;
    //     this.isMouseEnter = false;
    //     const position = this.el.getAttribute("position");
    //     this.originalPosition = { x: position.x, y: position.y, z: position.z };
    //     const newPositionZ = this.originalPosition.z - 0.1;
    //     this.el.addEventListener("mouseenter", () => {
    //       this.isMouseEnter = true;
    //       if (!this.isMouseDown) {
    //         this.el.setAttribute("material", { opacity: 0.8, color: "orange" });
    //       }
    //     });
    //     this.el.addEventListener("mouseleave", () => {
    //       this.isMouseEnter = false;
    //       if (!this.isMouseDown && !this.data.toggle) {
    //         this.el.setAttribute("material", { opacity: 0.8, color: "white" });
    //       }
    //     });
    //     this.el.addEventListener("mousedown", (event) => {
    //       if (event.detail && event.detail.cursorEl) {
    //         return;
    //       }
    //       this.isMouseDown = true;
    //       this.el.setAttribute("material", { opacity: 0.8, color: "red" });
    //       this.el.setAttribute("animation", {
    //         property: "position",
    //         from: `${this.originalPosition.x} ${this.originalPosition.y} ${this.originalPosition.z}`,
    //         to: `${this.originalPosition.x} ${this.originalPosition.y} ${newPositionZ}`,
    //         dur: 200,
    //         easing: "easeOutQuad",
    //       });
    //       this.el.addEventListener("mouseup", () => {
    //         if (this.isMouseDown) {
    //           this.isMouseDown = false;
    //         } else {
    //           return;
    //         }
    //         if (this.data.toggle == true) {
    //           this.el.setAttribute("animation", {
    //             property: "position",
    //             from: `${this.originalPosition.x} ${this.originalPosition.y} ${newPositionZ}`,
    //             to: `${this.originalPosition.x} ${this.originalPosition.y} ${this.originalPosition.z}`,
    //             dur: 200,
    //             easing: "easeOutQuad",
    //           });
    //           this.data.toggle = false;
    //           Globaltoggle = false;
    //           this.setToggle(this.data.toggle);
    //           this.changeText(this.data.toggle);
    //         } else {
    //           this.data.toggle = true;
    //           Globaltoggle = true;
    //           this.setToggle(this.data.toggle);
    //           this.changeText(this.data.toggle);
    //         }
    //         if (!this.isMouseEnter) {
    //           this.el.setAttribute("material", { opacity: 0.8, color: "white" });
    //         }
    //         this.el.setAttribute("material", { opacity: 0.8, color: "orange" });
    //       });
    //     });
    //   },
    //   changeText: function (toggle) {
    //     const textEntity = this.el.parentNode.querySelector("a-text");
    //     if (toggle) {
    //       textEntity.setAttribute("value", "Connect Mode");
    //       textEntity.setAttribute("position", "-0.7 -0.1 0");
    //     } else {
    //       textEntity.setAttribute("value", "Grab Mode");
    //       textEntity.setAttribute("position", "-0.5 -0.1 0");
    //     }
    //   },
    //   setToggle: function (toggle) {
    //     this.sceneEl = document.querySelector("a-scene");
    //     const gates = this.sceneEl.querySelectorAll(".gates");
    //     const nodes = this.sceneEl.querySelectorAll(".nodes");
    //     if (toggle) {
    //       gates.forEach((entity) => {
    //         entity.setAttribute("logic-gate", { setToggle: true, active: false });
    //       });
    //       nodes.forEach((entity) => {
    //         entity.setAttribute("logic-node", { setToggle: true });
    //         if (entity.hasAttribute("transmit-node")) {
    //           entity.setAttribute("transmit-node", { setToggle: true });
    //         }
    //         if (entity.hasAttribute("recieve-node")) {
    //           entity.setAttribute("recieve-node", { setToggle: true });
    //         }
    //       });
    //     } else {
    //       gates.forEach((entity) => {
    //         entity.setAttribute("logic-gate", { setToggle: false });
    //       });
    //       nodes.forEach((entity) => {
    //         entity.setAttribute("logic-node", { setToggle: false });
    //         if (entity.hasAttribute("transmit-node")) {
    //           entity.setAttribute("transmit-node", { setToggle: false });
    //         }
    //         if (entity.hasAttribute("recieve-node")) {
    //           entity.setAttribute("recieve-node", { setToggle: false });
    //         }
    //       });
    //     }
  },
});
