

function slotGame(quarters, walkAway) {

    while (quarters > 0) {

        quarters--;
        var victory = Math.floor(Math.random()*100);

        if(victory == 25) {
            quarters = quarters + (Math.floor(Math.random()*50) + 50);
        }

        console.log(quarters);

        if(quarters > walkAway) {
            break;
        }

    }
    return quarters;
}

slotGame(60, 80)
