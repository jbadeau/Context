(function(root, factory) {
	if (typeof exports === 'object') {
		module.exports = factory();
	}
	else if (typeof define === 'function' && define.amd) {
		define(factory);
	}
	else {
		root.IContextService = factory();
	}
}(this, function() {
	
	function IContextService = function() {
	};
	
	IContextService.prototype = {
	};
	
	return IContextService;
	
}));
