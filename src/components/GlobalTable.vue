<template>
  <div class="w-full h-full border-[1px] bg-[#FFF] p-[20px]">
    <!-- header -->
    <div class="w-full h-[40px]">
      <el-button>新增</el-button>
    </div>
    <!-- table -->
    <div class="w-full" style="height: calc(100% - 40px - 56px);">
      <el-table :data="tableData" border style="width: 100%" height="100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
    </div>
    <!-- bottom -->
    <div class="w-full h-[56px] pt-[20px] flex flex-row-reverse">
      <el-pagination v-model:currentPage="page.currentPage" v-model:page-size="page.pageSize" :page-sizes="[10, 20, 30, 40, 50]" layout="total, sizes, prev, pager, next, jumper" :total="page.total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, getCurrentInstance, watch } from "vue";
defineOptions({ name: "GlobalTable" });

const page = reactive({
  currentPage: 1, // 当前页面
  pageSize: 20, // 每一页数量
  total: 146, // 总数
});

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];

const handleSizeChange = (val) => {
  console.log(`${val}条/每一页`);
};
const handleCurrentChange = (val) => {
  console.log(`当前页数: ${val}`);
};
</script>
