var countDate = new Date('May 30, 2021 00:00:00').getTime();

const newYear = () => {
    var now = new Date().getTime();

    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

    var ptime  = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();

    gap = countDate - now;

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var d = Math.floor(gap / (day));
    var h = Math.floor((gap % (day)) / (hour));
    var m = Math.floor((gap % (hour)) / (minute));
    var s = Math.floor((gap % (minute)) / second);

    
    document.getElementById('todaydate').innerText = date;
    document.getElementById('attime').innerText = ptime;

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}
setInterval(() => {
    newYear();
}, 100)


