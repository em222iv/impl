
'use strict';
module.exports = {
  login:function(username, password) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        // if(username==="tester" && password==="password")
        if(username==="e")
          resolve(true);
        reject(false);
      }, 1000);
    });
  },
  logout:function() {
    setTimeout(function () {
      return true;
    }, 1000);
  },
};
