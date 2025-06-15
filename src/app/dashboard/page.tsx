"use client";
import { AuthContext } from "@/components/authProvider";
import Dashboard from "@/components/dashboard";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function DashboardPage() {

  const { user } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.replace('/auth');
    }
  }, []);

  return (
    <Dashboard />
  );
}
