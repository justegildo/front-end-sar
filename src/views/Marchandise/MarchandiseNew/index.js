import React from 'react'
import MarchandiseForm from 'views/Marchandise/MarchandiseForm'
import { toast, Notification } from 'components/ui'
import { useNavigate } from 'react-router-dom'
import { MarchandiseService } from 'services/MarchandiseService'

const MarchandiseNew = () => {
    const navigate = useNavigate()

    const addMarchandise = async (data) => {
        const response = await MarchandiseService.addMarchandise(data)
        return response.data
    }

    const handleFormSubmit = async (values, setSubmitting) => {
        setSubmitting(true)
        const success = await addMarchandise(values)
        setSubmitting(false)
        if (success) {
            toast.push(
                <Notification
                    title={'Successfuly added'}
                    type="success"
                    duration={2500}
                >
                    Marchandise successfuly added
                </Notification>,
                {
                    placement: 'top-center',
                }
            )
            navigate('/Marchandise-list')
        }
    }

    const handleDiscard = () => {
        navigate('/Marchandise-list')
    }

    return (
        <>
            <MarchandiseForm
                type="new"
                onFormSubmit={handleFormSubmit}
                onDiscard={handleDiscard}
            />
        </>
    )
}

export default MarchandiseNew
