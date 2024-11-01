AFRAME.registerComponent("last-clicked-node", {
  schema: {
    setEdit: {
      type: "boolean",
      default: false,
    },
  },
  init: function () {
    if (!this.data.setEdit) {
      this.el.setAttribute("material", {
        opacity: 0,
      });
    }
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onClick = this.onClick.bind(this);

    this.el.addEventListener("mouseenter", this.onMouseEnter);
    this.el.addEventListener("mouseleave", this.onMouseLeave);
    this.el.addEventListener("click", this.onClick);
  },
  onMouseEnter: function () {
    this.el.setAttribute("material", "opacity", 0.4);
    console.log(this.el);
  },

  onMouseLeave: function () {
    if (!this.el.hasAttribute("active")) {
      this.el.setAttribute("material", { opacity: 0 });
      console.log("hello");
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
      this.el.setAttribute("material", {});
      this.el.classList.add("interactable");
    }
  },
});
