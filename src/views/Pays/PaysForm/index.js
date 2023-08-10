
import React, { useState } from 'react'
import { Input, Button, Checkbox, FormItem, FormContainer } from 'components/ui'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    libelle: Yup.string().required('Libellé Requis')
})

const PaysForm = () => {
   

    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm, setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        setSubmitting(false)
                        resetForm()
                    }, 400)
                }}
            >
                {({ touched, errors, resetForm }) => (
                    <Form>
                        <FormContainer>
                            <FormItem
                                label="Libellé"
                                invalid={errors.libelle && touched.libelle}
                                errorMessage={errors.libelle}
                            >
                                <Field
                                    type="text"
                                    autoComplete="off"
                                    name="libelle"
                                    placeholder="Libellé"
                                    component={Input}
                                />
                            </FormItem>
                            <FormItem>
                                <Button
                                    type="reset"
                                    className="ltr:mr-2 rtl:ml-2"
                                    onClick={resetForm}
                                >
                                    Reset
                                </Button>
                                <Button variant="solid" type="submit" >
                                    Submit
                                </Button>
                            </FormItem>
                        </FormContainer>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default PaysForm

