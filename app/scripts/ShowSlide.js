function ShowSlide (items) {
	var self = this;

	this.init();
	items.forEach(function (item) {
		self.add(new ShowTask(item));
	});
}

ShowSlide.prototype = new TaskSequence();