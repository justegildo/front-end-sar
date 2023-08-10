
import Axios from './caller.service'

let getAll = () =>{
    return Axios.get('/api/ingredient')
}

let addImportateur = (data) => {
    return Axios.post('/api/ingredient/', data)
}


export const ImportateurService = {
    getAll, addImportateur,  
}