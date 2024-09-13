

const nextbtn = document.querySelector("#button5");
const conut = document.querySelector(".counterdiv");
const resendbtn = document.querySelector(".resendbtn");
const generateOtp = document.querySelector("#generateOtp");
const VerifyOtp = document.querySelector("#VerifyOtp");
const VerifyBtn = document.querySelector("#VerifyBtn");
var downloadTimer;


generateOtp.addEventListener("click", function (e) {
    e.preventDefault();
    VerifyOtp.classList.remove("d-none");
    resendbtn.classList.add("d-none");
    generateOtp.disabled = true;
    gettime();
   

});

VerifyBtn.addEventListener("click", function (e) {
    e.preventDefault();
    VerifyOtp.classList.add("d-none");
    generateOtp.disabled = false;
    clearInterval(downloadTimer);
}, 1000);


resendbtn.addEventListener("click", function (e) {
    e.preventDefault();
    gettime()
});


function gettime() {
    var timeleft = 10;
    downloadTimer = setInterval(function () {
        timeleft--;
        resendbtn.classList.add("d-none");
        conut.classList.remove("d-none");
        document.getElementById("countdowntimer").textContent = timeleft;
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            conut.classList.add("d-none");
            resendbtn.classList.remove("d-none");
        }

    }, 1000);

}

