var querystring = require('querystring');
var http = require('http');
var fs = require('fs');

function PostCode(codestring) {
    // Build the post string from an object
    var post_data = querystring.stringify({
        'compilation_level': 'ADVANCED_OPTIMIZATIONS',
        'output_format': 'json',
        'output_info': 'compiled_code',
        'warning_level': 'QUIET',
        'js_code': codestring
    });

    // An object of options to indicate where to post to
    //	'http://sensoro-cloud.chinacloudapp.cn:8001/station/100001/heartbeat'
    var post_options = {
        host: 'sensoro-cloud.chinacloudapp.cn',
        port: '8001',
        path: '/station/100001/heartbeat',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(post_data)
        }
    };

    // Set up the request
    var post_req = http.request(post_options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
            console.log('Response: ' + chunk);
        });
    });

    // post the data
    post_req.write(post_data);
    post_req.end();
}


{
    "body": "	
    compilation_level = ADVANCED_OPTIMIZATIONS
    output_format = json
    output_info = compiled_code
    warning_level = QUIET
    js_code = % 7 B % 22 name % 22 % 3 A % 22 heartbeat % 22 % 2 C % 22 rate % 22 % 3 A6 % 2 C % 22 status % 22 % 3 A % 22 status % 20 string % 22 % 7 D ",
    "status": 400
}


{
    "name": "heartbeat",
    "rate": 6,
    "status": "status string"
}
Response: {
        "body": "compilation_level : ADVANCED_OPTIMIZATIONS
        output_format: json
        output_info: compiled_code
        warning_level: QUIET
        js_code: {
            "name": "heartbeat",
            "rate": 6,
            "status": "status string"
        }
        ","
        status ":400
}
