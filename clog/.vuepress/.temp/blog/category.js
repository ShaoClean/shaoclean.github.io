export const categoryMap = {"category":{"/":{"path":"/category/","map":{"前端":{"path":"/category/%E5%89%8D%E7%AB%AF/","keys":["v-7bf12e24","v-097f202e","v-d7e37f4e","v-88be0674"]},"项目文档":{"path":"/category/%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3/","keys":["v-097f202e"]},"使用文档":{"path":"/category/%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3/","keys":["v-7bf12e24"]},"CategoryA":{"path":"/category/categorya/","keys":["v-19d508e8","v-0a824a52"]},"CategoryB":{"path":"/category/categoryb/","keys":["v-19d508e8","v-0a824a52"]},"Angular":{"path":"/category/angular/","keys":["v-0cecb7e2"]},"JS":{"path":"/category/js/","keys":["v-d7e37f4e"]},"React":{"path":"/category/react/","keys":["v-1b9f0d11","v-4808ad6a"]},"Vue":{"path":"/category/vue/","keys":["v-88be0674","v-85545536"]}}}},"tag":{"/":{"path":"/tag/","map":{"CYou":{"path":"/tag/cyou/","keys":["v-097f202e"]},"cyou-js":{"path":"/tag/cyou-js/","keys":["v-7bf12e24"]},"tag A":{"path":"/tag/tag-a/","keys":["v-19d508e8","v-0a824a52"]},"tag B":{"path":"/tag/tag-b/","keys":["v-19d508e8","v-0a824a52"]},"AngularCli":{"path":"/tag/angularcli/","keys":["v-0cecb7e2"]},"ES6":{"path":"/tag/es6/","keys":["v-d7e37f4e"]},"ReactCli":{"path":"/tag/reactcli/","keys":["v-4808ad6a"]},"ReactExtends":{"path":"/tag/reactextends/","keys":["v-1b9f0d11"]},"Vue2":{"path":"/tag/vue2/","keys":["v-88be0674"]},"Vue3":{"path":"/tag/vue3/","keys":["v-85545536"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
