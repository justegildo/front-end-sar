import React from 'react'
//import reducer from './store'
import { injectReducer } from 'store/index'
import { AdaptableCard } from 'components/shared'
import InspectionTable from './InspectionList/InspectionTable'
import InspectionTableTools from './InspectionList/InspectionTableTools'

//injectReducer('salesInpectionList', reducer)

const InpectionList = () => {
    return (
        <AdaptableCard className="h-full" bodyClass="h-full">
            <div className="lg:flex items-center justify-between mb-4">
                <h3 className="mb-4 lg:mb-0">Inspection</h3>
                <InspectionTableTools />
            </div>
            <InspectionTable />
        </AdaptableCard>
    )
}

export default InpectionList
