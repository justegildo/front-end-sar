import React from 'react'
import OperateurForm from 'views/Operateur/OperateurForm'
import { toast, Notification } from 'components/ui'
import { useNavigate } from 'react-router-dom'
import { OperateurService } from 'services/OperateurService'

const OperateurNew = () => {
    const navigate = useNavigate()

    const addOperateur = async (data) => {
        const response = await OperateurService.addOperateur(data)
        return response.data
    }

    const handleFormSubmit = async (values, setSubmitting) => {
        setSubmitting(true)
        const success = await addOperateur(values)
        setSubmitting(false)
        if (success) {
            toast.push(
                <Notification
                    title={'Successfuly added'}
                    type="success"
                    duration={2500}
                >
                    Operateur successfuly added
                </Notification>,
                {
                    placement: 'top-center',
                }
            )
            navigate('/Operateur-list')
        }
    }

    const handleDiscard = () => {
        navigate('/Operateur-list')
    }

    return (
        <>
            <OperateurForm
                type="new"
                onFormSubmit={handleFormSubmit}
                onDiscard={handleDiscard}
            />
        </>
    )
}

export default OperateurNew
