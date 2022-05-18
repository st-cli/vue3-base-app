<template>
  <div class="layout">
    <div class="login_title">
      <img
        style="margin-right: 10px; vertical-align: middle"
        src="../../../assets/logo.png"
        alt=""
      />
      <span class="title">开源采集系统</span>
    </div>
    <div class="login-container">
      <div class="login-left">
        <p>Hi，你好！<br />欢迎进入开源采集系统</p>
        <span>Hi, Hello! Welcome to open source acquisition system</span>
      </div>
      <div class="login-right">
        <div class="login_title">
          <span class="logintitle">账号密码登录</span>
        </div>
        <a-form ref="loginFormRef" :model="formState" style="padding: 0 80px">
          <a-form-item v-bind="validateInfos.userName">
            <a-input
              v-model:value="formState.userName"
              size="large"
              style="width: 240px; height: 40px"
              placeholder="账号"
              autocomplete="off"
            >
            </a-input>
          </a-form-item>
          <a-form-item v-bind="validateInfos.passWord">
            <a-input-password
              v-model:value="formState.passWord"
              size="large"
              style="width: 240px; height: 40px"
              placeholder="密码"
              autocomplete="off"
            >
            </a-input-password>
          </a-form-item>
          <div class="login-form-wrap">
            <a-form-item name="remember" no-style>
              <a-checkbox v-model:checked="formState.remember"
                >下次自动登录</a-checkbox
              >
            </a-form-item>
            <a class="login-form-forgot" href="" style="margin-left: 62px"
              >忘记密码</a
            >
          </div>
          <a-form-item>
            <a-button
              size="large"
              class="login_btn"
              type="primary"
              @click="loginHandle"
              >登 录</a-button
            >
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { Form } from 'ant-design-vue'

import { useLogin } from '../../../hooks/useLogin'
import { login } from '@/api/user'
const formState = reactive({
  userName: '',
  passWord: '',
  remember: true
})
const useForm = Form.useForm
const loginFormRef = ref()
// const user = ref()

const { validate, validateInfos } = useForm(
  formState,
  reactive({
    userName: [
      {
        required: true,
        message: '请输入账号'
      }
    ],
    passWord: [
      {
        required: true,
        message: '请输入密码'
      }
    ]
  })
)

const loginHandle = () => {
  validate().then(valid => {
    console.log('valid', valid)
    if (valid) {
      const { tip } = useLogin(formState, login)

      if (tip.value !== '') {
        // 校验不通过的逻辑
        alert(tip.value)
      }
      // console.log("isRouter",isRouter.value)
      // if (isRouter.value) {
      //   console.log(isRouter.value, "isRouter")
      // }
    }
  })
}
</script>
<style lang="less" scoped>
.layout {
  //   background: #0064e3;
  // opacity: 0.6;
  background: url(../../../assets/Bitmap.png) no-repeat;

  .login_title {
    padding: 60px;

    .title {
      font-size: 27px;
      font-family: Helvetica;
      color: #ffffff;
      vertical-align: middle;
    }
  }

  .login-container {
    height: 100%;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: right;

    .login-left {
      margin-top: 32px;
      // margin-left: 176px;
      width: 430;
      font-family: Helvetica;
      color: #ffffff;
      letter-spacing: 1px;

      p {
        font-size: 36px;
      }

      span {
        font-size: 16px;
      }
    }

    .login-right {
      width: 400px;
      height: 474px;
      background: #ffffff;
      box-shadow: 5px 10px 20px 0px rgba(25, 100, 194, 0.2);
      border-radius: 16px;

      .logintitle {
        font-size: 20px;
        font-family: 'PingFangSC-Medium, PingFang SC';
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
      }

      .login_btn {
        width: 100%;
        background: #357fdc;
        margin-top: 24px;
      }
    }
  }
}

#components-form-demo-normal-login .login-form-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

// #components-form-demo-normal-login .login-form-forgot {
//   margin-right: 62px;

// }
</style>
