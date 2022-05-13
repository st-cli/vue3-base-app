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
export default [
  {
    url: '/mock/v1/china',
    method: 'get',
    response: () => {
      return resultSuccess(china)
    }
  }
]
