import React from 'react'
import ModeleForm from 'views/Modele/ModeleForm'
import { toast, Notification } from 'components/ui'
import { useNavigate } from 'react-router-dom'
import { ModeleService } from 'services/ModeleService'

const ModeleNew = () => {
    const navigate = useNavigate()

    const addModele = async (data) => {
        const response = await ModeleService.addModele(data)
        return response.data
    }

    const handleFormSubmit = async (values, setSubmitting) => {
        setSubmitting(true)
        const success = await addModele(values)
        setSubmitting(false)
        if (success) {
            toast.push(
                <Notification
                    title={'Successfuly added'}
                    type="success"
                    duration={2500}
                >
                    Modele successfuly added
                </Notification>,
                {
                    placement: 'top-center',
                }
            )
            navigate('/Modele-list')
        }
    }

    const handleDiscard = () => {
        navigate('/Modele-list')
    }

    return (
        <>
            <ModeleForm
                type="new"
                onFormSubmit={handleFormSubmit}
                onDiscard={handleDiscard}
            />
        </>
    )
}

export default ModeleNew
