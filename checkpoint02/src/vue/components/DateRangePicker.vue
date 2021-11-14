<template>
  <div class="DateRangePicker">
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
          v-model="dateRangeText"
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
            <v-icon class="clear" v-if="clearDisplay && dateRangeText" @click="clear_click">mdi-close-outline</v-icon>
          </template>
        </v-text-field>
      </template>
      <v-date-picker v-model="dateRange" range no-title color="cyan" locale="tw">
        <slot name="bottom"></slot>
        <div class="d-flex flex-column w-100">
          <v-btn
            depressed
            class="ma-2"
            v-for="(item, key) in monthList"
            :key="key"
            @click="item.click ? item.click(item) : undefined"
            >{{ item.text }}</v-btn
          >
        </div>
      </v-date-picker>
    </v-menu>
  </div>
</template>
<script>
import { getOneMonthRange, dateISOString, monthChangeStr } from "@js/funs";
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
      dateRange: [],
      dateRangeText: "",
      monthList: [],
    };
  },
  watch: {
    dateRange() {
      if (this.dateRange.length >= 2) {
        this.dateRangeText = `${this.dateRange[0] ?? ""}~${this.dateRange[1] ?? ""}`;
        if (this.dateRange[1]) {
          this.menu = false;
        }
      }
    },
    dateRangeText() {
      this.$emit("input", this.dateRangeText);
      this.$emit("change", this.dateRangeText);
    },
    value(val) {
      this.updateValue();
    },
  },
  mounted() {
    const now = new Date();
    const nowMonth = new Date(dateISOString(monthChangeStr(now.getFullYear(), now.getMonth() + 1) + "-01"));
    const monthList = [];
    for (let i = 0; i < 3; i++) {
      const y = nowMonth.getFullYear();
      const m = nowMonth.getMonth() + 1;
      const obj = {
        y,
        m,
        text: `${y}年${m}月`,
        click: (item) => {
          this.monthGo(y, m);
        },
      };
      monthList.push(obj);
      nowMonth.setMonth(nowMonth.getMonth() + 1);
    }
    this.monthList = monthList;
    this.updateValue();
  },
  methods: {
    monthGo(y, m) {
      const { startDate, endDate } = getOneMonthRange(y, m);
      const dateRange = `${startDate.toISOString().substring(0, 10)}~${endDate.toISOString().substring(0, 10)}`;
      this.$emit("input", dateRange);
      this.$emit("change", dateRange);
      this.menu = false;
    },
    updateValue() {
      if (this.value) {
        const a = this.value.split("~");
        this.dateRange = a.filter((el) => el);
      } else {
        this.dateRangeText = "";
        this.dateRange = [];
      }
    },
    clear_click() {
      this.dateRangeText = "";
      this.dateRange = [];
      this.$emit("input", "");
      this.$emit("change", "");
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped></style>
