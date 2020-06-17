document.addEventListener('DOMContentLoaded', () => {
	const
		hero = document.querySelector('.hero'),
		settingsBtn = document.querySelector('.header__btn'),
		settingsBox = document.querySelector('.settings'),
		pomidoroCurrentSelector = document.querySelector('.hero__count-item--current'),
		pomidoroAllSelector = document.querySelector('.hero__count-item--all'),
		timer = document.querySelector('.hero__timer'),
		startBtn = document.querySelector('.hero__start'),
		timeWorkSelector = document.querySelector('#timeWork'),
		timeLittleBreakSelector = document.querySelector('#timeLittleBreak'),
		timeBigBreakSelector = document.querySelector('#timeBigBreak'),
		roundSelector = document.querySelector('#round'),
		pomodoroInDaySelector = document.querySelector('#pomodoroInDay'),
		timeWorkDec = document.querySelector('#timeWorkDec'),
		timeWorkInc = document.querySelector('#timeWorkInc'),
		timeLittleBreakDec = document.querySelector('#timeLittleBreakDec'),
		timeLittleBreakInc = document.querySelector('#timeLittleBreakInc'),
		timeBigBreakDec = document.querySelector('#timeBigBreakDec'),
		timeBigBreakInc = document.querySelector('#timeBigBreakInc'),
		roundDec = document.querySelector('#roundDec'),
		roundInc = document.querySelector('#roundInc'),
		pomodoroInDayDec = document.querySelector('#pomodoroInDayDec'),
		pomodoroInDayInc = document.querySelector('#pomodoroInDayInc');

	let
		timeWork = 25,
		timeLittleBreak = 5,
		timeBigBreak = 20,
		round = 4,
		pomidoroCurrent = 1,
		pomodoroInDay = 8,
		start = false,
		intervalTimer;

	function initSettings() {
		timeWorkSelector.value = timeWork;
		timeLittleBreakSelector.value = timeLittleBreak;
		timeBigBreakSelector.value = timeBigBreak;
		roundSelector.value = round;
		pomodoroInDaySelector.value = pomodoroInDay;
		pomidoroCurrentSelector.textContent = pomidoroCurrent;
		pomidoroAllSelector.textContent = pomodoroInDay;
		timer.textContent = `${timeWork}:00`;
		clearInterval(intervalTimer);
	}

	let pomodoroBreak = false;

	function startTimer() {
		let
			deadline = timeWork * 60,
			min = Math.floor(deadline / 60),
			sec = deadline - (min * 60);
		intervalTimer = setInterval(startWork, 1000);


		function startWork() {
			if (deadline == 0) {
				startBreak();
			} else {
				deadline--;
				min = Math.floor(deadline / 60);
				sec = deadline - (min * 60);
				hero.style.backgroundColor = '#dd5656';
				timer.textContent = `${min}:${sec}`;
			}
		}

		function startBreak() {

		}
	}

	settingsBtn.addEventListener('click', () => {
		settingsBox.classList.toggle('settings--active');
	});

	startBtn.addEventListener('click', () => {
		if (start) {
			startBtn.textContent = 'Старт';
			start = false;
			initSettings();
		} else {
			startBtn.textContent = 'Стоп';
			start = true;
			startTimer();
		}
	});

	timeWorkDec.addEventListener('click', () => {
		timeWork--;
		initSettings();
	});

	timeWorkInc.addEventListener('click', () => {
		timeWork++;
		initSettings();
	});

	timeLittleBreakDec.addEventListener('click', () => {
		timeLittleBreak--;
		initSettings();
	});

	timeLittleBreakInc.addEventListener('click', () => {
		timeLittleBreak++;
		initSettings();
	});

	timeBigBreakDec.addEventListener('click', () => {
		timeBigBreak--;
		initSettings();
	});

	timeBigBreakInc.addEventListener('click', () => {
		timeBigBreak++;
		initSettings();
	});

	roundDec.addEventListener('click', () => {
		round--;
		initSettings();
	});

	roundInc.addEventListener('click', () => {
		round++;
		initSettings();
	});

	pomodoroInDayDec.addEventListener('click', () => {
		pomodoroInDay--;
		initSettings();
	});

	pomodoroInDayInc.addEventListener('click', () => {
		pomodoroInDay++;
		initSettings();
	});



	initSettings();
});