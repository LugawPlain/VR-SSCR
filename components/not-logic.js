AFRAME.registerComponent("not-logic", {
  schema: {},

  init: function () {},

  update: function () {
    const recieveNodes = Array.from(this.el.children).filter((child) => {
      return child.hasAttribute("recieve-node");
    });
    const transmitNodes = Array.from(this.el.children).filter((child) => {
      return child.hasAttribute("transmit-node");
    });

    transmitNodes[0].getAttribute("recieve-node").value =
      !recieveNodes[0].getAttribute("recieve-node").value;
  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  },
});
