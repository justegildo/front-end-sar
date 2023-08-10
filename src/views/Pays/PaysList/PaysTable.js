import React, { useEffect, useMemo, useRef } from 'react';
import { DataTable } from 'components/shared'

const PaysTable = () => {

    const tableRef = useRef(null)

    const data = [
        { id: 1, libelle: "Première entrée" },
        { id: 2, libelle: "Deuxième entrée" },
        { id: 2, libelle: "Deuxième entrée" },
        { id: 2, libelle: "Deuxième entrée" },
        { id: 2, libelle: "Deuxième entrée" },
    ];

    const columns = useMemo(
        () => [
            {
                header: 'Id',
                accessorKey: 'id',
            },
            {
                header: 'Libellé',
                accessorKey: 'libelle',
            },
            
        ],
        []
    )

    return (
        <>
            <DataTable
                ref={tableRef}
                columns={columns}
                data={data}
                skeletonAvatarColumns={[0]}
                skeletonAvatarProps={{ className: 'rounded-md' }}
            />
        </>
    )

    
}

export default PaysTable;