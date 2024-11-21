import Link from 'next/link';
import styles from '../styles/Result.module.css';

export default function BackButton({ back_button_url }) {
    return (
        <div className={styles.result_navigation}>
          <Link href={back_button_url}>{"Back"}</Link>
        </div>
      )
}
