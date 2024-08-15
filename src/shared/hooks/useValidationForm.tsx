import { useEffect, useState } from 'react';
import { TErrorMessage, TValidationRule, validateSingleField } from '../models/registrationConfig';

const useAuthValidation = (
    formData: Record<string, string>,
    validationSchema: { [key: string]: TValidationRule[] },
    backendError: TErrorMessage | undefined,
) => {
    const [errors, setErrors] = useState<TErrorMessage[]>([]);

    useEffect(() => {
        if (backendError) setErrors((prev) => [...prev, backendError]);
    }, [backendError]);

    const validateInput = (inputName: string, inputValue: string) => {
        const errorMessages = validateSingleField(
            inputName,
            inputValue,
            formData,
            validationSchema,
        );
        setErrors((prevErrors) => [
            ...prevErrors.filter((error) => error.type !== inputName),
            ...errorMessages,
        ]);
    };

    const getError = (fieldName: string) => {
        return errors.find((message) => message.type === fieldName)?.text;
    };

    return {
        errors,
        setErrors,
        getError,
        validateInput,
    };
};

export default useAuthValidation;
