import { viteMockServe } from 'vite-plugin-mock'

export function setupMockServer(command) {
  return viteMockServe({
    // default
    mockPath: 'mock',
    supportTs: false,
    watchFiles: true,
    localEnabled: command === 'serve',
    prodEnabled: false,
    logger: true
  })
}
