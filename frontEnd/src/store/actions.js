import instance from '../axios/index'


export function fetchData({commit}, keyvalue){
    instance.get(`volumes?q=${keyvalue}`).then( data => {
        commit('fetchDataMutation',data.data.items)
    })
}