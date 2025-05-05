import Navbar from "../components/Navbar";
import CourseProvider from "../context/CourseContext";

export default function layout({ children }) {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <CourseProvider>
          {children}
      </CourseProvider>
    </>
  );
}
