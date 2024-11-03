AFRAME.registerComponent("recieve-node", {
  schema: {
    setToggle: { type: "boolean", default: false },
    connectedTo: { type: "selector" },
    connectedToUuid: { type: "string", default: "" },
    worldPosition: { type: "vec3", default: { x: 0, y: 0, z: 0 } },
    value: { type: "boolean", default: false },
  },
  init: function () {
    this.el.addEventListener("loaded", () => {
      this.updateTextValue();
    });
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
    if (this.data.connectedToUuid && this.data.connectedTo) {
      const inputEl = this.data.connectedTo;
      const inputComponent = inputEl.getAttribute("transmit-node");

      if (inputComponent && inputComponent.value) {
        this.data.value = true;
      } else {
        this.data.value = false;
      }
    }

    this.updateTextValue();
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

    this.el.setAttribute("material", {
      opacity: 0,
      color: "red",
    });
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
    this.el.setAttribute("material", {
      opacity: 0,
    });
  },
  tick: function () {
    const worldPosition = new THREE.Vector3();
    this.el.object3D.getWorldPosition(worldPosition);
    this.data.worldPosition = worldPosition;
  },
  updateTextValue: function () {
    const textElement = this.el.querySelector("a-text");

    if (textElement) {
      const newValue = this.data.value ? "1" : "0";
      textElement.setAttribute("value", newValue);
      console.log(`Updated text value to: ${newValue}`);
    } else {
      console.log(this.el);
      console.warn("No <a-text> element found in the entity.");
    }
  },
});
