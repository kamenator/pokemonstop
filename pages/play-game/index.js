import { Game } from "../../game";
import styles from '../../styles/Game.module.css';

export default function PlayGame() {
    return (
        <>
            <h3>Play Game</h3>
            <div className={styles.page_container}>
                <div className={styles.canvas_container}>
                    <Game />
                </div>
            </div>
        </>
    );
}