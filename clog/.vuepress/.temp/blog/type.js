export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-fde05656","v-00ea8174","v-3e4ce3b6","v-f64950ca","v-f2df9f8c","v-ef75ee4e","v-07d1390e","v-098611ad","v-7bf12e24","v-5325d9b2","v-097f202e","v-1b9f0d11","v-4808ad6a","v-d7e37f4e","v-88be0674","v-2e3eac9e","v-5a788904","v-0cecb7e2","v-d6b17954","v-85545536"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":["v-2e3eac9e"]}},"star":{"/":{"path":"/star/","keys":["v-fde05656","v-00ea8174","v-3e4ce3b6","v-07d1390e","v-098611ad","v-7bf12e24","v-5325d9b2","v-097f202e","v-1b9f0d11","v-4808ad6a","v-d7e37f4e","v-88be0674","v-0cecb7e2"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-fde05656","v-00ea8174","v-3e4ce3b6","v-f64950ca","v-f2df9f8c","v-ef75ee4e","v-07d1390e","v-098611ad","v-7bf12e24","v-5325d9b2","v-097f202e","v-1b9f0d11","v-4808ad6a","v-d7e37f4e","v-88be0674"]}}}

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
