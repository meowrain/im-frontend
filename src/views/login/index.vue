<script setup lang="ts">
import {reactive} from "vue";
import {authLoginApi, type authLoginRequest} from "@/api/auth";
import type {baseResponse} from "@/api";
import {ElMessage} from "element-plus";
import {useStore} from "@/stores";
import router from "@/router";
const store = useStore()

const form = reactive<authLoginRequest>({
  username: "",
  password: "",
})
async function login() {

  let res = await authLoginApi(form)
  if (res.code) {
    ElMessage.error(res.msg)
    return
  }
  // 拿到的是token，前端要对他进行解码
  ElMessage.success("登陆成功")
  store.setToken(res.data.token)
  // 重定向
  await router.push({
    name: "web",
  })
}

</script>

<template>
  <div class="im_login">
    <div class="banner">

    </div>
    <div class="login_form">
      <el-form :model="form">
        <el-form-item>
          <el-input v-model="form.username" placeholder="用户名">
            <template #prefix>
              <i class="iconfont icon-yonghuming"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item class="item_password">
          <el-input v-model="form.password" placeholder="密码">
            <template #prefix>
              <i class="iconfont icon-mima"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item class="item_action">
          <el-checkbox>记住密码</el-checkbox>
        </el-form-item>
        <el-form-item class="item_btn">
          <el-button style="width: 100%" @click="login" type="primary">登陆</el-button>
          <!--        <el-button style="width: 100%" type="primary">登陆</el-button>-->

        </el-form-item>
      </el-form>
      <div class="other_login">
        <div class="label">第三方登录</div>
        <div class="icons">
          <i class="iconfont icon-QQ"></i>
        </div>

      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.im_login {
  width: 500px;
  height: 406px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.banner {
  height: 140px;
  width: 100%;
  background-image: url("https://blog.meowrain.cn/api/i/2024/08/23/LVgCv61724406672895269922.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.login_form {
  padding: 20px 80px;

  .item_password, .item_action, .item_btn {
    margin-bottom: 6px;
  }

  .other_login {
    display: flex;
    flex-direction: column;
    align-items: center;

    .label {
      font-size: 14px;
      color: #555;
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;

      &::before, &::after {
        width: 35%;
        height: 1px;
        background-color: #e3e3e3;
        content: "";
        display: inline-flex;
      }
    }

    .icons {
      margin-top: 5px;

      i {
        font-size: 36px;
        cursor: pointer;
      }
    }
  }
}
</style>