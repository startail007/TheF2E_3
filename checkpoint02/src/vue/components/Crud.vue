<template>
  <div>
    <div class="d-flex align-center mb-2">
      <div class="text-body-1" :class="errorDisplay">{{ label }}</div>
      <v-icon class="ml-2" :class="errorDisplay" @click="addItem" title="新增">mdi-plus-box-multiple-outline</v-icon>
    </div>
    <div class="ml-4 mb-2">
      <template v-for="(item, key) in values">
        <div :key="key" class="d-flex align-center">
          <component :is="component" v-model="values[key]" :errorMessagesDisplay="false" :error="errorBool"></component>
          <v-icon class="ml-2 mb-2 align-self-end" :class="errorDisplay" @click="deleteItem(key)" title="刪除"
            >mdi-delete</v-icon
          >
        </div>
        <v-divider :key="'divider_' + key" class="mt-2" v-if="key < values.length - 1"></v-divider>
      </template>
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
      type: Array,
      default() {
        return [];
      },
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
    component: {
      type: Object,
    },
    defaultValue: {
      type: Function,
    },
  },
  data() {
    return {
      values: [],
    };
  },
  watch: {
    value() {
      this.updateValue();
    },
    values: {
      handler(val, oldVal) {
        this.$emit("input", this.values);
        this.$emit("change", this.values);
      },
      deep: true,
    },
  },
  mounted() {
    this.updateValue();
  },
  methods: {
    updateValue() {
      if (this.value) {
        this.values = this.value;
      } else {
        this.values = [];
      }
    },
    clear_click() {
      this.values = [];
      this.$emit("input", this.values);
      this.$emit("change", this.values);
    },
    addItem() {
      this.values.push(this.defaultValue ? this.defaultValue() : null);
    },
    deleteItem(key) {
      this.values.splice(key, 1);
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
