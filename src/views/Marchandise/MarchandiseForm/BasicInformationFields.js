import React, { useState } from 'react'
import { Input, Button, Checkbox, FormItem, FormContainer, Select } from 'components/ui'
import { Field, Form, Formik } from 'formik'
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


const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
    { value: 'blue', label: 'Blue', color: '#0052CC' },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630' },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
]

const BasicInformationFields = () => {

    const handleCreateButtonClick = () =>{
        console.log("Select");
    }

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
                            <h5>Ajout d'une marchandise</h5><br/>
                            <p> </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col-span-1">
                                    <FormItem
                                        label="Description Commerciale"
                                        invalid={errors.descriptionCommerciale && touched.descriptionCommerciale}
                                        errorMessage={errors.descriptionCommerciale}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="descriptionCommerciale"
                                            placeholder="Description Commerciale"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                                <div className="col-span-1">
                                    <FormItem
                                        label="Port"
                                        invalid={errors.port && touched.port}
                                        errorMessage={errors.port}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="port"
                                            placeholder="Port"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col-span-1">
                                    <FormItem
                                        label="Quantité"
                                        invalid={errors.quantite && touched.quantite}
                                        errorMessage={errors.quantite}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="quantite"
                                            placeholder="Quantité"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                                <div className="col-span-1">
                                    <FormItem
                                        label="Notation"
                                        invalid={errors.notation && touched.notation}
                                        errorMessage={errors.notation}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="notation"
                                            placeholder="Notation"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col-span-1">
                                    <FormItem
                                        label="Unique Id"
                                        invalid={errors.uniqId && touched.uniqId}
                                        errorMessage={errors.uniqId}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="uniqId"
                                            placeholder="Unique Id"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                                <div className="col-span-1">
                                    <FormItem
                                        label="Unité Mesure"
                                        invalid={errors.uniteMesure && touched.uniteMesure}
                                        errorMessage={errors.uniteMesure}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="uniteMesure"
                                            placeholder="Unité Mesure"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col-span-1">
                                    <FormItem
                                        label="Masse Nette"
                                        invalid={errors.masseNette && touched.masseNette}
                                        errorMessage={errors.masseNette}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="masseNette"
                                            placeholder="Masse Nette"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                                <div className="col-span-1">
                                    <FormItem
                                        label="Masse Brute"
                                        invalid={errors.masseBrute && touched.masseBrute}
                                        errorMessage={errors.masseBrute}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="masseBrute"
                                            placeholder="Masse Brute"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                            </div>


                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col-span-1">
                                    <FormItem
                                        label="Liste Conteneur"
                                        invalid={errors.listeConteneur && touched.listeConteneur}
                                        errorMessage={errors.listeConteneur}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="listeConteneur"
                                            placeholder="Liste Conteneur"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                                <div className="col-span-1">
                                    <FormItem
                                        label="Date de Fabrication"
                                        invalid={errors.dateDeFabrication && touched.dateDeFabrication}
                                        errorMessage={errors.dateDeFabrication}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="dateDeFabrication"
                                            placeholder="Date de Fabrication"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col-span-1">
                                    <FormItem
                                        label="Date de Fin de Vie"
                                        invalid={errors.dateDeFinDeVie && touched.dateDeFinDeVie}
                                        errorMessage={errors.dateDeFinDeVie}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="dateDeFinDeVie"
                                            placeholder="Date de Fin de Vie"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                                <div className="col-span-1">
                                    <FormItem
                                        label="Code Qr"
                                        invalid={errors.codeQr && touched.codeQr}
                                        errorMessage={errors.codeQr}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="codeQr"
                                            placeholder="Code Qr"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col-span-1">
                                    <FormItem
                                        label="Date Entrer au Pays"
                                        invalid={errors.dateEntrerAuPays && touched.dateEntrerAuPays}
                                        errorMessage={errors.dateEntrerAuPays}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="dateEntrerAuPays"
                                            placeholder="Date Entrer au Pays"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                                <div className="col-span-1">
                                    <FormItem
                                        label="Exportateur"
                                        invalid={errors.exportateur && touched.exportateur}
                                        errorMessage={errors.exportateur}
                                    >
                                        <Select
                                            placeholder="Rechercher ou Créer"
                                            options={colourOptions}
                                        ></Select>
                                    </FormItem>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col-span-1">
                                    <FormItem
                                        label="Importateur"
                                        invalid={errors.importateur && touched.importateur}
                                        errorMessage={errors.importateur}
                                    >
                                        <Select
                                            placeholder="Rechercher ou Créer"
                                            options={colourOptions}
                                            
                                        ></Select>
                                        {colourOptions === "No options" && (
                                            <button onClick={handleCreateButtonClick}>Créer</button>
                                        )}
                                    </FormItem>
                                </div>
                                <div className="col-span-1">
                                    <FormItem
                                        label="Provenance"
                                        invalid={errors.provenance && touched.provenance}
                                        errorMessage={errors.provenance}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="provenance"
                                            placeholder="Provenance"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col-span-1">
                                    <FormItem
                                        label="Destination"
                                        invalid={errors.destination && touched.destination}
                                        errorMessage={errors.destination}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="destination"
                                            placeholder="Destination"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                                <div className="col-span-1">
                                    <FormItem
                                        label="Pays Origine"
                                        invalid={errors.paysOrigine && touched.paysOrigine}
                                        errorMessage={errors.paysOrigine}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="paysOrigine"
                                            placeholder="Pays Origine"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                            </div>


                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col-span-1">
                                    <FormItem
                                        label="Pays Fabrication"
                                        invalid={errors.paysFabrication && touched.paysFabrication}
                                        errorMessage={errors.paysFabrication}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="paysFabrication"
                                            placeholder="Pays Fabrication"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                                <div className="col-span-1">
                                    <FormItem
                                        label="Documents"
                                        invalid={errors.documents && touched.documents}
                                        errorMessage={errors.documents}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="documents"
                                            placeholder="Documents"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col-span-1">
                                    <FormItem
                                        label="Modele"
                                        invalid={errors.modele && touched.modele}
                                        errorMessage={errors.modele}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="modele"
                                            placeholder="Modele"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                                <div className="col-span-1">
                                    <FormItem
                                        label="Marque"
                                        invalid={errors.marque && touched.marque}
                                        errorMessage={errors.marque}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="marque"
                                            placeholder="Marque"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col-span-1">
                                    <FormItem
                                        label="Etat"
                                        invalid={errors.etat && touched.etat}
                                        errorMessage={errors.etat}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="etat"
                                            placeholder="Etat"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                                <div className="col-span-1">
                                    <FormItem
                                        label="HS Code"
                                        invalid={errors.hsCode && touched.hsCode}
                                        errorMessage={errors.hsCode}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="hsCode"
                                            placeholder="HS Code"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                            </div>

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

export default BasicInformationFields

