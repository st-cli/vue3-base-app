import { ref, unref, computed } from 'vue'

export function usePagination(fn, params) {
  const list = ref([])

  const current = ref(1)

  const pageSize = ref(10)

  const total = ref(0)

  const loading = ref(false)

  const pagination = computed(() => ({
    current: current.value,
    total: total.value,
    pageSize: pageSize.value,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: total => `共 ${total} 条`
  }))

  const runFn = async others => {
    setLoading(true)
    const { data } = await fn({
      ...params,
      page: unref(current),
      pageSize: unref(pageSize),
      ...others
    })
    total.value = data.total
    list.value = data.list
    setLoading(false)
  }

  runFn()

  function setCurrent(page, size = 10, others = {}) {
    current.value = page
    pageSize.value = size
    runFn(others)
  }

  function setLoading(flag) {
    loading.value = flag
  }
  return {
    current,
    pageSize,
    list,
    total,
    loading,
    setCurrent,
    pagination
  }
}
