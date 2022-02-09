let level = 0
basic.forever(function () {
    level = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(level)
    basic.pause(100)
    serial.writeValue("level", level)
    if (level > 300) {
        pins.digitalWritePin(DigitalPin.P1, 2)
        basic.pause(1000)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(5000)
    }
})
