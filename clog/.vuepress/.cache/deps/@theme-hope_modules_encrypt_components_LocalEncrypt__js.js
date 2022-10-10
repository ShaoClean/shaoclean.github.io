import {
  PasswordModal_default,
  usePathEncrypt
} from "./chunk-5EULBJNJ.js";
import "./chunk-HPW5WGNZ.js";
import "./chunk-YB6TWJ2S.js";
import "./chunk-YUNCEBFY.js";
import "./chunk-BGOVVDTY.js";
import "./chunk-TJSL4O7Y.js";
import "./chunk-ANKY43RT.js";
import "./chunk-U27KJSRC.js";
import "./chunk-YACYAO4R.js";
import {
  defineComponent,
  h
} from "./chunk-4YVVQK3V.js";
import "./chunk-XYQ66V4O.js";
import "./chunk-BPKF3OQJ.js";

// node_modules/vuepress-theme-hope/lib/client/modules/encrypt/components/LocalEncrypt.js
var LocalEncrypt_default = defineComponent({
  name: "LocalEncrypt",
  setup(_props, { slots }) {
    const { isEncrypted, validateToken } = usePathEncrypt();
    return () => {
      var _a;
      return isEncrypted.value ? h(PasswordModal_default, { full: true, onVerify: validateToken }) : ((_a = slots["default"]) == null ? void 0 : _a.call(slots)) || null;
    };
  }
});

// dep:@theme-hope_modules_encrypt_components_LocalEncrypt__js
var theme_hope_modules_encrypt_components_LocalEncrypt_js_default = LocalEncrypt_default;
export {
  theme_hope_modules_encrypt_components_LocalEncrypt_js_default as default
};
//# sourceMappingURL=@theme-hope_modules_encrypt_components_LocalEncrypt__js.js.map
