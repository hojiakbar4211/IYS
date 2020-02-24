var ss=30;
var mm=43;
var hh=9;
var day=33;

setInterval(function () {
    ss--;
    if(ss <=0){
        mm--;
        ss = 59;

    }
    if(mm <=0){
        hh--;
        mm = 0;
    }
    if(hh <=0){
        hh = 12;
    }
    document.getElementById("day").innerText=day;
    document.getElementById("hour").innerText=hh;
    document.getElementById("minute").innerText=mm;
    document.getElementById("second").innerText=ss;

    console.log(hh+":"+mm+":"+ss);
}, 1000);