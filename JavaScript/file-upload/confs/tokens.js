const tokens = {
    // baseUrl: 'http://127.0.0.1:4444/',
    baseUrl: 'https://fft.cloud.iqiyi.com',
    uploadUrl: '/api/file',
    stateUrl: '/api/chunk/state',
    ttl: 3600,
    method: 'PUT',
    users: [
        {
            name: 'mams_Script0001',
            password: '$G98bkTg'
        },
        {
            name: 'mams_Script0002',
            password: '5tqw_Y&o6'
        }
    ],
    auth: {
        bc: 'feifan',
        secretKey: '43fdaf_dafda31'
    },
    fft: {
        accessKey: 'e2oz8zsn_cwq7loww',
        secretKey: '8878f2747_2734509a9aa8d_e364709dbc'
    },
    client: {
        clientId: 'client_mams_script',
        clientSecret: 'mams-script'
    },
    fileName: 'R34U.mp4',
    filePath: '/Users/volving/Downloads/raw/nas/p1/proxy/a003.mov',
    // filePath: 'test/ff/video/1/2/3/4/5/6/R34U.mp4',
    rid: '3bae18ce-e066-4bbb-a90d-29100e5194cf' // rid: 'd7708a25-d954-4025-9330-f2649137d6a4'
};

module.exports.tokens = tokens;
