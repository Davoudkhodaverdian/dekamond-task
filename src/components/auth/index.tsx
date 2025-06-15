import React from "react";
import LoignForm from "./loignForm";
import styles from './auth.module.scss';

const Auth: React.FC = () => {
    return (
        <main className={styles.auth}>
            <LoignForm />
        </main>
    )
}
export default Auth;