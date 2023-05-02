import { defineClientConfig } from "@vuepress/client";
import MdHeader from "./components/MdHeader.vue";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("MdHeader", MdHeader);
  },
});
