function ContinueTitleTask () {
	this.init();
}

ContinueTitleTask.prototype = new Task();

ContinueTitleTask.prototype.run = function (deferred) {
	var btn = $('<button>Continue to Leave</button>').appendTo(document.body);
	btn.on('click', function () {
		btn.remove();
		deferred.resolve();
	})
};