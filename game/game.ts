import { Actor, Engine, Color, Loader, ImageSource, vec, Timer, Scene } from "excalibur";

function getRandomPokemon({ pokemon_list }) {
    const random_pokemon_idx = pokemon_list.length - 1;
    return pokemon_list[random_pokemon_idx]
}

export function initialize(canvasElement: HTMLCanvasElement) {
    return new Engine({
        canvasElement,
        width: 800,
        height: 600,
    });
}

export async function start(game: Engine, pokemon_list) {
//   const resources = {
//     sword: new ImageSource("/menu.png")
//   };
//   const loader = new Loader([resources.sword]);

//   await game.start(loader);

//   const swordSprite = resources.sword.toSprite();
//   const sword = new Actor({
//     x: 50,
//     y: game.halfDrawHeight
//   });
//   sword.graphics.add(swordSprite);
//   game.add(sword);
// Create an actor
    const player = new Actor({
        x: 100,
        y: 100,
        width: 32,
        height: 32,
        color: Color.Red
    });

    player.actions
        .moveBy(vec(100, 0), 200)
        .moveBy(vec(100, 100), 200)
        .moveBy(vec(0, 100), 200)
        .moveBy(vec(0, 0), 200)

    const scene = new Scene();

    let elapsedTime = 0;
    
    // scene.onPreUpdate = (engine, delta) => {
    //   elapsedTime += delta;
    //   if (elapsedTime >= 1000) { 
    //     player.moveBy(vec(100, 0), 200)
    //             .moveBy(vec(100, 100), 200)
    //             .moveBy(vec(0, 100), 200)
    //             .moveBy(vec(0, 0), 200)
    //     elapsedTime = 0; 
    //   }
    // };

    // let timer = new Timer({
    //     interval: 1000, // 1000 milliseconds = 1 second
    //     repeats: true, // Set to true to repeat the timer
    //     fcn: () => {
    //         player.actions
    //             .moveBy(vec(100, 0), 200)
    //             .moveBy(vec(100, 100), 200)
    //             .moveBy(vec(0, 100), 200)
    //             .moveBy(vec(0, 0), 200)
    //     }
    //   });



    // Add the actor to the scene
    game.currentScene.add(player);

    // Start the game
    game.start();
}
