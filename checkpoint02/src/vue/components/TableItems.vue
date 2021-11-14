<template>
  <div class="row">
    <template v-for="(item, key) in typesetting">
      <template v-if="item.type">
        <template v-if="item.type === 'divider'">
          <v-divider class="pa-0 my-4 col-12" :key="'item' + key + '_divider'"></v-divider>
        </template>
        <template v-else-if="item.type === 'text'">
          <div :class="item.class">{{ item.text }}</div>
        </template>
        <template v-else-if="item.type === 'tabs'">
          <div class="pa-1 col-12" :key="'item' + key + '_tabs'">
            <v-tabs v-model="item.tab" background-color="transparent" color="basil" grow show-arrows>
              <v-tab v-for="(tab, tabKey) in item.tabs" :key="tabKey">
                {{ tab }}
              </v-tab>
            </v-tabs>
            <v-tabs-items class="pa-6" v-model="item.tab">
              <v-tab-item v-for="(tab, tabKey) in item.tabs" :key="tabKey">
                <div class="row">
                  <template v-for="(tabsContent, tabsContentKey) in item.tabsContent[tabKey]">
                    <template v-if="items[tabsContent.itemName]">
                      <TableItem
                        :data="data"
                        :items="items"
                        :name="tabsContent.itemName"
                        :item="items[tabsContent.itemName]"
                        class="pa-1"
                        :class="tabsContent.class"
                        :key="tabsContentKey"
                      ></TableItem>
                    </template>
                  </template>
                </div>
              </v-tab-item>
            </v-tabs-items>
          </div>
        </template>
      </template>
      <template v-else-if="items[item.itemName]">
        <TableItem
          :data="data"
          :items="items"
          :name="item.itemName"
          :item="items[item.itemName]"
          class="pa-1"
          :class="item.class"
          :key="'item' + key"
        ></TableItem>
      </template>
    </template>
  </div>
</template>
<script>
import TableItem from "@vue/components/TableItem";
export default {
  components: { TableItem },
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
    typesetting: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {},
};
</script>
<style lang="scss" scoped></style>
