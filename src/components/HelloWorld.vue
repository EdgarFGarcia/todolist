<template>
  <v-container full-height class="mt-5">
    <v-card
      align="center"
      justify="center"
      class="flex"
    >
      <v-card-text>
        <EntryComponent 
          :entries_setup="blah"
          @addentry="savetodo"
        />
      </v-card-text>
      <TodoList 
        :todolistsetup="todolistsetup"
        :items="todolist"
        @edittodo="edittodo"
        @deleteitem="deleteitem"
      />
      <DialogAction 
        :value="isedit"
        :datatoedit="toeditdata"
        v-model="isedit"
        @cancel="canceledit"
        @editdata="todoedit"
      />
    </v-card>
  </v-container>
</template>

<script>
import EntryComponent from './EntryComponent.vue'
import TodoList from './TodoList.vue'
import DialogAction from './DialogAction.vue'
import { mapGetters } from 'vuex'
  export default {
    name: 'HelloWorld',
    components: {
      EntryComponent,
      TodoList,
      DialogAction
    },
    data: () => ({
      blah: {
        setup_add_todo: true,
        label:          "add todo",
        hint:           'add a task',
        button: [
          {
            id:     1,
            icon:   'mdi-cancel',
            action: false,
          },
          {
            id:     2,
            icon:   'mdi-check',
            action: true
          }
        ]
      },
      todolistsetup: {
        title:        'My Todo List',
        icons:        [
          {
            id:       1,
            icon:     'mdi-pen',
            action:   {
              edit:   true
            }
          },
          {
            id:       2,
            icon:     'mdi-cancel',
            action:   {
              delete: true
            }
          }
        ]
      },
      isedit: false,
      toeditdata: {}
    }),
    methods: {
      async savetodo(data){
        let tp = {
          action:   '15 min',
          title:    data
        }
        this.$store.dispatch('setTodoItems', tp)
      },
      edittodo(data){
        //console.log(data)
        this.isedit = true
        this.toeditdata = data
      },
      canceledit(){
        this.isedit = false
      },
      todoedit(datanew){
        const tp = {
          new_title: datanew.new,
          old_title: datanew.old.item.title,
          index:  this.toeditdata.index
        }
        this.$store.dispatch('editrecord', tp)
        this.canceledit()
      },
      deleteitem(data){
        const tp = {
          data: data.item,
          index: data.index
        }
        this.$store.dispatch('removerecord', tp)
      }
    },
    computed: {
      ...mapGetters({
        todolist:     'getTodoItems'
      })
    }
  }
</script>
