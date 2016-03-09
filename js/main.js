enchant ();


window.onload = function () {
    var game = new Game(320,320);
    game.preload('asset/sloth.png');
    game.fps = 30;
    
    game.onload = function(){

    // create start menu
    var startscene = new Scene();
    
    startscene.backgroundColor = "#FFFFFF";
        // Title Logo
        var titlelogo = new Label("Sloth Crossing");
        titlelogo.x = 100;
        titlelogo.y = 50;

        var startmsg = new Label("Click screen to start game");
        startmsg.x = 80;
        startmsg.y = 80;

        startscene.addChild(titlelogo);
        startscene.addChild(startmsg);

    game.pushScene(startscene);

    // display sloth(player) on the screen
    var firststage = new Scene();
    
    var sprite = new Sprite(64, 51);
    sprite.image = game.assets['asset/sloth.png'];
    sprite.x = 100; sprite.y=100;
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
    });   


};

game.start();


}