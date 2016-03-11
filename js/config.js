var Engine = (function($this) {
    $this.options = {
        GAME_LOOP_INTERVAL: 1000,
        MAX_SCREEN_COLS: 15,
        MAX_SCREEN_ROWS: 11,
        MAX_MAP_SIZE_X: 100,
        MAX_MAP_SIZE_Y: 50,
        TILE_SIZE: 32
    };

    return $this;
})(Engine || {});