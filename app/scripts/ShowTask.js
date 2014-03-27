function ShowTask (item) {
	this.init(item);
}

ShowTask.prototype = new Task();

ShowTask.prototype.run = function (deferred) {
	var btn = $('<p></p>').text(this.item).appendTo(document.body);
	setTimeout(deferred.resolve, 500);
};