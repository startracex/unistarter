"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_rules_email = require("../../utils/rules/email.js");
const utils_rules_password = require("../../utils/rules/password.js");
const context_user = require("../../context/user.js");
const utils_link = require("../../utils/link.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms + common_vendor.unref(A))();
}
const A = () => "../../components/Link.js";
const __default__ = {
  data() {
    return {
      FormData: {
        email: "",
        password: ""
      },
      rules: {
        email: {
          rules: utils_rules_email.EmailRules
        },
        password: {
          rules: utils_rules_password.PasswordRules
        }
      }
    };
  },
  methods: {
    submit() {
      const userhook = context_user.useUser();
      this.$refs.form.validate().then((res) => {
        common_vendor.Ds.callFunction({
          name: "testing",
          data: res
        }).then((res2) => {
          const userdata = res2.result.data;
          userhook.login(userdata);
          common_vendor.index.showToast({
            title: "登录成功",
            icon: "success",
            duration: 2e3
          });
          setTimeout(() => {
            utils_link.jump("/");
          }, 1400);
        });
      }).catch((err) => {
      });
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "page",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => _ctx.FormData.email = $event),
        b: common_vendor.p({
          prefixIcon: "email-filled",
          placeholder: "电子邮箱",
          modelValue: _ctx.FormData.email
        }),
        c: common_vendor.p({
          name: "email",
          required: true
        }),
        d: common_vendor.o(($event) => _ctx.FormData.password = $event),
        e: common_vendor.p({
          prefixIcon: "locked-filled",
          type: "password",
          placeholder: "密码",
          modelValue: _ctx.FormData.password
        }),
        f: common_vendor.p({
          name: "password",
          required: true
        }),
        g: common_vendor.o(($event) => _ctx.submit("form")),
        h: common_vendor.sr("form", "9bb0e94a-0"),
        i: common_vendor.o(_ctx.onsubmit),
        j: common_vendor.p({
          modelValue: _ctx.FormData,
          rules: _ctx.rules
        }),
        k: common_vendor.p({
          url: "/signup"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/apps/uni/def/pages/login/page.vue"]]);
wx.createPage(MiniProgramPage);
