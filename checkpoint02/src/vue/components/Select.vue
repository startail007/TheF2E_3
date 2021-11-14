<template>
  <v-select
    :label="label"
    :items="items"
    :loading="loading"
    color="cyan"
    v-model="value_"
    :error="error"
    :error-messages="errorMessages"
    @change="change"
    @click="click"
  >
    <template v-slot:append-outer>
      <v-icon class="clear" v-if="clearDisplay && value_" @click="clear_click">mdi-close-outline</v-icon>
    </template>
    <template v-slot:no-data>
      <div class="pa-2">{{ loading ? "載入中..." : "空資料" }}</div>
    </template>
    <template v-slot:selection="{ item }">
      <div class="text-truncate">{{ item.text }}</div>
    </template>
    <template v-slot:item="{ item, attrs, on }">
      <!-- <v-list-item v-bind="attrs" v-on="on">
        <v-list-item-content>
          <v-list-item-title :id="attrs['aria-labelledby']" v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item> -->
      <div>{{ item.text }}</div>
    </template>
  </v-select>
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
    loading: {
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
