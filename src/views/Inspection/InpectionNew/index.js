import React from 'react'
import InpectionForm from 'views/Inpection/InpectionForm'
import { toast, Notification } from 'components/ui'
import { useNavigate } from 'react-router-dom'
import { InpectionService } from 'services/InspectionService'

const InpectionNew = () => {
    const navigate = useNavigate()

    const addInpection = async (data) => {
        const response = await InpectionService.addInpection(data)
        return response.data
    }

    const handleFormSubmit = async (values, setSubmitting) => {
        setSubmitting(true)
        const success = await addInpection(values)
        setSubmitting(false)
        if (success) {
            toast.push(
                <Notification
                    title={'Successfuly added'}
                    type="success"
                    duration={2500}
                >
                    Inpection successfuly added
                </Notification>,
                {
                    placement: 'top-center',
                }
            )
            navigate('/inpection-list')
        }
    }

    const handleDiscard = () => {
        navigate('/inpection-list')
    }

    return (
        <>
            <InpectionForm
                type="new"
                onFormSubmit={handleFormSubmit}
                onDiscard={handleDiscard}
            />
        </>
    )
}

export default InpectionNew
