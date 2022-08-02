<template>
  <div class="w-full h-full p-[20px]">
    <GlobalTable></GlobalTable>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
let router = useRouter();
const { proxy } = getCurrentInstance();
const { query } = router.currentRoute.value;
onMounted(() => {});
</script>

<style lang='scss' scoped>
</style>
