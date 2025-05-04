'use client'
import React, { useContext } from 'react'
import { SectionContext } from '@/app/context/SectionContext';

export default function page() {
  const { section } = useContext(SectionContext);
  return (
    <div>{section.sectionId}</div>
  )
}
