"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function HomePage() {

  const router = useRouter();
  useEffect(() => {
    const user = localStorage.getItem('user');
    console.log({ user });
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