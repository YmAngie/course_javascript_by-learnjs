'use strict';

class Voter {
    constructor(options) {
        this.element = options.elem;
        this._vote = this.element.querySelector('.vote');
        this._voteDown = this.element.querySelector('.down');
        this._voteUp = this.element.querySelector('.up');
    }

    setVote(number) {
        this._voteValue = Number(number);
    }

    _changeVoteValue(event) {
        let target = event.target;
        this._currentVoteValue = Number(this._vote.textContent);

        if (this._voteValue < 1) {
            alert('Vote value should be more or equal to 1 (one)');
            return;
        }

        if (event.target === this._voteDown) {
            this._decreaseVoteValue();
        } else if (event.target === this._voteUp) {
            this._increaseVoteValue();
        }
    }

    _decreaseVoteValue() {
        this._vote.textContent = String(this._currentVoteValue - this._voteValue);
    }

    _increaseVoteValue() {
        this._vote.textContent = String(this._currentVoteValue + this._voteValue);
    }
}

let voter = new Voter({
    elem: document.querySelector('#voter')
});

voter.element.addEventListener('click', () => {
   voter._changeVoteValue(event)
});

voter.setVote(2);
