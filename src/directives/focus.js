export default {
  mounted(el, binding) {
    el.focus();
    if ("color" in binding.value) {
      el.addEventListener("focus", function () {
        this.style.borderColor = binding.value.color;
        this.style.borderWith = "4px";
      });
      el.addEventListener("focusout", function () {
        this.style.borderColor = "";
        this.style.borderWith = "1px";
      });
    }
  },
};
