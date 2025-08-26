'use client';
import { useEffect } from 'react';
import { getSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import LoadingSpinner from '../components/LoadingSpinner';

export default function RedirectPage() {
    const router = useRouter();
  useEffect(() => {
    const checkSession = async () => {
        const session = await getSession();
        const role = session?.user?.role;
        if (role === 'Student') router.push("/dashboard/student");
        else if (role === "Instructor") router.push("/dashboard/instructor");
        else if (role === "Admin") router.push("/dashboard/admin");
        else {
            alert("Invalid account");
            redirect("/")
        }
    };

    checkSession();
  }, []);

  return (
    <>
    <LoadingSpinner/>
    </>
  )
  
}
