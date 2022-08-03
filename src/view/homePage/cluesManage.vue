<template>
  <div class="w-full h-full p-[20px]">
    <GlobalTable resUrl="https://mockapi.eolink.com/RWG4jKY7a8d3c66906979840d6feb92494bd48bd8452ec4/sysDictType/page" :parameter="form"  ref="dictFormRef">
      <template #header>
        <el-button @click="search">搜索</el-button>
        <select-dept v-model="form.dictType" class="ml-[8px]"></select-dept>
      </template>
      <template #table>
        <el-table-column prop="dictId" label="字典编号" width="100" align="center" />
        <el-table-column prop="dictName" label="字典名称" min-width="100" />
        <el-table-column prop="dictType" label="字典类型" min-width="100" />
      </template>
    </GlobalTable>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { getOS } from "outils";
let router = useRouter();
const { proxy } = getCurrentInstance();
const { query } = router.currentRoute.value;

// 绑定字典表单ref
const dictFormRef = ref();

const search = () => {
  dictFormRef.value.getTable();
};

const printValue = (value) => {
  console.log(value);
};

// 查询表单
const form = reactive({
  dictName: "", // 字典名称
  dictType: 2, // 字典类型
  status: "", // 状态
  date: "", // 日期
});
</script>

<style lang='scss' scoped>
</style>
