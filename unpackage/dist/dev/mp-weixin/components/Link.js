"use strict";
const utils_link = require("../utils/link.js");
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  props: {
    openType: {
      type: String,
      default: "navigate"
    },
    url: {
      type: String,
      default: "/"
    },
    hoverClass: {
      type: String,
      default: "navigator-hover"
    }
  },
  computed: {
    url() {
      return utils_link.parse(this.url);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.url
  }, $options.url ? {
    b: $options.url,
    c: $props.openType,
    d: $props.hoverClass
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/apps/uni/def/components/Link.vue"]]);
wx.createComponent(Component);
