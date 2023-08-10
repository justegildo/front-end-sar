import React from 'react'
import ImportateurForm from 'views/Importateur/ImportateurForm'
import { toast, Notification } from 'components/ui'
import { useNavigate } from 'react-router-dom'
import { ImportateurService } from 'services/ImportateurService'

const ImportateurNew = () => {
    const navigate = useNavigate()

    const addImportateur = async (data) => {
        const response = await ImportateurService.addImportateur(data)
        return response.data
    }

    const handleFormSubmit = async (values, setSubmitting) => {
        setSubmitting(true)
        const success = await addImportateur(values)
        setSubmitting(false)
        if (success) {
            toast.push(
                <Notification
                    title={'Successfuly added'}
                    type="success"
                    duration={2500}
                >
                    Importateur successfuly added
                </Notification>,
                {
                    placement: 'top-center',
                }
            )
            navigate('/Importateur-list')
        }
    }

    const handleDiscard = () => {
        navigate('/Importateur-list')
    }

    return (
        <>
            <ImportateurForm
                type="new"
                onFormSubmit={handleFormSubmit}
                onDiscard={handleDiscard}
            />
        </>
    )
}

export default ImportateurNew
