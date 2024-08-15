const validationConfig = {
    emailRegex: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    nameMaxLength: 100,
    pwdMinLength: 6,
};

const { nameMaxLength, pwdMinLength, emailRegex } = validationConfig;

const baseValidationRules: Record<string, TValidationRule[]> = {
    email: [
        {
            message: 'Электронная почта обязательна для заполнения',
            validate: (value) => !!value,
        },
        {
            message: 'Неверный формат почты',
            validate: (value) => emailRegex.test(value),
        },
    ],
    password: [
        {
            message: 'Пароль обязателен для заполнения',
            validate: (value) => !!value,
        },
        {
            message: 'Пароль не должен совпадать с email',
            validate: (value, formData) => value !== formData?.email,
        },
        {
            message: 'Пароль не должен содержать пробелы',
            validate: (value) => !/\s/.test(value),
        },
        {
            message: `Пароль не может быть короче ${pwdMinLength} символов`,
            validate: (value) => value.length >= pwdMinLength,
        },
    ],
    confirm_password: [
        {
            message: 'Пароль обязателен для заполнения',
            validate: (value) => !!value,
        },
        {
            message: 'Пароли не совпадают',
            validate: (value, formData) => value === formData?.password,
        },
    ],
};

export const regSchema = {
    email: baseValidationRules.email,
    password: baseValidationRules.password,
    confirmPassword: baseValidationRules.confirm_password,
};

export type TErrorMessage = {
    type: string;
    text: string;
};

export type TValidationRule = {
    message: string;
    validate: (value: string, formData?: Record<string, string>) => boolean;
};

export const validateSingleField = (
    fieldName: string,
    fieldValue: string,
    formData: Record<string, string>,
    validationSchema: { [key: string]: TValidationRule[] },
): TErrorMessage[] => {
    const errorMessages: TErrorMessage[] = [];

    const rules = validationSchema[fieldName];
    if (rules) {
        for (const rule of rules) {
            if (!rule.validate(fieldValue, formData)) {
                errorMessages.push({ type: fieldName, text: rule.message });
            }
        }
    }

    return errorMessages;
};
