/*
 * @Description:
 * @Autor: houyueke
 * @Date: 2022-04-12 14:56:04
 * @LastEditors: houyueke
 * @LastEditTime: 2022-04-22 16:25:55
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    amd: true,
    // 开启setup语法糖环境
    'vue/setup-compiler-macros': true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0,
    'vue/multi-word-component-names': 0
  }
}
