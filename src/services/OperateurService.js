
import Axios from './caller.service'

let getAll = () =>{
    return Axios.get('/api/ingredient')
}

let addOperateur = (data) => {
    return Axios.post('/api/ingredient/', data)
}


export const OperateurService = {
    getAll, addOperateur,  
}