"use client";
import Auth from "@/components/auth";
import { AuthContext } from "@/components/authProvider";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function AuthPage() {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {

    if (user) {
      router.replace('/dashboard');
    }
  }, [user]);
  if (user) return (<></>);
  return (
    <Auth />
  );
}
