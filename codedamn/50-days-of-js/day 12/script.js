var sayNumberInEnglish = function (num) {
    var stringifiedNum = isNaN(num) ? '' : num.toString();
    if (stringifiedNum.length === 0)
        throw new Error('Incorrect number format!');
    if (stringifiedNum.length > 12)
        throw new Error("Out of boundary, Can't handle numbers over 12 digits!");
    var single_digits = [
        '',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
    ];
    var two_digits = [
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ];
    var tens_multiple = [
        '',
        '',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ];
    var tens_power = ['', 'thousand', 'million', 'billion'];
    var digitsMap = {
        '1': single_digits,
        '2': two_digits,
        '3': tens_multiple,
        '4': tens_power
    };
    var stringifiedNumDigits = (function () {
        var tempArr = [];
        var i;
        var tempString = '';
        var unshiftToTempStringAndClear = function (tempStr) {
            tempArr.unshift(tempStr);
            tempString = '';
        };
        for (i = stringifiedNum.length; i > 0; i--) {
            tempString = stringifiedNum[i - 1] + tempString;
            if ((stringifiedNum.length - i + 1) % 3 === 0)
                unshiftToTempStringAndClear(tempString);
        }
        if (tempString.length !== 0)
            unshiftToTempStringAndClear(tempString);
        return tempArr;
    })();
    return stringifiedNumDigits
        .map(function (item, index) {
        var str = '';
        if (item.length === 3 && item[0] !== '0') {
            str += single_digits[parseInt(item[0])] + " hundred";
        }
        var itemTwoDigits = item.length === 3
            ? parseInt(item.substr(1, item.length))
            : parseInt(item);
        if (itemTwoDigits > 9 && itemTwoDigits < 20) {
            // two_digits
            var temp = two_digits[itemTwoDigits - 10];
            str += str.length === 0 ? temp : " " + temp;
        }
        else if (itemTwoDigits >= 20) {
            var itemTwoDigitsArr = itemTwoDigits.toString().split('');
            var temp = "" + tens_multiple[parseInt(itemTwoDigitsArr[0])] + (single_digits[parseInt(itemTwoDigitsArr[1])]
                ? "-" + single_digits[parseInt(itemTwoDigitsArr[1])]
                : '');
            str += str.length === 0 ? temp : " " + temp;
        }
        else {
            str += single_digits[parseInt(item)];
        }
        if (stringifiedNumDigits.length - index - 1 > 0)
            str += " " + tens_power[stringifiedNumDigits.length - index - 1];
        return str;
    })
        .join(' ');
};
console.log("16 in english is: " + sayNumberInEnglish(16), '\n\n');
console.log("4635 in english is: " + sayNumberInEnglish(4635), '\n\n');
console.log("1323 in english is: " + sayNumberInEnglish(1323), '\n\n');
console.log("1234567890 in english is: " + sayNumberInEnglish(1234567890), '\n\n');
