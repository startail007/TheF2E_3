<template>
  <div>
    <div class="d-flex align-center">
      <div class="mr-4 mb-2 align-self-end text-body-1" :class="errorDisplay" v-if="label">{{ label }}</div>
      <div class="d-flex flex-wrap">
        <TimeSelect
          v-model="timeS"
          :error="errorBool"
          :errorMessagesDisplay="false"
          @change="timeS_change"
        ></TimeSelect>
        <div class="mx-2 mb-2 align-self-end text-body-1" :class="errorDisplay">~</div>
        <TimeSelect
          v-model="timeE"
          :error="errorBool"
          :errorMessagesDisplay="false"
          @change="timeE_change"
        ></TimeSelect>
        <v-icon class="ml-2 mb-2 align-self-end clear" v-if="clearDisplay && (timeS || timeE)" @click="clear_click"
          >mdi-close-outline</v-icon
        >
      </div>
    </div>
    <div class="v-messages theme--light" :class="errorDisplay" role="alert" v-if="errorMessagesDisplay">
      <div class="v-messages__wrapper">
        <div class="v-messages__message">{{ errorMessages }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import TimeSelect from "@vue/components/TimeSelect";
export default {
  components: { TimeSelect },
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
      timeS: "",
      timeE: "",
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
        const a = this.value.split("~");
        this.timeS = a[0];
        this.timeE = a[1];
      } else {
        this.timeS = "";
        this.timeE = "";
      }
    },
    timeS_change() {
      if (!this.timeE) {
        this.timeE = "00:00";
      }
      const value = `${this.timeS}~${this.timeE}`;
      this.$emit("input", value);
      this.$emit("change", value);
    },
    timeE_change() {
      if (!this.timeS) {
        this.timeS = "00:00";
      }
      const value = `${this.timeS}~${this.timeE}`;
      this.$emit("input", value);
      this.$emit("change", value);
    },
    clear_click() {
      this.timeS = "";
      this.timeE = "";
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
<style lang="scss" scoped></style>
