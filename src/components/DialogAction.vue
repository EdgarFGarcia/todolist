<template>
    <div>
        <v-row justify="center">
            <v-dialog
                :value="value"
                max-width="290"
            >
            <v-card>
                <v-card-title class="text-h5">
                    Edit To-Do
                </v-card-title>
                <v-card-text>
                    <v-text-field
                        v-if="Object.keys(datatoedit).length !== 0"
                        v-model="item"
                        :value="datatoedit.item.title"
                        :label="datatoedit.item.title"
                    ></v-text-field>
                </v-card-text>

                <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                    color="green darken-1"
                    text
                    @click="cancel"
                >
                    Cancel
                </v-btn>

                <v-btn
                    color="green darken-1"
                    text
                    @click="editdata"
                >
                    Save
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>

<script>
export default {
  components: {
  },
  props: [
    'value', 'datatoedit'
  ],
  data: () => ({
    item: ""
  }),
  mounted () {
  },
  created () {
  },
  computed: {
  },
  methods: {
    cancel(){
      this.$emit('cancel')
    },
    editdata(){
      this.$emit('editdata', {new: this.item, old: this.datatoedit})
      this.item = ''
    }
  },
  watch: {
  }
}
</script>

<style scoped lang="scss">
</style>