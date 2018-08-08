// The units number (the last digit) should be used to determine the correct ordinal suffix. The following table should be used:

// 0  1  2  3  4  5  6  7  8  9
// th st nd rd th th th th th th
// If the "brief" notation is used, 2 and 3's suffix should be "d".

// If the tens number (the second from last digit) is a 1 (from 10 to 19), the suffix should be "th".

// Some examples would be: 1st 11th 111th 121st 20th 52nd 903d (brief), and so on...


function ordinal(number, brief) {
	var ord = {
		'1': "st",
		'2': "nd",
		'3': "rd",
	};

	var tens = number >= 10 && number.toString().slice(-2, -1) === '1';
	if (tens) {
		return 'th';
	};

	var last = number.toString().slice(-1);
	switch (last) {
		case '1':
			return ord[last];
		case '2':
		case '3':
			return brief === true ? 'd' : ord[las];
		default:
			return 'th';
	}
}

ordinal(20)