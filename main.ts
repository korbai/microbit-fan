input.onButtonPressed(Button.A, function () {
    direction = 0
})
edubitSoundBit.onEvent(SoundSensorCompareType.MoreThan, 503, function () {
    rotate = 1 - rotate
})
input.onButtonPressed(Button.AB, function () {
    rotate = 1 - rotate
})
input.onButtonPressed(Button.B, function () {
    direction = 1
})
let rotate = 0
let direction = 0
direction = 0
rotate = 0
edubitRgbBit.showColor(0xffffff)
basic.forever(function () {
    if (rotate == 0) {
        edubitRgbBit.setBrightness(edubitPotentioBit.readPotValue() / 4)
        if (direction == 0) {
            edubitMotors.runMotor(MotorChannel.M1, MotorDirection.Forward, edubitPotentioBit.readPotValue() / 4)
        } else {
            edubitMotors.runMotor(MotorChannel.M1, MotorDirection.Backward, edubitPotentioBit.readPotValue() / 4)
        }
    } else {
        edubitRgbBit.setBrightness(0)
        edubitMotors.brakeMotor(MotorChannel.M1)
    }
})
