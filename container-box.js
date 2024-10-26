AFRAME.registerComponent("container-box", {
  init: function () {
    // Wait a bit for all children to initialize
    setTimeout(() => this.updateBox(), 100);
  },

  updateBox: function () {
    const el = this.el;

    // Get all child elements with object3D
    let boundingBox = new THREE.Box3();

    // Create a temporary parent object to handle transformations
    let parent = new THREE.Object3D();
    parent.position.copy(el.object3D.position);
    parent.rotation.copy(el.object3D.rotation);
    parent.scale.copy(el.object3D.scale);

    // Traverse all children
    el.object3D.traverse((child) => {
      if (child.geometry) {
        // Get the geometry's bounding box
        child.geometry.computeBoundingBox();
        let box = child.geometry.boundingBox.clone();

        // Apply the object's transformations to the box
        box.applyMatrix4(child.matrixWorld);
        boundingBox.expandByBox(box);
      }
    });

    // Get the dimensions
    let size = new THREE.Vector3();
    boundingBox.getSize(size);

    // Set the geometry for the container
    el.setAttribute("geometry", {
      primitive: "box",
      width: Math.max(0.5, size.x), // Minimum size of 0.5
      height: Math.max(0.5, size.y),
      depth: Math.max(0.5, size.z),
    });
  },
});
