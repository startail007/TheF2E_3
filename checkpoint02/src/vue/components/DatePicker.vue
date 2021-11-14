<template>
  <div class="DatePicker">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="value_"
          :label="label"
          prepend-icon="mdi-calendar"
          v-bind="attrs"
          v-on="on"
          color="cyan"
          :error="error"
          :error-messages="errorMessages"
          readonly
        >
          <template v-slot:append>
            <v-icon class="clear" v-if="clearDisplay && value_" @click="clear_click">mdi-close-outline</v-icon>
          </template>
        </v-text-field>
      </template>
      <v-date-picker
        v-model="value_"
        no-title
        color="cyan"
        @change="change"
        locale="tw"
        @input="menu = false"
      ></v-date-picker>
    </v-menu>
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
      menu: false,
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
