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
        <!-- 登录 -->
        <div v-if="!isForget" class="loginIng">
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
              <a
                class="login-form-forgot"
                style="margin-left: 62px"
                @click="forgetFn"
                >忘记密码</a
              >
            </div>
            <a-form-item>
              <a-button
                size="large"
                class="login_btn"
                type="primary"
                :disabled="disabled"
                @click="loginHandle"
                >登 录
              </a-button>
            </a-form-item>
          </a-form>
        </div>
        <!-- 忘记密码 -->
        <div v-else class="forgetPwd">
          <div class="login_tit">
            <span class="logintitle">忘记密码</span>
            <a class="login-form-forgot" @click="returnLogin">返回登录</a>
          </div>
          <a-form ref="loginFormRef" :model="formState" style="padding: 0 80px">
            <a-form-item>
              <a-input
                v-model:value="formState.emailNum"
                size="large"
                style="width: 240px; height: 40px"
                placeholder="请输入邮箱账号"
                autocomplete="off"
              >
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input-group compact>
                <a-input
                  v-model:value="formState.sixNum"
                  style="width: 140px; height: 40px"
                  placeholder="请输入验证码"
                />
                <a-button
                  type="primary"
                  style="width: 100px; height: 40px"
                  :disabled="isDisposed"
                  @click="getCode"
                >
                  {{ isDisposed ? `(${time}s后重新获取)` : '获取验证码' }}
                </a-button>
              </a-input-group>
            </a-form-item>
            <a-form-item>
              <a-button size="large" class="login_btn" type="primary"
                >确定</a-button
              >
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, computed } from 'vue'
import { Form } from 'ant-design-vue'
import { useLogin } from '../../../hooks/useLogin'
import { login } from '@/api/user'

import { validatePass } from '../../../utils/validate.js'
const formState = reactive({
  userName: '',
  passWord: '',
  remember: false,
  emailNum: '',
  sixNum: ''
})

const useForm = Form.useForm

const loginFormRef = ref()
// const forgetFormRef = ref()
const isForget = ref(false)
const isDisposed = ref(false)
const time = ref(180)
// const user = ref()
const disabled = computed(() => {
  return !(formState.userName && formState.passWord)
})

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
        trigger: 'blur',
        validator: validatePass
      }
    ]
  })
)

//忘记密码
const forgetFn = () => {
  isForget.value = true
}

//获取验证码
const getCode = () => {}
//返回登陆
const returnLogin = () => {
  isForget.value = false
}
//登录
const loginHandle = () => {
  validate().then(valid => {
    if (valid) {
      //校验通过逻辑
      useLogin(formState, login)
    }
  })
}
</script>
<style lang="less" scoped>
.layout {
  height: 100%;
  background: url(../../../assets/Bitmap.png) rgba(0, 100, 227, 0.6) no-repeat;
  background-blend-mode: multiply;
  background-size: cover;

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
        // background: #357fdc;
        color: #fff;
        margin-top: 24px;
      }

      .login_tit {
        padding: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
