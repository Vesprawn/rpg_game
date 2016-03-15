Kraken.engine = function () {
    var that = {},
        game_loop = null,
        setGameLoop = function () {
            game_loop = Kraken.gameLoop({'tick_func': that.tickFunc, 'interval': 1000});
            game_loop.start();
        },
        setHero = function () {
            that.hero = Kraken.hero({name: 'mike', location: {y: 13, x: 0}});
        };

    that.hero = null;

    that.tickFunc = function () {
        console.log(new Date());
    };

    that.init = function () {
        setHero();
        setGameLoop();
    };

    return that;
}();