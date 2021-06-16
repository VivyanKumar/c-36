class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",(data)=>{     // anonymous functions
            gameState = data.val();
        });
    }

    update(state){
        database.ref('/').update({
            gameState : state
        });
    }
    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountref = await database.ref('playerCount').once("value");
            if(playerCountref.exists()){
                playerCount = playerCountref.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
    }
    play(){
        textSize(48);
        text("Game Start",600,350);
        Player.getPlayerInfo();

        if(allPlayers !==undefined){
            var disp_pos = 350;
            for(var plr in allPlayers){ // allPlayers[player1].name
                if(plr==="player"+player.index){
                    fill("red")
                }
                else{
                    fill("black");
                }
                disp_pos+=30;
                textSize(20);
                text(allPlayers[plr].name + " : "+ allPlayers[plr].distance,640,disp_pos);
             }
        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();
        }
    }
}