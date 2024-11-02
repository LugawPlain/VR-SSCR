AFRAME.registerComponent("recieve-node", {
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
    this.dragged = false;
    this.onDragOverStart = this.onDragOverStart.bind(this);
    this.onDragOverEnd = this.onDragOverEnd.bind(this);
    this.onDragDrop = this.onDragDrop.bind(this);
  },
  update: function () {
    if (this.data.setToggle) {
      this.el.addEventListener("dragover-start", this.onDragOverStart);
      this.el.addEventListener("dragover-end", this.onDragOverEnd);
      this.el.addEventListener("drag-drop", this.onDragDrop);
    } else {
      this.el.removeEventListener("dragover-start", this.onDragOverStart);
      this.el.removeEventListener("dragover-end", this.onDragOverEnd);
      this.el.removeEventListener("drag-drop", this.onDragDrop);
    }
    if (this.data.connectedTo) {
      this.data.value = true;
    }
  },
  remove: function () {
    this.el.removeEventListener("dragover-start", this.onDragOverStart);
    this.el.removeEventListener("dragover-end", this.onDragOverEnd);
    this.el.removeEventListener("drag-drop", this.onDragDrop);
  },
  onDragOverStart: function () {
    console.log("drag-over-start");
    this.el.setAttribute("material", {
      opacity: 1,
      color: "red",
    });
  },
  onDragOverEnd: function (evt) {
    console.log("drag-over-end");
    if (!this.dragged) {
      this.el.setAttribute("material", {
        opacity: 0,
        color: "red",
      });
      this.dragged = false;
    }
  },
  onDragDrop: function (evt) {
    //recieve first before transmiting in evnt
    console.log("drag-drop recieving node");
    this.dragged = true;

    this.data.connectedTo = evt.detail.dropped;
    if (this.data.connectedTo.parentNode == this.el.parentNode) {
      this.data.connectedTo = null;
      this.dragged = false;
      return;
    }
    const dropped = this.data.connectedTo;
    this.data.connectedToUuid = this.data.connectedTo.object3D.uuid;
    const droppedUuid = this.data.connectedToUuid;

    const target = evt.detail.target;

    const targetUuid = target.object3D.uuid;

    const connectLine = document.createElement("a-entity");

    connectLine.setAttribute("line", "");
    this.sceneEl.appendChild(connectLine);
    connectLine.setAttribute("line-follow", {
      startEl: dropped,
      endEl: target,
      startElUuid: droppedUuid,
      endElUuid: targetUuid,
    });
  },
  tick: function () {
    const worldPosition = new THREE.Vector3();
    this.el.object3D.getWorldPosition(worldPosition);
    this.data.worldPosition = worldPosition;
  },
});
