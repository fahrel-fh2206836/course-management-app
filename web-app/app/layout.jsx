import SessionProviderWrapper from "./context/SessionProviderWrapper";
import "./globals.css";

export const metadata = {
  title: "University Course Management System",
  description:
    "A comprehensive web application designed to streamline university course workflows—enabling students, instructors, and administrators to manage registrations, grades, schedules, and course offerings in a unified system.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="University Course Management"
        />
      </head>
      <body>
        <SessionProviderWrapper>{children}</SessionProviderWrapper>
      </body>
    </html>
  );
}
