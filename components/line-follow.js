AFRAME.registerComponent("line-follow", {
  schema: {
    startEl: { type: "selector" },
    endEl: { type: "selector" },
    startElUuid: { type: "string" },
    endElUuid: { type: "string" },
  },
  init: function () {
    this.el.setAttribute("line", {
      color: "white",
      opacity: 1,
      visible: true,
      start: "0 0 0",
      end: "0 0 0",
    });

    const startEl = this.data.startEl;
    const endEl = this.data.endEl;

    if (startEl && endEl) {
      const startWorldPosition = new THREE.Vector3();
      const endWorldPosition = new THREE.Vector3();

      startEl.object3D.getWorldPosition(startWorldPosition);
      endEl.object3D.getWorldPosition(endWorldPosition);

      this.el.setAttribute("line", {
        start: `${startWorldPosition.x} ${startWorldPosition.y} ${startWorldPosition.z}`,
        end: `${endWorldPosition.x} ${endWorldPosition.y} ${endWorldPosition.z}`,
      });
    }
  },
  tick: function () {
    // if (Globaltoggle) {
    //   return;
    // }
    const startEl = this.data.startEl;
    const endEl = this.data.endEl;

    if (startEl && endEl) {
      const startWorldPosition = new THREE.Vector3();
      const endWorldPosition = new THREE.Vector3();

      startEl.object3D.getWorldPosition(startWorldPosition);
      endEl.object3D.getWorldPosition(endWorldPosition);

      this.el.setAttribute("line", {
        start: `${startWorldPosition.x} ${startWorldPosition.y} ${startWorldPosition.z}`,
        end: `${endWorldPosition.x} ${endWorldPosition.y} ${endWorldPosition.z}`,
      });
    }
    const recieveNodeData = this.data.endEl.components["recieve-node"];
    if (recieveNodeData) {
      //   console.log(
      //     this.data.startElUuid == recieveNodeData.data.connectedToUuid
      //   );
    }
  },
});
