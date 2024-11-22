import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokemon Stop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h3>Home</h3>
        <div className={styles.text_container}>
          Welcome to Pokemon Stop!
          <br/><br/>
          <div className={styles.pikachu_img_container}>
            <img className={styles.pikachu_img} src='/detective_pikachu.png'></img>
          </div>
          <br/><br/>
          Help detective Pikachu give out speeding tickets to keep the roads safe.
          <br/><br/><br/>
          - Tip 1: Stop as many Pokemon as you can to get a new high score! 
          <br/><br/><br/>
          - Tip 2: Click only on the Pokemon that are speeding or else it is GAME OVER. 
          <br/><br/>
          <div className={styles.home_links_container}>
            <Link className={styles.home_link} href="/traffic-stops">Play Game</Link>
            <Link className={styles.home_link} href="/pokemon-directory">Research Pokemon</Link>
          </div>
        </div>
      </main>
    </>
  );
}
