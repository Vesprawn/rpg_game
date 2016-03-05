var Engine = (function($this) {
    $this.gameLoop = null;

    var init = function() {
        $this.gameLoop = setInterval($this.tick, $this.options.GAME_LOOP_INTERVAL);
    };

    $this.tick = function() {
        $this.renderScreen();
        console.log(new Date() + 'game loop running');
    };

    init();

    return $this;
})(Engine || {});