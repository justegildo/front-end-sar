import React, { forwardRef, useState } from 'react'
import { FormContainer, Button, hooks, Steps} from 'components/ui'
import { Form, Formik } from 'formik'
import BasicInformationFields from './BasicInformationFields'
import cloneDeep from 'lodash/cloneDeep'
import * as Yup from 'yup'
import OrganizationFields from 'views/Facturation/FacturationForm/OrganizationFields'


const { useUniqueId } = hooks

const validationSchema = Yup.object().shape({
    nom: Yup.string().required('Nom requis'),
    prenom: Yup.string().required('Prenom requis'),
    email: Yup.string().required('Email Requis'),
    telephone: Yup.string().required('Téléphone Requis'),
    fax: Yup.string().required('Fax requis'),
    pays: Yup.string().required('Pays Requis'),
})

const MarchandiseStepForm = forwardRef((props, ref) => {

    const { type, initialData, onFormSubmit, onDiscard, onDelete } = props

    const newId = useUniqueId('produit-list')

    return (
        <div>
            <Formik
                innerRef={ref}
                initialValues={{
                    ...initialData,
                    tags: initialData?.tags
                        ? initialData.tags.map((value) => ({
                            label: value,
                            value,
                        }))
                        : [],
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    const formData = cloneDeep(values)
                    formData.tags = formData.tags.map((tag) => tag.value)
                    if (type === 'new') {
                        formData.id = newId
                        if (formData.imgList.length > 0) {
                            formData.img = formData.imgList[0].img
                        }
                    }
                    onFormSubmit?.(formData, setSubmitting)
                }}
            >
                {({ values, touched, errors, isSubmitting }) => (
                    <Form>
                        <FormContainer>
                            <BasicInformationFields
                                touched={touched}
                                errors={errors}
                                values={values}
                            //onChange={}
                            />
                        </FormContainer>
                    </Form>
                )}
            </Formik>
        </div>
    )
})

export default MarchandiseStepForm;