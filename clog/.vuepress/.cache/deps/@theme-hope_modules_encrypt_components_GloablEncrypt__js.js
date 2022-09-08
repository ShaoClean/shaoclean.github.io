import {
  PasswordModal_default,
  useGlobalEcrypt
} from "./chunk-I2L5WNID.js";
import "./chunk-5S5PRRFI.js";
import "./chunk-4642VYNX.js";
import "./chunk-TMJVQBRG.js";
import "./chunk-BGOVVDTY.js";
import "./chunk-CIMFKLRG.js";
import "./chunk-ANKY43RT.js";
import "./chunk-KHE7BIUW.js";
import "./chunk-YACYAO4R.js";
import {
  defineComponent,
  h
} from "./chunk-IU5U32L3.js";
import "./chunk-XYQ66V4O.js";
import "./chunk-BPKF3OQJ.js";

// node_modules/vuepress-theme-hope/lib/client/modules/encrypt/components/GloablEncrypt.js
var GloablEncrypt_default = defineComponent({
  name: "GlobalEncrypt",
  setup(_props, { slots }) {
    const { isGlobalEncrypted, validateGlobalToken } = useGlobalEcrypt();
    return () => {
      var _a;
      return isGlobalEncrypted.value ? h(PasswordModal_default, { full: true, onVerify: validateGlobalToken }) : ((_a = slots["default"]) == null ? void 0 : _a.call(slots)) || null;
    };
  }
});

// dep:@theme-hope_modules_encrypt_components_GloablEncrypt__js
var theme_hope_modules_encrypt_components_GloablEncrypt_js_default = GloablEncrypt_default;
export {
  theme_hope_modules_encrypt_components_GloablEncrypt_js_default as default
};
//# sourceMappingURL=@theme-hope_modules_encrypt_components_GloablEncrypt__js.js.map
