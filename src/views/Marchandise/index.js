import React from 'react'
//import reducer from './store'
import { injectReducer } from 'store/index'
import { AdaptableCard } from 'components/shared'
import MarchandiseTable from './MarchandiseList/MarchandiseTable'
import MarchandiseTableTools from './MarchandiseList/MarchandiseTableTools'

//injectReducer('salesMarchandiseList', reducer)

const MarchandiseList = () => {
    return (
        <AdaptableCard className="h-full" bodyClass="h-full">
            <div className="lg:flex items-center justify-between mb-4">
                <h3 className="mb-4 lg:mb-0">Marchandise</h3>
                <MarchandiseTableTools />
            </div>
            <MarchandiseTable />
        </AdaptableCard>
    )
}

export default MarchandiseList
