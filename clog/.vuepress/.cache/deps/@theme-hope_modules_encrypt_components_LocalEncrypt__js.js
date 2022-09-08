import {
  PasswordModal_default,
  usePathEncrypt
} from "./chunk-WCZJ6LRG.js";
import "./chunk-R44WPQYS.js";
import "./chunk-4NB2SNUZ.js";
import "./chunk-QK56XPVB.js";
import "./chunk-JDJQ3254.js";
import "./chunk-TCC3WPER.js";
import "./chunk-TMJVQBRG.js";
import {
  defineComponent,
  h
} from "./chunk-IU5U32L3.js";
import "./chunk-XYQ66V4O.js";
import "./chunk-BGOVVDTY.js";
import "./chunk-YACYAO4R.js";
import "./chunk-KKNQZGBY.js";

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
