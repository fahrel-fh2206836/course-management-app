import Navbar from "../components/Navbar";
import NotifProvider from "../context/NotifContext";

export default function layout({ children }) {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <NotifProvider>
        {children}
      </NotifProvider>
    </>
  );
}
