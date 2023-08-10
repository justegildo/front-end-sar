import React from 'react'
import { Button } from 'components/ui'
import { HiDownload, HiPlusCircle } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const InspectionTableTools = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:items-center">
            <Link
                className="block lg:inline-block md:mx-2 md:mb-0 mb-4"
                to="/data/Inspection-list.csv"
                target="_blank"
                download
            >
                <Button block size="sm" icon={<HiDownload />}>
                    Export
                </Button>
            </Link>
            <Link
                className="block lg:inline-block md:mb-0 mb-4"
                to="/inspection-new"
            >
                <Button block variant="solid" size="sm" icon={<HiPlusCircle />}>
                    Nouveau
                </Button>
            </Link>
        </div>
    )
}

export default InspectionTableTools
