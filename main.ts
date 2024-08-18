enum RadioMessage {
    message1 = 49434
}
function avisarBandera () {
    for (let index = 0; index < bandera; index++) {
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        basic.pause(100)
    }
}
input.onButtonPressed(Button.A, function () {
    consultarBandera()
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
    basic.showNumber(bandera)
    avisarBandera()
})
function consultarBandera () {
    radio.sendValue("consulta", bandera)
}
radio.onReceivedValue(function (name, value) {
    if (name == "bandera") {
        bandera = value
    }
})
let bandera = 0
radio.setGroup(1)
radio.setTransmitPower(7)
bandera = 3
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    while (bandera == 5) {
        basic.showIcon(IconNames.No)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.pause(5000)
    }
})
