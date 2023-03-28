<template>
  <div class="home">
    <div class="header">镂空测试</div>
    <!-- <div class="content">
      <div class="circle">cee</div>
      <div>cee</div>
      <div>cee</div>
      <div>cee</div>
      <div>cee</div>
      <div>cee</div>
      <div>cee</div>
      <div>cee</div>
      <div>cee</div>
      <div>cee</div>
      <div>cee</div>
    </div> -->
  </div>
</template>

<!-- <script lang="ts" setup>
import { onMounted } from "vue";
import { debounce } from "@/utils/function";
onMounted(() => {
  let a = 10n;
  let b = 20n;
  let c = a + b;
  const fu = (a: bigint) => {
    a;
  };
  let ra = Math.floor(Math.random() * 0xffffff).toString(16);
  console.log("ra: ", ra);
  const randomHexColor = () => `#${ra.padEnd(8, "0")}`;
  console.log(randomHexColor());
  // #a2ce5b
  const copyText = async (text: string) =>
    await navigator.clipboard.writeText(text);
  console.log("navigator: ", navigator);
  copyText("单行代码 前端世界");
  console.log("debounce: ", debounce(fu, 1));
  console.log(c);
});
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 200px;
  background-image: radial-gradient(transparent 1px, #fff 1px);
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
  // background-color: #ccc;
  /* background-repeat: no-repeat; */
}
.content {
  padding: 200px 0 0 0;
  height: 200vh;
}
.circle {
  width: 100%;
  height: 200px;
  border-radius: 25px;
  background-color: red;
}
</style> -->
