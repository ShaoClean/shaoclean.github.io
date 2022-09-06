import { navbar } from "vuepress-theme-hope";
import demo from "./demo";
import essay from "./essay";
import project from "./project";
import study from "./study";

export default navbar([
  { text: "主页", icon: "home", link: "/" },
  project,
  study,
  essay,
  demo
]);
