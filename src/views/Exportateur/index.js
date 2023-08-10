import React from 'react'
//import reducer from './store'
import { injectReducer } from 'store/index'
import { AdaptableCard } from 'components/shared'
import ExportateurTable from './ExportateurList/ExportateurTable'
import ExportateurTableTools from './ExportateurList/ExportateurTableTools'

//injectReducer('salesExportateurList', reducer)

const ExportateurList = () => {
    return (
        <AdaptableCard className="h-full" bodyClass="h-full">
            <div className="lg:flex items-center justify-between mb-4">
                <h3 className="mb-4 lg:mb-0">Exportateur</h3>
                <ExportateurTableTools />
            </div>
            <ExportateurTable />
        </AdaptableCard>
    )
}

export default ExportateurList
