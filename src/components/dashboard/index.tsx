"use client";
import React, { useContext } from "react";
import { AuthContext } from "../authProvider";
import { useRouter } from "next/navigation";

const Dashboard: React.FC = () => {
    const { logout,user } = useContext(AuthContext);
    const router = useRouter();
    const handleLogout = () => {
        logout();
        router.replace('auth')
    }
    return (
        <main>
            <h1>Dashboard Page</h1>
            <button onClick={handleLogout}>خروج</button>
        </main>
    )
}
export default Dashboard