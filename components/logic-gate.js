let activeEl = null;

AFRAME.registerComponent("logic-gate", {
  schema: {
    active: { type: "boolean", default: false },
    setToggle: {
      type: "boolean",
      default: false,
    },
  },
  init: function () {
    this.onClick = this.onClick.bind(this);
  },

  update: function (oldData) {
    console.log("setToggle value:", this.data.setToggle);
    if (this.data.setToggle) {
      this.el.setAttribute("material", { color: "white", opacity: 0 });
      this.el.classList.remove("interactable");
      this.el.removeAttribute("grabbable");
      this.el.removeEventListener("click", this.onClick);
    } else {
      this.el.classList.add("interactable");
      this.el.setAttribute("grabbable", {});
      this.el.addEventListener("click", this.onClick);
    }
  },

  remove: function () {
    this.el.removeEventListener("click", this.onClick);
  },

  onClick: function (event) {
    if (event.detail && event.detail.cursorEl) {
      return;
    }

    if (this.data.active) {
      this.data.active = false;
      activeEl.setAttribute("material", { color: "white" });
      return;
    }

    if (activeEl) {
      activeEl.setAttribute("material", { color: "white", opacity: 0 });
      activeEl.setAttribute("logic-gate", { active: false });
    }

    activeEl = this.el;
    this.el.setAttribute("material", { color: "yellow", opacity: 0.4 });
    this.data.active = true;
  },
});
