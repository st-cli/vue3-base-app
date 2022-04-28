/*
 * @Description: 用户接口
 * @Autor: houyueke
 * @Date: 2022-04-28 10:28:44
 * @LastEditors: houyueke
 * @LastEditTime: 2022-04-28 10:30:58
 */
import request from '@/utils/request'

/**
 * @description: 用户登录接口
 * @param {* Object } data
 * @return {* void }
 * @author: houyueke
 */
export async function login(data) {
  return request({
    url: '/v1/login/access-token',
    method: 'post',
    data
  })
}
