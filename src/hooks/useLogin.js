import { ref } from 'vue'
// import { useRouter } from "vue-router"
import { message } from 'ant-design-vue'
export const useLogin = (userloginInfo, loginFunc) => {
  // const router = useRouter()
  // const tip = ref('')
  const isRouter = ref(false)

  const { userName, passWord, remember } = userloginInfo
  console.log(passWord)
  const loading = ref(false)

  console.log('remeber', remember)

  /**
     *  code: 0 // -1
        data: {name: 'admin', token: 'testtoken'}
        message: "success"
     */
  // console.log(tip.value, 'tipvalue')

  const login = async () => {
    setLoading(true)
    const response = await loginFunc({
      password: passWord,
      username: userName
    })
    console.log('response', response)
    if (response.code === 0) {
      // 请求成功的处理
      // 是否记住密码
      if (remember) {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('username', response.data.name)
      }
      isRouter.value = true
      // router.push("/")
      message.success(response.message)
      setLoading(false)
    }
  }

  login()

  function setLoading(flag) {
    loading.value = flag
  }
  return {
    // tip
    // validatePass
  }
}
