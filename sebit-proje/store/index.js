import Vuex from "vuex"
import info from "./info"
const createStore = () => {
    return new Vuex.Store({
        modules:{
            info
        }
    })
}

export default createStore;