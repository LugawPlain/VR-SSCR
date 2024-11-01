AFRAME.registerComponent("recieve-node", {
  schema: {
    setToggle: { type: "boolean", default: false },
  },
  init: function () {
    this.onDragOverStart = this.onDragOverStart.bind(this);
    this.onDragOverEnd = this.onDragOverEnd.bind(this);
  },
  update: function () {
    if (this.data.setToggle) {
      this.el.addEventListener("dragover-start", this.onDragOverStart);
      this.el.addEventListener("dragover-end", this.onDragOverEnd);
    } else {
      this.el.removeEventListener("dragover-start", this.onDragOverStart);
      this.el.removeEventListener("dragover-end", this.onDragOverEnd);
    }
  },
  remove: function () {
    this.el.removeEventListener("dragover-start", this.onDragOverStart);
    this.el.removeEventListener("dragover-end", this.onDragOverEnd);
  },
  onDragOverStart: function () {
    console.log("drag-over-start");
    this.el.setAttribute("material", {
      opacity: 1,
      color: "red",
    });
  },
  onDragOverEnd: function () {
    console.log("drag-over-end");
    this.el.setAttribute("material", {
      wireframe: true,
      color: "black",
    });
  },
});
