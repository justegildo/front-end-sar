import React, { forwardRef, useState } from 'react'
import { FormContainer, Button, hooks, Steps} from 'components/ui'
import { StickyFooter, ConfirmDialog } from 'components/shared'
import { Form, Formik } from 'formik'
import BasicInformationFields from './BasicInformationFields'
import PricingFields from './PricingFields'
import OrganizationFields from './OrganizationFields'
import ProductImages from './ProduitImages'
import cloneDeep from 'lodash/cloneDeep'
import { HiOutlineTrash } from 'react-icons/hi'
import { AiOutlineSave } from 'react-icons/ai'
import * as Yup from 'yup'
import './index.css'
import ExportateurStepForm from '../ExportateurForm'
import ImportateurStepForm from '../ImportateurForm'
import MarchandisesStepForm from '../MarchandisesForm'
import TarificationStepForm from '../TarificationForm'

const { useUniqueId } = hooks

const validationSchema = Yup.object().shape({
    nom: Yup.string().required('Nom requis'),
    prenom: Yup.string().required('Prenom requis'),
    email: Yup.string().required('Email Requis'),
    telephone: Yup.string().required('Téléphone Requis'),
    fax: Yup.string().required('Fax requis'),
    pays: Yup.string().required('Pays Requis'),
})

const DeleteProductButton = ({ onDelete }) => {
    const [dialogOpen, setDialogOpen] = useState(false)

    const onConfirmDialogOpen = () => {
        setDialogOpen(true)
    }

    const onConfirmDialogClose = () => {
        setDialogOpen(false)
    }

    const handleConfirm = () => {
        onDelete?.(setDialogOpen)
    }

    return (
        <>
            <Button
                className="text-red-600"
                variant="plain"
                size="sm"
                icon={<HiOutlineTrash />}
                type="button"
                onClick={onConfirmDialogOpen}
            >
                Delete
            </Button>
            <ConfirmDialog
                isOpen={dialogOpen}
                onClose={onConfirmDialogClose}
                onRequestClose={onConfirmDialogClose}
                type="danger"
                title="Delete product"
                onCancel={onConfirmDialogClose}
                onConfirm={handleConfirm}
                confirmButtonColor="red-600"
            >
                <p>
                    Are you sure you want to delete this product? All record
                    related to this product will be deleted as well. This action
                    cannot be undone.
                </p>
            </ConfirmDialog>
        </>
    )
}

const ProduitForm = () => {
    

    const [step, setStep] = useState(0)

    const onChange = (nextStep) => {
        if (nextStep < 0) {
            setStep(0)
        } else if (nextStep > 3) {
            setStep(3)
        } else {
            setStep(nextStep)
        }
    }

    const onNext = () => onChange(step + 1)

    const onPrevious = () => onChange(step - 1)
    

    const renderFormForStep = () => {
        switch (step) {
            case 0:
                return <ExportateurStepForm />;
            case 1:
                return <ImportateurStepForm />;
            case 2:
                return <MarchandisesStepForm />;
            case 3:
                return <TarificationStepForm />;
            default:
                return null;
        }
    };

    return (
        <>
            <div>
                <Steps current={step}>
                    <Steps.Item title="Exportateur" />
                    <Steps.Item title="Importateur" />
                    <Steps.Item title="Marchandises" />
                    <Steps.Item title="Tarification" />
                </Steps>
                <div className="center">
                    {/* <h6>Step {`${step + 1}`} content</h6> */}
                    {renderFormForStep()}
                    
                </div>
                <div className="mt-4 text-right">
                    <Button
                        className="mx-2"
                        onClick={onPrevious}
                        disabled={step === 0}
                    >
                        Précedent
                    </Button>
                    <Button onClick={onNext} disabled={step === 3} variant="solid">
                        {step === 3 ? 'Complète' : 'Suivant'}
                    </Button>
                </div>
            </div>
        </>
    )
}

export default ProduitForm