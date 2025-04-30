'use client';
import React, { useContext, useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { UserContext } from './context/UserContext';
import { getUserAction } from './actions/server-actions';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const { user, login } = useContext(UserContext);
  const router = useRouter();


  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData);

    const foundUser = await getUserAction(userData.username, userData.password);
    
    if (!foundUser.error) {
      login(foundUser);
      if (foundUser.role === 'Student') {
        router.push('/dashboard/student');
      } else if (foundUser.role === 'Instructor') {
        router.push('/dashboard/instructor');
      } else {
        router.push('/dashboard/admin');
      }
    } else {
      setPassword('');
      setError(true);
    }
  };

  function toggleViewPassword() {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.bodyWrapper}>
      <div className={styles.wrapper}>
        <form id="LoginForm" onSubmit={handleSubmit}>
          <header>
            <img src="/assets/images/qu_logo.png" alt="QU Logo" className={styles.image} />
            <h1>Course Management System</h1>
            <p className={styles.quote}>Empowering learning, one course at a time.</p>
          </header>

          <main>
            <div className={styles.inputBox}>
              <input type="text" id="username" name="username" placeholder="Username" required className={styles.input} />
              <i className={`bx bx-user ${styles.icon}`}></i>
            </div>

            <div className={styles.inputBox}>
              <input type={showPassword ? 'text' : 'password'} id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className={styles.input}/>
              <i id="toggle-btn" className={`bx ${showPassword ? 'bx-hide' : 'bx-show'} ${styles.icon}`} onClick={toggleViewPassword}></i>
            </div>

            {error ? <p className={styles.error}> <i className={`bx bx-error-circle ${styles.error}`}></i> Incorrect Username or Password. </p> : <></>}

            <div className={styles.rememberForgot}>
              <label><input type="checkbox" /> Remember Me</label>
              <Link href="#">Forgot Password?</Link>
            </div>

            <button type="submit" className={styles.submitButton}>Sign In</button>
          </main>
        </form>
      </div>
    </div>
  );
}
