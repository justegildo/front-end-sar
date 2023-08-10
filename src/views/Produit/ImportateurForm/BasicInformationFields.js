import React from 'react'
import { AdaptableCard, RichTextEditor } from 'components/shared'
import { Input, FormItem } from 'components/ui'
import { Field } from 'formik'


export const categories = [
    { label: 'Bags', value: 'bags' },
    { label: 'Cloths', value: 'cloths' },
    { label: 'Devices', value: 'devices' },
    { label: 'Shoes', value: 'shoes' },
    { label: 'Watches', value: 'watches' },
]

const BasicInformationFields = (props) => {
    const { touched, errors } = props

    return (
        <AdaptableCard className="mb-4" divider>
            <h5 >Ajout d'un importateur</h5>
            <p className="mb-6"></p>
            <FormItem
                label="Code zip"
                invalid={errors.codeZip && touched.codeZip}
                errorMessage={errors.codeZip}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="codeZip"
                    placeholder="Code zip"
                    component={Input}
                />
            </FormItem>
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
            <FormItem
                label="Prénoms"
                invalid={errors.prenom && touched.prenom}
                errorMessage={errors.prenom}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="prenom"
                    placeholder="Prenoms"
                    component={Input}
                />
            </FormItem>
            <FormItem
                label="Email"
                invalid={errors.email && touched.email}
                errorMessage={errors.email}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="email"
                    placeholder="Email"
                    component={Input}
                />
            </FormItem>
            <FormItem
                label="Personne Contact"
                invalid={errors.personneContact && touched.personneContact}
                errorMessage={errors.personneContact}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="personneContact"
                    placeholder="Personne Contact"
                    component={Input}
                />
            </FormItem>
            <FormItem
                label="Code Spécial Client"
                invalid={errors.codeSpecialClient && touched.codeSpecialClient}
                errorMessage={errors.codeSpecialClient}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="codeSpecialClient"
                    placeholder="Code Spécial Client"
                    component={Input}
                />
            </FormItem>
            <FormItem
                label="Adresse"
                invalid={errors.adresse && touched.adresse}
                errorMessage={errors.adresse}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="adresse"
                    placeholder="Adresse"
                    component={Input}
                />
            </FormItem>
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
        </AdaptableCard>
    )
}

export default BasicInformationFields
