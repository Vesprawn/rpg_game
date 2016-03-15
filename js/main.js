var Engine = (function($this) {
	$this.hero = null;
    $this.antihero = null;
	var map_canvas = document.getElementById('map'),
		map_ctx = map_canvas.getContext('2d'),
		player_canvas = document.getElementById('player'),
		player_ctx = player_canvas.getContext('2d'),
		container = document.getElementById('container'),
		map_center_x = 0,
		map_center_y = 0,
		player_x = 1,
		player_y = 1,
		COLS = 15,
		ROWS = 11,
		TILE_SIZE = 32,
		_keyupEvent = function(e) {
			switch(e.which) {
			case UP:
				$this.moveUp();
				break;
			case A:
				$this.moveUp();
				break;
			case DOWN:
				$this.moveDown();
				break;
			case S:
				$this.moveDown();
				break;
			case LEFT:
				$this.moveLeft();
				break;
			case A:
				$this.moveLeft();
				break;
			case RIGHT:
				$this.moveRight();
				break;
			case D:
				$this.moveRight();
				break;
			default:
				break;
			}
		},
		_setupEvents = function() {
			document.addEventListener('keyup', _keyupEvent);
		};

	map_canvas.setAttribute('width', COLS * TILE_SIZE + 'px');
	map_canvas.setAttribute('height',ROWS * TILE_SIZE + 'px');

	player_canvas.setAttribute('width', COLS * TILE_SIZE + 'px');
	player_canvas.setAttribute('height',ROWS * TILE_SIZE + 'px');

	container.style.width = COLS * TILE_SIZE + 'px';
	container.style.height = ROWS * TILE_SIZE + 'px';

	map_center_x = Math.floor(COLS / 2);
	map_center_y = Math.floor(ROWS / 2);

	$this.drawMap = function() {
		// map_ctx.clearRect(0, 0, COLS * TILE_SIZE, ROWS * TILE_SIZE)
		// var start_row = 0,
		// 	start_col = 0,
		// 	mapX = 0,
		// 	mapY = 0,
		// 	originMapX = 0,
		// 	originMapY = 0;

		
		// start_row = map_center_y - player_y;
		// start_col = map_center_x - player_x;

		// console.log(start_row + ' ' + start_col);


		// if(start_row < 0) {
		// 	originMapY =  Math.sqrt(start_row * start_row);
		// }
			
		// if(start_col < 0) {
		// 	originMapX =  Math.sqrt(start_col * start_col);
		// }

		// mapY = originMapY;

		// for(var row = start_row; row < ROWS; row++) {
		// 	mapX = originMapX;
		// 	if((map_center_y + row ) - start_row < ROWS + player_y && row >= 0) {
		// 		for(var i = start_col; i < COLS; i++) {
		// 			if((map_center_x + i  - start_col) < COLS + player_x && (mapY < MAP.length && mapX < MAP[row].length) && i >= 0) {
		// 				switch(MAP[mapY][mapX]) {
		// 				case GRASS:
		// 					map_ctx.fillStyle = 'green';
		// 					map_ctx.fillRect(i * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE);
		// 					break;
		// 				case WATER:
		// 					map_ctx.fillStyle = 'blue';
		// 					map_ctx.fillRect(i * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE);
		// 					break;
		// 				default:
		// 					console.log('tile not found');
		// 					break;
		// 				}

						

		// 				mapX += 1;
		// 			}
		// 		}
		// 	}

		// 	mapY += 1;
		// }
		// // for(var i = start_row; i < ROWS; i++) {
		// // 	mapX = originMapX;

		// // 	if(i >= 0) {
		// // 		for(var j = start_col; j < COLS; j++) {
		// // 			if(j >= 0) {
		// // 				switch(MAP[mapX][mapY]) {
		// // 				case GRASS:
		// // 					map_ctx.fillStyle = 'green';
		// // 					break;
		// // 				case WATER:
		// // 					map_ctx.fillStyle = 'blue';
		// // 					break;
		// // 				default:
		// // 					console.log('tile not found');
		// // 					break;
		// // 				}

		// // 				map_ctx.fillRect(i * TILE_SIZE, j * TILE_SIZE, TILE_SIZE, TILE_SIZE);

		// // 				mapY += 1;
		// // 			}
		// // 		}
		// // 		mapX += 1;
		// // 	}
			
		// // }

		// player_ctx.fillStyle = "red";
		// player_ctx.fillRect(map_center_x * TILE_SIZE, map_center_y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
	};

	$this.moveUp = function() {
		player_y -= 1;
		$this.drawMap();
	};

	$this.moveDown = function() {
		player_y += 1;
		$this.drawMap();
	};

	$this.moveLeft = function() {
		player_x -= 1;
		$this.drawMap();
	};

	$this.moveRight = function() {
		player_x += 1;
		$this.drawMap();
	};

	$this.initHero = function() {
		$this.hero = new $this.Entity({name: 'mike', location:{x: 0, y: 0}});
	};

	$this.init = function() {
		// $this.createMap();
		$this.initMap();
		// $this.initGameLoop();
		// $this.initHero();
	};

	
/*	$this.drawMap();*/

	_setupEvents();

	return $this;
})(Engine || {});