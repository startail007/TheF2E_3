<template>
  <div>
    <template v-if="finished">
      <slot name="content" :components="components"></slot>
    </template>
    <template v-else>
      <div class="vh-70 d-flex align-center justify-center">
        <v-progress-circular indeterminate size="64">{{ Math.round(progress * 100) }}%</v-progress-circular>
      </div>
    </template>
  </div>
</template>
<script>
import { loadComponents } from "@js/funs";
export default {
  components: {},
  data() {
    return {
      finished: false,
      progress: 0,
      components: {},
    };
  },
  mounted() {},
  methods: {
    load(list) {
      this.finished = false;
      this.progress = 0;
      return loadComponents(list, (count, len) => {
        this.progress = count / len;
      }).then((data) => {
        const components = {};
        data.forEach((el) => {
          components[el.name] = el.component;
        });
        this.components = components;
        this.finished = true;
        return components;
      });
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
@import "~@css/_variables.scss";
</style>
