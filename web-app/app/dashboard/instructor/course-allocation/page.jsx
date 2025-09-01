import React from "react";
import styles from "./pages.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import ClientRedirect from "@/app/components/ClientRedirect";
import { redirect } from "next/navigation";

export default async function CourseAllocation() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return (
      <main className="main-dashboard">
        <p>Session expired. Redirecting in 5 seconds...</p>
        <ClientRedirect to="/" delay={5000} />
      </main>
    );
  }

  const user = session.user;
  if (user?.role !== "Instructor") {
    const roleBase =
      user?.role === "Student"
        ? "/dashboard/student"
        : user?.role === "Admin"
        ? "/dashboard/admin"
        : "/";
    redirect(roleBase);
  }

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <span className={styles.badge}>Coming Soon</span>

        <h1 className={styles.title}>Course Allocation</h1>

        <p className={styles.subtitle}>
          We’re putting the finishing touches on this page.
          <br />
          Check back again soon!
        </p>

        <Link href="/dashboard/instructor" className={styles.cta}>
          Back to Dashboard
        </Link>
      </div>
    </main>
  );
}
