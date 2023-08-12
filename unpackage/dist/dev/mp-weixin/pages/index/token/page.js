"use strict";
const context_user = require("../../../context/user.js");
const utils_link = require("../../../utils/link.js");
const common_vendor = require("../../../common/vendor.js");
const __default__ = {
  data() {
    return {};
  },
  methods: {}
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "page",
  setup(__props) {
    const userhook = context_user.useUser();
    if (!userhook.data()) {
      utils_link.jump("/login");
    }
    return (_ctx, _cache) => {
      return {};
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/apps/uni/def/pages/index/token/page.vue"]]);
wx.createPage(MiniProgramPage);
