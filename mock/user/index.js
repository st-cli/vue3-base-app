import { resultSuccess, resultError } from '../_util'
export default [
  {
    url: '/mock/v1/user/login',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body
      if (username === 'admin' && password === '123456') {
        return resultSuccess({ name: 'admin', token: 'testtoken' })
      }
      return resultError()
    }
  }
]
