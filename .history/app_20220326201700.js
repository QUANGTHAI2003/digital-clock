function clock() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var period = "AM"

    document.querySelector(".hours").innerHTML = hours + ":" + minutes + ":" + seconds + " " + period;
}