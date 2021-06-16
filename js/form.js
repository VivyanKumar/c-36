class Form{
    constructor(){
        this.title = createElement('h2');
        this.greeting = createElement('h2');
        this.input = createInput('');
        this.button = createButton('Start');
    }
    display(){
        this.title.html("Car Racing Game");
        this.title.position(600,200);
        this.input.position(625,300);
        this.button.position(690,350);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Welcome " + player.name);
            this.greeting.position(600, 250);
             
        })
    }
}