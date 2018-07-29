'use strict';

class Clock {
    constructor(options) {
        this._element = options.elem;

        this._hours = this._element.querySelector('.hour');
        this._minutes = this._element.querySelector('.min');
        this._seconds = this._element.querySelector('.sec');
    }

    start() {
        this._setCurrentTime();

        clearTimeout(this._timerId);
        this._timerId = setInterval(() => {
            this._setCurrentTime();
        }, 1000);
    }

    stop() {
        clearTimeout(this._timerId);
    }

    _setCurrentTime() {
        this._hours.textContent = this._getCurrentHours();
        this._minutes.textContent = this._getCurrentMinutes();
        this._seconds.textContent = this._getCurrentSeconds();
    }

    _getCurrentHours() {
        let currentDate = new Date,
            hours = currentDate.getHours(),
            formattedHours = this._formatTime(hours);

        return formattedHours;
    }

    _getCurrentMinutes() {
        let currentDate = new Date,
            minutes = currentDate.getMinutes(),
            formattedMinutes = this._formatTime(minutes);

        return formattedMinutes;
    }

    _getCurrentSeconds() {
        let currentDate = new Date,
            seconds = currentDate.getSeconds(),
            formattedSeconds = this._formatTime(seconds);

        return formattedSeconds;
    }

    _formatTime(number) {
        let formattedNumber = number > 9 ? String(number) : `0${String(number)}`;

        return formattedNumber;
    }
}

let pageClock = new Clock({
    elem: document.getElementById('clock')
});
