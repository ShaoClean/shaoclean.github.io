export const categoryMap = {"category":{"/":{"path":"/category/","map":{"CategoryA":{"path":"/category/categorya/","keys":["v-3dd501be","v-413eb2fc","v-44a8643a","v-5f1e4757","v-72a111be"]},"CategoryB":{"path":"/category/categoryb/","keys":["v-3dd501be","v-413eb2fc","v-44a8643a","v-5f1e4757","v-72a111be"]}}}},"tag":{"/":{"path":"/tag/","map":{"tag A":{"path":"/tag/tag-a/","keys":["v-3dd501be","v-413eb2fc","v-44a8643a","v-5f1e4757","v-72a111be"]},"tag B":{"path":"/tag/tag-b/","keys":["v-3dd501be","v-413eb2fc","v-44a8643a","v-5f1e4757","v-72a111be"]}}}}}

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
