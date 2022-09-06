export const data = JSON.parse("{\"key\":\"v-ec52833c\",\"path\":\"/my-project/project2.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"summary\":\"project!!!! project!!!! project!!!! project!!!!\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/my-project/project2.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"主题演示\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.01,\"words\":4},\"filePathRelative\":\"my-project/project2.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
