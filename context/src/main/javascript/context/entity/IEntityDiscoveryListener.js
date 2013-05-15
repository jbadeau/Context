(function(root, factory) {
	if (typeof exports === 'object') {
		module.exports = factory();
	}
	else if (typeof define === 'function' && define.amd) {
		define(factory);
	}
	else {
		root.IEntityDiscoveryListener = factory();
	}
}(this, function() {
	
	function IEntityDiscoveryListener = function() {
	};
	
	IEntityDiscoveryListener.prototype = {
	};
	
	return IEntityDiscoveryListener;
	
}));
