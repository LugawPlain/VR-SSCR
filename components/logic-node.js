AFRAME.registerComponent("logic-node", {
  schema: {
    setToggle: {
      type: "boolean",
      default: false,
    },
  },
  init: function () {
    this.onDragOverStart = this.onDragOverStart.bind(this);
    this.onDragOverEnd = this.onDragOverEnd.bind(this);
  },

  update: function (oldData) {
    if (this.data.setToggle) {
      this.el.setAttribute("material", {
        opacity: 1,
      });
      this.el.addEventListener("dragover-start", this.onDragOverStart);
      this.el.addEventListener("dragover-end", this.onDragOverEnd);
      this.el.classList.add("interactable");
    } else {
      this.el.classList.remove("interactable");
      this.el.removeEventListener("dragover-start", this.onDragOverStart);
      this.el.removeEventListener("dragover-end", this.onDragOverEnd);
    }
  },
  remove: function () {
    this.el.classList.remove("interactable");
    this.el.removeEventListener("dragover-start", this.onDragOverStart);
    this.el.removeEventListener("dragover-end", this.onDragOverEnd);
  },
  onDragOverStart: function () {
    this.el.setAttribute("material", {
      wireframe: true,
      color: "blue",
    });
  },
  onDragOverEnd: function () {
    this.el.setAttribute("material", {
      wireframe: true,
      color: "black",
    });
  },
});
