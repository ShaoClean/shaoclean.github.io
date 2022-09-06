export const categoryMap = {"category":{"/":{"path":"/category/","map":{"CategoryA":{"path":"/category/categorya/","keys":["v-19d508e8","v-0a824a52"]},"CategoryB":{"path":"/category/categoryb/","keys":["v-19d508e8","v-0a824a52"]},"Angular":{"path":"/category/angular/","keys":["v-0cecb7e2"]},"React":{"path":"/category/react/","keys":["v-1b9f0d11","v-4808ad6a"]},"前端":{"path":"/category/%E5%89%8D%E7%AB%AF/","keys":["v-88be0674"]},"Vue":{"path":"/category/vue/","keys":["v-88be0674","v-85545536"]}}}},"tag":{"/":{"path":"/tag/","map":{"tag A":{"path":"/tag/tag-a/","keys":["v-19d508e8","v-0a824a52"]},"tag B":{"path":"/tag/tag-b/","keys":["v-19d508e8","v-0a824a52"]},"AngularCli":{"path":"/tag/angularcli/","keys":["v-0cecb7e2"]},"ReactCli":{"path":"/tag/reactcli/","keys":["v-4808ad6a"]},"ReactExtends":{"path":"/tag/reactextends/","keys":["v-1b9f0d11"]},"Vue2":{"path":"/tag/vue2/","keys":["v-88be0674"]},"Vue3":{"path":"/tag/vue3/","keys":["v-85545536"]}}}}}

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
