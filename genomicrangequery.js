const impacts = { A: 1, C: 2, G: 3, T: 4 };

function initList(S, last, c, i) {
    if (S[i] == c) {
        last[i] = i;
    } else if (i > 0) {
        last[i] = last[i-1];
    }
}

function better(S, P, Q) {
    const lastA = new Array(S.length).fill(-1);
    const lastC = new Array(S.length).fill(-1);
    const lastG = new Array(S.length).fill(-1);
    const lastT = new Array(S.length).fill(-1);
    const sol = new Array(P.length);

    for (i = 0; i < S.length; ++i) {
        initList(S, lastA, 'A', i);
        initList(S, lastC, 'C', i);
        initList(S, lastG, 'G', i);
        initList(S, lastT, 'T', i);
    }

    for (j = 0; j < P.length; ++j) {
        if (lastA[Q[j]] >= P[j]) {
            sol[j] = 1;
        } else if (lastC[Q[j]] >= P[j]) {
            sol[j] = 2;
        } else if (lastG[Q[j]] >= P[j]) {
            sol[j] = 3;
        } else if (lastT[Q[j]] >= P[j]) {
            sol[j] = 4;
        } else {
            sol[j] = -1;
        }
    }

    return sol;
}

function solution(S, P, Q) {
//    const imps = S.split('').map(nuc => impacts[nuc]);
    const mins = [];

    for (i = 0; i < P.length; ++i) {
        const sub = S.slice(P[i], Q[i]+1);
        const chars = sub.split('');
        const imps = chars.map(nuc => impacts[nuc]);

        mins.push(Math.min(...imps));
    }

    return mins;
}

console.log(solution("CAGCCTA", [2,5,0], [4,5,6]));
console.log(better("CAGCCTA", [2,5,0], [4,5,6]));