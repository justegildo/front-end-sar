import React from 'react'
import ClientFinalForm from 'views/ClientFinal/ClientFinalForm'
import { toast, Notification } from 'components/ui'
import { useNavigate } from 'react-router-dom'
import { ClientFinalService } from 'services/ClientFinalService'

const ClientFinalNew = () => {
    const navigate = useNavigate()

    const addClientFinal = async (data) => {
        const response = await ClientFinalService.addClientFinal(data)
        return response.data
    }

    const handleFormSubmit = async (values, setSubmitting) => {
        setSubmitting(true)
        const success = await addClientFinal(values)
        setSubmitting(false)
        if (success) {
            toast.push(
                <Notification
                    title={'Successfuly added'}
                    type="success"
                    duration={2500}
                >
                    ClientFinal successfuly added
                </Notification>,
                {
                    placement: 'top-center',
                }
            )
            navigate('/ClientFinal-list')
        }
    }

    const handleDiscard = () => {
        navigate('/ClientFinal-list')
    }

    return (
        <>
            <ClientFinalForm
                type="new"
                onFormSubmit={handleFormSubmit}
                onDiscard={handleDiscard}
            />
        </>
    )
}

export default ClientFinalNew
