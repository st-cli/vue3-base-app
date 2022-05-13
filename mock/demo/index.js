import { resultSuccess } from '../_util'
const china = [
  {
    name: '北京',
    value: 24
  },
  {
    name: '四川',
    value: 56
  },
  {
    name: '上海',
    value: 98
  }
]
const world = [
  {
    name: 'China',
    value: 24
  },
  {
    name: 'Afghanistan',
    value: 56
  },
  {
    name: 'Angola',
    value: 98
  }
]
const cloud = (() => {
  const result = []
  for (let i = 0; i < 100; i++) {
    result.push({
      name: '@cname()',
      value: Math.floor(Math.random() * 100)
    })
  }
  return result
})()

export default [
  {
    url: '/mock/v1/china',
    method: 'get',
    response: () => {
      return resultSuccess(china)
    }
  },
  {
    url: '/mock/v1/world',
    method: 'get',
    response: () => {
      return resultSuccess(world)
    }
  },
  {
    url: '/mock/v1/cloud',
    method: 'get',
    response: () => {
      return resultSuccess(cloud)
    }
  }
]
