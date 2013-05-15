(function(root, factory) {
	if (typeof exports === 'object') {
		module.exports = factory();
	}
	else if (typeof define === 'function' && define.amd) {
		define(factory);
	}
	else {
		root.IContextItemTransformer = factory();
	}
}(this, function() {
	
	function IContextItemTransformer = function() {
	};
	
	IContextItemTransformer.prototype = {
	};
	
	return IContextItemTransformer;
	
}));
