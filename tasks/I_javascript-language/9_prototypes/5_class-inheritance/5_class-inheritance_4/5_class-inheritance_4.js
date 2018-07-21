function ExtendedClock(options) {
    Clock.apply(this, arguments);
    this._precision = options.precision;
}

// I
ExtendedClock.prototype.__proto__ = Clock.prototype;

// II
// ExtendedClock.prototype = Object.create(Clock.prototype);
// ExtendedClock.prototype.constructor = ExtendedClock;

// III Почему правильно использовать объект, а не сам прототип?
// ExtendedClock.prototype = Clock.prototype;

ExtendedClock.prototype.start = function() {
    this._render();
    this._timer = setInterval(() => this._render(), this._precision);
};
