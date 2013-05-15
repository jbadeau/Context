(function(root, factory) {
	if (typeof exports === 'object') {
		module.exports = factory();
	}
	else if (typeof define === 'function' && define.amd) {
		define(factory);
	}
	else {
		root.IEntityConfiguration = factory();
	}
}(this, function() {
	
	function IEntityConfiguration = function() {
	};
	
	IEntityConfiguration.prototype = {
	};
	
	return IEntityConfiguration;
	
}));
