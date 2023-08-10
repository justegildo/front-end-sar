import React from 'react'
import MarqueForm from 'views/Marque/MarqueForm'
import { toast, Notification } from 'components/ui'
import { useNavigate } from 'react-router-dom'
import { MarqueService } from 'services/MarqueService'

const MarqueNew = () => {
    const navigate = useNavigate()

    const addMarque = async (data) => {
        const response = await MarqueService.addMarque(data)
        return response.data
    }

    const handleFormSubmit = async (values, setSubmitting) => {
        setSubmitting(true)
        const success = await addMarque(values)
        setSubmitting(false)
        if (success) {
            toast.push(
                <Notification
                    title={'Successfuly added'}
                    type="success"
                    duration={2500}
                >
                    Marque successfuly added
                </Notification>,
                {
                    placement: 'top-center',
                }
            )
            navigate('/Marque-list')
        }
    }

    const handleDiscard = () => {
        navigate('/Marque-list')
    }

    return (
        <>
            <MarqueForm
                type="new"
                onFormSubmit={handleFormSubmit}
                onDiscard={handleDiscard}
            />
        </>
    )
}

export default MarqueNew
