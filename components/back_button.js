import Link from 'next/link';
import styles from '../styles/BackButton.module.css';

export default function BackButton({ back_button_url }) {
    return (
        <div className={styles.back_button_container}>
          <Link href={back_button_url}>{"←"}</Link>
        </div>
      )
}
