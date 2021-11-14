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
    multiple
  >
    <template v-slot:append-outer>
      <v-icon class="clear" v-if="clearDisplay && value_ && value_.length" @click="clear_click"
        >mdi-close-outline</v-icon
      >
    </template>
    <template v-slot:no-data>
      <div class="pa-2">{{ loading ? "載入中..." : "空資料" }}</div>
    </template>
    <!-- <template v-slot:selection="{ item }">
      <div class="text-truncate">{{ item.text }}</div>
    </template> -->
    <template v-slot:item="{ item, attrs, on }">
      <!-- <v-list-item v-bind="attrs" v-on="on">
        <v-list-item-content>
          <v-list-item-title :id="attrs['aria-labelledby']" v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item> -->
      <v-checkbox v-model="value_" :value="item.value" readonly></v-checkbox>
      <div>{{ item.text }}</div>
      <div class="ml-2" v-if="item.itemSubText">{{ item.itemSubText }}</div>
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
      if (this.value) {
        const ary = this.value.split(",");
        this.value_ = this.items.filter((el) => ary.includes(el.value)).map((el) => el.value);
      } else {
        this.value_ = [];
      }
    },
    change() {
      const value = this.value_.toString();
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
