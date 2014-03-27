/**
 * Series of tasks which are run sequentially.
 * Can nest to contain other TaskSequences.
 */
function TaskSequence () {
	this.init();
}

TaskSequence.prototype.init = function () {
	this.tasks = [];
	this.currentIndex = 0;
	this.deferred = Q.defer();
};

TaskSequence.prototype.add = function (task) {
	this.tasks.push(task);
};

TaskSequence.prototype.run = function () {
	console.log('task sequence started', this);
	this.next();
	return this.deferred.promise;
};

TaskSequence.prototype.next = function () {
	if (this.currentIndex == this.tasks.length) {
		return this._end();
	}

	var taskWillComplete = this.tasks[this.currentIndex]._run();
	this.currentIndex++;
	taskWillComplete.then(this.next.bind(this));
};

TaskSequence.prototype._end = function () {
	this.end(this.deferred);
};

TaskSequence.prototype.end = function (deferred) {
	console.log('task sequence ended', this);
	deferred.resolve();
};