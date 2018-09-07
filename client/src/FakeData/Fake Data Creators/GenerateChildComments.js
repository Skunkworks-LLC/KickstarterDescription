var globalComments = allComments.slice(0, 350);
var childComments = allComments.slice(350, allComments.length);

var randomNumberGenerator = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var generateChildren = function(globalComments, childComments) {
	var index = 0;
	globalComments.forEach(function(comment){
		var childrenToGive = randomNumberGenerator(1, 5);
		for (var i = 0; i < childrenToGive; i++) {
			if (childComments[index]) {
				comment.childComments.push(childComments[i]);
			}
			index++;
		}
	});
	return globalComments;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var finalComments = generateChildren(globalComments, childComments);
finalComments = shuffle(finalComments);