
var centralContainize = function(src, dest, scale, customWidth, customHeight) {
    if ('object' === typeof src && 'object' === typeof dest) {
        var sw = customWidth || src.naturalWidth;
        var sh = customHeight || src.naturalHeight;
        var dw = dest.width;
        var dh = dest.height;
        var pos = {
            sx: 0,
            sy: 0,
            sw: src.naturalWidth,
            sh: src.naturalHeight,
            dx: 0,
            dy: 0,
            dw: dest.width,
            dh: dest.height
        };
        var r = sw * dh / sh / dw;
        var rr = 1;
        // contains:
        // cover:
        if (isNaN(r)) {
            return null;
        } else {
            if (r === 1) {
                return pos;
            } else if (r > 1) {
                rr = sh / sw;
                pos.dh = dw * rr;
            } else {
                rr = sw / sh;
                pos.dw = dh * rr;
            }
            if (scale) {
                pos.dh *= scale;
                pos.dw *= scale;
            }
            pos.dy = (dh - pos.dh) >> 1;
            pos.dx = (dw - pos.dw) >> 1;
            return pos;
        }
    }
    return null;
};
