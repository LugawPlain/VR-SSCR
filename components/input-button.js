AFRAME.registerComponent("input-button", {
  schema: {
    setOutput: { type: "boolean", default: true },
  },

  init: function () {
    this.el.addEventListener("click", this.onClick.bind(this));
  },

  onClick: function (event) {
    if (event.detail && event.detail.cursorEl) {
      return;
    }
    const output = this.el.parentNode;
    if (this.data.setOutput) {
      this.el.setAttribute("position", "-0.086 0.041 -0.001");
      this.data.setOutput = false;
      output.setAttribute("input-logic", "setOutput", false);
      console.log("set to false");
    } else {
      this.el.setAttribute("position", "-0.086 0.041 -0.02");
      this.data.setOutput = true;
      output.setAttribute("input-logic", "setOutput", true);
      console.log("set to true");
    }
  },

  onHoverStart: function () {
    this.el.setAttribute("material", "opacity", "0.3");
    console.log("hello");
  },

  onHoverEnd: function () {
    this.el.setAttribute("material", "opacity", "1");
    console.log("hi");
  },

  update: function () {},
  remove: function () {},
  tick: function (time, timeDelta) {},
});
