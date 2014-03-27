function ShowSlide (items) {
	var self = this;

	this.init();
	self.add(new ContinueTitleTask());
	items.forEach(function (item) {
		self.add(new ShowTask(item));
	});
	self.add(new ContinueEndTask());
}

ShowSlide.prototype = new TaskSequence();

ShowSlide.prototype.end = function (deferred) {
	$(document.body).empty();
	deferred.resolve();
};