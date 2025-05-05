'use client'
import React, { createContext, useState } from 'react'

export const CourseContext = createContext();

export default function CourseProvider({ children }) {
    const [selectedCourse, setSelectedCourse] = useState(null);

    const setNewSelectedCourse = (course) => {
        setSelectedCourse(course);
    }

    const updateSelectedCourse = (updates) => {
        const updatedCourse = { ...course, ...updates };
        setSelectedCourse(updatedCourse);
    };

    return (
        <CourseContext.Provider value={{ selectedCourse, setNewSelectedCourse, updateSelectedCourse}}>
          {children}
        </CourseContext.Provider>
      );
}