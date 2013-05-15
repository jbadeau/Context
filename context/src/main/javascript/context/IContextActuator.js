(function(root, factory) {
	if (typeof exports === 'object') {
		module.exports = factory();
	}
	else if (typeof define === 'function' && define.amd) {
		define(factory);
	}
	else {
		root.IContextActuator = factory();
	}
}(this, function() {
	
	function IContextActuator = function() {
	};
	
	IContextActuator.prototype = {
	};
	
	return IContextActuator;
	
}));
