(function(root, factory) {
	if (typeof exports === 'object') {
		module.exports = factory();
	}
	else if (typeof define === 'function' && define.amd) {
		define(factory);
	}
	else {
		root.IEntityEnvironment = factory();
	}
}(this, function() {
	
	function IEntityEnvironment = function() {
	};
	
	IEntityEnvironment.prototype = {
	};
	
	return IEntityEnvironment;
	
}));
