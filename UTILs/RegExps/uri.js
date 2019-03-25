let re = /(?:(http|https|mailto)\:\/\/(?:([\w.]*)@)?(\w+(?:\.\w*)*)((?:\/\w*)*\/?)((?:\?\w+=\w*)(?:\&\w+=\w*)*)?(\#\w*)?)/i; //query with '?', hash with '#'
let re2 = /(?:(http|https|mailto)\:\/\/(?:([\w.]*)@)?(\w+(?:\.\w*)*)((?:\/\w*)*\/?)((?:\?\w+=\w*)(?:\&\w+=\w*)*)?(?:\#(\w*)?)?)/i; //query with '?', hash without '#'
let re3 = /(?:(http|https|mailto)\:\/\/(?:([\w.]*)@)?(\w+(?:\.\w*)*)((?:\/\w*)*\/?)(?:\?((?:\w+=\w*)+(?:&\w+=\w*)*)?)?(\#(?:\w*)?)?)/i; //query without '?', hash with '#'
let re4 = /(?:(http|https|mailto)\:\/\/(?:([\w.]*)@)?(\w+(?:\.\w*)*)((?:\/\w*)*\/?)(?:\?((?:\w+=\w*)+(?:&\w+=\w*)*)?)?(?:\#(\w*)?)?)/i; //query without '?', hash without '#'

let res = [re, re2, re3, re4];
let ss = ['http://www.google.com/pages/i?id=1234#index', 'https://www.google.com/pages/i?id=1234&type=x9#index', 'mailto://x@vno.io'];

res.map(r => {
    show(r);
    ss.map(s => {
        show(s)
        show(r.exec(s));
    });
    br();
})

function show(v) {
    console.log(v);
}

function br() {
    show('\n');
}

/*
/(?:(http|https|mailto)\:\/\/(?:([\w.]*)@)?(\w+(?:\.\w*)*)((?:\/\w*)*\/?)((?:\?\w+=\w*)(?:\&\w+=\w*)*)?(\#\w*)?)/i
http://www.google.com/pages/i?id=1234#index
[ 'http://www.google.com/pages/i?id=1234#index',
  'http',
  undefined,
  'www.google.com',
  '/pages/i',
  '?id=1234',
  '#index',
  index: 0,
  input: 'http://www.google.com/pages/i?id=1234#index',
  groups: undefined ]
https://www.google.com/pages/i?id=1234&type=x9#index
[ 'https://www.google.com/pages/i?id=1234&type=x9#index',
  'https',
  undefined,
  'www.google.com',
  '/pages/i',
  '?id=1234&type=x9',
  '#index',
  index: 0,
  input: 'https://www.google.com/pages/i?id=1234&type=x9#index',
  groups: undefined ]
mailto://x@vno.io
[ 'mailto://x@vno.io',
  'mailto',
  'x',
  'vno.io',
  '',
  undefined,
  undefined,
  index: 0,
  input: 'mailto://x@vno.io',
  groups: undefined ]


/(?:(http|https|mailto)\:\/\/(?:([\w.]*)@)?(\w+(?:\.\w*)*)((?:\/\w*)*\/?)((?:\?\w+=\w*)(?:\&\w+=\w*)*)?(?:\#(\w*)?)?)/i
http://www.google.com/pages/i?id=1234#index
[ 'http://www.google.com/pages/i?id=1234#index',
  'http',
  undefined,
  'www.google.com',
  '/pages/i',
  '?id=1234',
  'index',
  index: 0,
  input: 'http://www.google.com/pages/i?id=1234#index',
  groups: undefined ]
https://www.google.com/pages/i?id=1234&type=x9#index
[ 'https://www.google.com/pages/i?id=1234&type=x9#index',
  'https',
  undefined,
  'www.google.com',
  '/pages/i',
  '?id=1234&type=x9',
  'index',
  index: 0,
  input: 'https://www.google.com/pages/i?id=1234&type=x9#index',
  groups: undefined ]
mailto://x@vno.io
[ 'mailto://x@vno.io',
  'mailto',
  'x',
  'vno.io',
  '',
  undefined,
  undefined,
  index: 0,
  input: 'mailto://x@vno.io',
  groups: undefined ]


/(?:(http|https|mailto)\:\/\/(?:([\w.]*)@)?(\w+(?:\.\w*)*)((?:\/\w*)*\/?)(?:\?((?:\w+=\w*)+(?:&\w+=\w*)*)?)?(\#(?:\w*)?)?)/i
http://www.google.com/pages/i?id=1234#index
[ 'http://www.google.com/pages/i?id=1234#index',
  'http',
  undefined,
  'www.google.com',
  '/pages/i',
  'id=1234',
  '#index',
  index: 0,
  input: 'http://www.google.com/pages/i?id=1234#index',
  groups: undefined ]
https://www.google.com/pages/i?id=1234&type=x9#index
[ 'https://www.google.com/pages/i?id=1234&type=x9#index',
  'https',
  undefined,
  'www.google.com',
  '/pages/i',
  'id=1234&type=x9',
  '#index',
  index: 0,
  input: 'https://www.google.com/pages/i?id=1234&type=x9#index',
  groups: undefined ]
mailto://x@vno.io
[ 'mailto://x@vno.io',
  'mailto',
  'x',
  'vno.io',
  '',
  undefined,
  undefined,
  index: 0,
  input: 'mailto://x@vno.io',
  groups: undefined ]


/(?:(http|https|mailto)\:\/\/(?:([\w.]*)@)?(\w+(?:\.\w*)*)((?:\/\w*)*\/?)(?:\?((?:\w+=\w*)+(?:&\w+=\w*)*)?)?(?:\#(\w*)?)?)/i
http://www.google.com/pages/i?id=1234#index
[ 'http://www.google.com/pages/i?id=1234#index',
  'http',
  undefined,
  'www.google.com',
  '/pages/i',
  'id=1234',
  'index',
  index: 0,
  input: 'http://www.google.com/pages/i?id=1234#index',
  groups: undefined ]
https://www.google.com/pages/i?id=1234&type=x9#index
[ 'https://www.google.com/pages/i?id=1234&type=x9#index',
  'https',
  undefined,
  'www.google.com',
  '/pages/i',
  'id=1234&type=x9',
  'index',
  index: 0,
  input: 'https://www.google.com/pages/i?id=1234&type=x9#index',
  groups: undefined ]
mailto://x@vno.io
[ 'mailto://x@vno.io',
  'mailto',
  'x',
  'vno.io',
  '',
  undefined,
  undefined,
  index: 0,
  input: 'mailto://x@vno.io',
  groups: undefined ]
*/