(function(root, factory) {
	if (typeof exports === 'object') {
		module.exports = factory();
	}
	else if (typeof define === 'function' && define.amd) {
		define(factory);
	}
	else {
		root.IContextRelationship = factory();
	}
}(this, function() {
	
	function IContextRelationship = function() {
	};
	
	IContextRelationship.prototype = {
	};
	
	return IContextRelationship;
	
}));
