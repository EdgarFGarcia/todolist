import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    namespaced: true,
    state: {
        todoitems: [
          {
              action: '15 min',
              title: 'Ali Connors',
          },
          {
              action: '2 hr',
              title: 'me, Scrott, Jennifer',
          },
              {
              action: '6 hr',
              title: 'Sandra Adams',
          },
          {
              action: '12 hr',
              title: 'Trevor Hansen',
          },
          {
              action: '18hr',
              title: 'Britta Holt',
          },
        ]
      },
      mutations: {
        setTodoItems(state, payload){
            state.todoitems.push(payload)
        },
        editrecord(state, payload){
            const data = state.todoitems.filter( q => {
                return q.title == payload.old_title
            })
            data[0].title = payload.new_title
        },
        removerecord(state, payload){
            state.todoitems.splice(payload.index, 1)
        }
      },
      getters: {
        getTodoItems(state){
          return state.todoitems
        }
      },
      actions: {
        setTodoItems({commit}, payload){
          commit('setTodoItems', payload)
        },
        editrecord({commit}, payload){
          commit('editrecord', payload)
        },
        removerecord({commit}, payload){
          commit('removerecord', payload)
        }
      }
})

export default store