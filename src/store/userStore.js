/*
 * @Description: user store
 * @Autor: houyueke
 * @Date: 2022-04-12 17:13:53
 * @LastEditors: houyueke
 * @LastEditTime: 2022-04-12 18:24:18
 */
import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        username: "admin"
    }),
    getters: {
        getUserName: (state) => state.username + ' tom'
    },
    actions: {
        setUserName(name) {
            this.username = name
        }
    }
})