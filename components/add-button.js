AFRAME.registerComponent("add-button", {
  init: function () {
    this.el.addEventListener("click", (event) => {
      if (event.detail && event.detail.cursorEl) {
        return;
      }
      const spawnPos = "0 1.5 0";
      const gate = this.el.querySelector("a-text").getAttribute("value");
      const inputPlate = `
       <a-box
        logic-gate
        class="interactable gates"
        dynamic-body
        grabbable
        hoverable
        material="color: white; wireframe: true; opacity: 0"
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
          material="color: red"
        ></a-gltf-model>
        <a-text
          value="Input"
          color="yellow"
          scale="0.5 0.5 0.5"
          rotation="0 0 0"
          position="-0.16 0 0"
        ></a-text>
        <a-box
          hoverable
          draggable
          droppable
          logic-node
          transmit-node
          opacity="0"
          class="nodes transmit-node"
          color="white"
          scale="0.07 0.07 0.07"
          wireframe="true"
          position="0.3 0 -0.02"  
        >
          <a-text position="-0.5 0 1" rotation="90 0 0" scale="5 5 5 "></a-text>
          <a-sphere
            color="blue"
            scale="0.45 0.45 0.45"
          ></a-sphere>
        </a-box>
      </a-box>`;
      const notPlate = `
        <a-box
        not-logic
        logic-gate
        class="interactable gates"
        dynamic-body
        grabbable
        hoverable
        material="color: white; wireframe: true;opacity:0"
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
        ></a-gltf-model>
        <a-text
          value="NOT"
          color="yellow"
          scale="0.5 0.5 0.5"
          rotation="0 0 0"
          position="-0.16 0 0"
        ></a-text>
        <a-box
          droppable
          logic-node
          recieve-node
          opacity="0"
          class="nodes recieve-node"
          color="white"
          scale="0.07 0.07 0.07"
          wireframe="true"
          position="-0.3 0 -0.02"
        >
          <a-text position="-0.5 0 1" rotation="90 0 0" scale="5 5 5 "></a-text>
          <a-sphere
            id="node"
            recieve-node
            color="red"
            scale="0.45 0.45 0.45"
          ></a-sphere>
        </a-box>
        <a-box
          hoverable
          draggable
          droppable
          logic-node
          transmit-node
          opacity="0"
          class="nodes transmit-node"
          color="white"
          scale="0.07 0.07 0.07"
          wireframe="true"
          position="0.3 0 -0.02"
        >
          <a-text position="-0.5 0 1" rotation="90 0 0" scale="5 5 5 "></a-text>
          <a-sphere
            id="node"
            transmit-node
            color="blue"
            scale="0.45 0.45 0.45"
          ></a-sphere>
        </a-box>
      </a-box>`;
      const orPlate = `
          <a-box
        logic-gate
        class="interactable gates"
        dynamic-body
        grabbable
        hoverable
        material="color: white; wireframe: true;opacity:0"
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
        <a-box
          droppable
          logic-node
          recieve-node
          opacity="0"
          class="nodes recieve-node"
          color="white"
          scale="0.07 0.07 0.07"
          wireframe="true"
          position="-0.3 0.08 -0.02"
        >
          <a-text position="-0.5 0 1" rotation="90 0 0" scale="5 5 5 "></a-text>
          <a-sphere
            recieve-node
            color="red"
            id="node"
            scale="0.45 0.45 0.45"
          ></a-sphere>
        </a-box>
        <a-box
          droppable
          logic-node
          recieve-node
          class="nodes recieve-node"
          opacity="0"
          color="white"
          scale="0.07 0.07 0.07"
          wireframe="true"
          position="-0.3 -0.08 -0.02"
        >
          <a-text position="-0.5 0 1" rotation="90 0 0" scale="5 5 5 "></a-text>
          <a-sphere
            color="red"
            scale="0.45 0.45 0.45"
          ></a-sphere>
        </a-box>
        <a-box
          hoverable
          draggable
          droppable
          logic-node
          transmit-node
          opacity="0"
          class="nodes transmit-node"
          color="white"
          scale="0.07 0.07 0.07"
          wireframe="true"
          position="0.23 -0 -0.02"
        >
          <a-sphere
            color="blue"
            scale="0.45 0.45 0.45"
          ></a-sphere>
        </a-box>
      </a-box>`;
      const andPlate = `
     
      <a-box
        logic-gate
        class="interactable gates"
        dynamic-body
        grabbable
        hoverable
        material="color: white; wireframe: true;opacity:0"
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
        <a-box
          droppable
          logic-node
          recieve-node
          opacity="0"
          class="nodes recieve-node"
          color="white"
          scale="0.07 0.07 0.07"
          wireframe="true"
          position="-0.3 0.08 -0.02"
        >
          <a-text position="-0.5 0 1" rotation="90 0 0" scale="5 5 5 "></a-text>
          <a-sphere
            recieve-node
            color="red"
            id="node"
            scale="0.45 0.45 0.45"
          ></a-sphere>
        </a-box>
        <a-box
          droppable
          logic-node
          recieve-node
          opacity="0"
          class="nodes recieve-node"
          color="white"
          scale="0.07 0.07 0.07"
          wireframe="true"
          position="-0.3 -0.08 -0.02"
        >
          <a-text position="-0.5 0 1" rotation="90 0 0" scale="5 5 5 "></a-text>
          <a-sphere
            recieve-node
            color="red"
            id="node"
            scale="0.45 0.45 0.45"
          ></a-sphere>
        </a-box>
        <a-box
          hoverable
          draggable
          droppable
          logic-node
          transmit-node
          opacity="0"
          class="nodes transmit-node"
          color="white"
          scale="0.07 0.07 0.07"
          wireframe="true"
          position="0.23 -0 -0.02"
        >
          <a-text position="-0.5 0 1" rotation="90 0 0" scale="5 5 5 "></a-text>
          <a-sphere
            transmit-node
            color="blue"
            id="node"
            scale="0.45 0.45 0.45"
          ></a-sphere>
        </a-box>
      </a-box>`;
      const xorPlate = `
      <a-box
        logic-gate
        class="interactable gates"
        dynamic-body
        grabbable
        hoverable
        material="color: white; wireframe: true;opacity:0"
        depth="0.05"
        height="0.3"
        width="0.6"
        rotation="-90 0 0"
        position="0 1 -1"
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
        <a-box
          droppable
          logic-node
          recieve-node
          class="nodes recieve-node"
          color="white"
          scale="0.07 0.07 0.07"
          wireframe="true"
          position="-0.3 0.08 -0.02"
          opacity="0"
        >
          <a-text position="-0.5 0 1" rotation="90 0 0" scale="5 5 5 "></a-text>
          <a-sphere color="red" scale="0.45 0.45 0.45"></a-sphere>
        </a-box>
        <a-box
          droppable
          logic-node
          recieve-node
          class="nodes recieve-node"
          color="white"
          scale="0.07 0.07 0.07"
          wireframe="true"
          position="-0.3 -0.08 -0.02"
          opacity="0"
        >
          <a-text position="-0.5 0 1" rotation="90 0 0" scale="5 5 5 "></a-text>
          <a-sphere color="red" scale="0.45 0.45 0.45"></a-sphere>
        </a-box>
        <a-box
          hoverable
          draggable
          droppable
          logic-node
          transmit-node
          class="nodes transmit-node"
          color="white"
          scale="0.07 0.07 0.07"
          wireframe="true"
          position="0.27 -0 -0.02"
          opacity="0"
        >
          <a-text position="-0.5 0 1" rotation="90 0 0" scale="5 5 5 "></a-text>
          <a-sphere color="blue" scale="0.45 0.45 0.45"></a-sphere>
        </a-box>
      </a-box>`;
      const outputPlate = `
      <a-box
        logic-gate
        class="interactable gates"
        dynamic-body
        grabbable
        hoverable
        material="color: white; wireframe: true;opacity:0"
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
        ></a-gltf-model>
        <a-text
          value="Output"
          color="yellow"
          scale="0.5 0.5 0.5"
          rotation="0 0 0"
          position="-0.16 0 0"
        ></a-text>
        <a-box
          droppable
          logic-node
          recieve-node
          opacity="0"
          class="nodes recieve-node"
          color="white"
          scale="0.07 0.07 0.07"
          wireframe="true"
          position="-0.3 0 -0.02"
        >
          <a-text position="-0.5 0 1" rotation="90 0 0" scale="5 5 5 "></a-text>
          <a-sphere
            id="node"
            recieve-node
            color="red"
            scale="0.45 0.45 0.45"
          ></a-sphere>
        </a-box>
    
      </a-box>`;

      const sceneEl = document.querySelector("a-scene");
      const container = document.createElement("a-entity");
      container.setAttribute("position", "-1 1 -2");
      switch (gate) {
        case "Input":
          container.innerHTML = inputPlate;
          break;
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
        case "Output":
          container.innerHTML = outputPlate;
          break;
        default:
          console.log("Error with selection");
      }

      sceneEl.appendChild(container);
    });
  },
});
