document.addEventListener('click', function (e) {
        // Hamburger menu
        if (e.target.classList.contains('hamburger-toggle')) {
            e.target.children[0].classList.toggle('active');
        }
    })
    // Get references to the buttons and divs
var button4 = document.getElementById('button4');
var div0 = document.getElementById('hiddenDiv1');
// Add click event listeners to each button
button4.addEventListener('click', function () {
    div0.style.display = 'block';
});
var formDIV = document.getElementById('formDIV');
var questions = document.getElementById('questions');
var button5 = document.getElementById('button5');
var button6 = document.getElementById('button6');
const button7 = document.getElementById('button7');
var form = document.getElementById('form');
var form_1 = document.getElementById('form_1');
var full_h = document.getElementById('full_h');
var show_h = document.getElementById('show_h');
var form_2 = document.getElementById('form_2');
var form_3 = document.getElementById('form_3');
var thankyou = document.getElementById('thankyou');
var otp = document.getElementById('otp');
const nextbtn = document.querySelector("#button5");
const EnterOtpHere = document.getElementById("EnterOtpHere");
const conut = document.querySelector(".counterdiv");
const buttonnext = document.getElementById('buttonnext');
const otpsend = document.getElementById('otpsend');

// Add a focus event listener to the input field
button4.addEventListener('click', function () {
    // Show the div when the input field gains focus
    formDIV.style.display = 'none';
    form.style.display = 'block';
    form_1.style.display='none';
    thankyou.style.display = 'none';
    otp.style.display = 'none';
    show_h.style.display = 'none';
});


// Add a focus event listener to the input field
button7.addEventListener('click', function () {
   formDIV.style.display = 'none';
    form.style.display = 'none';
    thankyou.style.display = 'block';
    thankyou.classList.remove('d-none');
    otp.style.display = 'none';
    questions.style.display ='none'
    show_h.style.display = 'none';
    
});

// Add a focus event listener to the input field
button5.addEventListener('click', function (event) {
    // Show the div when the input field gains focus
    EnterOtpHere.classList.remove('d-none');
    button5.classList.add('d-none');
    otpsend.classList.remove('d-none');
    button7.classList.remove('d-none');

    startCountdown(10);
    resendbtn.disabled = true;

});

const resendbtn = document.getElementById("resendbtn");
const counterdiv = document.getElementById('counterdiv');
let countdownInterval;

resendbtn.addEventListener('click', function() {
    startCountdown(10); // Start countdown from 10 seconds
    resendbtn.disabled = true;
});

function startCountdown(seconds) {
    let remainingTime = seconds;
    updateTimerDisplay(remainingTime);

    // Clear any existing interval to avoid multiple intervals running
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    countdownInterval = setInterval(function() {
        remainingTime--;
        updateTimerDisplay(remainingTime);

        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            resendbtn.disabled = false;
        }
    }, 1000); // Update every second
}

function updateTimerDisplay(seconds) {
    counterdiv.textContent = `Didn’t get your OTP? Resend available in ${seconds} s`;
}

