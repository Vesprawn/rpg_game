var Engine = (function($this) {
    $this.gameLoop = null;

    /**
     * GameLoop class responsible for calling a passed function every interval time which is 
     * specified.
     * @param {Object} tickFunc - this is the fucntion to execute every tick.
     * @param {[type]} interval - this the amoutn of time in milisecons to execute the tick 
     * function.
     */
    $this.GameLoop = function(tickFunc, interval) {
        var game_timer = null,
            game_timer_interval = 100,
            tick_func = null,
            _init = function(f, i) {
                game_timer_interval = i;
                tick_func = f;
            };

        /**
         * Starts the game loop.
         */
        this.start = function() {
            clearInterval(game_timer);
            game_timer = setInterval(tick_func, game_timer_interval);

            return this;
        };

        _init(tickFunc, interval);
    };

    /**
     * Tick function for game loop this will call the render function among other functions
     */
    $this.tick = function() {
        $this.renderScreen();
        console.log(new Date() + 'game loop running');
    };

    /**
     * Setup the game loop, creates new instance of GameLoop passing the tick function and the game 
     * loop interval time then starts the loop.
     */
    $this.initGameLoop = function() {
        $this.gameLoop = new $this.GameLoop($this.tick, $this.options.GAME_LOOP_INTERVAL);
        $this.gameLoop.start();
    };

    return $this;
})(Engine || {});