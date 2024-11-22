import { Game } from "../../game";
import styles from '../../styles/Game.module.css';

export default function TrafficStops() {
    return (
        <>
            <div className={styles.page_container}>
                <div className={styles.canvas_container}>
                    <Game />
                </div>
            </div>
        </>
    );
}