<template>
    <div>
        <v-card
            style="width: 90%;"
        >
            <v-card-title>
                {{todolistsetup.title}}
            </v-card-title>
            <v-card-text
                align="left"
            >
            <v-list two-line>
                <v-list-item-group
                active-class="pink--text"
                multiple
            >
                <template v-for="(item, index) in items">
                    <v-list-item :key="index">
                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-action>
                        <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
                        <v-btn-toggle v-model="toggle_none">
                            <v-icon
                                v-for="(icon, indexicon) in todolistsetup.icons"
                                :key="indexicon"
                                @click="icon.action.edit ? edititem(item, index) : deleteitem(item, index)"
                            >
                                {{icon.icon}}
                            </v-icon>
                        </v-btn-toggle>
                        </v-list-item-action>
                    </v-list-item>
                </template>
                </v-list-item-group>
            </v-list>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
  components: {
  },
  props: [
    'todolistsetup',
    'items'
  ],
  data: () => ({
    toggle_none: null
  }),
  mounted () {
  },
  created () {
  },
  computed: {
  },
  methods: {
    edititem(data, index){
      const tp = {
        item: data,
        index: index
      }
      this.$emit('edittodo', tp)
    },
    deleteitem(data, index){
       const tp = {
        item: data,
        index: index
      }
      this.$emit('deleteitem', tp)
    }
  },
  watch: {
  }
}
</script>

<style scoped lang="scss">
</style>