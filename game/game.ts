import { Actor, Engine, Loader, ImageSource, vec, CollisionType } from "excalibur";

export function initialize(canvasElement: HTMLCanvasElement) {
    return new Engine({
        canvasElement,
        width: 800,
        height: 600,
    });
}

function wasPokemonClicked(pokemon_actor, click_event) {
    return Math.abs(click_event.worldPos.y - pokemon_actor.pos.y) < 12
        && Math.abs(click_event.worldPos.x - pokemon_actor.pos.x) < 12
}

export async function start(game: Engine, pokemon_list) {
    const resources = {
        pikachu: new ImageSource("/detective_pikachu.png"),
        bulbasaur: new ImageSource("/bulbasaur.png"),
        charmander: new ImageSource("/charmander.png"),
        squirtle: new ImageSource("/squirtle.png"),
        radar_gun: new ImageSource("/radar_gun.png"),
        win: new ImageSource("/you_win.jpeg"),
    };
    const loader = new Loader([
        resources.pikachu,
        resources.bulbasaur,
        resources.charmander,
        resources.squirtle,
        resources.radar_gun,
        resources.win,
    ]);

    // Create Bulbasaur
    const bulbasaurSprite = resources.bulbasaur.toSprite();
    const bulbasaur = new Actor({
        x: 50,
        y: 50,
    });
    bulbasaur.graphics.add(bulbasaurSprite);
    // Set Bulbasaur Speed
    const bulbasaurSpeed = vec(300, 300);
    bulbasaur.vel = bulbasaurSpeed;
    bulbasaur.body.collisionType = CollisionType.Passive;
    game.add(bulbasaur);

    // Setup Bulbasaur direction switch on hitting walls
	bulbasaur.on("postupdate", () => {
        // If the bulbasaur collides with the left side
        // of the screen reverse the x velocity
        if (bulbasaur.pos.x < bulbasaur.width / 2) {
            bulbasaur.vel.x = bulbasaurSpeed.x;
        }
        
        // If the bulbasaur collides with the right side
        // of the screen reverse the x velocity
        if (bulbasaur.pos.x + bulbasaur.width / 2 > game.drawWidth) {
            bulbasaur.vel.x = bulbasaurSpeed.x * -1;
        }
        
        // If the bulbasaur collides with the top
        // of the screen reverse the y velocity
        if (bulbasaur.pos.y < bulbasaur.height / 2) {
            bulbasaur.vel.y = bulbasaurSpeed.y;
        }

        // If the bulbasaur collides with the top
        // of the screen reverse the y velocity
        if (bulbasaur.pos.y + bulbasaur.height / 2 > game.drawHeight) {
            bulbasaur.vel.y = bulbasaurSpeed.y * -1;
        }
    });
    

    // Charmander
    const charmanderSprite = resources.charmander.toSprite();
    const charmander = new Actor({
        x: 50,
        y: 500,
    });
    charmander.graphics.add(charmanderSprite);
    // Set charmander Speed
    const charmanderSpeed = vec(300, 300);
    charmander.vel = charmanderSpeed;
    charmander.body.collisionType = CollisionType.Passive;
    game.add(charmander);

    // Setup charmander direction switch on hitting walls
    charmander.on("postupdate", () => {
        // If the charmander collides with the left side
        // of the screen reverse the x velocity
        if (charmander.pos.x < charmander.width / 2) {
            charmander.vel.x = charmanderSpeed.x;
        }
        
        // If the charmander collides with the right side
        // of the screen reverse the x velocity
        if (charmander.pos.x + charmander.width / 2 > game.drawWidth) {
            charmander.vel.x = charmanderSpeed.x * -1;
        }
        
        // If the charmander collides with the top
        // of the screen reverse the y velocity
        if (charmander.pos.y < charmander.height / 2) {
            charmander.vel.y = charmanderSpeed.y;
        }

        // If the charmander collides with the top
        // of the screen reverse the y velocity
        if (charmander.pos.y + charmander.height / 2 > game.drawHeight) {
            charmander.vel.y = charmanderSpeed.y * -1;
        }
    });

    // Squirtle
    const squirtleSprite = resources.squirtle.toSprite();
    const squirtle = new Actor({
        x: 500,
        y: 50,
    });
    squirtle.graphics.add(squirtleSprite);
    // Set squirtle Speed
    const squirtleSpeed = vec(300, 300);
    squirtle.vel = squirtleSpeed;
    squirtle.body.collisionType = CollisionType.Passive;
    game.add(squirtle);

    // Setup squirtle direction switch on hitting walls
    squirtle.on("postupdate", () => {
        // If the squirtle collides with the left side
        // of the screen reverse the x velocity
        if (squirtle.pos.x < squirtle.width / 2) {
            squirtle.vel.x = squirtleSpeed.x;
        }
       
        // If the squirtle collides with the right side
        // of the screen reverse the x velocity
        if (squirtle.pos.x + squirtle.width / 2 > game.drawWidth) {
            squirtle.vel.x = squirtleSpeed.x * -1;
        }
        
        // If the squirtle collides with the top
        // of the screen reverse the y velocity
        if (squirtle.pos.y < squirtle.height / 2) {
            squirtle.vel.y = squirtleSpeed.y;
        }

        // If the squirtle collides with the top
        // of the screen reverse the y velocity
        if (squirtle.pos.y + squirtle.height / 2 > game.drawHeight) {
            squirtle.vel.y = squirtleSpeed.y * -1;
        }
    });

    // Radar gun
    const radar_gunSprite = resources.radar_gun.toSprite();
    const radar_gun = new Actor({
        x: 500,
        y: 500,
    });
    radar_gun.graphics.add(radar_gunSprite);
    game.add(radar_gun);

    // Win sign
    const winSprite = resources.win.toSprite();
    const win = new Actor({
        x: 10000,
        y: 10000,
    });
    win.graphics.add(winSprite);
    game.add(win);

    // Add a mouse move listener, offset is so tip of radar gun aligns with click
    game.input.pointers.primary.on("move", (evt) => {
        radar_gun.pos.x = evt.worldPos.x - 14;
        radar_gun.pos.y = evt.worldPos.y + 16;
    });

    var ticketCount = 0;
    // Add a mouse move listener for click
    game.input.pointers.primary.on("down", (evt) => {
        const xClick = evt.worldPos.x;
        const yClick = evt.worldPos.y;

        if (wasPokemonClicked(squirtle, evt)) {
            alert("You gave squirtle a ticket!");
            squirtle.kill();
            ticketCount += 1;
        }
        if (wasPokemonClicked(bulbasaur, evt)) {
            alert("You gave bulbasaur a ticket!");
            bulbasaur.kill();
            ticketCount += 1;
        }
        if (wasPokemonClicked(charmander, evt)) {
            alert("You gave charmander a ticket!");
            charmander.kill();
            ticketCount += 1;
        }

        // Add you win sign if all pokemon are caught
        if (ticketCount === 3) {
            win.pos.x = 410;
            win.pos.y = 300;
        }
    });

    // Start the game
    await game.start(loader);
}
