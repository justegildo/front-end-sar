import React, { useEffect, useMemo, useRef } from 'react';
import { DataTable } from 'components/shared'

const InpectionTable = () => {

    const tableRef = useRef(null)

    const columns = useMemo(
        () => [
            {
                header: 'Nom de l\'endroit',
                accessorKey: 'name',
            },
            {
                header: 'Pays',
                accessorKey: 'category',
            },
            {
                header: 'Ville',
                accessorKey: 'stock',
                //sortable: true,
            },
            {
                header: 'Zip code',
                accessorKey: 'status',
            },
            {
                header: 'Adresse',
                accessorKey: 'price',
            },
            {
                header: 'Email',
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

export default InpectionTable;