import styles from "./page.module.css";
import ToDosContainer from "@/components/to-dos/to-dos-container/ToDosContainer";

export default function Home() {
  return (
    <main className={styles.main}>
      <ToDosContainer />
    </main>
  );
}
