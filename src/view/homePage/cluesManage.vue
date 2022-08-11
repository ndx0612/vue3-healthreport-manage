<template>
  <div>
    合同会签
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

let router = useRouter();
const { proxy } = getCurrentInstance();
const { query } = router.currentRoute.value;
onMounted(() => {
  getData();
});

const getData = () => {
  axios
    .get(
      "https://mockapi.eolink.com/RWG4jKY7a8d3c66906979840d6feb92494bd48bd8452ec4/sysDictType"
    )
    .then((res) => {
      if (res.errCode == 0) {
        console.log(res);
      }
    })
    .finally(() => {});
};
</script>

<style lang='scss' scoped>
</style>
