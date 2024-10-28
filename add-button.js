AFRAME.registerComponent("add-button", {
  init: function () {
    this.el.addEventListener("click", (event) => {
      if (event.detail && event.detail.cursorEl) {
        return;
      }

      gate = this.el.querySelector("a-text").getAttribute("value");

      const gatePlate = `
        <a-box
          id="gates"
          last-clicked-lg
          class="interactable"
          dynamic-body
          grabbable
          material="color: white; opacity: 0.2; wireframe: true;"
          depth="0.05"
          height="0.3"
          width="0.6"
          rotation="-90 0 0"
        >
          <a-gltf-model
            position="-0.3 -0.15 0"
            src="#${gate}_GATE_PLATE"
            scale="0.02 0.02 0.04"
            rotation="0 0 0"
            material="color:red"
          ></a-gltf-model>
          <a-text
            value="${gate}"
            color="yellow"
            scale="0.5 0.5 0.5"
            rotation="0 0 0"
            position="-0.16 0 0"
          ></a-text>
        </a-box>
      `;

      const sceneEl = document.querySelector("a-scene");
      const container = document.createElement("a-entity");
      container.setAttribute("position", "-1 1 -2");
      container.innerHTML = gatePlate;
      sceneEl.appendChild(container);
    });
  },
});
