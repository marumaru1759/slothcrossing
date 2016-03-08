enchant ();


window.onload = function () {
    var game = new Game(320,320);
    game.preload('asset/sloth.png');
    
    game.onload = function(){

    // create start menu

    var scene = new Scene();
    game.pushScene(scene);

    var sprite = new Sprite(64, 51);
    sprite.image = game.assets['asset/sloth.png'];
    sprite.x = 100; sprite.y=100;
    scene.addChild(sprite);

};

game.start();

}