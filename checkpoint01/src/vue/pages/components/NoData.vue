<template>
  <div class="my-16">
    <div class="d-flex align-center justify-center">
      <div class="union mr-4"></div>
      <div>
        <div class="text01 text-body-1">Oop！</div>
        <div class="text02 text-h6">很抱歉，找不到符合此搜尋相關的內容。</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {},
};
</script>
<style lang="scss" scoped>
@import "~@css/_variables.scss";
.union {
  background-image: url(~@img/Union.png);
  background-position: center;
  background-size: contain;
  width: 80px;
  height: 80px;
}
.text01 {
  color: #ffb72c;
}
.text02 {
  color: #d2d2d2;
}
@media (min-width: get-breakpoints("sm")) {
}
@media (min-width: get-breakpoints("md")) {
}
@media (min-width: get-breakpoints("lg")) {
}
@media (min-width: get-breakpoints("xl")) {
}
</style>
