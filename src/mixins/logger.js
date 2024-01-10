export default {
  mounted() {
    this.writeLogEntry(
      `${this.$options.name}-Component ist nun vollsändig geladen.`
    );
  },
  methods: {
    writeLogEntry(text) {
      console.log(text);
    },
  },
};
