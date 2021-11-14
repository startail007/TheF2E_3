<template>
  <div>
    <CoolLightBox :items="items" :index="index" @close="index = null"> </CoolLightBox>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      items: [],
      index: null,
    };
  },
  mounted() {},
  methods: {
    open(url) {
      this.items = [url];
      this.index = 0;
    },
    close() {
      this.items = [];
      this.index = null;
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped></style>
