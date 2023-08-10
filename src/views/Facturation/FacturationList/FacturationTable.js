import React, { useEffect, useMemo, useRef } from 'react';
import { DataTable } from 'components/shared'

const FacturationTable = () => {

    const tableRef = useRef(null)

    const columns = useMemo(
        () => [
            {
                header: 'N° Référence',
                accessorKey: 'name',
            },
            {
                header: 'Valeur',
                accessorKey: 'category',
            },
            {
                header: 'Montant',
                accessorKey: 'stock',
                //sortable: true,
            },
            {
                header: 'Devise',
                accessorKey: 'status',
            },
            {
                header: 'Acheteur',
                accessorKey: 'price',
            },
            {
                header: 'Port de destination',
                accessorKey: '',
                
            },
        ],
        []
    )

    return (
        <>
            <DataTable
                ref={tableRef}
                columns={columns}
                //data={data}
                skeletonAvatarColumns={[0]}
                skeletonAvatarProps={{ className: 'rounded-md' }}
            />
        </>
    )

    
}

export default FacturationTable;