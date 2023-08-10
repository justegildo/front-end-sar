
import React, { useState } from 'react'
import { Input, Button, Checkbox, FormItem, FormContainer } from 'components/ui'
import { Field, Form, Formik } from 'formik'
import { HiOutlineEyeOff, HiOutlineEye } from 'react-icons/hi'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email Required'),
    userName: Yup.string()
        .min(3, 'Too Short!')
        .max(12, 'Too Long!')
        .required('User Name Required'),
    password: Yup.string()
        .required('Password Required')
        .min(8, 'Too Short!')
        .matches(/^[A-Za-z0-9_-]*$/, 'Only Letters & Numbers Allowed'),
    rememberMe: Yup.bool(),
})

const BasicInformationFields = () => {
    const [pwInputType, setPwInputType] = useState('password')

    const onPasswordVisibleClick = (e) => {
        e.preventDefault()
        setPwInputType(pwInputType === 'password' ? 'text' : 'password')
    }

    const passwordVisible = (
        <span
            className="cursor-pointer"
            onClick={(e) => onPasswordVisibleClick(e)}
        >
            {pwInputType === 'password' ? (
                <HiOutlineEyeOff />
            ) : (
                <HiOutlineEye />
            )}
        </span>
    )

    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    userName: '',
                    password: '',
                    rememberMe: false,
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
                            <h5>Ajout d'un modèle</h5><br/>
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
                            
                            <FormItem >
                                <Button
                                    type="reset"
                                    className="ltr:mr-2 rtl:ml-2"
                                    onClick={resetForm}
                                >
                                    Reset
                                </Button>
                                <Button variant="solid" type="submit">
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

export default BasicInformationFields


