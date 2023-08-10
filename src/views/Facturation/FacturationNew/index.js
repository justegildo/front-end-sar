import React from 'react'
import FacturationForm from 'views/Facturation/FacturationForm'
import { toast, Notification } from 'components/ui'
import { useNavigate } from 'react-router-dom'
import { FacturationService } from 'services/FacturationService'

const FacturationNew = () => {
    const navigate = useNavigate()

    const addFacturation = async (data) => {
        const response = await FacturationService.addFacturation(data)
        return response.data
    }

    const handleFormSubmit = async (values, setSubmitting) => {
        setSubmitting(true)
        const success = await addFacturation(values)
        setSubmitting(false)
        if (success) {
            toast.push(
                <Notification
                    title={'Successfuly added'}
                    type="success"
                    duration={2500}
                >
                    Facturation successfuly added
                </Notification>,
                {
                    placement: 'top-center',
                }
            )
            navigate('/facturation-list')
        }
    }

    const handleDiscard = () => {
        navigate('/facturation-list')
    }

    return (
        <>
            <FacturationForm
                type="new"
                onFormSubmit={handleFormSubmit}
                onDiscard={handleDiscard}
            />
        </>
    )
}

export default FacturationNew
