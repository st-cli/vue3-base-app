import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/useUserStore'
import { Base64 } from 'js-base64'
import { validatePass } from '../utils/validate.js'

export function useLogin() {
  const userStore = useUserStore()

  const router = useRouter()
  //按钮loading 状态
  const loading = ref(false)

  const formState = ref({
    username: '',
    password: '',
    autoLogin: false
  })

  const rulesState = reactive({
    username: [
      {
        required: true,
        message: '请输入用户名'
      }
    ],
    password: [
      {
        required: true,
        // message: '请输入密码'
        validator: validatePass
      }
    ]
  })

  function setLoading(value) {
    loading.value = value
  }

  function setUserLoginInfo() {
    const info = {
      ...formState.value,
      password: Base64.encode(formState.value.password)
    }
    userStore.setUserLoginInfo(info)
  }

  function getUserInfo() {
    const isAuto = userStore.getIsAutoLogin || false
    if (isAuto) {
      formState.value = {
        ...userStore.getUserLoginInFo,
        password: Base64.decode(userStore.getUserLoginInFo.password)
      }
      if (formState.value.username && formState.value.password) {
        return true
      }
    }
    return false
  }

  function loginSuccess(data) {
    setUserLoginInfo()
    saveUserInfo(data)
    routerNavigation()
  }

  function saveUserInfo(info) {
    userStore.setUserInfo(info)
  }

  function routerNavigation() {
    router.push({
      path: '/'
    })
  }

  return {
    loading,
    formState,
    rulesState,
    setLoading,
    loginSuccess,
    userStore,
    getUserInfo
  }
}
