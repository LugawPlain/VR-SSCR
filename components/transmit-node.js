let dragStartFlag;
AFRAME.registerComponent("transmit-node", {
  schema: {
    setToggle: { type: "boolean", default: false },
  },
  init: function () {
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onHoverStart = this.onHoverStart.bind(this);
    this.onHoverEnd = this.onHoverEnd.bind(this);
  },
  update: function () {
    if (this.data.setToggle) {
      this.el.addEventListener("drag-start", this.onDragStart);
      this.el.addEventListener("drag-end", this.onDragEnd);
      this.el.addEventListener("hover-start", this.onHoverStart);
      this.el.addEventListener("hover-end", this.onHoverEnd);
    } else {
      this.el.removeEventListener("drag-start", this.onDragStart);
      this.el.removeEventListener("drag-end", this.onDragEnd);
      this.el.removeEventListener("hover-start", this.onHoverStart);
      this.el.removeEventListener("hover-end", this.onHoverEnd);
    }
  },
  remove: function () {
    this.el.removeEventListener("drag-start", this.onDragStart);
    this.el.removeEventListener("drag-end", this.onDragEnd);
    this.el.removeEventListener("hover-start", this.onHoverStart);
    this.el.removeEventListener("hover-end", this.onHoverEnd);
  },
  onDragStart: function () {
    console.log("drag-start");
    dragStartFlag = true;
    this.el.setAttribute("material", {
      color: "blue",
    });
  },
  onDragEnd: function () {
    console.log("drag-end");
    dragStartFlag = false;
    this.el.setAttribute("material", {
      color: "black",
    });
  },
  onHoverStart: function () {
    console.log("hover-start");
    this.el.setAttribute("material", {
      color: "white",
      opacity: 1,
    });
  },
  onHoverEnd: function () {
    console.log("hover-end");
    if (!dragStartFlag) {
      this.el.setAttribute("material", {
        opacity: 0,
      });
    }
  },
});
