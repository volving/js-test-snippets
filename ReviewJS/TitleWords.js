//String.prototype.capitalHead = function(){
//    return this.replace(/\b(\w)(\w*)/ig, function(all, g1, g2) {
//        return g1.toUpperCase() + g2.toLowerCase();
//    });
//}
String.prototype.capitalHead = function () {
    return this.replace(/\b(\w)(\w*)/ig, (g0, g1, g2) => {
        return g1.toUpperCase() + g2.toLowerCase();
    });
}
// 比打散再map要优雅得多

let lyric1 = 'whenever sang my songs';
let lyric2 = 'on the stage,on my own';
console.log(lyric1.capitalHead());
console.log(lyric2.capitalHead());
