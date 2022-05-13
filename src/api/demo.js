/*
 * @Description: demo接口
 * @Autor: houyueke
 * @Date: 2022-04-28 10:28:44
 * @LastEditors: houyueke
 * @LastEditTime: 2022-05-13 11:06:21
 */
import request from '@/utils/request'

/**
 * @description: 获取中国省份数据
 */
export async function getChinaData() {
  return request({
    url: '/v1/china',
    method: 'get'
  })
}

export async function getUserList(data) {
  return request({
    url: '/v1/table/list',
    method: 'post',
    data
  })
}
