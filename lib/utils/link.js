export function parse(url) {
   if (!url || url === '')
      return null;
   if (url === '/')
      return '/';
   if (url[0] !== '/') {
      return '/pages/' + url + "/page";
   } else {
      return '/pages' + url + "/page";
   }
}
export function jump(url) {
   if (url === "/") {
      wx.switchTab({
         url: '/pages/index/page'
      });
   } else {

      if (url[0] !== '/') {
         url = '/pages/' + url + "/page";
      } else {
         url = '/pages' + url + "/page";
      }
      wx.navigateTo({
         url: url
      });
   }
}
