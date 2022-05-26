/*
 * @Description: 用户接口
 * @Autor: houyueke
 * @Date: 2022-04-28 10:28:44
 * @LastEditors: houyueke
 * @LastEditTime: 2022-05-12 10:43:36
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
    url: '/v1/user/login',
    method: 'post',
    data
  })
}

export async function getUserList(data) {
  return request({
    url: '/v1/table/list',
    method: 'post',
    data
  })
}

/**
 * @description: 获取echarts图表数据
 */
export async function getChartsData(data) {
  return request({
    url: '/v1/charts',
    method: 'post',
    data
  })
}
