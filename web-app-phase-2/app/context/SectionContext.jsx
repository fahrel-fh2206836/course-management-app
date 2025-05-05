'use client'
import React, { createContext, useState } from 'react'

export const SectionContext = createContext();

export default function SectionProvider({ children }) {
    const [selectedSection, setSelectedSection] = useState(null);

    const setNewSelectedSection = (section) => {
        setSelectedSection(section);
    }

    return (
        <SectionContext.Provider value={{ selectedSection, setNewSelectedSection }}>
          {children}
        </SectionContext.Provider>
      );
}
