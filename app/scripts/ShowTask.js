function ShowTask (item) {
	this.init(item);
}

ShowTask.prototype = new Task();

ShowTask.prototype.run = function () {
	setTimeout(this.deferred.resolve, 100);
	return this.deferred.promise;
};