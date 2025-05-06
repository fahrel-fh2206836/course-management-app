'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { getUserAction } from './actions/server-actions';

export default function Login() {
  const passwordRef = useRef('');
  const usernameRef = useRef('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setHasMounted(true);
  }, [])

  if(!hasMounted) return null;

  async function handleLogin(e) {
    e.preventDefault();

    // const result = await signIn("credentials", {
    //   redirect: false,
    //   username,
    //   password,
    // });

    // if (result.ok) {
    //   const sessionRes = await fetch("/api/auth/session");
    //   const session = await sessionRes.json();
    //   const role = session?.user?.role;

    //   if (role === "Student") router.push("/dashboard/student");
    //   else if (role === "Instructor") router.push("/dashboard/instructor");
    //   else router.push("/view-admin/dashboard-admin.html");
    // } 
    
    const user = await getUserAction(usernameRef.current, passwordRef.current);

    if(!user.error) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      localStorage.currentPage = 'dashboard';
      if (user.role === "Student") router.push("/view-student/dashboard-student.html");
      else if (user.role === "Instructor") router.push("/view-instructor/dashboard-instructor.html");
      else router.push("/view-admin/dashboard-admin.html");
    }
    else {
      setError(true);
      passwordRef.current = "";
    }
  }

  function toggleViewPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div className={styles.bodyWrapper}>
      <div className={styles.wrapper}>
        <form id="LoginForm" onSubmit={handleLogin}>
          <header>
            <img src="/assets/images/qu_logo.png" alt="QU Logo" className={styles.image} />
            <h1>Course Management System</h1>
            <p className={styles.quote}>Empowering learning, one course at a time.</p>
          </header>

          <main>
            <div className={styles.inputBox}>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                onChange={(e) => {usernameRef.current = e.target.value;}}
                required
                className={styles.input}
              />
              <i className={`bx bx-user ${styles.icon} bistre`}></i>
            </div>

            <div className={styles.inputBox}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Password"
                onChange={(e) => {passwordRef.current = e.target.value;}}
                required
                className={styles.input}
              />
              <i
                id="toggle-btn"
                className={`bx ${showPassword ? 'bx-hide' : 'bx-show'} ${styles.icon} bistre`}
                onClick={toggleViewPassword}
              ></i>
            </div>

            {error && (
              <p className={styles.error}>
                <i className={`bx bx-error-circle ${styles.error}`}></i> Incorrect Username or Password.
              </p>
            )}

            <div className={styles.rememberForgot}>
              <label><input type="checkbox" /> Remember Me</label>
              <Link href="#">Forgot Password?</Link>
            </div>

            <button type="submit" className={styles.submitButton}>Sign In</button>

            <hr style={{ margin: "1rem 0" }} />

            <button
              type="button"
              onClick={() => signIn("google")}
              className={styles.submitButton}
              style={{ backgroundColor: "#4285F4" }}
            >
              Sign in with Google
            </button>
          </main>
        </form>
      </div>
    </div>
  );
}
