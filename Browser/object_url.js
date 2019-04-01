function init() {
  function fib(i) {
    if (i < 1) {
      return 0;
    } else if (i === 1) {
      return 1;
    } else {
      return fib(i - 2) + fib(i - 1);
    }
  }
  addEventListener('message', function (data) {
    postMessage(3);
  });
}

let blob = new Blob(['(' + init.toString() + ')()']);
let url = window.URL.createObjectURL(blob);
let worker = new Worker(url);

window.onmessage = function(e) {
  console.log(e.data);
}

let cnt = 0;
function calcit () {
  setTimeout(function () {
    cnt += 1;
    if(cnt < 10) {
      worker.postMessage(cnt)
      calcit();
    }
  }, 400);
}