import { resultSuccess, resultError } from '../_util'
export default [
  {
    url: '/mock/v1/user/login',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body
      if (username === 'admin' && password === '123456') {
        return resultSuccess({
          name: 'admin',
          token: 'testtoken',
          userImg:
            'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
        })
      }
      return resultError()
    }
  }
]
