import { resultPageSuccess } from '../_util'

const list = (() => {
  const result = []
  for (let i = 0; i < 48; i++) {
    result.push({
      id: `${i}`,
      account: '@first',
      email: '@email',
      name: '@cname()',
      createTime: '@datetime',
      remark: '@cword(10,20)',
      'status|1': ['0', '1']
    })
  }
  return result
})()

export default [
  {
    url: '/mock/v1/table/list',
    method: 'post',
    response: ({ body }) => {
      const { page, pageSize } = body
      return resultPageSuccess(page, pageSize, list)
    }
  }
]
