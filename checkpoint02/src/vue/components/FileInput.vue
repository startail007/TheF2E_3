<template>
  <div class="d-flex align-center">
    <div class="mr-4 text-body-1" :class="errorDisplay" v-if="label">{{ label }}</div>
    <template v-if="oValue && !value_">
      <div class="mr-2">{{ oValue }}</div>
      <v-icon @click="fileshow_click(oValue)" title="檢視">mdi-image-area</v-icon>
      <v-icon @click="fileremove_click" title="清除">mdi-delete</v-icon>
    </template>
    <v-file-input
      :accept="accept"
      label="上傳圖片"
      v-model="value_"
      :error="error"
      :error-messages="errorMessages"
      @change="change"
    ></v-file-input>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    accept: {
      type: String,
    },
    value: {
      type: [String, File],
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
    sizelimit: {
      type: Number,
    },
  },
  data() {
    return {
      value_: null,
      oValue: "",
    };
  },
  watch: {
    value() {
      this.updateValue();
    },
  },
  mounted() {
    if (typeof this.value === "string") {
      this.oValue = this.value;
    }
    this.updateValue();
  },
  methods: {
    updateValue() {
      if (this.value && this.value.constructor === File) {
        this.value_ = this.value;
      }
    },
    change() {
      /*change: (data, items, key) => {
            const file = data[key];
            if (file.size > 2097152) {
              console.log("aaa");
              data[key] = null;
              this.$forceUpdate();
            }
            //console.log(, file.size);
          },*/
      if (this.value_ && this.sizelimit !== undefined && this.sizelimit !== null) {
        if (this.value_.size > this.sizelimit) {
          this.$emit("limit", this.value_.size, this.sizelimit);
          this.$nextTick(() => {
            this.value_ = null;
            this.$emit("input", this.value_);
            this.$emit("change", this.value_);
          });
        } else {
          this.$emit("input", this.value_);
          this.$emit("change", this.value_);
        }
      } else {
        if (this.value_) {
          this.$emit("input", this.value_);
          this.$emit("change", this.value_);
        } else {
          this.$emit("input", this.oValue);
          this.$emit("change", this.oValue);
        }
      }
    },
    fileshow_click(value) {
      this.$emit("fileshow", value);
    },
    fileremove_click() {
      this.oValue = "";
      this.value_ = null;
      this.$emit("input", this.value_);
      this.$emit("change", this.value_);
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
