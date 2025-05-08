'use client';
import { useEffect } from 'react';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function RedirectPage() {
    const router = useRouter();
  useEffect(() => {
    const checkSession = async () => {
        const session = await getSession();
        const role = session?.user?.role;
        if (role === 'Student') router.push("/view-student/dashboard-student.html");
        else if (role === "Instructor") router.push("/view-instructor/dashboard-instructor.html");
        else router.push("/view-admin/dashboard-admin.html");
    };

    checkSession();
  }, []);

  return <p>Redirecting based on your role...</p>;
}
