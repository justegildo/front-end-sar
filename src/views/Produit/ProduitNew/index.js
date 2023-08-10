import React from 'react'
import ProduitForm from 'views/Produit/ProduitForm'
import { toast, Notification } from 'components/ui'
import { useNavigate } from 'react-router-dom'
import { ProduitService } from 'services/ProduitService'

const ProduitNew = () => {
    const navigate = useNavigate()

    const addProduit = async (data) => {
        const response = await ProduitService.addProduit(data)
        return response.data
    }

    const handleFormSubmit = async (values, setSubmitting) => {
        setSubmitting(true)
        const success = await addProduit(values)
        setSubmitting(false)
        if (success) {
            toast.push(
                <Notification
                    title={'Successfuly added'}
                    type="success"
                    duration={2500}
                >
                    Produit successfuly added
                </Notification>,
                {
                    placement: 'top-center',
                }
            )
            navigate('/produit-list')
        }
    }

    const handleDiscard = () => {
        navigate('/produit-list')
    }

    return (
        <>
            <ProduitForm
                type="new"
                onFormSubmit={handleFormSubmit}
                onDiscard={handleDiscard}
            />
        </>
    )
}

export default ProduitNew
