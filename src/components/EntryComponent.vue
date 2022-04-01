<template>
    <div>
        <div v-if="entries_setup.setup_add_todo">
            <v-row>
                <v-col cols="10">
                    <v-text-field
                        dense
                        filled
                        v-model="todo"
                        :label="entries_setup.label"
                        :hint="entries_setup.hint"
                    ></v-text-field>
                </v-col>
                <v-col cols="2">
                    <v-btn-toggle v-model="toggle_none">
                        <v-btn
                            v-for="(btn, btnIndex) in entries_setup.button"
                            :key="btnIndex"
                            @click="btn.action ? addentry() : donothing()"
                        >
                            <v-icon>
                                {{btn.icon}}
                            </v-icon>
                        </v-btn>
                    </v-btn-toggle>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
  components: {
  },
  props: [
    'entries_setup'
  ],
  data: () => ({
    todo: null,
    toggle_none: null,
  }),
  mounted () {
  },
  created () {
  },
  computed: {
  },
  methods: {
    addentry(){
      this.$emit('addentry', this.todo)
      this.todo = null
    },
    donothing(){
      this.todo = null
    }
  },
  watch: {
  }
}
</script>

<style scoped lang="scss">
</style>