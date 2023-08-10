
import Axios from './caller.service'

let getAll = () =>{
    return Axios.get('/api/ingredient')
}

let addPays = (data) => {
    return Axios.post('/api/ingredient/', data)
}


export const PaysService = {
    getAll, addPays,  
}