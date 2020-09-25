var sortColors = function(nums) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[index] === 0) {
            nums.splice(index, 1);
            nums.unshift(0);
            index++;
        } else if (nums[index] === 2) {
            nums.splice(index, 1);
            nums.push(2);
        } else {
            index++;
        }
    }
};