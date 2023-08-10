import React, { useEffect, useMemo, useRef } from 'react';
import { DataTable } from 'components/shared'

const MarchandiseTable = () => {

    const tableRef = useRef(null)

    const data = [
        { id: 1, notation: "DJIDONOU", descriptionCommerciale: "RAS", quantite: 14, uniteMesure: "Ste Rita", masseNette: "85", listeConteneur: "fax", port: "Bénin" },
        { id: 2, notation: "DJIDONOU", descriptionCommerciale: "RAS", quantite: 14, uniteMesure: "Ste Rita", masseNette: "85", listeConteneur: "fax", port: "Bénin" },
        { id: 2, notation: "DJIDONOU", descriptionCommerciale: "RAS", quantite: 14, uniteMesure: "Ste Rita", masseNette: "45", listeConteneur: "fax", port: "Bénin" },
        { id: 2, notation: "DJIDONOU", descriptionCommerciale: "RAS", quantite: 14, uniteMesure: "Ste Rita", masseNette: "45", listeConteneur: "fax", port: "Bénin" },
        { id: 2, notation: "DJIDONOU", descriptionCommerciale: "RAS", quantite: 14, uniteMesure: "Ste Rita", masseNette: "85", listeConteneur: "fax", port: "Bénin" },
    ];

    const columns = useMemo(
        () => [
            {
                header: 'N° Référence',
                accessorKey: 'id',
            },
            {
                header: 'Description Commerciale',
                accessorKey: 'descriptionCommerciale',
            },
            {
                header: 'Quantité',
                accessorKey: 'quantite',
                //sortable: true,
            },
            {
                header: 'Unité Mesure',
                accessorKey: 'uniteMesure',
            },
            {
                header: 'Masse Nette',
                accessorKey: 'masseNette',
            },
            {
                header: 'Liste Conteneur',
                accessorKey: 'listeConteneur',
            },
            {
                header: 'Port',
                accessorKey: 'port',
                
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

export default MarchandiseTable;