(function(root, factory) {
	if (typeof exports === 'object') {
		module.exports = factory();
	}
	else if (typeof define === 'function' && define.amd) {
		define(factory);
	}
	else {
		root.Serializable = factory();
	}
}(this, function() {
	
	function Serializable = function() {
	};
	
	Serializable.prototype = {
	};
	
	return Serializable;
	
}));
