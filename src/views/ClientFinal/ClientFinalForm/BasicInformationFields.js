
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
                            <h5>Ajout d'un client final</h5><br/>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col-span-1">
                                    <FormItem
                                        label="Nom"
                                        invalid={errors.nom && touched.nom}
                                        errorMessage={errors.nom}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="nom"
                                            placeholder="Nom"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                                <div className="col-span-1">
                                    <FormItem
                                        label="Prenom"
                                        invalid={errors.prenom && touched.prenom}
                                        errorMessage={errors.prenom}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="prenom"
                                            placeholder="Prenom"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col-span-1">
                                    <FormItem
                                        label="Email"
                                        invalid={errors.email && touched.email}
                                        errorMessage={errors.email}
                                    >
                                        <Field
                                            type="email"
                                            autoComplete="off"
                                            name="email"
                                            placeholder="Email"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                                <div className="col-span-1">
                                    <FormItem
                                        label="Adresse"
                                        invalid={errors.adresse && touched.nom}
                                        errorMessage={errors.nom}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="adresse"
                                            placeholder="Adresse"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col-span-1">
                                    <FormItem
                                        label="Téléphone"
                                        invalid={errors.telephone && touched.telephone}
                                        errorMessage={errors.telephone}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="telephone"
                                            placeholder="Téléphone"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                                <div className="col-span-1">
                                    <FormItem
                                        label="Fax"
                                        invalid={errors.fax && touched.fax}
                                        errorMessage={errors.fax}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="fax"
                                            placeholder="Fax"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                            </div>
                           
                            <FormItem
                                label="Pays"
                                invalid={errors.pays && touched.pays}
                                errorMessage={errors.pays}
                            >
                                <Field
                                    type="text"
                                    autoComplete="off"
                                    name="pays"
                                    placeholder="Pays"
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

