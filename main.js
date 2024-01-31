var h1 = document.getElementsByTagName('h1')[0];
var start = document.getElementById('strt');
var stopp = document.getElementById('stp');
var reset = document.getElementById('rst');
var mili = 0;
var sec = 0;
var min = 0;
var hrs = 0;
var t;

function runTime() {
    mili++;
    if (mili >= 99) {
        mili = 0;
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
            if (min >= 60) {
                min = 0;
                hrs++;
            }
        }

    }
};

function add() {
    runTime();
    h1.textContent = (hrs > 9 ? hrs : "0" + hrs) + ":" + (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec) + ":" + (mili > 9 ? mili : "0" + mili);
    timer();
}

function timer() {
    t = setTimeout(add, 1);
}

timer();
document.getElementById('strt').onclick = timer;
document.getElementById('stp').onclick = function () {
    clearTimeout(t);
}
reset.onclick = function () {
    h1.textContent = "00:00:00:00";
    mili = 0; sec = 0; min = 0; hrs = 0;
}