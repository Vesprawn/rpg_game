var MAP = [
		[1, 2, 0, 0, 0, 0, 0, 0, 0, 2],
		[2, 1, 1, 1, 1, 1, 1, 0, 1, 2],
		[1, 1, 1, 1, 1, 1, 1, 0, 1, 2],
		[1, 1, 1, 1, 1, 1, 1, 0, 1, 2],
		[1, 1, 1, 1, 1, 1, 1, 0, 1, 2],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
		[2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
		[1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 2]
	];

var GRASS = 1,
	WATER = 2,
	UP = 38,
	DOWN = 40,
	LEFT = 37,
	RIGHT = 39,
	W = 87,
	A = 65,
	S = 83,
	D = 68;


var Engine = (function($this) {
	var current_map = [],
		building_map = false,
		screen_rows = 0,
		screen_cols = 0;

	$this.createMap = function() {
		building_map = true;
		$this.wipeMap();
		building_map = false;
	};

	$this.getCurrentMap = function() {
		if(building_map) {
			return [];
		}

		return current_map;
	};

	$this.wipeMap = function() {
		current_map = [];

		for(var row = 0; row < $this.MAX_MAP_SIZE_Y; row++) {
			var new_row = [];
			for(var col = 0; col < $this.MAX_MAP_SIZE_X; col++) {
				new_row.push(0);
			}
			current_map.push(new_row);
		}
	};

	var init = function() {
		setScreenSize();
	},
	setScreenSize = function() {
		screen_cols = MAP_SCREEN_COLS;
		screen_rows = MAP_SCREEN_ROWS;
	};

	init();

	return $this;
})(Engine || {});