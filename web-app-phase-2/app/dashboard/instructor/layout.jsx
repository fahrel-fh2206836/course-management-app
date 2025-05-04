import SectionProvider from "@/app/context/SectionContext";

export default function layout({ children }) {
  return (
    <>
      <SectionProvider>
        {children}
      </SectionProvider>
    </>
  );
}