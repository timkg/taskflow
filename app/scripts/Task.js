function Task (item) {
	this.init(item);
}

Task.prototype.init = function (item) {
	this.item = item;
	this.deferred = Q.defer();
};

Task.prototype._run = function () {
	this.run(this.deferred);
	return this.deferred.promise;
};

Task.prototype.run = function (deferred) {
	console.log('current item:', this.item);
	console.log('Use deferred.resolve() to resolve this item');
	window.deferred = deferred;
};