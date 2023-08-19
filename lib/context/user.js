import { defineStore } from 'pinia';
import { jump } from "~/utils/link.js"
const key = "user"
export const useUser = defineStore('userinfo', {
   state: () => {
      // 从本地获取用户信息
      let data = null
      uni.getStorage({
         key,
         success: (res) => {
            data = JSON.parse(res.data)
         }
      })
      return {
         userinfo: data
      };
   },
   actions: {
      login(data) {
         if (data) {
            // 保存用户信息到本地
            uni.setStorage({
               key,
               data: JSON.stringify(data),
            })
            this.userinfo = data;
         }
      },
      logout(to = "/") {
         // 清除本地用户信息
         uni.removeStorage({
            key,
         })
         this.userinfo = null;
         jump(to)
      },
      data(key) {
         if (key && this.userinfo) {
            return this.userinfo[key]
         }
         return this.userinfo;
      },
      update(data) {
         const ui = this.userinfo
         // 便利更新用户信息,将相同的key覆盖到旧的数据上
         for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
               // 如果新值是对象,直接覆盖
               if (typeof data[key] === "object") {
                  ui[key] = data[key]
               } else {
                  // 如果新旧不一样,则更新
                  if (ui[key] !== data[key]) {
                     ui[key] = data[key]
                  }
               }
            }
         }
         // 保存用户信息到本地
         uni.setStorage({
            key,
            data: JSON.stringify(ui),
         })
      }
   },
});
