// Hey You !
// Sort these integers for me ...

// By name ...

// Do it now !

// Input
// Range is 0-999

// There may be duplicates

// The array may be empty

function sortByName(ary) {
    let num_words = [];
    let sort_num_words = [];
    let sort_nums = [];

    let strWords = (num) => {
        let a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
        let b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

        if ((num = num.toString()).length > 9)
            return 'overflow';
        n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n)
            return;
            
        var str = '';
        str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
        str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
        str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
        str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
        str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';

        if (str === '') {
            str = (n[1] == 0) ? 'zero' : '';
        }
        return str;
    }

    ary.map((num) => {
        num_words.push(strWords(num));
    });

    sort_num_words = num_words.slice();
    sort_num_words.sort();

    sort_num_words.map((w) => {
        sort_nums.push(ary[num_words.indexOf(w)]);
    });

    return sort_nums
}
