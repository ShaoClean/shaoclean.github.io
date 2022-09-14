import { defineClientConfig } from "@vuepress/client";
    import { defineAsyncComponent } from "vue";
import "/Users/clean/Desktop/clog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import Presentation from "/Users/clean/Desktop/clog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Presentation", Presentation);
    
  }
});