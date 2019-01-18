
const alpha = 'abcdefghijklmnopqrstuvwxyz';
const digits = '0123456789';

function valid(p) {
    const lc = p.toLowerCase();
    let nDigits = 0;
    let nAlpha = 0;

    for (c of lc) {
        if (alpha.includes(c)) ++nAlpha;
        else if (digits.includes(c)) ++nDigits;
        else return false;
    }
    return (nAlpha & 1) == 0 && (nDigits & 1) != 0;
}

function solution(S) {
    const words = S.split(' ');
    words.sort((a, b) => b.length - a.length);

    console.log(words);

    for (let i = 0; i < words.length; ++i) {
        if (valid(words[i])) {
            return words[i].length;
        }
    }

    return -1;
}

console.log(solution('test 5 a0A pass007 ?xy1'));