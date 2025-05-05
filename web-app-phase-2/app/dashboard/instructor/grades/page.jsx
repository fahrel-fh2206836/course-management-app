'use client'
import React, { useContext } from 'react'
import { SectionContext } from '@/app/context/SectionContext';

export default function page() {
  const { selectedSection } = useContext(SectionContext);
  return (
    <div>{selectedSection.sectionId}</div>
  )
}
