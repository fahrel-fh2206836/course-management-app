'use client';
import { useEffect } from 'react';
import { getSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';

export default function RedirectPage() {
    const router = useRouter();
  useEffect(() => {
    const checkSession = async () => {
        const session = await getSession();
        const role = session?.user?.role;
        alert(JSON.stringify(session.user, null, 2));
        localStorage.setItem("loggedInUser", JSON.stringify(session.user));
        localStorage.currentPage = 'dashboard';
        if (role === 'Student') router.push("/view-student/dashboard-student.html");
        else if (role === "Instructor") router.push("/view-instructor/dashboard-instructor.html");
        else if (role === "admin") router.push("/view-admin/dashboard-admin.html");
        else {
            alert("Invalid account");
            redirect("/")
        }
    };

    checkSession();
  }, []);

  return <p>Redirecting...</p>;
}
