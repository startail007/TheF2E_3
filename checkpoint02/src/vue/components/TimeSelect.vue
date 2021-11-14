<template>
  <div>
    <div class="d-flex align-center">
      <div class="mr-4 mb-2 align-self-end text-body-1" :class="errorDisplay" v-if="label">{{ label }}</div>
      <v-select :error="errorBool" :items="hList" color="cyan" v-model="h" @change="h_change"> </v-select>
      <div class="mx-2 mb-2 align-self-end text-body-1" :class="errorDisplay">:</div>
      <v-select :error="errorBool" :items="mList" color="cyan" v-model="m" @change="m_change"> </v-select>
      <v-icon class="ml-2 mb-2 align-self-end clear" v-if="clearDisplay && (h || m)" @click="clear_click"
        >mdi-close-outline</v-icon
      >
    </div>
    <div class="v-messages theme--light" :class="errorDisplay" role="alert" v-if="errorMessagesDisplay">
      <div class="v-messages__wrapper">
        <div class="v-messages__message">{{ errorMessages }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    value: {
      type: String,
    },
    label: {
      type: String,
      default: "",
    },
    errorMessagesDisplay: {
      type: Boolean,
      default: true,
    },
    errorMessages: {
      type: String,
    },
    error: {
      type: Boolean,
      default: false,
    },
    clearDisplay: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      hList: new Array(24).fill(null).map((el, index) => index.toString().padStart(2, "0")),
      mList: new Array(60).fill(null).map((el, index) => index.toString().padStart(2, "0")),
      h: "",
      m: "",
    };
  },
  watch: {
    value(val) {
      this.updateValue();
    },
  },
  mounted() {
    this.updateValue();
  },
  methods: {
    updateValue() {
      if (this.value) {
        const a = this.value.split(":");
        this.h = a[0];
        this.m = a[1];
      } else {
        this.h = "";
        this.m = "";
      }
    },
    h_change() {
      if (!this.m) {
        this.m = "00";
      }
      const value = `${this.h}:${this.m}`;
      this.$emit("input", value);
      this.$emit("change", value);
    },
    m_change() {
      if (!this.h) {
        this.h = "00";
      }
      const value = `${this.h}:${this.m}`;
      this.$emit("input", value);
      this.$emit("change", value);
    },
    clear_click() {
      this.h = "";
      this.m = "";
      this.$emit("input", "");
      this.$emit("change", "");
    },
  },
  computed: {
    errorBool() {
      return this.error || !!this.errorMessages;
    },
    errorDisplay() {
      return { "error--text": this.errorBool };
    },
  },
};
</script>
<style lang="scss" scoped>
.v-select::v-deep {
  min-width: 4em;
  .v-text-field__details {
    display: none;
  }
  .v-select__selections {
    input {
      display: none;
    }
  }
}
</style>
