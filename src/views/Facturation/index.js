import React from 'react'
//import reducer from './store'
import { injectReducer } from 'store/index'
import { AdaptableCard } from 'components/shared'
import FacturationTable from './FacturationList/FacturationTable'
import FacturationTableTools from './FacturationList/FacturationTableTools'

//injectReducer('salesProductList', reducer)

const ProductList = () => {
    return (
        <AdaptableCard className="h-full" bodyClass="h-full">
            <div className="lg:flex items-center justify-between mb-4">
                <h3 className="mb-4 lg:mb-0">Facturation</h3>
                <FacturationTableTools />
            </div>
            <FacturationTable />
        </AdaptableCard>
    )
}

export default ProductList
