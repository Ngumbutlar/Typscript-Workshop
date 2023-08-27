"use strict";
class Phone {
    constructor(powerButton, mic, speaker, serialNumber) {
        this.restart = false;
        this.powerOn = false;
        this.powerButton = powerButton;
        this.mic = mic;
        this.speaker = speaker;
        this.serialNumber = serialNumber;
    }
    tooglePower(powerOn) {
        this.powerOn ? this.powerOn = false : this.powerOn = true;
    }
    reboot() {
        this.restart = true;
    }
}
class Smart extends Phone {
    constructor(serial) {
        super(true, true, true, serial);
        this.touchScreen = true;
        this.fourG = true;
    }
    playVideo(fileName) {
        return true;
    }
}
class Dumb extends Phone {
    constructor(serial) {
        super(true, true, true, serial);
        this.dialPad = true;
        this.threeG = true;
    }
    NumberToLetter(number) {
        const letter = ['a', 'b', 'c', 'd'];
        return letter[number];
    }
}
const smartPhone = new Smart('12345678');
const standardPhone = new Dumb('67890');
console.log(smartPhone.playVideo('videoOne'));
console.log(standardPhone.NumberToLetter(3));
console.log(smartPhone);
console.log(standardPhone);
