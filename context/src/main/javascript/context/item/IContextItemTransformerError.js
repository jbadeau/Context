(function(root, factory) {
	if (typeof exports === 'object') {
		module.exports = factory();
	}
	else if (typeof define === 'function' && define.amd) {
		define(factory);
	}
	else {
		root.IContextItemTransformerError = factory();
	}
}(this, function() {
	
	function IContextItemTransformerError = function() {
	};
	
	IContextItemTransformerError.prototype = {
	};
	
	return IContextItemTransformerError;
	
}));
