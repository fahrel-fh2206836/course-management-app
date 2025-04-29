'use client';
import React, { useContext, useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { UserContext } from './context/UserContext';


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const { user, login, logout, updateUser } = useContext(UserContext);


  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const foundUser = users.find(
  //     (user) => user.username === username && user.password === password
  //   );

  //   if (foundUser) {
  //     localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
  //     localStorage.setItem('currentPage', 'dashboard');

  //     if (foundUser.role === 'Student') {
  //       window.location.href = '/view-student/dashboard-student.html';
  //     } else if (foundUser.role === 'Instructor') {
  //       window.location.href = '/view-instructor/dashboard-instructor.html';
  //     } else {
  //       window.location.href = '/view-admin/dashboard-admin.html';
  //     }
  //   } else {
  //     setPassword('');
  //     setError(true);
  //   }
  // };

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
              <input type={showPassword ? 'text' : 'password'} id="password" name="password" placeholder="Password" required className={styles.input}/>
              <i id="toggle-btn" className={`bx ${showPassword ? 'bx-hide' : 'bx-show'} ${styles.icon}`} onClick={toggleViewPassword}></i>
            </div>

            {error && (<p id="wrong-pass" className={styles.error}> <i className="bx bx-error-circle"></i> Incorrect Username or Password.</p>)}

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
