"use client";
import { AuthContext } from '@/components/authProvider';
import Loading from '@/components/common/loading';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';

export default function HomePage() {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.replace('/dashboard');
      setLoading(false);
    } else {
      router.replace('/auth');
      setLoading(false);
    }

  }, [user]);
  if (loading) <Loading justSpinner={true} fullPage={true} />;
  return (<></>);
}