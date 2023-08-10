import React from 'react'
//import reducer from './store'
import { injectReducer } from 'store/index'
import { AdaptableCard } from 'components/shared'
import OperateurTable from './OperateurList/OperateurTable'
import OperateurTableTools from './OperateurList/OperateurTableTools'

//injectReducer('salesOperateurList', reducer)

const OperateurList = () => {
    return (
        <AdaptableCard className="h-full" bodyClass="h-full">
            <div className="lg:flex items-center justify-between mb-4">
                <h3 className="mb-4 lg:mb-0">Liste des opérateurs</h3>
                <OperateurTableTools />
            </div>
            <OperateurTable />
        </AdaptableCard>
    )
}

export default OperateurList
