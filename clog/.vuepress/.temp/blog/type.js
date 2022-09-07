export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-1b9f0d11","v-4808ad6a","v-d7e37f4e","v-88be0674","v-19d508e8","v-0a824a52","v-2e3eac9e","v-c9bbfba2","v-95b0645c","v-9246b31e","v-7c80db8b","v-2468c9b8","v-30cd7070","v-0cecb7e2","v-242d4c0b","v-7361fb8e","v-85545536"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":["v-2e3eac9e"]}},"star":{"/":{"path":"/star/","keys":["v-1b9f0d11","v-4808ad6a","v-d7e37f4e","v-88be0674","v-19d508e8","v-0a824a52"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-1b9f0d11","v-4808ad6a","v-d7e37f4e","v-88be0674","v-19d508e8","v-0a824a52"]}}}

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
