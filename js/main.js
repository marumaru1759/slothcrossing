enchant ();


window.onload = function () {
    var game = new Game(420,320);
    game.preload('asset/sloth.png');
    game.preload('asset/hitsuji_nation.mp3');
    game.fps = 30;
    
    game.onload = function(){

    // create start menu & play start music
    game.assets['asset/hitsuji_nation.mp3'].play();
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
    
    var sprite = new Sprite(64, 51);
    sprite.image = game.assets['asset/sloth.png'];
    sprite.x = 20; sprite.y=150;
    sprite.scaleX = -1;
    firststage.addChild(sprite);

        // to control sloth
        game.addEventListener('enterframe',function(){
            if(game.input.up){
                sprite.y--;
            }
            if(game.input.down){
                sprite.y++;
            }
            if(game.input.left){
                sprite.x--;
                sprite.scaleX = 1;
           }
           if(game.input.right){
                sprite.x++;
                sprite.scaleX = -1;
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