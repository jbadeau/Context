(function(root, factory) {
	if (typeof exports === 'object') {
		module.exports = factory();
	}
	else if (typeof define === 'function' && define.amd) {
		define(factory);
	}
	else {
		root.IEntityNotAvailableError = factory();
	}
}(this, function() {
	
	function IEntityNotAvailableError = function() {
	};
	
	IEntityNotAvailableError.prototype = {
	};
	
	return IEntityNotAvailableError;
	
}));
