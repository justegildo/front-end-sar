import React from 'react'
//import reducer from './store'
import { injectReducer } from 'store/index'
import { AdaptableCard } from 'components/shared'
import ProduitTable from './ProduitList/ProduitTable'
import ProduitTableTools from './ProduitList/ProduitTableTools'

//injectReducer('salesProductList', reducer)

const ProductList = () => {
    return (
        <AdaptableCard className="h-full" bodyClass="h-full">
            <div className="lg:flex items-center justify-between mb-4">
                <h3 className="mb-4 lg:mb-0">Produits</h3>
                <ProduitTableTools />
            </div>
            <ProduitTable />
        </AdaptableCard>
    )
}

export default ProductList
