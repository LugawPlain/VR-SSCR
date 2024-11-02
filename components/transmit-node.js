AFRAME.registerComponent("transmit-node", {
  schema: {
    setToggle: { type: "boolean", default: false },
    connectedTo: { type: "selector" },
    connectedToUuid: { type: "string", default: "" },
    worldPosition: { type: "vec3", default: { x: 0, y: 0, z: 0 } },
    value: { type: "boolean", default: false },
  },
  init: function () {
    console.log(this.el.object3D.uuid);
    this.sceneEl = this.el.sceneEl;
    this.dragStartFlag;
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onDragDrop = this.onDragDrop.bind(this);

    this.onHoverStart = this.onHoverStart.bind(this);
    this.onHoverEnd = this.onHoverEnd.bind(this);
  },
  update: function () {
    if (this.data.setToggle) {
      this.el.addEventListener("drag-start", this.onDragStart);
      this.el.addEventListener("drag-end", this.onDragEnd);
      this.el.addEventListener("drag-drop", this.onDragDrop);
      this.el.addEventListener("hover-start", this.onHoverStart);
      this.el.addEventListener("hover-end", this.onHoverEnd);
    } else {
      this.el.removeEventListener("drag-start", this.onDragStart);
      this.el.removeEventListener("drag-end", this.onDragEnd);
      this.el.removeEventListener("drag-drop", this.onDragDrop);
      this.el.removeEventListener("hover-start", this.onHoverStart);
      this.el.removeEventListener("hover-end", this.onHoverEnd);
    }
  },
  remove: function () {
    this.el.removeEventListener("drag-start", this.onDragStart);
    this.el.removeEventListener("drag-end", this.onDragEnd);
    this.el.removeEventListener("drag-drop", this.onDragDrop);
    this.el.removeEventListener("hover-start", this.onHoverStart);
    this.el.removeEventListener("hover-end", this.onHoverEnd);
  },
  onDragStart: function () {
    console.log("drag-start");
    this.dragStartFlag = true;
    this.el.setAttribute("material", {
      color: "blue",
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
    if (this.data.connectedTo) {
      this.el.setAttribute("material", {
        color: "blue",
        opacity: 1,
      });
      return;
    }
    if (!this.dragStartFlag) {
      this.el.setAttribute("material", {
        opacity: 0,
      });
    }
  },
  onDragEnd: function (evt) {
    console.log("drag-end");
    this.dragStartFlag = false;
  },
  onDragDrop: function (evt) {
    //transmitting second in event
    console.log("dragdrop-transimiting");
    this.data.connectedTo = evt.detail.target;
    if (this.data.connectedTo.parentNode == this.el.parentNode) {
      this.data.connectedTo = null;
      return;
    }
    this.data.connectedToUuid = this.data.connectedTo.object3D.uuid;

    if (!this.data.connectedTo) {
      this.el.setAttribute("material", {
        color: "white",
        opacity: 0,
      });
    }
    this.data.connectedToUuid = this.data.connectedTo.object3D.uuid;
  },

  tick: function (time, timeDelta) {
    const worldPosition = new THREE.Vector3();
    this.el.object3D.getWorldPosition(worldPosition);
    this.data.worldPosition = worldPosition;
  },
});
``;
