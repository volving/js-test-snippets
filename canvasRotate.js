function rotate(canvas, painter, translateX, translateY, pos, angle, img) {
	if (painter && pos && canvas) {
		painter.clearRect(0, 0, canvas.width, canvas.height);
		painter.save();
		painter.translate(translateX, translateY);
		painter.rotate(angle * Math.PI / 180);
		painter.drawImage(img, pos.sx, pos.sy, pos.sw, pos.sh, pos.dx - (translateX), pos.dy - (translateY), pos.dw, pos.dh);
		painter.restore();
	}
}