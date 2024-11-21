import Link from 'next/link';
import styles from '../styles/Subheader.module.css';

export default function Subheader({ subhead_info }) {
    return (
        <div className={styles.subheader_container}>
          <div className={styles.back_button_container}>
            <Link href={subhead_info.back_button_url}>{"←"}</Link>
          </div>
          <div className={styles.subtitle_container}>
            {subhead_info.subtitle}
          </div>
        </div>
      )
}
