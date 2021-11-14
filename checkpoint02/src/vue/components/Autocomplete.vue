<template>
  <v-autocomplete
    :label="label"
    v-model="value_"
    color="cyan"
    :items="items"
    :error="error"
    :error-messages="errorMessages"
    @change="change"
  >
    <template v-slot:append-outer>
      <v-icon class="clear" v-if="clearDisplay && value_" @click="clear_click">mdi-close-outline</v-icon>
    </template>
  </v-autocomplete>
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
    errorMessages: {
      type: String,
    },
    error: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    clearDisplay: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      value_: "",
    };
  },
  watch: {
    value() {
      this.updateValue();
    },
  },
  mounted() {
    this.updateValue();
  },
  methods: {
    updateValue() {
      this.value_ = this.value;
    },
    change() {
      this.$emit("input", this.value_);
      this.$emit("change", this.value_);
    },
    click() {
      this.$emit("click");
    },
    clear_click() {
      this.value_ = "";
      this.$emit("input", this.value_);
      this.$emit("change", this.value_);
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped></style>
