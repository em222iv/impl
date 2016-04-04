module.exports = {
  login(username, pass) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        if(username=="erik")
          resolve(true);
        reject(false);
      }, 1000);
    });
  },
  logout(auth) {
    setTimeout(function () {
      return false;
    }, 1000);
  },
};
