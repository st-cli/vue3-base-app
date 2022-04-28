/*
 * @Description: axios封装
 * @Autor: houyueke
 * @Date: 2022-04-01 14:55:16
 * @LastEditors: houyueke
 * @LastEditTime: 2022-04-28 11:06:12
 */
import axios from 'axios'
import router from '@/router/index'
import { message } from 'ant-design-vue'

const baseURL = import.meta.env.VITE_AXIOS_BASE_URL

const service = axios.create({
  baseURL: baseURL,
  timeout: 5000
})

//设置请求拦截器
service.interceptors.request.use(
  async config => {
    //do something
    return config
  },
  async error => {
    return Promise.reject(error)
  }
)

//设置响应拦截器
service.interceptors.response.use(
  async response => {
    if (response.status === 200) {
      if (response.data.code != '0' && response.data.message) {
        message.warning(response.data.message)
      }
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response)
    }
  },
  async error => {
    const { response } = error
    if (response) {
      errorHandler(response.status, response.message)
      return Promise.reject(response)
    } else {
      message.error('网络异常')
    }
  }
)
/**
 * @description: 错误处理
 * @param {*} code 状态码
 * @param {*} msg 错误信息
 * @return {*}
 * @author: houyueke
 */
const errorHandler = (status, msg) => {
  switch (status) {
    case 401:
      //未登录
      router.replace({
        path: '/login',
        query: {
          redirect: router.currentRoute.fullPath
        }
      })
      break
    case 403:
      //token过期,重新登录
      message.warning(msg)
      localStorage.removeItem('token')
      setTimeout(() => {
        router.replace({
          path: '/login',
          query: {
            redirect: router.currentRoute.fullPath
          }
        })
      }, 1000)
      break
    case 404:
      message.error('网络请求不存在')
      break
    case 500:
      message.error('服务器异常')
      break
    default:
      message.error(msg)
      break
  }
}

export default service
