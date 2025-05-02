import Navbar from "../components/Navbar";


export default function layout({ children }) {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      {children}
    </>
  );
}
