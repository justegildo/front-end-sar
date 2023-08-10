
import Axios from './caller.service'

let getAll = () =>{
    return Axios.get('/api/ingredient')
}


let addProduit = (data) =>{
    return Axios.post('/api/ingredient/', data)
}


export const ProduitService = {
    getAll,  addProduit
}