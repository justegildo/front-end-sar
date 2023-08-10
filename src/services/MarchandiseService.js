
import Axios from './caller.service'

let getAll = () =>{
    return Axios.get('/api/ingredient')
}

let addMarchandise = (data) => {
    return Axios.post('/api/ingredient/', data)
}


export const MarchandiseService = {
    getAll, addMarchandise,  
}