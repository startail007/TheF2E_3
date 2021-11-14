<template>
  <div class="pa-0" :class="item0.class" v-show="item0.display ? item0.display(data0) : true">
    <Select
      v-if="item0.type === 'select'"
      :label="item0.label"
      :items="data0[name] && !item0.list.length ? [{ text: data0[name] }] : item0.list"
      :loading="item0.loading"
      v-model="data0[name]"
      :error-messages="item0.errors ? item0.errors(name) : undefined"
      @click="item0.click ? item0.click(data0, items0, name) : undefined"
      @change="item0.change ? item0.change(data0, items0, name) : undefined"
      clearDisplay
    ></Select>
    <SelectMultiple
      v-else-if="item0.type === 'selectMultiple'"
      :label="item0.label"
      :items="item0.items"
      :loading="item0.loading"
      v-model="data0[name]"
      :error-messages="item0.errors ? item0.errors(name) : undefined"
      @click="item0.click ? item0.click(data0, items0, name) : undefined"
      @change="item0.change ? item0.change(data0, items0, name) : undefined"
      clearDisplay
    ></SelectMultiple>
    <DatePicker
      v-else-if="item0.type === 'date-picker'"
      :label="item0.label"
      v-model="data0[name]"
      :error-messages="item0.errors ? item0.errors(name) : undefined"
      @change="item0.change ? item0.change(data0, items0, name) : undefined"
      clearDisplay
    ></DatePicker>
    <DateRangePicker
      v-else-if="item0.type === 'dateRange-picker'"
      :label="item0.label"
      v-model="data0[name]"
      :error-messages="item0.errors ? item0.errors(name) : undefined"
      @change="item0.change ? item0.change(data0, items0, name) : undefined"
      clearDisplay
    >
      <!-- <template v-slot:bottom>
        <div class="d-flex flex-column w-100">
          <v-btn depressed class="ma-2">2021-07</v-btn>
          <v-btn depressed class="ma-2">2021-08</v-btn>
          <v-btn depressed class="ma-2">2021-09</v-btn>
        </div>
      </template> -->
    </DateRangePicker>
    <TimeSelect
      v-else-if="item0.type === 'time-select'"
      :label="item0.label"
      v-model="data0[name]"
      :error-messages="item0.errors ? item0.errors(name) : undefined"
      @change="item0.change ? item0.change(data0, items0, name) : undefined"
      clearDisplay
    ></TimeSelect>
    <TimeRangeSelect
      v-else-if="item0.type === 'timeRange-select'"
      :label="item0.label"
      v-model="data0[name]"
      :error-messages="item0.errors ? item0.errors(name) : undefined"
      @change="item0.change ? item0.change(data0, items0, name) : undefined"
      clearDisplay
    ></TimeRangeSelect>
    <DateTimeRangeSelect
      v-else-if="item0.type === 'dateTimeRange-select'"
      :label="item0.label"
      v-model="data0[name]"
      :error-messages="item0.errors ? item0.errors(name) : undefined"
      @change="item0.change ? item0.change(data0, items0, name) : undefined"
      clearDisplay
    ></DateTimeRangeSelect>
    <FileInput
      v-else-if="item0.type === 'file-input'"
      :accept="item0.accept"
      :label="item0.label"
      v-model="data0[name]"
      :error-messages="item0.errors ? item0.errors(name) : undefined"
      @change="item0.change ? item0.change(data0, items0, name) : undefined"
      @fileshow="item0.fileshow"
      :sizelimit="item0.sizelimit"
      @limit="item0.limit"
    ></FileInput>
    <MonthPicker
      v-else-if="item0.type === 'month-picker'"
      :label="item0.label"
      v-model="data0[name]"
      :error-messages="item0.errors ? item0.errors(name) : undefined"
      @change="item0.change ? item0.change(data0, items0, name) : undefined"
      clearDisplay
    ></MonthPicker>
    <Autocomplete
      v-else-if="item0.type === 'autocomplete'"
      :label="item0.label"
      v-model="data0[name]"
      :items="item0.items"
      :error-messages="item0.errors ? item0.errors(name) : undefined"
      @change="item0.change ? item0.change(data0, items0, name) : undefined"
      clearDisplay
    ></Autocomplete>
    <Combobox
      v-else-if="item0.type === 'combobox'"
      :label="item0.label"
      v-model="data0[name]"
      :items="item0.items"
      :error-messages="item0.errors ? item0.errors(name) : undefined"
      @change="item0.change ? item0.change(data0, items0, name) : undefined"
      clearDisplay
    ></Combobox>
    <Crud
      v-else-if="item0.type === 'crud'"
      :label="item0.label"
      v-model="data0[name]"
      :items="item0.items"
      :error-messages="item0.errors ? item0.errors(name) : undefined"
      @change="item0.change ? item0.change(data0, items0, name) : undefined"
      :component="item0.component"
      :defaultValue="item0.defaultValue"
      clearDisplay
    ></Crud>
    <div v-else-if="item0.type === 'button'">
      <div class="d-flex align-center">
        <div class="mr-4 text-body-1">{{ item0.label }}</div>
        <v-btn
          v-if="data0[name]"
          depressed
          color="cyan white--text"
          @click="item0.click ? item0.click(data0, items0, name) : undefined"
          >{{ item0.buttonText }}</v-btn
        >
        <div v-else>無</div>
      </div>
    </div>
    <v-textarea
      v-else-if="item0.type === 'textarea'"
      :name="name"
      :type="item0.dataType"
      :label="item0.label"
      v-model="data0[name]"
      :placeholder="item0.placeholder"
      color="cyan"
      :error-messages="item0.errors ? item0.errors(name) : undefined"
      @change="item0.change ? item0.change(data0, items0, name) : undefined"
      outlined
      rows="3"
    ></v-textarea>
    <v-textarea
      v-else-if="item0.type === 'textarea-readonly'"
      :name="name"
      :type="item0.dataType"
      :label="item0.label"
      color="cyan"
      :value="data0[name] ? (item0.format ? item0.format(data0[name]) : data0[name]) : '無'"
      outlined
      readonly
      rows="3"
    ></v-textarea>
    <v-text-field
      v-else-if="item0.type === 'text-field'"
      :name="name"
      :type="item0.dataType"
      :label="item0.label"
      :placeholder="item0.placeholder"
      v-model="data0[name]"
      color="cyan"
      :error-messages="item0.errors ? item0.errors(name) : undefined"
      @change="item0.change ? item0.change(data0, items0, name) : undefined"
    ></v-text-field>
    <v-text-field
      v-else
      :name="name"
      :type="item0.dataType"
      :label="item0.label"
      :value="data0[name] ? (item0.format ? item0.format(data0[name]) : data0[name]) : '無'"
      color="cyan"
      readonly
    ></v-text-field>
  </div>
