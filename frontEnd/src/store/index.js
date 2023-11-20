import { createStore } from "vuex"
import states from './states.js'
import * as actions from './actions.js'
import * as mutations from './mutations.js'
import * as getters from './getters.js'


const store = createStore({

    states,
    mutations,
    actions,
    getters,
  
  })


export default store ;
