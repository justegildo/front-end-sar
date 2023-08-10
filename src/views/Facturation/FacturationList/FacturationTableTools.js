import React, { useState } from 'react'
import { Button, Dialog  } from 'components/ui'
import { HiDownload, HiPlusCircle } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const FacturationTableTools = () => {

    const [dialogIsOpen, setIsOpen] = useState(false)

    const openDialog = () => {
        setIsOpen(true)
    }

    const onDialogClose = (e) => {
        console.log('onDialogClose', e)
        setIsOpen(false)
    }

    const onDialogOk = (e) => {
        console.log('onDialogOk', e)
        setIsOpen(false)
    }

    return (
        <div className="flex flex-col lg:flex-row lg:items-center">
            <Link
                className="block lg:inline-block md:mx-2 md:mb-0 mb-4"
                to="/data/Facturation-list.csv"
                target="_blank"
                download
            >
                <Button block size="sm" icon={<HiDownload />}>
                    Export
                </Button>
            </Link>
            
            <Link
                className="block lg:inline-block md:mb-0 mb-4"
                to="/facturation-new"
            >
                <Button block variant="solid" size="sm" icon={<HiPlusCircle />} >
                    Nouveau
                </Button>
            </Link>
            {/* <Button block variant="solid" size="sm" icon={<HiPlusCircle />} onClick={() => openDialog()}>
                Nouveau
            </Button> */}


            <Dialog isOpen={dialogIsOpen} closable={false}>
                <h5 className="mb-4">Dialog Title</h5>
                <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                </p>
                <div className="text-right mt-6">
                    <Button
                        className="ltr:mr-2 rtl:ml-2"
                        variant="plain"
                        onClick={onDialogClose}
                    >
                        Cancel
                    </Button>
                    <Button variant="solid" onClick={onDialogOk}>
                        Okay
                    </Button>
                </div>
            </Dialog>
            
        </div>
    )
}

export default FacturationTableTools
