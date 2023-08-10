import React from 'react'
//import reducer from './store'
import { injectReducer } from 'store/index'
import { AdaptableCard } from 'components/shared'
import MarqueTable from './MarqueList/MarqueTable'
import MarqueTableTools from './MarqueList/MarqueTableTools'

//injectReducer('salesMarqueList', reducer)

const MarqueList = () => {
    return (
        <AdaptableCard className="h-full" bodyClass="h-full">
            <div className="lg:flex items-center justify-between mb-4">
                <h3 className="mb-4 lg:mb-0">Marque</h3>
                <MarqueTableTools />
            </div>
            <MarqueTable />
        </AdaptableCard>
    )
}

export default MarqueList
