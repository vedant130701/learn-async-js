function sum1DArray(arr){
    return new Promise((resolve, reject) => {
        if(Array.isArray(arr)) {
            setTimeout(() => {
                let sum = 0;
                for (let i = 0; i < arr.length; ++i) {
                    sum+=arr[i];
                }
                resolve(sum);
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
    [7, 8, 9]
];



async function calculateSum() {
    const sumPromise0 = sum1DArray(array2D[0]);
    const sumPromise1 = sum1DArray(array2D[1]);
    const sumPromise2 = sum1DArray(array2D[2]);
    try {
        const rowSums = await Promise.all([sumPromise0, sumPromise1, sumPromise2]);
        let sum = 0;
        rowSums.forEach(rowSum => {
            sum+=rowSum;
        });
        console.log(`Sum = ${sum}`);
        return 'done';
    }
    catch(error) {
        console.log(`Error msg: ${error}`);
    }
}

calculateSum().then((status) => console.log(status))