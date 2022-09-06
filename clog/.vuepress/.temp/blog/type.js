export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-3dd501be","v-413eb2fc","v-44a8643a","v-5f1e4757","v-72a111be","v-2e3eac9e","v-7c80db8b","v-19d508e8","v-2468c9b8","v-c9bbfba2","v-95b0645c","v-9246b31e"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":["v-2e3eac9e"]}},"star":{"/":{"path":"/star/","keys":["v-3dd501be","v-72a111be"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-3dd501be","v-413eb2fc","v-44a8643a","v-5f1e4757","v-72a111be"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
