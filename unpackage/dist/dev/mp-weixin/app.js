"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/page.js";
  "./pages/settings/page.js";
  "./pages/index/me/page.js";
  "./pages/index/message/page.js";
  "./pages/login/page.js";
  "./pages/signup/page.js";
  "./pages/index/token/page.js";
  "./pages/index/log/page.js";
}
const _sfc_main = {};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/apps/uni/def/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(common_vendor.createPinia());
  return {
    app,
    Pinia: common_vendor.Pinia
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
