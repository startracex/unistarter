"use strict";
const common_vendor = require("../../../common/vendor.js");
const context_user = require("../../../context/user.js");
require("../../../utils/link.js");
if (!Array) {
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_file_picker2 + _easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_file_picker = () => "../../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_file_picker + _easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms)();
}
const __default__ = {
  setup() {
    const user = context_user.useUser();
    console.log(user);
  },
  data() {
    const user = context_user.useUser();
    user.data();
    return {
      formData: {
        name: user.data("name"),
        email: user.data("email"),
        phone: user.data("phone")
      },
      imageStyles: {
        width: 84,
        height: 84,
        border: {
          radius: "50%"
        }
      },
      avatarValue: {
        url: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao-small.jpg",
        extname: "png",
        name: "uniapp-logo.png"
      }
    };
  },
  methods: {
    submit() {
      const userhook = context_user.useUser();
      this.$refs.form.validate().then((res) => {
        var _a;
        const data = {
          ...res,
          avatar: (_a = this.$refs.ava.files[0]) == null ? void 0 : _a.url
        };
        log(data);
        userhook.update(data);
      });
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "page",
  setup(__props) {
    const user = context_user.useUser();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.sr("ava", "79d015f3-0"),
        b: common_vendor.p({
          value: [{
            url: "/static/tab/all.png",
            extname: "png",
            name: "shuijiao.png"
          }],
          limit: "1",
          ["disable-preview"]: true,
          imageStyles: _ctx.imageStyles,
          ["file-mediatype"]: "image"
        }),
        c: common_vendor.o(($event) => _ctx.formData.name = $event),
        d: common_vendor.p({
          type: "text",
          modelValue: _ctx.formData.name
        }),
        e: common_vendor.p({
          label: "姓名",
          name: "name"
        }),
        f: common_vendor.o(($event) => _ctx.formData.email = $event),
        g: common_vendor.p({
          type: "email",
          modelValue: _ctx.formData.email
        }),
        h: common_vendor.p({
          label: "邮箱",
          name: "email"
        }),
        i: common_vendor.o(($event) => _ctx.formData.phone = $event),
        j: common_vendor.p({
          type: "phone",
          modelValue: _ctx.formData.phone
        }),
        k: common_vendor.p({
          label: "电话",
          name: "phone"
        }),
        l: common_vendor.o(($event) => _ctx.submit(_ctx.form)),
        m: common_vendor.o(($event) => common_vendor.unref(user).logout()),
        n: common_vendor.sr("form", "79d015f3-1"),
        o: common_vendor.o(_ctx.submit),
        p: common_vendor.p({
          modelValue: _ctx.formData,
          rules: _ctx.rules
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/apps/uni/def/pages/index/me/page.vue"]]);
wx.createPage(MiniProgramPage);
