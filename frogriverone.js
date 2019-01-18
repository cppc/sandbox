

function solution(X, A) {
    let path = new Array(X).fill(false);
    var missing = X;

    for (leaf = 0; leaf < A.length; ++leaf) {
        if (path[A[leaf]-1] == false) {
            path[A[leaf]-1] = true;
            missing -= 1;
            if (missing == 0) {
                return leaf;
            }
        }
    }

    return -1;
}

console.log(solution(5, [1,3,1,4,2,3,5,4]));