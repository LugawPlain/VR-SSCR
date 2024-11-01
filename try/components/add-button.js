AFRAME.registerComponent("add-button", {
  init: function () {
    this.el.addEventListener("click", (event) => {
      if (event.detail && event.detail.cursorEl) {
        return;
      }
      const spawnPos = "0 1.5 0";
      const gate = this.el.querySelector("a-text").getAttribute("value");
      const notPlate = `
      <a-box
      hoverable
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
        position="${spawnPos}"
      >
        <a-gltf-model
          position="-0.3 -0.15 0"
          src="#NOT_GATE_PLATE"
          scale="0.02 0.02 0.04"
          rotation="0 0 0"
          material="color:red"
          grabbable
        ></a-gltf-model>
        <a-text
          value="NOT"
          color="yellow"
          scale="0.5 0.5 0.5"
          rotation="0 0 0"
          position="-0.16 0 0"
        ></a-text>
        <a-box color="white" scale="0.07 0.07 0.07" wireframe="true" position="-0.3 0 -0.02">
        <a-sphere id="node" recieve-node color="red" scale="0.45 0.45 0.45"></a-sphere>
        </a-box>
        <a-box color="white" scale="0.07 0.07 0.07" wireframe="true" position="0.3 0 -0.02">
        <a-sphere id="node" transmit-node color="blue" scale="0.45 0.45 0.45"></a-sphere>
        </a-box>
      </a-box>`;
      const orPlate = `
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
        position="${spawnPos}"
      >
        <a-gltf-model
          position="-0.3 -0.15 0"
          src="#OR_GATE_PLATE"
          scale="0.02 0.02 0.04"
          rotation="0 0 0"
          material="color:red"
        ></a-gltf-model>
        <a-text
          value="OR"
          color="yellow"
          scale="0.5 0.5 0.5"
          rotation="0 0 0"
          position="-0.16 0 0"
        ></a-text>
        <a-box color="white" scale="0.07 0.07 0.07" wireframe="true" position="-0.3 0.08 -0.02">
        <a-sphere recieve-node color="red" id="node" scale="0.45 0.45 0.45"></a-sphere>
        </a-box>
        <a-box color="white" scale="0.07 0.07 0.07" wireframe="true" position="-0.3 -0.08 -0.02">
        <a-sphere recieve-node color="red" id="node" scale="0.45 0.45 0.45"
        ></a-sphere>
        </a-box>
         <a-box color="white" scale="0.07 0.07 0.07" wireframe="true" position="0.23 -0 -0.02">
        <a-sphere transmit-node color="blue" id="node" scale="0.45 0.45 0.45" ></a-sphere>
        </a-box>
      </a-box>`;
      const andPlate = `
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
        position="${spawnPos}"
      >
        <a-gltf-model
          position="-0.3 -0.15 0"
          src="#AND_GATE_PLATE"
          scale="0.02 0.02 0.04"
          rotation="0 0 0"
          material="color:red"
        ></a-gltf-model>
        <a-text
          value="AND"
          color="yellow"
          scale="0.5 0.5 0.5"
          rotation="0 0 0"
          position="-0.16 0 0"
        ></a-text>
        <a-box color="white" scale="0.07 0.07 0.07" wireframe="true" position="-0.3 0.08 -0.02">
        <a-sphere recieve-node color="red" id="node" scale="0.45 0.45 0.45"></a-sphere>
        </a-box>
        <a-box color="white" scale="0.07 0.07 0.07" wireframe="true" position="-0.3 -0.08 -0.02">
        <a-sphere recieve-node color="red" id="node" scale="0.45 0.45 0.45"
        ></a-sphere>
        </a-box>
         <a-box color="white" scale="0.07 0.07 0.07" wireframe="true" position="0.23 -0 -0.02">
        <a-sphere transmit-node color="blue" id="node" scale="0.45 0.45 0.45" ></a-sphere>
        </a-box>
      </a-box>`;
      const xorPlate = `
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
        position="${spawnPos}"
      >
        <a-gltf-model
          position="-0.3 -0.15 0"
          src="#XOR_GATE_PLATE"
          scale="0.02 0.02 0.04"
          rotation="0 0 0"
          material="color:red"
        ></a-gltf-model>
        <a-text
          value="XOR"
          color="yellow"
          scale="0.5 0.5 0.5"
          rotation="0 0 0"
          position="-0.16 0 0"
        ></a-text>
        <a-box last-clicked-node recieve-node id="nodes" color="white" scale="0.07 0.07 0.07" wireframe="true" position="-0.3 0.08 -0.02">
        <a-sphere  color="red"  scale="0.45 0.45 0.45"></a-sphere>
        </a-box>
        <a-box last-clicked-node recieve-node id="nodes" color="white" scale="0.07 0.07 0.07" wireframe="true" position="-0.3 -0.08 -0.02">
        <a-sphere color="red" scale="0.45 0.45 0.45"
        ></a-sphere>
        </a-box>
        <a-box last-clicked-node transmit-node id="nodes" color="white" scale="0.07 0.07 0.07" wireframe="true" position="0.25 -0 -0.02">
        <a-sphere color="blue" scale="0.45 0.45 0.45" ></a-sphere>
        </a-box>
      </a-box>`;

      const sceneEl = document.querySelector("a-scene");
      const container = document.createElement("a-entity");
      container.setAttribute("position", "-1 1 -2");
      switch (gate) {
        case "NOT":
          container.innerHTML = notPlate;
          break;
        case "OR":
          container.innerHTML = orPlate;
          break;
        case "AND":
          container.innerHTML = andPlate;
          break;
        case "XOR":
          container.innerHTML = xorPlate;
          break;
        default:
          console.log("Error with selection");
      }

      sceneEl.appendChild(container);
    });
  },
});
