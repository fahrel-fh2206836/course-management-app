'use client'
import React, { useEffect, useState } from 'react'

export default function AddCourse({ majors, csCourse, ceCourse, eeCourse, mathCourse}) {
    const [selectedMajorId, setSelectedMajorId] = useState("");
    const [selectedMajor, setSelectedMajor] = useState(null);
    const [prerequisitesList, setPrerequisitesList] = useState([]);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
        const major = majors.find(m => m.majorId === selectedMajorId);
        setSelectedMajor(major);

        if (!major) {
        setPrerequisitesList([]);
        } else if (major.majorCode === "CMPS") {
        setPrerequisitesList(csCourse);
        } else if (major.majorCode === "CMPE") {
        setPrerequisitesList(ceCourse);
        } else if (major.majorCode === "ELEC") {
        setPrerequisitesList(eeCourse);
        } else {
        setPrerequisitesList(mathCourse);
        }
    }, [selectedMajorId]);

    if(!hasMounted) return null;

    return (
        <form action="" id="add-courses-form" className='add-page-form'>
            <div className="form-group">
                <label className="add-page-label" htmlFor="course-code">Course Code</label>
                <input className="add-page-input" type="text" id="course-code" name="courseCode" placeholder="e.g. CMPS 151" required/>
            </div>
            <div className="form-group">
                <label className="add-page-label" htmlFor="course-name">Course Name</label>
                <input className="add-page-input" type="text" id="course-name" name="courseName" placeholder="e.g. Programming Concepts" required/>
            </div>

            <div className="form-group">
                <label className="add-page-label" htmlFor="credit-hour">Credit Hour</label>
                <input className="add-page-input" type="number" id="credit-hour" name="creditHour" placeholder="Enter Credit Hour" required/>
            </div>

            <div className="form-group">
                <label className="add-page-label" htmlFor="major">Select Major</label>
                <select id="major" name="majorId" defaultValue={""} onChange={(e) => setSelectedMajorId(e.target.value)} required>
                <option value="" disabled>Select Major</option>
                    {majors.map((m) => (
                        <option key={m.majorId} value={m.majorId}>
                        {m.majorName} ({m.majorCode})
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label className="add-page-label" htmlFor="prerequisites">Select Prerequisites Courses<p>Note: Hold Ctrl Key for Windows and CMD key for Mac to select multiple options</p></label>
                <select id="prerequisites" name="prerequisitesCoursesId" className="prerequisites-dropdown" multiple>
                    <optgroup label={`${selectedMajor?.majorName || "Major"} Courses`}>
                        {prerequisitesList.map((c) => (
                        <option key={c.id} value={c.id}>{c.courseName}</option>
                        ))}
                    </optgroup> 
                </select>
            </div>
        
            <div className="checkbox-group">
                <p>Set Course Status and Curriculum</p>
                <input className="add-page-input" type="hidden" name="isOngoing" value="off"/>
                <label className="add-page-label" id="ongoing"><input className="add-page-input" type="checkbox" id="ongoing" name="isOngoing"/>  Ongoing Course</label>
                <input className="add-page-input" type="hidden" name="isRegistration" value="off"/>
                <label className="add-page-label" id="registration"><input className="add-page-input" type="checkbox" id="registration" name="isRegistration"/>  Open for Registration</label>
            </div>

            <div className="button-group">
                <button type="submit">Add Course</button>
                <button type="reset">Clear All</button>
            </div>
        </form>
    )
}
