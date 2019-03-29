function Vpromise(constructor) {
  let z = this;
  z.status = "pending";
  z.value = undefined; //if pending->resolved
  z.reason = undefined; //if pending->rejected
  z.onFullfilledArray = []; //to deal with async(resolved)
  z.onRejectedArray = []; //to deal with async(rejeced)
  function resolve(value) {
    //pending->resolved
    if (z.status === "pending") {
      z.status = "resolved";
      z.value = value;
      z.onFullfilledArray.forEach(function (f) {
        f(z.value);
      });
    }
  }

  function reject(reason) {
    if (z.status === "pending") {
      z.status = "rejected";
      z.reason = reason;
      z.onRejectedArray.forEach(function (f) {
        f(z.reason);
      })
    }
  }
  //According to the definition that the function "constructor" accept two parameters
  //error catch
  try {
    constructor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}
Vpromise.prototype.then = function (onFullfilled, onRejected) {
  onFullfilled = typeof onFullfilled === "function" ? onFullfilled : function (x) {
    return x
  };
  onRejected = typeof onRejected === "function" ? onRejected : function (e) {
    throw e
  };
  let z = this;
  let promise2;
  switch (z.status) {
    case "pending":
      promise2 = new Vpromise(function (resolve, reject) {
        z.onFullfilledArray.push(function () {
          setTimeout(function () {
            try {
              let dex = onFullfilled(z.value);
              resolvePromise(promise2, dex, resolve, reject);
            } catch (e) {
              reject(e)
            }
          })
        });
        z.onRejectedArray.push(function () {
          setTimeout(function () {
            try {
              let dex = onRejected(z.reason);
              resolvePromise(promise2, dex, resolve, reject);
            } catch (e) {
              reject(e)
            }
          })
        })
      });
      break;
    case "resolved":
      promise2 = new Vpromise(function (resolve, reject) {
        setTimeout(function () {
          try {
            let dex = onFullfilled(z.value);
            resolvePromise(promise2, dex, resolve, reject);
          } catch (e) {
            reject(e)
          }
        })
      });
      break;
    case "rejected":
      promise2 = new Vpromise(function (resolve, reject) {
        setTimeout(function () {
          try {
            let dex = onRejected(z.reason);
            resolvePromise(promise2, dex, resolve, reject);
          } catch (e) {
            reject(e)
          }
        })
      });
      break;
    default:
  }
  return promise2;
}

function resolvePromise(promise, dex, resolve, reject) {  //这里的resolve可是 "正宗的"
  // promise must != dex
  if (promise === dex) {
    return reject(new TypeError("Cyclic reference"));
  }
  let isUsed;
  if (dex !== null && (typeof dex === "object" || typeof dex === "function")) {
    try {
      let then = dex.then;
      if (typeof then === "function") {
        //
        then.call(dex, function (dex_) {
          if (isUsed) return;
          isUsed = true;
          resolvePromise(promise, dex_, resolve, reject)
        }, function (e) {
          if (isUsed) return;
          isUsed = true;
          reject(e);
        })
      } else {
        resolve(dex);
      }
    } catch (e) {
      if (isUsed) return;
      isUsed = true;
      reject(e);
    }
  } else {
    resolve(dex);
  }
}
Vpromise.deferred = function () {
  let dfd = {};
  dfd.promise = new Vpromise(function (resolve, reject) {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
}
module.exports = Vpromise;