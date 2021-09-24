import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        sampleData: []
    },
    mutations:{
        SET_SAMPLE_DATA(state, data){
            state.sampleData = data
        }
    },
    actions:{
        setSampleData: (context, payload) => {
            context.commit('SET_SAMPLE_DATA', payload);
        }
    },
    getters:{
        getSampleData: state => data => {
            return state.sampleData.filter(item => {
                return item.name.toLowerCase().includes(data)
            })
        }
    }
})