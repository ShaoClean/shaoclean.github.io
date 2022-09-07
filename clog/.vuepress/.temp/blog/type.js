export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-07d1390e","v-7bf12e24","v-097f202e","v-1b9f0d11","v-4808ad6a","v-d7e37f4e","v-88be0674","v-2e3eac9e","v-5325d9b2","v-0cecb7e2","v-85545536"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":["v-2e3eac9e"]}},"star":{"/":{"path":"/star/","keys":["v-07d1390e","v-7bf12e24","v-097f202e","v-1b9f0d11","v-4808ad6a","v-d7e37f4e","v-88be0674","v-5325d9b2","v-0cecb7e2"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-07d1390e","v-7bf12e24","v-097f202e","v-1b9f0d11","v-4808ad6a","v-d7e37f4e","v-88be0674"]}}}

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
