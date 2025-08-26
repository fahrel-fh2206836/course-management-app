// app/components/Navbar.jsx
"use client";
import React, { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavItem from "./NavItem";

export default function Navbar() {
  const { data: session, status } = useSession();
  const user = session?.user; // contains role, firstName, lastName, etc. from your callbacks

  const [showMenu, setShowMenu] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setShowMenu((prev) => !prev);
  const handleLogout = () => setShowLogoutDialog(true);
  const confirmLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  const roleBasePath = () => {
    switch (user?.role) {
      case "Student":
        return "/dashboard/student";
      case "Instructor":
        return "/dashboard/instructor";
      case "Admin":
      default:
        return "/dashboard/admin";
    }
  };

  const navLinks = () => {
    if (user?.role === "Student") {
      return (
        <>
          <NavItem
            href="/dashboard/student"
            label="Dashboard"
            icon="bxs-home"
            active={pathname === "/dashboard/student"}
          />
          <NavItem
            href="/dashboard/student/courses"
            label="Courses"
            icon="bxs-book"
            active={pathname.includes("courses")}
          />
          <NavItem
            href="/dashboard/student/learning-path"
            label="Learning Path"
            icon="bxs-graduation"
            active={pathname.includes("learning-path")}
          />
        </>
      );
    } else if (user?.role === "Instructor") {
      return (
        <>
          <NavItem
            href="/dashboard/instructor"
            label="Dashboard"
            icon="bxs-home"
            active={pathname === "/dashboard/instructor"}
          />
          <NavItem href="#" label="Course Instructor Allocation" icon="bxs-cog" />
        </>
      );
    } else {
      // Admin / default
      return (
        <>
          <NavItem
            href="/dashboard/admin"
            label="Dashboard"
            icon="bxs-home"
            active={pathname === "/dashboard/admin"}
          />
          <NavItem
            href="/dashboard/admin/add-course"
            label="Add Course"
            icon="bxs-book-add"
            active={pathname.includes("add-course")}
          />
          <NavItem
            href="/dashboard/admin/add-section"
            label="Add Section"
            icon="bxs-plus-circle"
            active={pathname.includes("add-section")}
          />
        </>
      );
    }
  };

  // Optional: hide navbar until we know auth state, or show a slim guest nav
  if (status === "loading") return null;
  if (status === "unauthenticated") return null;

  return (
    <>
      <nav id="navbar">
        <div id="nav-img-header">
          <Link href={roleBasePath()}>
            <img src="/assets/images/qu_logo_white.png" alt="QU Logo" id="long-qu-logo" />
            <img src="/assets/images/qu_logo_white3.png" alt="QU Logo" id="short-qu-logo" />
          </Link>
          <p id="nav-title">Course Management System</p>
        </div>

        <ul
          id="menulist"
          className={`${isLargeScreen ? "large-menulist" : showMenu ? "open-menulist" : "close-menulist"}`}
        >
          {navLinks()}
          <div className="nav-index">
            <li>
              <i className="bx bx-power-off" /> <a onClick={handleLogout}>Logout</a>
            </li>
          </div>
        </ul>

        <div className="nav-index" id="menu-icon" onClick={toggleMenu}>
          <i className="bx bx-menu" />
        </div>
      </nav>

      {showLogoutDialog && (
        <div id="logoutDialog" className="dialog">
          <div className="dialog-content">
            <h3>Are you sure you want to logout?</h3>
            <p>You will be signed out of your account and redirected to the login page.</p>
            <div className="dialog-buttons">
              <button className="logout-btn" onClick={confirmLogout}>
                Logout
              </button>
              <button className="cancel-btn" onClick={() => setShowLogoutDialog(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
