
import Axios from './caller.service'

let getAll = () =>{
    return Axios.get('/api/ingredient')
}

let addClientFinal = (data) => {
    return Axios.post('/api/ingredient/', data)
}


export const ClientFinalService = {
    getAll, addClientFinal,  
}