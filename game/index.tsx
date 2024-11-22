import { useRef, useEffect } from "react";
import type { Engine } from "excalibur";

/**
 * Workaround for https://github.com/excaliburjs/Excalibur/issues/1431
 */
function cleanUpPlayButtons() {
  const playButtons = document.querySelectorAll("#excalibur-play-root");

  playButtons.forEach((playButton) => {
    if (playButton.parentNode) {
      playButton.parentNode.removeChild(playButton);
    }
  });
}

export const Game = () => {
  const canvasRef = useRef<HTMLCanvasElement>();
  const gameRef = useRef<Engine>(null);

  const resetGame = () => {
    if (gameRef.current) {
      gameRef.current.stop();
    }
    cleanUpPlayButtons();
  };

  useEffect(() => {
    // HMR support
    resetGame();

    import("./game").then(({ initialize, start }) => {
      gameRef.current = initialize(canvasRef.current);
      start(gameRef.current);
    });

    return resetGame;
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};