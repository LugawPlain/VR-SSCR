AFRAME.registerComponent("logic-node", {
  schema: {
    setToggle: {
      type: "boolean",
      default: false,
    },
  },
  init: function () {},

  update: function (oldData) {
    if (this.data.setToggle) {
      this.el.classList.add("interactable");
    } else {
      this.el.classList.remove("interactable");
    }
  },
  remove: function () {
    this.el.classList.remove("interactable");
  },
});
