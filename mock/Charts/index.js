import { resultSuccess, resultError } from '../_util'

const data = {
  line: {
    xAxis: ['4-3-8', '4-4', '4-5', '4-6', '4-7', '4-8', '4-9'],
    series: [[8, 15, 31, 13, 15, 22, 11]],
    legend: ['用户量1']
  },
  lineMore: {
    xAxis: ['4-3-8', '4-4', '4-5', '4-6', '4-7', '4-8', '4-9'],
    series: [
      [8, 15, 31, 13, 15, 22, 11],
      [1, 2, 3, 4, 5, 6, 7],
      [2, 3, 4, 5, 6, 7, 8]
    ],
    legend: ['用户量1', '用户量2', '用户量3']
  },
  bar: {
    xAxis: ['4-3-8', '4-4', '4-5', '4-6', '4-7', '4-8', '4-9'],
    series: [
      [8, 15, 31, 13, 15, 22, 11],
      [1, 2, 3, 4, 5, 6, 7],
      [2, 3, 4, 5, 6, 7, 8]
    ],
    legend: ['用户量1', '用户量2', '用户量3']
  },
  pie: {
    series: [
      { value: 1048, name: '用户量1' },
      { value: 735, name: '用户量2' },
      { value: 580, name: '用户量3' }
    ],
    legend: ['用户量1', '用户量2', '用户量3']
  },
  radar: {
    series: [
      { name: '女', value: [11035, 6013, 5067, 1520, 184] },
      { name: '男', value: [13408, 5065, 5947, 856, 302] }
    ],
    legend: ['男', '女'],
    indicator: [
      { name: '高中', max: 15000 },
      { name: '专科', max: 10000 },
      { name: '本科', max: 8000 },
      { name: '硕士', max: 2000 },
      { name: '博士', max: 500 }
    ]
  }
}

export default [
  {
    url: '/mock/v1/charts',
    method: 'post',
    response: ({ body }) => {
      const { type } = body
      if (data[type]) {
        return resultSuccess(data[type])
      }
      return resultError()
    }
  }
]
