import { Actor, Engine, Loader, ImageSource } from "excalibur";

export function initialize(canvasElement: HTMLCanvasElement) {
    return new Engine({
        canvasElement,
        width: 800,
        height: 600,
    });
}

export async function start(game: Engine) {
  const resources = {
    sword: new ImageSource("/menu.png")
  };
  const loader = new Loader([resources.sword]);

  await game.start(loader);

  const swordSprite = resources.sword.toSprite();
  const sword = new Actor({
    x: 50,
    y: game.halfDrawHeight
  });
  sword.graphics.add(swordSprite);
  game.add(sword);
}
