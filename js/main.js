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
		if (timeWork < 10) {
			timer.textContent = `${'0' + timeWork}:00`;
		} else {
			timer.textContent = `${timeWork}:00`;
		}
		clearInterval(intervalTimer);
		pomodoroBreak = false;
		hero.style.backgroundColor = '#dd5656';
	}

	let
		deadline,
		min,
		sec,
		pomodoroBreak = false;

	function getZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	function initTimer() {
		if (pomidoroCurrent > pomodoroInDay) {
			return;
		} else {
			if (pomodoroBreak) {
				hero.style.backgroundColor = '#1fcfee';
				if (pomidoroCurrent == round) {
					deadline = timeBigBreak * 60;
					min = Math.floor(deadline / 60);
					sec = deadline - (min * 60);
				} else {
					deadline = timeLittleBreak * 60;
					min = Math.floor(deadline / 60);
					sec = deadline - (min * 60);
				}
			} else {
				hero.style.backgroundColor = '#dd5656';
				deadline = timeWork * 60;
				min = Math.floor(deadline / 60);
				sec = deadline - (min * 60);
			}
		}
		timer.textContent = `${getZero(min)}:${getZero(sec)}`;
	}

	function startTimer() {
		intervalTimer = setTimeout(updateTimer, 1000);
		function updateTimer() {
			if (deadline == 0) {
				if (pomodoroBreak) {
					pomodoroBreak = false;
					pomidoroCurrent++;
					if (pomidoroCurrent > pomodoroInDay) {
						return;
					}
					pomidoroCurrentSelector.textContent = pomidoroCurrent;
				} else {
					pomodoroBreak = true;
				}
				initTimer();
				startTimer();
			} else {
				deadline--;
				min = Math.floor(deadline / 60);
				sec = deadline - (min * 60);
				timer.textContent = `${getZero(min)}:${getZero(sec)}`;
				startTimer();
			}
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
			initTimer();
			startTimer();
		}
	});

	function detectedError(selector) {
		selector.style.border = '1px solid #ff0000';
	}

	timeWorkSelector.addEventListener('change', () => {
		if (+timeWorkSelector.value >= 1) {
			timeWork = +timeWorkSelector.value;
			initSettings();
		} else {
			detectedError(timeWorkSelector);
		}
	});

	timeWorkDec.addEventListener('click', () => {
		if ((timeWork - 1) >= 1) {
			timeWork--;
			initSettings();
		} else {
			detectedError(timeWorkSelector);
		}
	});

	timeWorkInc.addEventListener('click', () => {
		timeWork++;
		initSettings();
	});

	timeLittleBreakSelector.addEventListener('change', () => {
		if (+timeLittleBreakSelector.value >= 1) {
			timeLittleBreak = +timeLittleBreakSelector.value;
			initSettings();
		} else {
			detectedError(timeLittleBreakSelector);
		}
	});

	timeLittleBreakDec.addEventListener('click', () => {
		if ((timeLittleBreak - 1) >= 1) {
			timeLittleBreak--;
			initSettings();
		} else {
			detectedError(timeLittleBreakSelector);
		}
	});

	timeLittleBreakInc.addEventListener('click', () => {
		timeLittleBreak++;
		initSettings();
	});

	timeBigBreakSelector.addEventListener('change', () => {
		if (+timeBigBreakSelector.value >= 1) {
			timeBigBreak = +timeBigBreakSelector.value;
			initSettings();
		} else {
			detectedError(timeBigBreakSelector);
		}
	});

	timeBigBreakDec.addEventListener('click', () => {
		if ((timeBigBreak - 1) >= 1) {
			timeBigBreak--;
			initSettings();
		} else {
			detectedError(timeBigBreakSelector);
		}
	});

	timeBigBreakInc.addEventListener('click', () => {
		timeBigBreak++;
		initSettings();
	});

	roundSelector.addEventListener('change', () => {
		if (+roundSelector.value >= 1) {
			round = +roundSelector.value;
			initSettings();
		} else {
			detectedError(roundSelector);
		}
	});

	roundDec.addEventListener('click', () => {
		if ((round - 1) >= 1) {
			round--;
			initSettings();
		} else {
			detectedError(roundSelector);
		}
	});

	roundInc.addEventListener('click', () => {
		if ((round + 1) <= pomodoroInDay) {
			round++;
			initSettings();
		} else {
			detectedError(roundSelector);
		}
	});

	pomodoroInDaySelector.addEventListener('change', () => {
		if (+pomodoroInDaySelector.value >= round) {
			pomodoroInDay = +pomodoroInDaySelector.value;
			initSettings();
		} else {
			detectedError(pomodoroInDaySelector);
		}
	});

	pomodoroInDayDec.addEventListener('click', () => {
		if ((pomodoroInDay - 1) >= round) {
			pomodoroInDay--;
			initSettings();
		} else {
			detectedError(pomodoroInDaySelector);
		}
	});

	pomodoroInDayInc.addEventListener('click', () => {
		pomodoroInDay++;
		initSettings();
	});

	initSettings();
});