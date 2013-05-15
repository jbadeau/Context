(function(root, factory) {
	if (typeof exports === 'object') {
		module.exports = factory();
	}
	else if (typeof define === 'function' && define.amd) {
		define(factory);
	}
	else {
		root.IContext = factory();
	}
}(this, function() {
	
	function IContext = function() {
	};
	
	IContext.prototype = {
	};
	
	return IContext;
	
}));
