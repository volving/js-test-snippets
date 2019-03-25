let re = /(?:(http|https|mailto)\:\/\/(?:([\w.]*)@)?(\w+(?:\.\w*)*)((?:\/\w*)*\/?)((?:\?\w+=\w*)(?:\&\w+=\w*)*)?(\#\w*)?)/i; //query with '?', hash with '#'

console.log(re.exec('http://www.google.com/pages/i?id=1234#index'));
console.log(re.exec('https://www.google.com/pages/i?id=1234&type=x9#index'));
console.log(re.exec('mailto://x@vno.io'));