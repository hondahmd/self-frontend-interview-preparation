const findMedianSortedArrays = (nums1, nums2) => {
  let ptr1 = 0;
  let ptr2 = 0;
  let count = 1;
  let mid = 0;
  const totalLength = nums1.length + nums2.length;

  getN = (arr, index) => {
    if (index === -1) {
      return arr[0];
    } else if (index === arr.length) {
      return Infinity;
    } else {
      return arr[index];
    }
  }

  while (count <= (totalLength + 1) / 2) {
    count++;
    if (getN(nums1, ptr1) < getN(nums2, ptr2)) {
      mid = nums1[ptr1];
      ptr1++;
    } else if (getN(nums2, ptr2) < getN(nums1, ptr1)) {
      mid = nums2[ptr2];
      ptr2++;
    } else {
      mid = nums1[ptr1];
      ptr1++;
      ptr2++;
      count++;
    }
  }

  if (totalLength % 2 !== 0) {
    return mid;
  } else {
    const mid2 =  Math.min(getN(nums1, ptr1), getN(nums2, ptr2));
    return (mid + mid2 === Infinity ? mid : mid2) / 2;
  }
}

const nums1 = [1];
const nums2 = [1];

console.log(findMedianSortedArrays(nums1, nums2));
