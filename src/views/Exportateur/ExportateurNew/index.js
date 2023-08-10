import React from 'react'
import ExportateurForm from 'views/Exportateur/ExportateurForm'
import { toast, Notification } from 'components/ui'
import { useNavigate } from 'react-router-dom'
import { ExportateurService } from 'services/ExportateurService'

const ExportateurNew = () => {
    const navigate = useNavigate()

    const addExportateur = async (data) => {
        const response = await ExportateurService.addExportateur(data)
        return response.data
    }

    const handleFormSubmit = async (values, setSubmitting) => {
        setSubmitting(true)
        const success = await addExportateur(values)
        setSubmitting(false)
        if (success) {
            toast.push(
                <Notification
                    title={'Successfuly added'}
                    type="success"
                    duration={2500}
                >
                    Exportateur successfuly added
                </Notification>,
                {
                    placement: 'top-center',
                }
            )
            navigate('/Exportateur-list')
        }
    }

    const handleDiscard = () => {
        navigate('/Exportateur-list')
    }

    return (
        <>
            <ExportateurForm
                type="new"
                onFormSubmit={handleFormSubmit}
                onDiscard={handleDiscard}
            />
        </>
    )
}

export default ExportateurNew
