function buttonStart() {
    if (document.getElementById('Div1')) {
        if (document.getElementById('Div1').style.display == 'none') {
            document.getElementById('Div1').style.display = 'none';
            document.getElementById('Div2').style.display = 'none';
            document.getElementById('Div3').style.display = 'none';
            document.getElementById('Div7').style.display = 'block';
            document.getElementById('Div5').style.display = 'none';
            document.getElementById("DivStart").style.display = "block";
        }
        else {
            document.getElementById('Div1').style.display = 'none';
            document.getElementById('Div2').style.display = 'block';
            document.getElementById('Div3').style.display = 'none';
            document.getElementById('Div7').style.display = 'block';
            document.getElementById('Div5').style.display = 'none';
        }
    }
}

function button1() {
    if (document.getElementById('Div1')) {
        if (document.getElementById('Div1').style.display == 'none') {
            document.getElementById('Div1').style.display = 'block';
            document.getElementById('Div2').style.display = 'none';
            document.getElementById('Div3').style.display = 'none';
            document.getElementById('Div7').style.display = 'none';
            document.getElementById('Div5').style.display = 'none';
            document.getElementById("DivStart").style.display = "none";
      
        }
        else {
            document.getElementById('Div1').style.display = 'none';
            document.getElementById('Div2').style.display = 'block';
            document.getElementById('Div3').style.display = 'none';
            document.getElementById('Div7').style.display = 'block';
            document.getElementById('Div5').style.display = 'none';
        }
    }
    
}

function button2() {
    if (document.getElementById('Div1')) {
        if (document.getElementById('Div1').style.display == 'none') {
            document.getElementById('Div1').style.display = 'none';
            document.getElementById('Div2').style.display = 'none';
            document.getElementById('Div3').style.display = 'block';
            document.getElementById('Div4').style.display = 'block';
            document.getElementById('Div5').style.display = 'none';
            document.getElementById('Div7').style.display = 'none';
            document.getElementById("DivStart").style.display = "none";
        }
        else {
            document.getElementById('Div1').style.display = 'none';
            document.getElementById('Div2').style.display = 'none';
            document.getElementById('Div3').style.display = 'block';
            document.getElementById('Div4').style.display = 'none';
            document.getElementById('Div5').style.display = 'block';
            document.getElementById('Div7').style.display = 'none';
        }
    }
}

//Timer
let timerOn = true;

function timer(remaining) {
    var m = Math.floor(remaining / 60);
    var s = remaining % 60;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    document.getElementById('timer').innerHTML = m + ':' + s;
    remaining -= 1;
    if (remaining >= 0 && timerOn) {
        setTimeout(function () {
            timer(remaining);
        }, 1000);
        return;
    }
    if (!timerOn) {
        // Do validate stuff here
        return;
    }
    // Do timeout stuff here
    document.getElementById('resend').style.display = 'block';
    document.getElementById('time').style.display = 'none';
}
timer(60);

//whatsapp Logo
function show1() {
    x = document.getElementsByClassName('cart');
    x[0].style.display = 'none';
}

function show2() {
    x = document.getElementsByClassName('cart')
    x[0].style.display = 'block';
}