<template>
  <v-combobox
    color="cyan"
    :label="label"
    :items="items"
    v-model="value_"
    multiple
    :error="error"
    :error-messages="errorMessages"
    @change="change"
  >
    <template v-slot:append-outer>
      <v-icon class="clear" v-if="clearDisplay && value_ && value_.length" @click="clear_click"
        >mdi-close-outline</v-icon
      >
    </template>
    <template v-slot:item="{ item }">
      <v-checkbox v-model="value_" :value="item"></v-checkbox>
      <div>{{ item.text }}</div>
      <div class="ml-2" v-if="item.itemSubText">{{ item.itemSubText }}</div>
    </template>
  </v-combobox>
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
      value_: [],
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
      if (this.value) {
        const ary = this.value.split(",");
        this.value_ = this.items.filter((el) => ary.includes(el.value));
      } else {
        this.value_ = [];
      }
    },
    change() {
      //console.log();
      const value = this.value_.map((el) => el.value).toString();
      this.$emit("input", value);
      this.$emit("change", value);
    },
    click() {
      this.$emit("click");
    },
    clear_click() {
      this.value_ = [];
      this.$emit("input", "");
      this.$emit("change", "");
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped></style>
