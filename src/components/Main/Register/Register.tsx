'use client';

import { BASE_URL } from '@/shared/config/config';
import useAuthValidation from '@/shared/hooks/useValidationForm';
import { regSchema, TErrorMessage } from '@/shared/models/registrationConfig';
import Button from '@/shared/ui/Button/Button';
import Loading from '@/shared/ui/Loading/Loading';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import styles from './Register.module.scss';

const Register: FC = () => {
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState<TErrorMessage | undefined>();
    const [isLogin, setIsLogin] = useState(false);
    const mutation = useMutation({
        mutationFn: (user: { email: string; password: string; confirm_password?: string }) => {
            return axios.post(`${BASE_URL}'/api/auth/'${isLogin ? 'login' : 'register'}`, user);
        },
    });
    const { errors, validateInput, getError } = useAuthValidation(
        { email, password, confirmPassword },
        regSchema,
        error,
    );

    if (mutation.isSuccess) {
        sessionStorage.setItem('authInfo', mutation.data?.data.data);
    }

    useEffect(() => {
        if (mutation.data?.data.error) setError({ type: 'email', text: mutation.data?.data.error });
    }, [mutation.data?.data.error, setError]);

    return (
        <>
            <div className={styles.circle} />
            <section id="register" className={styles.register}>
                {mutation.isPending && <Loading />}
                <form className={styles.form}>
                    <article className={styles.inputList}>
                        <h2 className={styles.title}>
                            {isLogin ? 'Логин' : 'Попробуйте бесплатно'}
                        </h2>
                        <div className={styles.inputBox}>
                            <input
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    validateInput('email', e.target.value);
                                    setError(undefined);
                                }}
                                value={email}
                                className={cn(styles.input, {
                                    [styles.invalidInput]: !!getError('email'),
                                })}
                                placeholder="E-mail"
                                type="text"
                                name="email"
                            />
                            {!!getError('email') && (
                                <p className={styles.validText}>{getError('email')}</p>
                            )}
                        </div>
                        <div className={styles.inputBox}>
                            <input
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    validateInput('password', e.target.value);
                                    setError(undefined);
                                }}
                                value={password}
                                className={cn(styles.input, {
                                    [styles.invalidInput]: !!getError('password'),
                                })}
                                placeholder="Пароль"
                                type="password"
                                name="password"
                            />
                            {!!getError('password') && (
                                <p className={styles.validText}>{getError('password')}</p>
                            )}
                        </div>
                        {!isLogin && (
                            <div className={styles.inputBox}>
                                <input
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value);
                                        validateInput('confirmPassword', e.target.value);
                                        setError(undefined);
                                    }}
                                    value={confirmPassword}
                                    className={cn(styles.input, {
                                        [styles.invalidInput]: !!getError('confirmPassword'),
                                    })}
                                    placeholder="Повторите пароль"
                                    type="password"
                                    name="confirm-password"
                                />
                                {!!getError('confirmPassword') && (
                                    <p className={styles.validText}>
                                        {getError('confirmPassword')}
                                    </p>
                                )}
                            </div>
                        )}
                        <Button
                            onClick={() => {
                                mutation.mutate(
                                    !isLogin
                                        ? {
                                              email,
                                              password,
                                              confirm_password: confirmPassword,
                                          }
                                        : { email, password },
                                );
                            }}
                            disabled={
                                !!errors.length ||
                                (!checked && !isLogin) ||
                                mutation.isPending ||
                                !email ||
                                !password ||
                                (!isLogin && !confirmPassword)
                            }
                            className={styles.btn}>
                            {!isLogin ? 'Зарегистрироваться' : 'Войти'}
                        </Button>
                        {!isLogin && (
                            <div className={styles.checkboxBox}>
                                <input
                                    className={styles.checkbox}
                                    onChange={() => {
                                        setChecked((prev) => !prev);
                                    }}
                                    type="checkbox"
                                    id="confidency"
                                />
                                <label className={styles.checkboxLabel} htmlFor="confidency">
                                    Я ознакомлен с политикой конфиденциальности и даю согласие
                                    на обработку персональных данных
                                </label>
                            </div>
                        )}
                        <p
                            className={styles.login}
                            onClick={() => {
                                setIsLogin((prev) => !prev);
                            }}>
                            {!isLogin
                                ? 'Зарегестрированы? Войти'
                                : 'Не зарегистрированы? Регистрация'}
                        </p>
                    </article>
                    <article className={styles.description}>
                        <p>
                            {!isLogin ? 'Зарегестрируйтесь и оцените' : 'Оцените'} удобстово
                            использования панели администрирования и полный контроль над вашими
                            проектами, разместив одно приложение совершенно бесплатно
                        </p>
                    </article>
                </form>
            </section>
            <article className={styles.descriptionAny}>
                <p>
                    Зарегестрируйтесь и оцените удобстово использования панели администрирования
                    и полный контроль над вашими проектами, разместив одно приложение совершенно
                    бесплатно
                </p>
            </article>
        </>
    );
};

export default Register;
