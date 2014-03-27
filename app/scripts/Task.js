function Task (item) {
	this.init(item);
}

Task.prototype.init = function (item) {
	this.item = item;
	this.deferred = Q.defer();
};

Task.prototype.run = function () {
	console.log('current item:', this.item);
	console.log('Use deferred.resolve() to resolve this item');
	window.deferred = this.deferred;
	return this.deferred.promise;
};