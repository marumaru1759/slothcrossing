enchant ();


window.onload = function () {
    var game = new Game(420,320);
    game.preload('asset/sloth.png');
    game.preload('asset/hitsuji_nation.mp3','asset/car.jpg');
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

    // display sloth(player) on the screen
    var firststage = new Scene();
    
    var sloth = new Sprite(64, 51);
    sloth.image = game.assets['asset/sloth.png'];
    sloth.x = 20; sloth.y=200;
    sloth.scaleX = -1;
    firststage.addChild(sloth);

    var car = new Sprite(63,90);
    var carloc = Math.round(Math.random() * 300) + 50;

    car.image = game.assets['asset/car.jpg'];
    car.x = carloc;  car.y= 10;
    firststage.addChild(car);

        // to control sloth
        sloth.addEventListener('enterframe',function(){
            if(game.input.left){
                this.x--;
                this.scaleX = 1;
           }
           if(game.input.right){
                this.x++;
                this.scaleX = -1;
           }
        })

        // to move car
        car.addEventListener('enterframe',function(){
            this.y++;
            if(this.y >= 200){
                carloc = Math.round(Math.random() * 300) + 50;
                this.x = carloc;
                this.y = 10;
            }
        })

    // transferred from title to first stage
    startscene.addEventListener('touchstart',function(){
        game.replaceScene(firststage);
        game.assets['asset/hitsuji_nation.mp3'].stop();
    });   


};

game.start();


}