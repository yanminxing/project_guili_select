<script setup lang="ts">
import { ref } from 'vue';
import { Lock, User } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
import { ElNotification } from 'element-plus';
import useUserStore from '@/store/modules/user.ts';
import { LoginParamsModel } from '@/api/login/type.ts';

const userStore = useUserStore();
const router = useRouter();

const form = ref<LoginParamsModel>({
  password: '111111',
  username: 'admin'
});
const loading = ref(false);

// 登录
const doLogin = async () => {
  try {
    loading.value = true;
    await userStore.userLogin(form.value);
    ElNotification({
      type: 'success',
      message: '登录成功'
    });
    router.push({
      path: '/home'
    });
  } catch (e) {
    debugger;
    ElNotification({
      type: 'success',
      message: e as string
    });
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <el-container class="page-login">
    <el-form :model="form" class="page-login-form">
      <h1>某某平台</h1>
      <h3>欢迎×××××平台</h3>
      <el-form-item>
        <el-input v-model="form.username" :prefix-icon="User"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.password" type="password" :prefix-icon="Lock" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" @click="doLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<style scoped lang="scss">
.page-login {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .el-row {
    width: 100%;
  }

  &-form {
    margin-right: 100px;
    padding: 20px;
    width: 500px;
    //height: 400px;
    color: white;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;

    h1 {
      font-size: 40px;
    }
    h3 {
      font-weight: bold;
      margin-top: 20px;
    }
    .el-form-item {
      margin-top: 20px;
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>
