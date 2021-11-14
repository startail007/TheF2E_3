<template>
  <div>
    <div class="d-flex align-center">
      <!-- <div class="mr-4 mb-2 text-body-1" :class="errorDisplay" v-if="label">{{ label }}</div> -->
      <div class="d-flex flex-wrap">
        <DatePicker :label="dateLabel" v-model="date" @change="date_change" :error="errorBool"></DatePicker>
        <TimeRangeSelect
          :label="timeRangeLabel"
          v-model="timeRange"
          :error="errorBool"
          :errorMessagesDisplay="false"
          @change="timeRange_change"
        ></TimeRangeSelect>
        <v-icon class="ml-2 mb-2 align-self-end clear" v-if="clearDisplay && (date || timeRange)" @click="clear_click"
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
import DatePicker from "@vue/components/DatePicker";
import TimeRangeSelect from "@vue/components/TimeRangeSelect";
export default {
  components: { DatePicker, TimeRangeSelect },
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
      dateLabel: "",
      timeRangeLabel: "",
      date: "",
      timeRange: "",
    };
  },
  watch: {
    value(val) {
      this.updateValue();
    },
    label(val) {
      this.updateLabel();
    },
  },
  mounted() {
    this.updateValue();
    this.updateLabel();
  },
  methods: {
    updateLabel() {
      if (this.label) {
        const a = this.label.split("_");
        this.dateLabel = a[0];
        this.timeRangeLabel = a[1];
      } else {
        this.dateLabel = "";
        this.timeRangeLabel = "";
      }
    },
    updateValue() {
      if (this.value) {
        const a = this.value.split("_");
        this.date = a[0];
        this.timeRange = a[1];
      } else {
        this.date = "";
        this.timeRange = "";
      }
    },
    date_change() {
      if (!this.timeRange) {
        this.timeRange = "00:00~00:00";
      }
      const value = `${this.date}_${this.timeRange}`;
      this.$emit("input", value);
      this.$emit("change", value);
    },
    timeRange_change() {
      if (!this.date) {
        this.date = new Date().toISOString().substring(0, 10);
      }
      const value = `${this.date}_${this.timeRange}`;
      this.$emit("input", value);
      this.$emit("change", value);
    },
    clear_click() {
      this.date = "";
      this.timeRange = "";
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
.DatePicker::v-deep {
  .v-text-field__details {
    display: none;
  }
}
</style>
