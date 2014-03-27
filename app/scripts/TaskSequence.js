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
		return this.end();
	}

	var taskWillComplete = this.tasks[this.currentIndex].run();
	this.currentIndex++;
	taskWillComplete.then(this.next.bind(this));
};

TaskSequence.prototype.end = function () {
	console.log('task sequence ended', this);
	this.deferred.resolve();
};
