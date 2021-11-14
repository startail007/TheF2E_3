<template>
  <v-dialog v-model="alert" persistent max-width="300px">
    <v-card class="pa-4" light>
      <v-card-text class="text-center"> {{ message }}</v-card-text>
      <v-card-actions class="justify-center">
        <v-btn depressed @click="cancelBtn_click">
          取消
        </v-btn>
        <v-btn depressed color="cyan white--text" @click="certainBtn_click">
          確定
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      alert: false,
      message: "",
      certainFun: null,
      cancelFun: null,
    };
  },
  mounted() {},
  methods: {
    run(message, certainFun, cancelFun) {
      this.alert = true;
      this.message = message;
      this.certainFun = certainFun;
      this.cancelFun = cancelFun;
    },
    cancelBtn_click() {
      this.alert = false;
      this.cancelFun();
    },
    certainBtn_click() {
      this.alert = false;
      this.certainFun();
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped></style>
