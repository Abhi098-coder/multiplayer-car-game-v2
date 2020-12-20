class Form{
    constructor(){
        this.button = createButton('play');
        this.button.position(100,150);
        this.inputBox = createInput('name');
        this.inputBox.position(50,100);
        this.heading = createElement('h1','car racing game');
        this.heading.position(50,0);
    }
    hide(){
        this.greeting.hide();
        this.greeting2.hide();
    }
    display(){
        
        this.button.mousePressed(()=>{
            this.button.hide();
            this.inputBox.hide();
            this.heading.hide();
            this.greeting = createElement('h2');
            this.greeting.html('Hello, '+ this.inputBox.value());
            this.greeting.position(200,200);
            this.greeting2 = createElement('h2');
            this.greeting2.html('wait for the other players to join');
            this.greeting2.position(200,250);
            playerCount++;
            player.updateCount(playerCount);
            player.name=this.inputBox.value();
            player.index=playerCount
            player.update()
        });
    }
}