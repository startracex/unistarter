"use strict";
const common_vendor = require("../../common/vendor.js");
const context_user = require("../../context/user.js");
const config = require("../../config.js");
const utils_link = require("../../utils/link.js");
if (!Array) {
  const _easycom_uni_notice_bar2 = common_vendor.resolveComponent("uni-notice-bar");
  _easycom_uni_notice_bar2();
}
const _easycom_uni_notice_bar = () => "../../uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.js";
if (!Math) {
  (_easycom_uni_notice_bar + A)();
}
const A = () => "../../components/Link.js";
const __default__ = {
  data() {
    return {
      title: "Hello",
      notice: config.config.notice,
      links: [
        {
          url: "/me",
          text: "个人",
          login: true
        },
        {
          url: "/token",
          text: "令牌",
          login: true
        },
        {
          url: "/message",
          text: "消息"
        },
        {
          url: "/log",
          text: "公告"
        }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    getMore() {
      utils_link.jump(config.config.notice.url);
    }
  },
  components: {}
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "page",
  setup(__props) {
    const user = context_user.useUser();
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: _ctx.notice.text
      }, _ctx.notice.text ? {
        b: common_vendor.o(_ctx.getMore),
        c: common_vendor.p({
          ["show-get-more"]: true,
          ["show-icon"]: true,
          scrollable: _ctx.notice.scrollable,
          text: _ctx.notice.text
        })
      } : {}, {
        d: common_vendor.f(_ctx.links, (item, index, i0) => {
          return {
            a: "/static/icon" + item.url + ".png",
            b: common_vendor.t(item.text),
            c: "b4c55d88-1-" + i0,
            d: common_vendor.p({
              url: item.login && !common_vendor.unref(user).data() ? `login` : `index${item.url}`
            }),
            e: index
          };
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b4c55d88"], ["__file", "D:/apps/uni/def/pages/index/page.vue"]]);
wx.createPage(MiniProgramPage);
