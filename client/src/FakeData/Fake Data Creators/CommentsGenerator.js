var Comment = function(username, text, icon, postTime, childComments) {
	this.username = username;
	this.text = text;
	this.icon = icon;
	this.postTime = postTime;
	this.childComments = [];
}

var generateComments = function(comments) {
	var commentsList = [];
	var index = 0;
	comments.forEach(function(comment) {
		var username = comment.author;
		var text = comment.quote;
		var icon = iconInformation[index].picture.large;
		var postTime = allDates[index];
		var newComment = new Comment(username, text, icon, postTime);
		commentsList.push(newComment);
		index++;
	});
	return commentsList;
}


var commentsList = generateComments(quotes);
console.log(commentsList);