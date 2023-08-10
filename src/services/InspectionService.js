
import Axios from './caller.service'

let getAll = () =>{
    return Axios.get('/api/ingredient')
}

let addInspection = (data) => {
    return Axios.post('/api/ingredient/', data)
}


export const InspectionService = {
    getAll, addInspection,  
}