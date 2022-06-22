<template>
  <div>
    <span v-color>随机颜色</span>
    <el-button type="primary" v-waves>按钮</el-button>

  </div>
</template>

<script setup>
import { reactive, computed } from "vue";

const debounceClick = () => {
  console.log("object");
};
</script>

<style>
</style>