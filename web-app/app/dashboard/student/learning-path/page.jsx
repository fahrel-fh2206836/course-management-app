// app/dashboard/learning-path/page.jsx
import { fetchLearningPathForCurrentUser } from "@/app/actions/server-actions";
import LearningPathComponent from "@/app/components/LearningPathComponent";
import styles from "./page.module.css"

export default async function LearningPathPage() {
  const data = await fetchLearningPathForCurrentUser();
  return <LearningPathComponent data={data} styles={styles} />;
}
