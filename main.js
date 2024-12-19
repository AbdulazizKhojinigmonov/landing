

function saleDate(){
    const day = document.getElementsByClassName("time")[0];
    const hour = document.getElementsByClassName("time")[1];
    const minuts = document.getElementsByClassName("time")[2];
    const seconds = document.getElementsByClassName("time")[3];
    const finishDate = new Date(2024,11,31);
    const currentDate = new Date();

    const date = finishDate - currentDate;
  day.innerHTML = Math.trunc (date / (1000 * 60 * 60 * 24))
    hour.innerHTML = Math.trunc((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minuts.innerHTML = Math.trunc((date % (1000 * 60 * 60)) / (1000 * 60))
    seconds.innerHTML = Math.trunc(date % (1000 * 60) / 1000)
}

saleDate();
setInterval(function(){
    saleDate();
}, 1000);