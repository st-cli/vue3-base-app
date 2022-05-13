import {
  useDebounceFn,
  useEventListener,
  useTimeoutFn,
  tryOnUnmounted
} from '@vueuse/core'
import { computed, nextTick, unref, ref } from 'vue'
import echarts from '@/utils/echarts'

export function useEcharts(elRef) {
  let instance
  let resizeFn = resize
  const cacheOptions = ref({})

  resizeFn = useDebounceFn(resize, 200)

  /**
   * @description: 获取图表options
   */
  const getOptions = computed(() => {
    return {
      backgroundColor: 'transparent',
      ...cacheOptions.value
    }
  })
  /**
   * @description: 初始化图表
   */
  function initChart() {
    const el = unref(elRef)
    if (!el || !unref(el)) {
      return
    }
    instance = echarts.init(el)
    useEventListener(window, resizeFn)
  }
  /**
   * @description: 设置图表options
   * @param {*Object} options
   */
  function setOptions(options) {
    cacheOptions.value = options
    if (unref(elRef).offsetHeight === 0) {
      useTimeoutFn(() => {
        setOptions(unref(getOptions))
      }, 20)
      return
    }
    nextTick(() => {
      useTimeoutFn(() => {
        if (!instance) {
          initChart()
          if (!instance) return
        }
        instance.setOption(unref(getOptions))
      }, 20)
    })
  }
  /**
   * @description: 图表resize
   */
  function resize() {
    instance.resize()
  }
  /**
   * @description: 获取图表实例
   */
  function getInstance() {
    if (!instance) {
      initChart()
    }
    return instance
  }

  tryOnUnmounted(() => {
    if (!instance) return
    instance.dispose()
    instance = null
  })

  return {
    setOptions,
    resize,
    echarts,
    getInstance
  }
}
