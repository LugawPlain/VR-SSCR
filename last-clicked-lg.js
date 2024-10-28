let lastClickedEl = null;

AFRAME.registerComponent("last-clicked-lg", {
  schema: {
    active: { type: "boolean", default: false },
    setEdit: {
      type: "boolean",
      default: false,
    },
  },
  init: function () {
    this.el.setAttribute("material", "opacity", 0);
    this.el.setAttribute("material", {
      wireframe: true,
    });
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onClick = this.onClick.bind(this);

    this.el.addEventListener("mouseenter", this.onMouseEnter);
    this.el.addEventListener("mouseleave", this.onMouseLeave);
    this.el.addEventListener("click", this.onClick);
  },
  onMouseEnter: function () {
    this.el.setAttribute("material", "opacity", 0.4);
  },

  onMouseLeave: function () {
    if (!this.el.hasAttribute("active")) {
      this.el.setAttribute("material", { opacity: 0 });
    }
  },

  onClick: function (event) {
    if (event.detail && event.detail.cursorEl) {
      return;
    }

    if (this.data.active) {
      this.data.active = false;
      lastClickedEl.setAttribute("material", { color: "white" });
      lastClickedEl.removeAttribute("active");
      return;
    }

    if (lastClickedEl) {
      lastClickedEl.setAttribute("material", { color: "white", opacity: 0 });
      lastClickedEl.removeAttribute("active");
      lastClickedEl.components["last-clicked-lg"].data.active = false;
    }

    lastClickedEl = this.el;
    this.el.setAttribute("material", { color: "yellow", opacity: 0.4 });
    this.data.active = true;
    this.el.setAttribute("active", true);
  },

  update: function (oldData) {
    if (this.data.setEdit) {
      this.el.setAttribute("material", "opacity", 0);
      this.el.removeAttribute("active");
      this.el.classList.remove("interactable");
      this.removeListeners();
    }
    console.log(this.el);
  },

  removeListeners: function () {
    this.el.removeEventListener("mouseenter", this.onMouseEnter);
    this.el.removeEventListener("mouseleave", this.onMouseLeave);
    this.el.removeEventListener("click", this.onClick);
  },
  remove: function () {
    this.removeListeners();
  },
});
