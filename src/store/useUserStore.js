/*
 * @Description: user store
 * @Autor: houyueke
 * @Date: 2022-04-12 17:13:53
 * @LastEditors: houyueke
 * @LastEditTime: 2022-04-12 18:24:18
 */
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    username: '',
    token: '',
    userLoginInfo: {}
  }),
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user_store',
        storage: localStorage,
        paths: ['username', 'token']
      },
      {
        key: 'login_info',
        storage: localStorage,
        paths: ['userLoginInfo']
      }
    ]
  },
  getters: {
    getUserName: state => state.username,
    getUserToken: state => state.token,
    getIsAutoLogin: state => state.userLoginInfo.autoLogin,
    getUserLoginInFo: state => state.userLoginInfo
  },
  actions: {
    setUserInfo(data) {
      const { name, token } = data
      this.username = name
      this.token = token
    },
    setUserLoginInfo(info) {
      this.userLoginInfo = info
    }
  }
})
