
import Axios from './caller.service'

let getAll = () =>{
    return Axios.get('/api/ingredient')
}

let addFacturation = (data) => {
    return Axios.post('/api/ingredient/', data)
}


export const FacturationService = {
    getAll, addFacturation,  
}