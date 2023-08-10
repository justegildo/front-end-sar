import React, { useEffect, useMemo, useRef } from 'react';
import { DataTable } from 'components/shared'

const ProductTable = () => {

    const tableRef = useRef(null)

    const columns = useMemo(
        () => [
            {
                header: 'Name',
                accessorKey: 'name',
            },
            {
                header: 'Category',
                accessorKey: 'category',
            },
            {
                header: 'Quantity',
                accessorKey: 'stock',
                //sortable: true,
            },
            {
                header: 'Status',
                accessorKey: 'status',
            },
            {
                header: 'Price',
                accessorKey: 'price',
            },
            {
                header: '',
                id: 'action',
                
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

export default ProductTable;