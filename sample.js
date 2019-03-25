var a2;
function getMaxDifference() {
    var min1;
    var max1;
    var min2;
    var max2;
    var length;
    var a1 = arguments[0];
    min1 = a1[0].length;
    max1 = a1[0].length;
    for (var i = 1; i < a1.length; i++) {
        length = a1[i].length;
        if (min1 > length) {
            min1 = length;
        }
        if (max1 < length) {
            max1 = length;
        }
    }
    min2 = arguments[1].length;
    max2 = arguments[1].length;
    for (var i = 1; i < arguments.length; i++) {
        length = arguments[i].length;
        if (min2 > length) {
            min2 = length;
        }
        if (max2 < length) {
            max2 = length;
        }
    }
    if (Math.abs(max1 - min2) > Math.abs(max2 - min1)) {
        console.log(Math.abs(max1 - min2));
    }
    else {
        console.log(Math.abs(max2 - min1));
    }
}
a2 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
// @ts-ignore
getMaxDifference(a2, "cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww");
