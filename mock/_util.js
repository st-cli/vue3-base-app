/**
 * @description: 请求成功方法
 * @param {*any} data
 * @param {*string} message
 * @return {*Object}
 * @author: houyueke
 */
export function resultSuccess(data, message = 'success') {
  return {
    code: 0,
    data,
    message
  }
}
/**
 * @description:
 * @param {*} message
 * @param {*} code
 * @param {*} data
 * @return {*}
 * @author: houyueke
 */
export function resultError(
  message = 'Request failed',
  code = -1,
  data = null
) {
  return {
    code,
    data,
    message
  }
}
/**
 * @description: 请求分页方法
 * @param {*Number} page
 * @param {*Number} pageSize
 * @param {*Array} list
 * @param {*String} message
 * @return {*Object}
 * @author: houyueke
 */
export function resultPageSuccess(page, pageSize, list, message = 'success') {
  const currentPageData = pagination(page, pageSize, list)
  return {
    ...resultSuccess({
      list: currentPageData,
      total: list.length
    }),
    message
  }
}
/**
 * @description: 获取分页数据方法
 * @param {*Number} page 当前页
 * @param {*Number} pageSize 当前页条数
 * @param {*Array} array list
 * @return {*Array} list
 * @author: houyueke
 */
export function pagination(page, pageSize, array) {
  const offset = (page - 1) * Number(pageSize)
  const result =
    offset + Number(pageSize) >= array.length
      ? array.slice(offset, array.length)
      : array.slice(offset, offset + Number(pageSize))
  return result
}
