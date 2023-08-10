import React, { useEffect, useMemo, useRef } from 'react';
import { DataTable } from 'components/shared'

const ModeleTable = () => {

    const tableRef = useRef(null)

    const data = [
        { id: 1, libelle: "Modèle"},
        { id: 2, libelle: "Modèle"},
        { id: 2, libelle: "Modèle"},
        { id: 2, libelle: "Modèle"},
        { id: 2, libelle: "Modèle"},
    ];

    const columns = useMemo(
        () => [
            {
                header: 'ID',
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

export default ModeleTable;