import React from 'react'
//import reducer from './store'
import { injectReducer } from 'store/index'
import { AdaptableCard } from 'components/shared'
import ModeleTable from './ModeleList/ModeleTable'
import ModeleTableTools from './ModeleList/ModeleTableTools'

//injectReducer('salesModeleList', reducer)

const ModeleList = () => {
    return (
        <AdaptableCard className="h-full" bodyClass="h-full">
            <div className="lg:flex items-center justify-between mb-4">
                <h3 className="mb-4 lg:mb-0">Modele</h3>
                <ModeleTableTools />
            </div>
            <ModeleTable />
        </AdaptableCard>
    )
}

export default ModeleList
