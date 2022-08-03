<template>
  <div class="w-[400px]">
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
      <el-form-item label="Password" prop="pass">
        <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Confirm" prop="checkPass">
        <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Age" prop="age">
        <el-input v-model.number="ruleForm.age" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
    <span ref="qrCodeUrl"></span>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from "vue";
import type { FormInstance } from "element-plus";

onMounted(() => {});

// 绑定ref
const ruleFormRef = ref();

// 密码验证
const validatePass = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("Please input the password"));
  } else {
    if (ruleForm.checkPass !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("checkPass", () => null);
    }
    callback();
  }
};
const validatePass2 = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("Please input the password again"));
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"));
  } else {
    callback();
  }
};

const rules = reactive({
  pass: [{ validator: validatePass, trigger: "blur", required: true }],
  checkPass: [{ validator: validatePass2, trigger: "blur", required: true }],
  age: [
    {
      message: "年龄为必填字段",
      trigger: ["blur", "change"],
      required: true,
    },
  ],
});

// 表单数据
const ruleForm = reactive({
  pass: "",
  checkPass: "",
  age: "",
});

// 提交数据
const submitForm = (formEl) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
      // 开始

      // 结束
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

// 重置表单
const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
