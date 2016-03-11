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
	var current_map = null;

	$this.Map = function(config) {
		var default_opts = {
			cols: 0,
			rows: 0,
			data: [],
			map_layer: null,
			map_ctx: null
		},
		_this = this,
		opts = null,
		map_center_x = 0;
		map_center_y = 0;
		_init = function(config) {
			opts = $.extend(true, {}, default_opts, config);

			opts.map_ctx = opts.map_layer.getContext('2d');

			map_center_x = Math.floor($this.options.MAX_SCREEN_COLS / 2);
			map_center_y = Math.floor($this.options.MAX_SCREEN_ROWS / 2);

			if(opts.data.length === 0) {
				_this.createMap();
			}
		};

		this.createMap = function() {
			var newRow = [];
			for(var i = 0; i < opts.rows; i++) {
				newRow = [];

				for(var j = 0; j < opts.cols; j++) {
					newRow.push(1);
				}

				opts.data.push(newRow);
			}
		};

		this.render = function() {
			var start_row = 0, start_col = 0, origin_map_x = 0, origin_map_y = 0, 
				map_x = 0, map_y = 0;

			opts.map_ctx.clearRect(0, 0, opts.map_layer.width, opts.map_layer.height);


			start_row = map_center_y - $this.hero.location().y;
			start_col = map_center_x - $this.hero.location().x;

			if(start_row < 0) {
				origin_map_y = Math.sqrt(start_row * start_row);
			}

			if(start_col < 0) {
				origin_map_x = Math.sqrt(start_col * start_col);
			}

			map_y = origin_map_y;

			for(var row = start_row; row < $this.options.MAX_SCREEN_ROWS; row++) {
				map_x = origin_map_x;

				if((map_center_y + row) - start_row < $this.options.MAX_SCREEN_ROWS + $this.hero.location().y && row >= 0) {
					for(var i = start_col; i < $this.options.MAX_SCREEN_COLS; i++) {
						if((map_center_x + i - start_col) < $this.options.MAX_SCREEN_COLS + $this.hero.location().x && (map_y < opts.cols && map_x < opts.rows) && i >=0) {
							switch(opts.data[map_y][map_x]) {
	                        case GRASS:
	                            opts.map_ctx.fillStyle = 'green';
	                            opts.map_ctx.fillRect(i * $this.options.TILE_SIZE, row * $this.options.TILE_SIZE, $this.options.TILE_SIZE, $this.options.TILE_SIZE);
	                            break;
	                        case WATER:
	                            opts.map_ctx.fillStyle = 'blue';
	                            opts.map_ctx.fillRect(i * $this.options.TILE_SIZE, row * $this.options.TILE_SIZE, $this.options.TILE_SIZE, $this.options.TILE_SIZE);
	                            break;
	                        default:
	                            console.log('tile not found');
	                            break;
	                        }

							map_x += 1;
						}
					}
				}

				map_y += 1;
			}



	/*		opts.map_ctx.fillStyle = "green";
			opts.map_ctx.fillRect(10, 10, 100, 100);*/
		};

		this.wipe = function() {

		};

		_init(config);
	};

	$this.initMap = function() {
		var map_layer = document.getElementById('map');
		current_map = new $this.Map({cols: 40, rows: 20, map_layer: map_layer});
	};

	$this.currentMap = function() {
		return current_map;
	};

	// var building_map = false,
	// 	screen_rows = 0,
	// 	screen_cols = 0;

	// $this.createMap = function() {
	// 	building_map = true;
	// 	$this.wipeMap();
	// 	building_map = false;
	// };

	// $this.getCurrentMap = function() {
	// 	if(building_map) {
	// 		return [];
	// 	}

	// 	return current_map;
	// };

	// $this.wipeMap = function() {
	// 	current_map = [];

	// 	for(var row = 0; row < $this.MAX_MAP_SIZE_Y; row++) {
	// 		var new_row = [];
	// 		for(var col = 0; col < $this.MAX_MAP_SIZE_X; col++) {
	// 			new_row.push(0);
	// 		}
	// 		current_map.push(new_row);
	// 	}
	// };



	// var init = function() {
	// 	setScreenSize();
	// },
	// setScreenSize = function() {
	// 	screen_cols = MAP_SCREEN_COLS;
	// 	screen_rows = MAP_SCREEN_ROWS;
	// };

	// init();

	

	return $this;
})(Engine || {});