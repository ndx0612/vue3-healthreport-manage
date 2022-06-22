<template>
  <div>
    <span v-color>随机颜色</span>
    <el-button type="primary" @click="exit">按钮</el-button>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";

const exit = () => {
  console.log("object");
};
</script>

<style>
</style>