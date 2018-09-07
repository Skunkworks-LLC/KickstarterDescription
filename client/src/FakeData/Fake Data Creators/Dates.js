var randomDate = function() {
	var start = new Date(1199174400000);
	var end = new Date(1536217200000)
	return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

var generateDates = function(amount) {
	var dates = [];
	for (var i = 0; i < amount; i++) {
		var date = randomDate();
		dates.push(date);
	}
	return dates;
}

var allDates = generateDates(500);