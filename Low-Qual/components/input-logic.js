AFRAME.registerComponent("input-logic", {
  schema: {
    setOutput: { type: "boolean", default: true },
  },

  init: function () {},

  update: function () {
    // const inputNodes = Array.from(this.el.children).filter((child) => {
    //   return child.hasAttribute("recieve-node");
    // });
    const outputNodes = Array.from(this.el.children).filter((child) => {
      return child.hasAttribute("transmit-node");
    });
    if (this.data.setOutput) {
      outputNodes[0].setAttribute("transmit-node", "value", true);
    } else {
      outputNodes[0].setAttribute("transmit-node", "value", false);
    }
    // const input = inputNodes[0].getAttribute("recieve-node").value;
    // outputNodes[0].setAttribute("transmit-node", "value", false);
  },

  remove: function () {},

  tick: function (time, timeDelta) {},
});
