'use client'
import React, { createContext, useState } from 'react'

export const SectionContext = createContext();

export default function SectionProvider({ children }) {
    const [section, setSection] = useState(null);

    const setSelectedSection = (section) => {
        setSection(section);
    }

    return (
        <SectionContext.Provider value={{ section, setSelectedSection }}>
          {children}
        </SectionContext.Provider>
      );
}
