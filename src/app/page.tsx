import Head from "next/head";
import styles from "./page.module.css";
import ToDosContainer from "@/components/to-dos/to-dos-container/ToDosContainer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Simple To-do list</title>
        <meta name="description" content="A simple to-do list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <ToDosContainer />
      </main>
    </>
  );
}
