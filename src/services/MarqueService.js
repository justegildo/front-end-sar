
import Axios from './caller.service'

let getAll = () =>{
    return Axios.get('/api/ingredient')
}

let addMarque = (data) => {
    return Axios.post('/api/ingredient/', data)
}


export const MarqueService = {
    getAll, addMarque,  
}