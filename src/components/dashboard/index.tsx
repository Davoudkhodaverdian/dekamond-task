"use client";
import React, { useContext } from "react";
import { AuthContext } from "../authProvider";
import { useRouter } from "next/navigation";
import styles from './dashboard.module.scss';
import { infoMessage } from "@/fundamental/toast";

const Dashboard: React.FC = () => {
    const { logout, user } = useContext(AuthContext);
    const router = useRouter();
    const handleLogout = () => {
        logout();
        router.replace('auth');
        infoMessage('شما از صفحه داشبورد خارج شدید');
    }

    return (
        <main className={styles.dashboard}>
            <h1>صفحه داشبورد</h1>
            <h2>Welcome to the Dashboard</h2>
            <button onClick={handleLogout}>
                خروج <img src="/logout.png" alt="logout" width={30} height={30} />
            </button>
            {
                user &&
                <section className={styles.user}>
                    <img src={(user).results[0].picture.medium} alt="" />
                    <p>{`${user.results[0].name.title} ${user.results[0].name.first} ${user.results[0].name.last}`}</p>
                </section>
            }
        </main>
    )
}
export default Dashboard