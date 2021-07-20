import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      data: []
  },
  getters:{
    pokemons: (state) => state.data,  
  },

  // เหมือน setter เอาไว้เปลี่ยนแปลงค่าใน state
  mutations: {
    fetch (state , {res}) {
        state.data = res.data
    }
  },

  // เหมือน public  method ใน oop ให้ภายนอกเรียกใข้
  // หรือดึงข้อมูลจากภายนอก
  actions: {
      // commit เป็น key word ไว้เรียก mutation
      fetchPokemon({commit}){
        // เรียก api
        let res = {
            data: [
                {
                    name:{
                        english: 'Bulbasaur',
                        japanese: 'Fushikidane'
                    },
                    type: ['Grass','Poison']
                },
                {
                    name:{
                        english: 'Bulbasaur',
                        japanese: 'Fushikidane'
                    },
                    type: ['Grass','Poison']
                },
            ]
        }
    commit('fetch' , {res})

      }
  },
  modules: {
  }
})
