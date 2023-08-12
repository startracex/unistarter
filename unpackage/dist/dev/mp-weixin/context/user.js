"use strict";
const common_vendor = require("../common/vendor.js");
const utils_link = require("../utils/link.js");
const key = "user";
const useUser = common_vendor.defineStore("userinfo", {
  state: () => {
    let data = null;
    common_vendor.index.getStorage({
      key,
      success: (res) => {
        data = JSON.parse(res.data);
      }
    });
    return {
      userinfo: data
    };
  },
  actions: {
    login(data) {
      if (data) {
        common_vendor.index.setStorage({
          key,
          data: JSON.stringify(data)
        });
        this.userinfo = data;
      }
    },
    logout(to = "/") {
      common_vendor.index.removeStorage({
        key
      });
      this.userinfo = null;
      utils_link.jump(to);
    },
    data(key2) {
      if (key2 && this.userinfo) {
        return this.userinfo[key2];
      }
      return this.userinfo;
    },
    update(data) {
      const ui = this.userinfo;
      for (const key2 in data) {
        if (Object.hasOwnProperty.call(data, key2)) {
          if (typeof data[key2] === "object") {
            ui[key2] = data[key2];
          } else {
            if (ui[key2] !== data[key2]) {
              ui[key2] = data[key2];
            }
          }
        }
      }
      common_vendor.index.setStorage({
        key,
        data: JSON.stringify(ui)
      });
    }
  }
});
exports.useUser = useUser;
