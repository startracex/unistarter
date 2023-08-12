"use strict";
const common_vendor = require("../../common/vendor.js");
const config = require("../../config.js");
const context_user = require("../../context/user.js");
require("../../utils/link.js");
if (!Array) {
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_link2 = common_vendor.resolveComponent("uni-link");
  (_easycom_uni_section2 + _easycom_uni_link2)();
}
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_link = () => "../../uni_modules/uni-link/components/uni-link/uni-link.js";
if (!Math) {
  (common_vendor.unref(A) + _easycom_uni_section + _easycom_uni_link)();
}
const A = () => "../../components/Link.js";
const __default__ = {
  data() {
    return {
      version: config.config.version,
      author: config.config.author
    };
  },
  methods: {
    checkUpdate() {
      console.log("检查更新");
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "page",
  setup(__props) {
    const user = context_user.useUser();
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(user).data()
      }, common_vendor.unref(user).data() ? {
        b: common_vendor.t(common_vendor.unref(user).data("name") || common_vendor.unref(user).data("email") || common_vendor.unref(user).data("email"))
      } : {
        c: common_vendor.p({
          url: "/login"
        })
      }, {
        d: common_vendor.t(_ctx.version),
        e: common_vendor.o((...args) => _ctx.checkUpdate && _ctx.checkUpdate(...args)),
        f: common_vendor.p({
          title: "",
          type: "line"
        }),
        g: common_vendor.p({
          href: "https://github.com/startracex/",
          text: `©${(/* @__PURE__ */ new Date()).getFullYear()} ${_ctx.author}`,
          showUnderLine: "false"
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/apps/uni/def/pages/settings/page.vue"]]);
wx.createPage(MiniProgramPage);
