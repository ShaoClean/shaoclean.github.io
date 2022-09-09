import {
  PasswordModal_default,
  usePathEncrypt
} from "./chunk-WX7D65IT.js";
import "./chunk-5S5PRRFI.js";
import "./chunk-BGOVVDTY.js";
import "./chunk-ARDYV7EY.js";
import "./chunk-CIMFKLRG.js";
import "./chunk-TMJVQBRG.js";
import "./chunk-ANKY43RT.js";
import "./chunk-KHE7BIUW.js";
import "./chunk-YACYAO4R.js";
import {
  defineComponent,
  h
} from "./chunk-IU5U32L3.js";
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
