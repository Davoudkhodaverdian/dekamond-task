import React from "react";
import styles from './button.module.scss';

interface Props {
    loading: boolean
}
const Button: React.FC<Props> = ({ loading }) => {
    return (
        <button className={`${styles.button} ${loading ? styles.loading : ''}`}
            type="submit">
            {"ورود"}
        </button>
    )
}
export default Button;