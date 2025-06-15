import React from "react";
import { Field } from 'formik';
import styles from './input.module.scss';

interface Props {
    loading: boolean
}
const Button: React.FC<Props> = ({ loading }) => {
    return (
        <div className={styles.input}>
            <label htmlFor="phone">{"شماره موبایل"}</label>
            <Field placeholder={"مثال 0912..."} maxLength="11"
                className={`${loading ? styles.loading : ''}`}
                id="phone" name="phone" type="text" />
        </div>
    )
}
export default Button;