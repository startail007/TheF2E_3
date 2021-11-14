<template>
  <v-menu v-model="showMenu" :position-x="x" :position-y="y" absolute offset-y>
    <v-list>
      <v-list-item v-for="(item, index) in contextmenu" :key="index" class="px-2">
        <v-btn class="d-flex justify-start w-100" depressed color="transparent" @click="item.click(contextmenuData)">
          <v-icon class="mr-2">{{ item.icon }}</v-icon>
          <div class="text-body-1">{{ item.title }}</div>
        </v-btn>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      contextmenuData: null,
      showMenu: false,
      x: 0,
      y: 0,
      contextmenu: [],
    };
  },
  mounted() {},
  methods: {
    open(contextmenu = [], x = 0, y = 0, contextmenuData = null) {
      this.x = x;
      this.y = y;
      this.contextmenu = contextmenu;
      this.contextmenuData = contextmenuData;
      this.showMenu = true;
    },
    close() {
      this.showMenu = false;
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped></style>
