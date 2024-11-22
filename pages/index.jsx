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
        <div className={styles.content_container}>
          <div className={styles.text_container}>
            Welcome to Pokemon Stop!
            <br/><br/>
          </div>
          <div className={styles.pikachu_img_container}>
            <img className={styles.pikachu_img} src='/detective_pikachu.png'></img>
          </div>
          <div className={styles.text_container}>
            <br/><br/>
            Help detective Pikachu give out speeding tickets to keep the roads safe.
            <br/><br/><br/>
            - Tip 1: Use your radar gun to stop Pokemon by clicking on them. It's not as easy as it looks!
            <br/><br/><br/>
            - Tip 2: Stop all the Pokemon with your radar gun to win.
            <br/><br/>
          </div>
          <div className={styles.home_links_container}>
            <Link className={styles.home_link} href="/play-game">Play Game</Link>
            <Link className={styles.home_link} href="/pokemon-directory">Research Pokemon</Link>
          </div>
        </div>
      </main>
    </>
  );
}
