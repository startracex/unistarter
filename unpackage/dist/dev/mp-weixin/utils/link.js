"use strict";
const common_vendor = require("../common/vendor.js");
function parse(url) {
  if (!url || url === "")
    return null;
  if (url === "/")
    return "/";
  if (url[0] !== "/") {
    return "/pages/" + url + "/page";
  } else {
    return "/pages" + url + "/page";
  }
}
function jump(url) {
  if (url === "/") {
    common_vendor.wx$1.switchTab({
      url: "/pages/index/page"
    });
  } else {
    if (url[0] !== "/") {
      url = "/pages/" + url + "/page";
    } else {
      url = "/pages" + url + "/page";
    }
    common_vendor.wx$1.navigateTo({
      url
    });
  }
}
exports.jump = jump;
exports.parse = parse;
