// app/dashboard/learning-path/page.jsx
import { fetchLearningPathForCurrentUser } from "@/app/actions/server-actions";
import LearningPathComponent from "@/app/components/LearningPathComponent";
import styles from "./page.module.css";
import ClientRedirect from "@/app/components/ClientRedirect";

export default async function LearningPathPage() {
  const data = await fetchLearningPathForCurrentUser();
  if (!data.session) {
    return (
      <main className="main-dashboard">
        <p>Session expired. Redirecting in 5 seconds...</p>
        <ClientRedirect to="/" delay={5000} />
      </main>
    );
  }
  return <LearningPathComponent data={data} styles={styles} />;
}
