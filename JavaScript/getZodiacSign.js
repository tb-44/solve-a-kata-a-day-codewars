// Your task is to get Zodiac Sign using input day and month.

// For exapmle:

// getZodiacSign(1,5) => 'Taurus'
// getZodiacSign(10,10) => 'Libra'
// Correct answers are (preloaded):

// const signs = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius']
// P.S. Each argument is correct integer number.

// The dates details here https://www.izodiacsigns.com/ (the solution is based on 2017 year )

//solution
const getZodiacSign = (day, month) => {
    if (month === 3 && day > 20 || month === 4 && day < 20) {
        return 'Aries'
    } else if (month === 4 && day >= 20 || month === 5 && day <= 20) {
        return 'Taurus'
    } else if (month === 5 && day > 20 || month === 6 && day <= 20) {
        return 'Gemini'
    } else if (month === 6 && day >= 21 || month === 7 && day <= 22) {
        return 'Cancer'
    } else if (month === 7 && day > 22 || month === 8 && day <= 22) {
        return 'Leo'
    } else if (month === 8 && day > 22 || month === 9 && day <= 22) {
        return 'Virgo'
    } else if (month === 9 && day > 22 || month === 10 && day <= 20) {
        return 'Libra'
    } else if (month === 10 && day > 22 || month === 11 && day <= 21) {
        return 'Scorpio'
    } else if (month === 11 && day > 20 || month === 12 && day <= 20) {
        return 'Sagittarius'
    } else if (month === 12 && day > 21 || month === 1 && day <= 19) {
        return 'Capricorn'
    } else if (month === 1 && day >= 20 || month === 2 && day <= 18) {
        return 'Aquarius'
    } else if (month === 2 && day >= 19 || month === 3 && day <= 20) {
        return 'Pisces'
    }
}

//others
const getZodiacSign = (day, month) => {
    switch (month) {
        case 1:
            return day > 19 ? 'Aquarius' : 'Capricorn'
            break;
        case 2:
            return day > 18 ? 'Pisces' : 'Aquarius'
            break;
        case 3:
            return day > 20 ? 'Aries' : 'Pisces'
            break;
        case 4:
            return day > 19 ? 'Taurus' : 'Aries'
            break;
        case 5:
            return day > 20 ? 'Gemini' : 'Taurus'
            break;
        case 6:
            return day > 20 ? 'Cancer' : 'Gemini'
            break;
        case 7:
            return day > 22 ? 'Leo' : 'Cancer'
            break;
        case 8:
            return day > 22 ? 'Virgo' : 'Leo'
            break;
        case 9:
            return day > 22 ? 'Libra' : 'Virgo'
            break;
        case 10:
            return day > 22 ? 'Scorpio' : 'Libra'
            break;
        case 11:
            return day > 21 ? 'Sagittarius' : 'Scorpio'
            break;
        case 12:
            return day > 21 ? 'Capricorn' : 'Sagittarius'
            break;
    }
}

const getZodiacSign = (day, month) => {
    return signs[day >= [20, 20, 19, 20, 21, 21, 23, 23, 23, 23, 22, 22][month - 1] ? month : month - 1] || "Capricorn"
}

