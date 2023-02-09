---
icon: javascript
date: 2023-02-08
category:
  - 算法
  - JS
tag:
  - 数组方法
  - 学习笔记
---

# 二分法

```js
function bisection(nums, key) {
  // 开始下标
  let start = 0;
  // 结束下标
  let end = nums.length - 1;
  // 中间下标
  let mid = Math.floor(end / 2);
  while (start <= end) {
    if (nums[mid] > key) {
      end = mid - 1;
      mid = Math.floor((start + end) / 2);
    } else if (nums[mid] < key) {
      start = mid + 1;
      mid = Math.floor((start + end) / 2);
    } else {
      return mid;
    }
  }
  return -1;
}
let a = [0, 1, 2, 3, 4, 5, 6, 434, 435];
bisection(a,5)
```

时间复杂度分析：
第 1 次折半： 还剩 n/2 个元素

第 2 次折半： 还剩 n/4 个元素

第 3 次折半： 还剩 n/8 个元素

…
第 k 次折半： 还剩 $n/2^k$ 个元素

最坏的情况下，最后还剩一个元素，令 $n/2^k=1$，则得$k=logN$

那么这个 T(n)，小于等于且接近于函数 $fn=logN$，时间复杂度为 $O()=O(logN)$
