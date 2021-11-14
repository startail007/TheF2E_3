<template>
  <v-overlay :value="running" :style="{ zIndex: 9999 }">
    <v-progress-circular indeterminate size="64">{{ text }}</v-progress-circular>
  </v-overlay>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      text: "",
      running: false,
    };
  },
  mounted() {},
  methods: {
    open(text) {
      this.text = text;
      this.running = true;
    },
    close() {
      this.running = false;
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped></style>
