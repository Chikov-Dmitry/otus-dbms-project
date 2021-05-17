import axios from "axios";
const state = {
    products : []
}
const getters ={}
const mutations = {
    // CHANGE_PRODUCT (state:object ,value:Array<object>){
    //     state.products = value
    // }
}
const actions = {
    LOAD_PRODUCTS() {
        axios.get('/product').then((result) => {
         console.log(result.data)
        })
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}