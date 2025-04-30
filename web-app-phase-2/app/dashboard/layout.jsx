import Navbar from "../components/Navbar";
import UserProvider from "../context/UserContext";


export default function layout({ children }) {
  return (
    <>
        <Navbar/>
        {children}
    </>
  );
}
