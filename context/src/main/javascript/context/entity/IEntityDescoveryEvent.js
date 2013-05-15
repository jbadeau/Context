(function(root, factory) {
	if (typeof exports === 'object') {
		module.exports = factory();
	}
	else if (typeof define === 'function' && define.amd) {
		define(factory);
	}
	else {
		root.IEntityDiscoveryEvent = factory();
	}
}(this, function() {
	
	function IEntityDiscoveryEvent = function() {
	};
	
	IEntityDiscoveryEvent.prototype = {
	};
	
	return IEntityDiscoveryEvent;
	
}));
