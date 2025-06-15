"use client";
import { AuthContext } from '@/components/authProvider';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';

export default function HomePage() {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
  
    if (user) {
      router.replace('/dashboard');
    } else {
      router.replace('/auth');
    }
  }, []);
  
  return (
    <main>صفحه اصلی</main>
  );
}