// Peter can see a clock in the mirror from the place he sits in the office. When he saw the clock shows 12:22

// alt text

// He knows that the time is 11:38

// alt text

// in the same manner:

// 05:25 --> 06:35

// 01:50 --> 10:10

// 11:58 --> 12:02

// 12:01 --> 11:59

// Please complete the function WhatIsTheTime(timeInMirror), where timeInMirror is the mirrored time (what Peter sees) as string.

// Return the real time as a string.

// Consider hours to be between 1 <= hour < 13.

// So there is no 00:20, instead it is 12:20.

// There is no 13:20, instead it is 01:20.

function WhatIsTheTime(timeInMirror) {
    let min = (60 - +(timeInMirror.split(':')[1])) % 60;
    let hr = +(timeInMirror.split(':')[0]);
    hr = min == 0 ? 12 - hr % 12 : 12 - (hr + 1) % 12;
    return `${('0' + hr).slice(-2)}:${('0' + min).slice(-2)}`;
}