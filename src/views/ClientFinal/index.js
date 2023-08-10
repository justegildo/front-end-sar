import React from 'react'
//import reducer from './store'
import { injectReducer } from 'store/index'
import { AdaptableCard } from 'components/shared'
import ClientTable from './ClientFinalList/ClientFinalTable'
import ClientTableTools from './ClientFinalList/ClientFinalTableTools'

//injectReducer('salesClientList', reducer)

const ClientList = () => {
    return (
        <AdaptableCard className="h-full" bodyClass="h-full">
            <div className="lg:flex items-center justify-between mb-4">
                <h3 className="mb-4 lg:mb-0">Client</h3>
                <ClientTableTools />
            </div>
            <ClientTable />
        </AdaptableCard>
    )
}

export default ClientList
