<template>
  <div class="login_box">
    <div class="login_wrap"></div>
    <div class="login_title">
      <img v-if="showLogo" src="../../assets/logo.png" />
      <span class="title">{{ systemTitle }}</span>
    </div>
    <div class="login-container">
      <div class="login-left">
        <p>Hi，你好！<br />欢迎进入{{ systemTitle }}</p>
        <span>{{ subSystemTitle }}</span>
      </div>
      <div class="login-right">
        <div class="login_text">账号密码登录</div>
        <a-form :model="formState" class="login_form">
          <a-form-item v-bind="validateInfos.username">
            <a-input
              v-model:value="formState.username"
              size="large"
              style="width: 240px; height: 40px"
              placeholder="账号"
              autocomplete="off"
            >
            </a-input>
          </a-form-item>
          <a-form-item v-bind="validateInfos.password">
            <a-input-password
              v-model:value="formState.password"
              size="large"
              style="width: 240px; height: 40px"
              placeholder="密码"
              autocomplete="off"
            >
            </a-input-password>
          </a-form-item>
          <div class="login-form-wrap">
            <a-form-item no-style>
              <a-checkbox v-model:checked="formState.autoLogin"
                >下次自动登录</a-checkbox
              >
            </a-form-item>
            <a class="login-form-forgot">忘记密码？</a>
          </div>
          <a-form-item>
            <a-button
              :loading="loading"
              size="large"
              class="login_btn"
              type="primary"
              @click.prevent="onSubmit"
              >登 录
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, nextTick } from 'vue'
import { Form } from 'ant-design-vue'
import { useLogin } from '@/hooks/useLogin'
import { login } from '@/api/user'
import { useTimeoutFn } from '@vueuse/core'
import {
  systemTitle,
  subSystemTitle,
  showLogo
} from '../../../config/systemConfig'

const useForm = Form.useForm

const {
  formState,
  rulesState,
  loading,
  setLoading,
  loginSuccess,
  getUserInfo
} = useLogin()

const { resetFields, validate, validateInfos } = useForm(formState, rulesState)
const onSubmit = async () => {
  await validate()
  setLoading(true)
  const { data } = await login(formState.value)
  setLoading(false)
  loginSuccess(data)
  resetFields()
}

onMounted(() => {
  //获取用户登录信息
  const userInfo = getUserInfo()
  //自动登录且用户信息存在，执行登录流程
  if (userInfo) {
    nextTick(() => {
      useTimeoutFn(() => {
        onSubmit()
      }, 500)
    })
  }
})
</script>
<style lang="less" scoped>
.login_box {
  height: 100%;
  position: relative;
  background: url(../../assets/Bitmap.png) no-repeat center 0 / cover;

  .login_wrap {
    position: absolute;
    background: rgba(0, 100, 227, 0.6);
    width: 100%;
    height: 100%;
  }

  .login_title {
    position: relative;
    padding: 60px;

    img {
      margin-right: 10px;
    }

    .title {
      font-size: 27px;
      font-family: Helvetica;
      color: #ffffff;
      vertical-align: middle;
    }
  }

  .login-container {
    // height: 100%;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: right;

    .login-left {
      margin-top: 32px;
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
      padding: 80px;

      .login_text {
        font-size: 20px;
        font-family: 'PingFangSC-Medium, PingFang SC';
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
      }

      .login_form {
        padding-top: 56px;
      }

      .login-form-wrap {
        padding-top: 24px;
        display: flex;
        justify-content: space-between;
      }

      .login_btn {
        width: 100%;
        margin-top: 24px;
      }
    }
  }
}
</style>
