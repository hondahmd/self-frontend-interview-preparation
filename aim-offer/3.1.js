const findDuplicate = (nums) => {
    if (nums.length === 0 || nums.length === 1) {
        return false;
    }

    for (let i = 0; i < nums.length; i++) {
        while (nums[i] !== i) {
            if (nums[nums[i]] === nums[i]) {
                return true;
            }
            const temp = nums[i];
            nums[i] = nums[temp];
            nums[temp] = temp;
        }
    }
    return false;
}

const nums = [2,3,1,0,2,5,3];
console.log(findDuplicate(nums));
