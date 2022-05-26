//密码校验
export const validatePass = async (_rule, value) => {
  let reg = /^\w{6,24}$/
  if (value == '') {
    return Promise.reject('请输入密码')
  } else if (value !== '') {
    console.log(1111)
    if (!reg.test(value)) {
      return Promise.reject('密码错误')
    }
  }
}

//邮箱校验
export const validateEmail = async (_rule, value) => {
  let reg =
    /^([a-z0-9A-Z]+[-|\\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-zA-Z]{2,}$/
  if (value == '') {
    return Promise.reject('请输入邮箱')
  } else if (value !== '') {
    if (!reg.test(value)) {
      return Promise.reject('请输入正确的邮箱格式')
    }
  }
}
