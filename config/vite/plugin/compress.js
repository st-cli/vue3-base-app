import viteCompression from 'vite-plugin-compression'

export function setupCompressPlugin() {
  return viteCompression({
    ext: '.gz',
    threshold: 1024,
    deleteOriginFile: false
  })
}
