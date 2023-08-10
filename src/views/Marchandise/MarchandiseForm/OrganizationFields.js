import React from 'react'
import { AdaptableCard } from 'components/shared'
import { Input, FormItem, Select } from 'components/ui'
import CreatableSelect from 'react-select/creatable'
import { Field } from 'formik'

export const categories = [
    { label: 'Bags', value: 'bags' },
    { label: 'Cloths', value: 'cloths' },
    { label: 'Devices', value: 'devices' },
    { label: 'Shoes', value: 'shoes' },
    { label: 'Watches', value: 'watches' },
]


const OrganizationFields = (props) => {
    const { values, touched, errors } = props

    return (
        <AdaptableCard className="mb-4" divider isLastChild>
                    <FormItem
                        label="Category"
                        invalid={errors.category && touched.category}
                        errorMessage={errors.category}
                    >
                        <Field name="category">
                            {({ field, form }) => (
                                <Select
                                    field={field}
                                    form={form}
                                    options={categories}
                                    value={categories.filter(
                                        (category) =>
                                            category.value === values.category
                                    )}
                                    onChange={(option) =>
                                        form.setFieldValue(
                                            field.name,
                                            option.value
                                        )
                                    }
                                />
                            )}
                        </Field>
                    </FormItem>
                
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                    <FormItem
                        label="importateur"
                        invalid={errors.importateur && touched.importateur}
                        errorMessage={errors.importateur}
                    >
                        <Field
                            type="text"
                            autoComplete="off"
                            name="importateur"
                            placeholder="importateur"
                            component={Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label="exportateur"
                        invalid={errors.exportateur && touched.exportateur}
                        errorMessage={errors.exportateur}
                    >
                        <Field
                            type="text"
                            autoComplete="off"
                            name="exportateur"
                            placeholder="exportateur"
                            component={Input}
                        />
                    </FormItem>
                </div>
            </div>
        </AdaptableCard>
    )
}

export default OrganizationFields
