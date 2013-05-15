(function(root, factory) {
	if (typeof exports === 'object') {
		module.exports = factory();
	}
	else if (typeof define === 'function' && define.amd) {
		define(factory);
	}
	else {
		root.IEntity = factory();
	}
}(this, function() {
	
	function IEntity = function() {
	};
	
	IEntity.prototype = {
	};
	
	return IEntity;
	
}));
