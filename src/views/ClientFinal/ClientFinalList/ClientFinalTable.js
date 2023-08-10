import React, { useEffect, useMemo, useRef } from 'react';
import { DataTable } from 'components/shared'

const ClientFinalTable = () => {

    const tableRef = useRef(null)

    const data = [
        { id: 1, nom: "DJIDONOU", prenom: "Cosme", email: "sar@yahoo.fr", adresse: "Ste Rita", telephone: "96558696", fax: "fax", pays: "Bénin" },
        { id: 2, nom: "DJIDONOU", prenom: "Cosme", email: "sar@yahoo.fr", adresse: "Ste Rita", telephone: "96558696", fax: "fax", pays: "Bénin" },
        { id: 2, nom: "DJIDONOU", prenom: "Cosme", email: "sar@yahoo.fr", adresse: "Ste Rita", telephone: "96558696", fax: "fax", pays: "Bénin" },
        { id: 2, nom: "DJIDONOU", prenom: "Cosme", email: "sar@yahoo.fr", adresse: "Ste Rita", telephone: "96558696", fax: "fax", pays: "Bénin" },
        { id: 2, nom: "DJIDONOU", prenom: "Cosme", email: "sar@yahoo.fr", adresse: "Ste Rita", telephone: "96558696", fax: "fax", pays: "Bénin" },
    ];

    const columns = useMemo(
        () => [
            {
                header: 'ID',
                accessorKey: 'id',
            },
            {
                header: 'Nom',
                accessorKey: 'nom',
            },
            {
                header: 'Prénoms',
                accessorKey: 'prenom',
                //sortable: true,
            },
            {
                header: 'Email',
                accessorKey: 'email',
            },
            {
                header: 'Adresse',
                accessorKey: 'adresse',
            },
            {
                header: 'Fax',
                accessorKey: 'fax',
                
            },
            {
                header: 'Pays',
                accessorKey: 'pays',
                
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

export default ClientFinalTable;