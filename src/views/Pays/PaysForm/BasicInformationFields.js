import React from 'react'
import { AdaptableCard, RichTextEditor } from 'components/shared'
import { Input, FormItem } from 'components/ui'
import { Field } from 'formik'


const BasicInformationFields = (props) => {
    const { touched, errors } = props

    return (
        <AdaptableCard className="mb-4" divider>
            <h5>Ajouter un pays</h5>
            <p className="mb-6"></p>
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
        </AdaptableCard>
    )
}

export default BasicInformationFields
