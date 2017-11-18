//How many are smaller than me?
//Write a function that given an array arr, you have to return the amount
//of numbers that are smaller than arr[i] to the right

//solution
function smaller(nums) {
    let result = [];
    let i = 0;

    while (i < nums.length) {
      let j = i + 1;
      let count = 0;

        while (j < nums.length) {
            if (nums[i] > nums[j]) {
                count++;
            }
            j++;
        }
        result.push(count);
        i++;
    }
    return result;
}


//others solutions
function smaller(nums) {
    return nums.map((n, i) => {
        return nums.slice(i).filter(v => v < n).length
    });
}

const smaller = nums => {
    return nums.map((num, i) => {
        return nums.slice(i).reduce((c, n) => c + (n < num), 0);
    });
};

function smaller(nums) {
    return nums.map((e, i) => nums.slice(i).filter(x => e > x).length);
}