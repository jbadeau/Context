(function(root, factory) {
	if (typeof exports === 'object') {
		module.exports = factory();
	}
	else if (typeof define === 'function' && define.amd) {
		define(factory);
	}
	else {
		root.IContextItem = factory();
	}
}(this, function() {
	
	function IContextItem = function() {
	};
	
	IContextItem.prototype = {
	};
	
	return IContextItem;
	
}));
