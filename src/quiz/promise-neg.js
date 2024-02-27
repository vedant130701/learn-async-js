function processNeg1D(arr){
    return new Promise((resolve, reject) => {
        if(Array.isArray(arr)) {
            setTimeout(() => {
                for (let i = 0; i < arr.length; ++i) {
                    if(arr[i] < 0) {
                        resolve(arr[i]);
                    }
                }
            }, 0)
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
    })
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

const neg0 = processNeg1D(array2D[0]);
const neg1 = processNeg1D(array2D[1]);
const neg2 = processNeg1D(array2D[2]);

Promise.any([neg0, neg1, neg2])
.then((responses) => {
    console.log(`${responses}`);
})
.catch((error) => console.log(`${error}`));