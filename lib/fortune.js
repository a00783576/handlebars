var fortunesCookies = [
"Test 1",
"Test 2",
"Test 3",
"Test 4",
"Test 5"
];

exports.getFortune = function(){
	var idx = Math.floor(Math.random() * fortunesCookies.length);
	return fortunesCookies[idx];
};