</template>
<script>
import TimeSelect from "@vue/components/TimeSelect";
import TimeRangeSelect from "@vue/components/TimeRangeSelect";
import DateTimeRangeSelect from "@vue/components/DateTimeRangeSelect";
import DatePicker from "@vue/components/DatePicker";
import DateRangePicker from "@vue/components/DateRangePicker";
import MonthPicker from "@vue/components/MonthPicker";
import FileInput from "@vue/components/FileInput";
import Select from "@vue/components/Select";
import Autocomplete from "@vue/components/Autocomplete";
import Combobox from "@vue/components/Combobox";
import Crud from "@vue/components/Crud";
import SelectMultiple from "@vue/components/SelectMultiple";
export default {
  components: {
    TimeSelect,
    TimeRangeSelect,
    DateTimeRangeSelect,
    DatePicker,
    DateRangePicker,
    MonthPicker,
    FileInput,
    Select,
    Autocomplete,
    Combobox,
    Crud,
    SelectMultiple,
  },
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
    items: {
      type: Object,
      default() {
        return {};
      },
    },
    name: {
      type: String,
      default: "",
    },
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    data() {
      this.data0 = this.data;
    },
    items() {
      this.items0 = this.items;
    },
    item() {
      this.item0 = this.item;
    },
  },
  data() {
    return {
      data0: this.data,
      items0: this.items,
      item0: this.item,
    };
  },
  mounted() {
    this.data0 = this.data;
    this.items0 = this.items;
    this.item0 = this.item;
  },
  methods: {},
  computed: {},
};
</script>
<style lang="scss" scoped></style>
