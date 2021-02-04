const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const md5file = require('md5-file');

function copyFile(src, dest, start = 0, opt, cb) {
  let srcPath = path.resolve(src);
  let destPath = path.resolve(dest);
  let reader, writer;

  //   let hasher = getHasher();
  let srcsum = md5file.sync(srcPath);
  let hashsum, destsum;
  let cnt = 0;
  reader = fs.createReadStream(srcPath, { start });
  reader.on('data', function(chunk) {
    // console.log("cnt: ", cnt++, " ", writer.bytesWritten);
    if (opt.paused) {
      reader.pause();
      reader.unpipe(writer);
      console.log('writer\n', writer);
    }
  });
  reader.on('error', function(err) {
    console.log('error occured while reading...');
  });
  reader.on('end', function() {
    // hashsum = hasher.digest("hex");
    destsum = md5file.sync(destPath);
    if (srcsum === destsum) {
      console.log('hahaha, copy task accomplished!');
      //TODO: update db about this task
      cb(null, srcsum);
    } else {
      cb(new Error('md5 校验和不正确, 复制失败', srcsum, destsum));
    }
  });

  // determine flags
  let flags = 'w';
  try {
    let stat = fs.statSync(destPath);
    if (stat) {
      flags = 'r+';
    }
  } catch (err) {
    console.log('no such file~ flags is w');
  }
  writer = fs.createWriteStream(destPath, { start, flags });
  reader.pipe(writer);
}

function getHasher(type = 'md5') {
  return crypto.createHash(type);
}

copyFile(
  '/Users/volving/Downloads/A004C013_160226_R4RF.mov',
  '/Users/volving/Downloads/a003.mov',
  2228224,
  function(err, md5) {
    if (err) {
      return console.log(err);
    }
    console.log('md5:', md5);
  }
);
