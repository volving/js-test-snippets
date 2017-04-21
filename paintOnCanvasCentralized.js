var paintOnCanvas = function(image, canvas) {
    if (image && canvas) {
        var iw = image.width,
            ih = image.height,
            cw = canvas.width,
            ch = canvas.height;
        var context = canvas.getContext('2d');
        var true_width = 0,
            true_height = 0,
            start_x = 0,
            start_y = 0,
            dest_x = 0,
            dest_y = 0;
        var margin_x = 0,
            margin_y = 0;
        //var r = (iw/ih)/(cw/ch);
        //var r = iw*ch/ih/cw;
        var ir = iw / ih;
        var cr = cw / ch; //畫布寬高比
        var r = ir / cr;
        if (r > 1) {
            true_width = cw;
            true_height = true_width / ir
            margin_y = (ch - true_height) / 2
        } else if (r < 1) {
            true_height = ch;
            true_width = ch * ir;
            margin_x = (cw - true_width) / 2;
        } else {
            true_width = cw;
            true_height = ch;
        }
        context.drawImage(image, 0, 0, iw, ih, margin_x, margin_y, true_width, true_height);
    }
};
