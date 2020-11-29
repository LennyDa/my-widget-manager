export const numberInWords = (magicNumber) => {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
        'ninety'];

    const numString = magicNumber.toString();

    if (Number(magicNumber) < 0) return '';

    if (magicNumber === '0') return 'zero';

    // 1 - 20
    if (magicNumber < 20) {
        return ones[magicNumber];
    }

    if (numString.length === 2) {
        return tens[numString[0]] + ' ' + ones[numString[1]];
    }

    if (numString.length === 3) {
        if (numString[1] === '0' && numString[2] === '0')
            return ones[numString[0]] + ' hundred';
        else
            return ones[numString[0]] + ' hundred and ' + numberInWords(+(numString[1] + numString[2]));
    }

    if (numString.length === 4) {
        let thousand = +(numString[1] + numString[2] + numString[3]);
        if (thousand === 0) return ones[numString[0]] + ' thousand';
        if (thousand < 100) return ones[numString[0]] + ' thousand and ' + numberInWords(thousand);
        return ones[numString[0]] + ' thousand ' + numberInWords(thousand);
    }

    if (numString.length === 5) {
        let tenThousand = +(numString[2] + numString[3] + numString[4]);
        if (numString[1] === '0')
            return tens[numString[0]] + ' thousand ' + numberInWords(tenThousand);
        else
            return tens[numString[0]] + ' ' + ones[numString[1]] + ' thousand and ' + numberInWords(tenThousand);
    }

    if (numString.length === 6) {
        let hundredThousand = +(numString[2] + numString[3] + numString[4] + numString[5]);
        if (numString[1] === '0')
            return ones[numString[0]] + ' hundred thousand ' + numberInWords(hundredThousand);
        else
            return tens[numString[0]] + ' ' + ones[numString[1]] + ' thousand and ' + numberInWords(hundredThousand);
    }

    if (numString.length === 7) {
        let million = +(numString[2] + numString[3] + numString[4] + numString[5] + numString[6]);
        if (numString[1] > 0) return ones[numString[0]] + ' million ' + ones[numString[1]] + ' hundred thousand ' + numberInWords(million);
        if (numString[1] === '0')
            return ones[numString[0]] + ' million ' + numberInWords(million);
        else
            return tens[numString[0]] + ' ' + ones[numString[1]] + ' million and ' + numberInWords(million);
    }

    return numString;

}