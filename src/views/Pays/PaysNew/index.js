import React from 'react'
import PaysForm from 'views/Pays/PaysForm'
import { toast, Notification } from 'components/ui'
import { useNavigate } from 'react-router-dom'
import { PaysService } from 'services/PaysService'

const PaysNew = () => {
    const navigate = useNavigate()

    const addPays = async (data) => {
        const response = await PaysService.addPays(data)
        return response.data
    }

    const handleFormSubmit = async (values, setSubmitting) => {
        setSubmitting(true)
        const success = await addPays(values)
        setSubmitting(false)
        if (success) {
            toast.push(
                <Notification
                    title={'Successfuly added'}
                    type="success"
                    duration={2500}
                >
                    Pays successfuly added
                </Notification>,
                {
                    placement: 'top-center',
                }
            )
            navigate('/Pays-list')
        }
    }

    const handleDiscard = () => {
        navigate('/Pays-list')
    }

    return (
        <>
            <PaysForm
                type="new"
                onFormSubmit={handleFormSubmit}
                onDiscard={handleDiscard}
            />
        </>
    )
}

export default PaysNew
