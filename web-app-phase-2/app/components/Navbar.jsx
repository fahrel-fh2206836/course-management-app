'use client'
import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import { UserContext } from '../context/UserContext';
import { usePathname, useRouter } from 'next/navigation';
import NavItem from './NavItem';


export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const { user, logout } = useContext(UserContext);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth > 1024);
  };

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleLogout = () => {
    setShowLogoutDialog(true);
  };

  const confirmLogout = () => {
    logout();
    router.push('/');
  };

  const navLinks = () => {
    if (user?.role === 'Student') {
      return (
        <>
          <NavItem href="/dashboard/student" label="Dashboard" icon="bxs-home" active={pathname.split("/").length == 3} />
          <NavItem href="/dashboard/student/courses" label="Courses" icon="bxs-book" active={pathname.includes('courses')} />
          <NavItem href="/dashboard/student/learningPaths" label="Learning Path" icon="bxs-graduation" active={pathname.includes('learningPaths')} />
        </>
      );
    } else if (user?.role === 'Instructor') {
      return (
        <>
          <NavItem href="/dashboard/instructor" label="Dashboard" icon="bxs-home" active={pathname.split("/").length == 3} />
          <NavItem href="#" label="Course Instructor Allocation" icon="bxs-cog" />
        </>
      );
    } else {
      return (
        <>
          <NavItem href="/dashboard/admin" label="Dashboard" icon="bxs-home" active={pathname.split("/").length == 3} />
          <NavItem href="/dashboard/admin/addCourse" label="Add Course" icon="bxs-book-add" active={pathname.includes('addCourse')} />
          <NavItem href="/dashboard/admin/addSection" label="Add Section" icon="bxs-plus-circle" active={pathname.includes('addSection')} />
        </>
      );
    }
  };

  return (
    <>
      <nav id="navbar">
        <div id="nav-img-header">
          <Link href={`/dashboard-${user?.role.toLowerCase()}`}>
            <img src="/assets/images/qu_logo_white.png" alt="QU Logo" id="long-qu-logo" />
            <img src="/assets/images/qu_logo_white3.png" alt="QU Logo" id="short-qu-logo" />
          </Link>
          <p id="nav-title">Course Management System</p>
        </div>
        <ul id="menulist" className={`${isLargeScreen ? 'large-menulist' : showMenu ? 'open-menulist' : 'close-menulist'}`}>
          {navLinks()}
          <div className="nav-index">
            <li><i className='bx bx-power-off'></i> <a onClick={handleLogout}>Logout</a></li>
          </div>
        </ul>
        <div className="nav-index" id="menu-icon" onClick={toggleMenu}>
          <i className='bx bx-menu'></i>
        </div>
      </nav>

      {showLogoutDialog && (
        <div id="logoutDialog" className="dialog">
          <div className="dialog-content">
            <h3>Are you sure you want to logout?</h3>
            <p>You will be signed out of your account and redirected to the login page.</p>
            <div className="dialog-buttons">
              <button className="logout-btn" onClick={confirmLogout}>Logout</button>
              <button className="cancel-btn" onClick={() => setShowLogoutDialog(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}



