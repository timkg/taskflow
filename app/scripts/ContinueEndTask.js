function ContinueEndTask (item) {
	this.init(item);
}

ContinueEndTask.prototype = new Task();

ContinueEndTask.prototype.run = function (deferred) {
	var btn = $('<button>Continue to Leave</button>').appendTo(document.body);
	btn.on('click', function () {
		btn.remove();
		deferred.resolve();
	})
};