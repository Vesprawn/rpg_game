Kraken.entiy = function (spec) {
	spec.location = (typeof spec.location === 'object') ? spec.location : { 
		x: 0, 
		y: 0
	};

	spec.name = spec.name || '';

	var that = {},
		init = function(spec) {
			if(typeof spec.location === 'object') {
				if(typeof spec.location.x !== 'number') {
					spec.location.x = 0;
				}

				if(typeof spec.location.y !== 'number') {
					spec.location.y = 0;
				}
			}
		};

	that.location = function () {
		return spec.location;
	};

	that.name = function () {
		return spec.name;
	};

	init(spec);

	return that;
};

Kraken.hero = function (spec) {
	var that = Kraken.entiy(spec);

	return that;
};

var Engine = (function($this){
	$this.Entity = function(config) {
		var default_opts = {
			location: {
				x: 0,
				y: 0
			},
			name: 'entiy'
		}, opts = {

		},
		_init = function(config) {
			opts = $.extend(true, {}, default_opts, config);
		};

		this.location = function(location) {
			if(location) {
				opts.location = $.extend({}, opts.location, location);
				return this;
			}
		
			return opts.location;
		};

		_init(config);
	};

	return $this;
})(Engine ||{});