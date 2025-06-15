"use client";
import { User } from '@/fundamental/models/user';
import { createContext, useEffect, useState, ReactNode } from 'react';



interface AuthContextType {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    login: () => { },
    logout: () => { },
});

interface Props {
    children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
    const [user, setUser] = useState<User | null>(null);
  
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch {
                setUser(null);
            }
        }
    }, []);

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    const login = (userData: User) => setUser(userData);
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}