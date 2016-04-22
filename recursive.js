var currentPosition = parseInt(s.style.left);
var slideSpan = (currentPosition < settings.position) ? settings.slideSpan : -(settings.slideSpan);
console.log('currentPosition:', currentPosition, '\nslideSpan:', slideSpan, '\nsettings.position:', settings.position);
var slide_animate = function() {
    if (currentPosition === settings.position) {
        clickSemophore = true;
        return;
    } else {
        currentPosition += slideSpan;
        v.style.left = currentPosition + 'px';
        setTimeout(slide_animate, settings.interval);
    }
};
slide_animate();
console.log(settings.index + '/' + settings.slideAmount);
