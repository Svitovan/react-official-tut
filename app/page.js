import styles from "./page.module.css";
import Board from "./Components/Board";

export default function Home() {
  return (
    <main className={styles.main}>
      
      <h1>Game</h1>

      <Board />
 
    </main>
  );
}
