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
    userImg: '',
    userLoginInfo: {}
  }),
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user_store',
        storage: localStorage,
        paths: ['username', 'token', 'userImg']
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
    getUserImg: state => state.userImg,
    getIsAutoLogin: state => state.userLoginInfo.autoLogin,
    getUserLoginInFo: state => state.userLoginInfo
  },
  actions: {
    setUserInfo(data) {
      const { name, token, userImg } = data
      this.username = name
      this.token = token
      this.userImg = userImg
    },
    setUserLoginInfo(info) {
      this.userLoginInfo = info
    }
  }
})
