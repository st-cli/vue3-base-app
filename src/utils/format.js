import dayjs from 'dayjs'

/**
 * @description: 日期格式处理
 * @param {*String} dataTime 日期
 * @param {*String} format 日期格式
 * @return {*String}
 */
export function dateToFormat(dataTime, format = "YYYY-MM-DD HH:mm:ss") {
    if (!dataTime) {
        return
    }
    return dayjs(dataTime).format(format)
}