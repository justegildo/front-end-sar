import React from 'react'
//import reducer from './store'
import { injectReducer } from 'store/index'
import { AdaptableCard } from 'components/shared'
import ImportateurTable from './ImportateurList/ImportateurTable'
import ImportateurTableTools from './ImportateurList/ImportateurTableTools'

//injectReducer('salesImportateurList', reducer)

const ImportateurList = () => {
    return (
        <AdaptableCard className="h-full" bodyClass="h-full">
            <div className="lg:flex items-center justify-between mb-4">
                <h3 className="mb-4 lg:mb-0">Importateur</h3>
                <ImportateurTableTools />
            </div>
            <ImportateurTable />
        </AdaptableCard>
    )
}

export default ImportateurList
