(function(root, factory) {
	if (typeof exports === 'object') {
		module.exports = factory();
	}
	else if (typeof define === 'function' && define.amd) {
		define(factory);
	}
	else {
		root.IEntityListener = factory();
	}
}(this, function() {
	
	function IEntityListener = function() {
	};
	
	IEntityListener.prototype = {
	};
	
	return IEntityListener;
	
}));
