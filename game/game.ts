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
    const resources = {
        pikachu: new ImageSource("/detective_pikachu.png"),
        bulbasaur: new ImageSource("/bulbasaur.png"),
        charmander: new ImageSource("/charmander.png"),
        squirtle: new ImageSource("/squirtle.png"),
        radar_gun: new ImageSource("/radar_gun.png"),
    };
    const loader = new Loader([
        resources.pikachu,
        resources.bulbasaur,
        resources.charmander,
        resources.squirtle,
        resources.radar_gun
    ]);

    const bulbasaurSprite = resources.bulbasaur.toSprite();
    const bulbasaur = new Actor({
        x: 50,
        y: 50,
    });
    bulbasaur.graphics.add(bulbasaurSprite);
    game.add(bulbasaur);

    const charmanderSprite = resources.charmander.toSprite();
    const charmander = new Actor({
        x: 50,
        y: 500,
    });
    charmander.graphics.add(charmanderSprite);
    game.add(charmander);

    const squirtleSprite = resources.squirtle.toSprite();
    const squirtle = new Actor({
        x: 500,
        y: 50,
    });
    squirtle.graphics.add(squirtleSprite);
    game.add(squirtle);

    const radar_gunSprite = resources.radar_gun.toSprite();
    const radar_gun = new Actor({
        x: 500,
        y: 500,
    });
    radar_gun.graphics.add(radar_gunSprite);
    game.add(radar_gun);

    // Add a mouse move listener, offset is so tip of radar gun aligns with click
    game.input.pointers.primary.on("move", (evt) => {
        radar_gun.pos.x = evt.worldPos.x - 14;
        radar_gun.pos.y = evt.worldPos.y + 16;
    });


    // Start the game
    await game.start(loader);

// Create an actor
    // const player = new Actor({
    //     x: -20,
    //     y: 100,
    //     // Use a circle collider with radius 10
    //     radius: 10,
    //     // Set the color
    //     color: Color.Red,
    // });

    // player.actions
    //     .moveBy(vec(100, 0), 200)
    //     .moveBy(vec(100, 100), 200)
    //     .moveBy(vec(0, 100), 200)
    //     .moveBy(vec(0, 0), 200)

    // Start the serve after a second
    // const ballSpeed = vec(200, 0);
    // player.vel = ballSpeed;

    // setTimeout(() => {
    // // Set the velocity in pixels per second
    // player.vel = ballSpeed;
    // }, 1000);


    // const scene = new Scene();

    // let elapsedTime = 0;
    
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
    // game.currentScene.add(player);
}
