<template>
  <div class="pa-2 d-flex align-center">
    <v-spacer></v-spacer>
    <div class="text-caption mx-1">每頁行數:</div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text class="text-caption pa-0" v-bind="attrs" v-on="on">
          {{ itemsPerPage }}
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(number, index) in itemsPerPageArray" :key="index" @click="updateItemsPerPage(number)">
          <v-list-item-title>{{ number }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <div class="text-caption mx-1">
      {{ Math.min((page - 1) * itemsPerPage + 1, length) }}-{{ Math.min(page * itemsPerPage, length) }}
      of
      {{ length }}
    </div>
    <v-btn depressed small text @click="prevPage">
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-btn depressed small text @click="nextPage">
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    length: {
      type: Number,
      default: 0,
    },
    page: {
      type: Number,
      default: 1,
    },
    pageCount: {
      type: Number,
      default: 0,
    },
    itemsPerPage: {
      type: Number,
      default: 15,
    },
    itemsPerPageArray: {
      type: Array,
      default: () => {
        return [5, 10, 15, 30, 50];
      },
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    updateItemsPerPage(number) {
      //this.itemsPerPage = number;
      this.$emit("update:itemsPerPage", number);
    },
    prevPage() {
      if (this.page - 1 >= 1) {
        //this.page -= 1;
        this.$emit("update:page", this.page - 1);
      }
    },
    nextPage() {
      if (this.page + 1 <= this.pageCount) {
        //this.page += 1;
        this.$emit("update:page", this.page + 1);
      }
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped></style>
