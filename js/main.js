enchant ();


window.onload = function () {
    var game = new Game(420,320);
    game.preload('asset/sloth.png','asset/car2.png','asset/road.png','asset/banana.png');
    game.preload('asset/hitsuji_nation.mp3');
    game.fps = 30;
    
    game.onload = function(){

    // create start menu & play start music
    // game.assets['asset/hitsuji_nation.mp3'].play();
    var startscene = new Scene();
    
    startscene.backgroundColor = "#4169e1";
        // Title Logo
        var titlelogo = new Label("Sloth Crossing");
        titlelogo.x = 100;
        titlelogo.y = 50;
        titlelogo.font = "36px palatino";

        var startmsg = new Label("Click screen to start game");
        startmsg.x = 100;
        startmsg.y = 120;
        startmsg.font = "20px palatino";

        startscene.addChild(titlelogo);
        startscene.addChild(startmsg);

    game.pushScene(startscene);

    // create first stage with nodes
    
    var firststage = new Scene();
    var road = new Sprite(420,320);
    var sloth = new Sprite(64, 51);
    var car = new Sprite(63,90);
    var score = new Label();  
    var banana = new Sprite(24,30);

    // how to control sloth
        sloth.addEventListener('enterframe',function(){
            if(game.input.left){
                if(this.x >= 0){
                    this.x--;
                this.scaleX = 1;
            }
           }
           if(game.input.right){
                if(this.x <= 350){
                this.x++;
                this.scaleX = -1;
            }
           }
        })

    // to move car
        car.addEventListener('enterframe',function(){
            this.y++;
            if(this.y >= 230){
                carloc = Math.floor(Math.random() * 220) + 70;
                this.x = carloc;
                this.y = 10;
            }
        })

    // define behavior of sloth crashing 
        sloth.addEventListener('enterframe',function(){
            if(sloth.intersect(car)){
                dyingmsg = new Label("sloth died");
                dyingmsg.x = 180;
                dyingmsg.y = 30
                firststage.removeChild(sloth);
                firststage.removeChild(car);
                firststage.addChild(dyingmsg);
                setTimeout(function(){
                    game.replaceScene(startscene);
                }, 5000);
                    
            }
        })

    //define behavior when sloth gets a banana
        sloth.addEventListener('enterframe',function(){
            if(sloth.intersect(banana)){
                game.score += 1;
                score.text = "score: " + game.score;
                if(banana.x == 380 ){
                    banana.x = 15;
                    return;
                } if(banana.x == 15){
                    banana.x = 380;
                    return;
                }
            }
        })

    // transferred from title to first stage
    startscene.addEventListener('touchstart',function(){       
        game.replaceScene(firststage);

        
        road.image = game.assets['asset/road.png'];
        road.x = 0;
        road.y = 0;
        firststage.addChild(road);

        // display sloth (palyer)
        
        sloth.image = game.assets['asset/sloth.png'];
        sloth.x = 20; sloth.y=230;
        sloth.scaleX = -1;
        firststage.addChild(sloth);

        //  display car (enemy)
        
        var carloc = Math.floor(Math.random() * 240) + 60;

        car.image = game.assets['asset/car2.png'];
        car.x = carloc;  car.y= 10;
        firststage.addChild(car);

        //display score upper-right on the first stage

        game.score = 0;

        score.x = 350;
        score.y = 15;
        score.text = "score: " + game.score;
        firststage.addChild(score);

        //display item

        banana.image = game.assets['asset/banana.png'];
        banana.x = 380;
        banana.y = 250;
        firststage.addChild(banana);


        //stop prologue thema song
        game.assets['asset/hitsuji_nation.mp3'].stop();
    });   


};

game.start();


}