function showTime(){
    var date = new Date(); // 0 - 12
    var h = date.getHours(); // 0 - 59
    var m = date.getMinutes(); // 0 - 59
    var time = h + ":" + m + ":" + s + ""
    document.getElementById("MyClockDisplay").innerText = time;
    setTimeout(showTime,1000);
}  