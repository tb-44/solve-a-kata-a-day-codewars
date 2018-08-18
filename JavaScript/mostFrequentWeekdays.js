// What is your favourite day of the week? Check if it's the most frequent day of the week in the year.

// You are given a year as integer (e. g. 2001). You should return the most frequent day(s) of the week in that year. The result has to be a list of days sorted by the order of days in week (e. g. ['Monday', 'Tuesday']). Week starts with Monday.

// Input: Year as an int.

// Output: The list of most frequent days sorted by the order of days in week (from Monday to Sunday).

// Preconditions: Year is between 1 and 9999. Week starts with Monday. Calendar is Gregorian.

// Example:

// mostFrequentDays(2427) => ['Friday']
// mostFrequentDays(2185) => ['Saturday']
// mostFrequentDays(2860) => ['Thursday', 'Friday']

function mostFrequentDays(year) {
    let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthsDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (year % 400 === 0 || (year % 4 === 0 && year % 100 > 0))
        monthsDays[1] += 1;

    let total = [];
    for (let i = 0; i < 7; i++)
        total.push(0);

    for (let month = 0; month < 12; month++) {
        for (let d = 1; d <= monthsDays[month]; d++) {
            let days = new Date(year, month, d);
            total[days.getDay()] += 1;
        }
    }

    let most = Math.max.apply(null, total);
    let result = [];
    for (let i = 1; i < 7; i++) {
        if (total[i] == most)
            result.push(weekDays[i]);
    }
    if (total[0] == most)
        result.push(weekDays[0]);
    return result;
}


//others
function mostFrequentDays(year) {
    var day = (new Date(year, 0, 1)).getDay() - 1,
        MFDays = [day, year % 4 || (year % 400 && year % 100 == 0) ? day : day + 1].map(x => x < 0 ? 6 : x);
    return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].filter((d, i) => MFDays.indexOf(i) >= 0);
}