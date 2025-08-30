import appRepo from '@/app/repo/app-repo';
import styles from './page.module.css';
import Schedule from '@/app/components/Schedule';
import AdminCourses from '@/app/components/AdminCourses';

export default async function CourseStatusPage() {
  const semester = await appRepo.getSemesters();
  const majors = await appRepo.getMajors();
  const ongoingCourse = await appRepo.getCourseByMajorStatus({ status: 'ongoing' });
  const regCourse = await appRepo.getCourseByMajorStatus({ status: 'registration' });
  const notOfferedCourse = await appRepo.getCourseByMajorStatus({ status: 'notOffered' });

  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Course Status Management</h1>

      <AdminCourses majors={majors} ongoingCourse={ongoingCourse} regCourse={regCourse} notOfferedCourse={notOfferedCourse} />

      <div className={styles.scheduleContainer}>
        <h2><i className={`bx bxs-calendar ${styles.h2Icon}`}></i> Ongoing Class Schedule</h2>
        <Schedule ongoingSemester={semester[semester.length - 2].semester} />
      </div>
    </main>
  );
}