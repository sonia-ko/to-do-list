import Image from "next/image";
import styles from "./page.module.css";
import ToDosContainer from "@/components/to-dos-container/ToDosContainer";
import StoreProvider from "./StoreProvider";

export default function Home() {
  return (
    <main className={styles.main}>
      <ToDosContainer />
    </main>
  );
}
