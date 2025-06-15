"use client"
import React, { useContext, useState } from 'react';
import { Formik, Form } from 'formik';
import { useLoginSchema } from './loginSchema';
import LoadingProcess from '@/components/common/loadingProcess';
import { infoMessage } from '@/fundamental/toast';
import { ILogin } from '@/fundamental/models/login';
import styles from './loginForm.module.scss';
import Input from './input';
import Button from './button';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/components/authProvider';

const LoignForm: React.FC = () => {

    const LoginSchema = useLoginSchema();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { login } = useContext(AuthContext);

    const handleSubmit = async (loginData: ILogin) => {
        console.log({ loginData });
        try {
            setLoading(true);
            const result = await fetch('https://randomuser.me/api/?results=1&nat=us', {
                method: "GET"
            });

            const user = await result.json();
            setLoading(false);
            console.log({ user });
            if (user) {
                // logih was successfull
                // Store user data and redirect to dashboard
                login(user);
                router.push('/dashboard');
                infoMessage('ورود شما با موفقیت انجام شد')
            } else {
                infoMessage('متاسفانه مشکلی پیش آمده، لطفا تا دقایقی دگیر مجددا تلاش کنید');
            }

        } catch (error: any) {
            console.log(error)
            setLoading(false);
            if (error?.message) infoMessage(error?.message)
            else infoMessage('متاسفانه مشکلی پیش آمده، لطفا تا دقایقی دگیر مجددا تلاش کنید');
        }
    }
    return (
        <section className={styles.login_form}>
            <h1>{"ورود به داشبورد"}</h1>
            <Formik
                initialValues={{ phone: '', }}
                validationSchema={LoginSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                    handleSubmit(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Input loading={loading} />
                        {errors.phone && touched.phone ? <div className={styles.error}>{errors.phone}</div> : null}
                        <Button loading={loading} />
                        {loading && <LoadingProcess />}
                    </Form>
                )}
            </Formik>
        </section>
    )
}
export default LoignForm;
