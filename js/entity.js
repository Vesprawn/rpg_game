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