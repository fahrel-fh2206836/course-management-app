"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

export default function Login() {
  // HOOKS — keep all at the top
  const { data: session, status } = useSession();
  const router = useRouter();

  const user = session?.user;

  const [password, setPassword] = useState("");
  const usernameRef = useRef("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // mount guard (if you need it to avoid hydration flicker)
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // compute target dashboard
  const roleBase = useMemo(() => {
    if (!user?.role) return "/";
    if (user.role === "Admin") return "/dashboard/admin";
    if (user.role === "Instructor") return "/dashboard/instructor";
    if (user.role === "Student") return "/dashboard/student";
    return "/";
  }, [user?.role]);

  // redirect authenticated users away from login
  useEffect(() => {
    if (status === "authenticated" && session) {
      router.replace(roleBase);
    }
  }, [status, session, roleBase, router]);

  // EVENT HANDLERS
  async function googleLogIn() {
    // Let NextAuth handle the redirect
    await signIn("google", { callbackUrl: "/redirect" });
  }

  async function githubLogIn() {
    await signIn("github", { callbackUrl: "/redirect" });
  }

  async function handleLogin(e) {
    e.preventDefault();
    setError(false);

    // Use redirect: false to control navigation yourself
    const result = await signIn("credentials", {
      redirect: false,
      username: usernameRef.current,
      password,
      callbackUrl: "/redirect",
    });

    if (result?.ok) {
      // Prefer replace so Back doesn’t return to login
      router.replace(result.url ?? "/redirect");
    } else {
      setError(true);
      setPassword("");
    }
  }

  function toggleViewPassword() {
    setShowPassword((v) => !v);
  }

  // RETURNS — after all hooks above
  if (!hasMounted) return null;

  // While redirecting an already-authenticated user, render nothing
  if (status === "authenticated" && session) return null;

  return (
    <div className={styles.bodyWrapper}>
      <div className={styles.wrapper}>
        <form id="LoginForm" onSubmit={handleLogin}>
          <header>
            <img
              src="/assets/images/qu_logo.png"
              alt="QU Logo"
              className={styles.image}
            />
            <h1>Course Management System</h1>
            <p className={styles.quote}>
              Empowering learning, one course at a time.
            </p>
          </header>

          <main>
            <div className={styles.inputBox}>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                onChange={(e) => {
                  usernameRef.current = e.target.value;
                }}
                required
                className={styles.input}
              />
              <i className={`bx bx-user ${styles.icon} bistre`}></i>
            </div>

            <div className={styles.inputBox}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={styles.input}
              />
              <i
                id="toggle-btn"
                className={`bx ${showPassword ? "bx-hide" : "bx-show"} ${
                  styles.icon
                } bistre`}
                onClick={toggleViewPassword}
              />
            </div>

            {error && (
              <p className={styles.error}>
                <i className={`bx bx-error-circle ${styles.error}`}></i>{" "}
                Incorrect Username or Password.
              </p>
            )}

            <div className={styles.rememberForgot}>
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <Link href="#">Forgot Password?</Link>
            </div>

            <button type="submit" className={styles.submitButton}>
              Sign In
            </button>

            <p>
              <b>OR</b>
            </p>

            <button
              type="button"
              onClick={googleLogIn}
              className={`${styles.oauthBtn} ${styles.googleBtn}`}
            >
              <img src="/assets/images/google-icon.svg.webp" alt="Google" />
              Sign in with Google
            </button>

            <button
              type="button"
              onClick={githubLogIn}
              className={`${styles.oauthBtn} ${styles.githubBtn}`}
            >
              <img src="/assets/images/github-icon.png" alt="GitHub" />
              Sign in with Github
            </button>

            <hr style={{ margin: "1rem 0" }} />

            <Link href="/statistics" className="stats-button">
              📊 View Statistics
            </Link>
          </main>
        </form>
      </div>
    </div>
  );
}
