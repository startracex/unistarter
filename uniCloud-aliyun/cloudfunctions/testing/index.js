'use strict';
exports.main = async (event, context) => {
   return {
      data: {
         ...event,
         name: "test"
      }
   }
}
