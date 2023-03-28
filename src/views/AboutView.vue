<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<!-- <script>
// import { debounce } from "@/utils/function";
// console.log("debounce: ", debounce);
// const fn = (sub) => {
//   console.log("sub: ", sub);
// };
// debounce(fn, 1000);
</script> -->
<script lang="ts" setup>
import { debounce } from "@/utils/function";
let d = debounce(() => {
  console.log("123");
}, 1000);
console.log("d: ", d);
console.log("debounce: ", debounce);
</script>
<!-- <script>
// 找出给定字符串出现次数最多的字符
function most(str) {
  if (Object.prototype.toString.call(str) !== "[object string]") return; 

  if (str.length === 0) return;

  let strArr = str.split("");
  let strObj = {}; // 用于存放各个字符的合集

  for (let i = 0; i < strArr.length; i++) {
    if (strObj[strArr[i]]) {
      strObj[strArr[i]] += 1;
    } else {
      strObj[strArr[i]] = 1;
    }
  }

  let max = 0; //出现的最大次数
  let ch = ""; //出现最多的字符合集

  for (let i in strObj) {
    //i为索引 strObj[i]为属性值
    if (strObj[i] > max) {
      max = strObj[i];
      ch = i;
    } else if (strObj[i] === max) {
      // 当出现多个字符时添加至ch中
      ch += `、${i}`;
    }
  }

  console.log(`字符串"${str}"中出现最多的字符是${ch},出现次数为${max}`);

  return { str, ch, max };
}
</script> -->
