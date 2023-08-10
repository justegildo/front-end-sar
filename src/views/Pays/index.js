import React from 'react'
//import reducer from './store'
import { injectReducer } from 'store/index'
import { AdaptableCard } from 'components/shared'
import PaysTable from './PaysList/PaysTable'
import PaysTableTools from './PaysList/PaysTableTools'

//injectReducer('salesPaysList', reducer)

const PaysList = () => {
    return (
        <AdaptableCard className="h-full" bodyClass="h-full">
            <div className="lg:flex items-center justify-between mb-4">
                <h3 className="mb-4 lg:mb-0">Pays</h3>
                <PaysTableTools />
            </div>
            <PaysTable />
        </AdaptableCard>
    )
}

export default PaysList
