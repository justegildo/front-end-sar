
import Axios from './caller.service'

let getAll = () =>{
    return Axios.get('/api/ingredient')
}

let addModele = (data) => {
    return Axios.post('/api/ingredient/', data)
}


export const ModeleService = {
    getAll, addModele,  
}