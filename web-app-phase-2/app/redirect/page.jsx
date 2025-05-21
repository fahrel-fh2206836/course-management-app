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
        localStorage.setItem("loggedInUser", JSON.stringify(session.user));
        localStorage.currentPage = 'dashboard';
        if (role === 'Student') router.push("/view-student/dashboard-student.html");
        else if (role === "Instructor") router.push("/view-instructor/dashboard-instructor.html");
        else if (role === "Admin") router.push("/view-admin/dashboard-admin.html");
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
