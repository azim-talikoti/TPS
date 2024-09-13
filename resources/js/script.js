(() => {
    const $ = document.querySelector.bind(document);
    let timeRotate = 7000;
    let currentRotate = 0;
    let isRotating = false;
    const wheel = $('.wheel');
    const btnWheel = $('.btn--wheel');
    const showMsg = $('.msg');
    const listGift = [
        {
            text: '50 &nbsp;Points'
            , percent: 10 / 100
        , }
        , {
            text: '500 Coins'
            , percent: 10 / 100
        , }
        , {
            text: '100 Points'
            , percent: 5 / 100
        , }
        , {
            text: '750 Coins'
            , percent: 5 / 100
        , }
        , {
            text: '200 Points'
            , percent: 5 / 100
        , }
        , {
            text: '300 Coins'
            , percent: 40 / 100
        , },

	];
    const size = listGift.length;
    const rotate = 360 / size;
    const skewY = 90 - rotate;
    listGift.map((item, index) => {
        const elm = document.createElement('li');
        elm.style.transform = `rotate(${
			rotate * index
		}deg) skewY(-${skewY}deg)`;
        if (index % 2 == 0) {
            elm.innerHTML = `<p style="transform: skewY(${skewY}deg) rotate(${
				rotate / 2
			}deg);" class="text text-1">
			<b>${item.text}</b>
		</p>`;
        }
        else {
            elm.innerHTML = `<p style="transform: skewY(${skewY}deg) rotate(${
				rotate / 2
			}deg);" class="text text-2">
		<b>${item.text}</b>
		</p>`;
        }
        wheel.appendChild(elm);
    });
    const start = () => {
        showMsg.innerHTML = '';
        isRotating = true;
        const random = Math.random();
        const gift = getGift(random);
        currentRotate += 360 * 10;
        rotateWheel(currentRotate, gift.index);
        showGift(gift);
    };
    const rotateWheel = (currentRotate, index) => {
        $('.wheel').style.transform = `rotate(${
			
			currentRotate - index * rotate - rotate / 2
		}deg)`;
    };
    const getGift = randomNumber => {
        let currentPercent = 0;
        let list = [];
        listGift.forEach((item, index) => {
            currentPercent += item.percent;
            if (randomNumber <= currentPercent) {
                list.push({...item, index
                });
            }
        });
        return list[0];
    };
    const showGift = gift => {
        let timer = setTimeout(() => {
            isRotating = false;
            showMsg.innerHTML = `<div class="spin_pad"><div>Yeahhhh!!! <br> You just won <br> <b>${gift.text}</b>  <br />  <button type="button" data-bs-toggle="modal" data-bs-target="#HelloModal" class="btn1 btn-outline-light rounded-pill mt-3 but">Click here to claim</button></div></div>`;
            document.getElementById("congrats").style.display = "block";
            clearTimeout(timer);
        }, timeRotate);
    };
    btnWheel.addEventListener('click', () => {
        !isRotating && start();
    });
})();


