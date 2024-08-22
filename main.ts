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
input.onButtonPressed(Button.B, function () {
    alerta = 0
})
radio.onReceivedValue(function (name, value) {
    if (name == "bandera") {
        bandera = value
        basic.showNumber(bandera)
        basic.pause(2000)
        basic.clearScreen()
        if (bandera == 5) {
            alerta = 1
        }
    }
})
let bandera = 0
let alerta = 0
radio.setGroup(1)
radio.setTransmitPower(7)
alerta = 0
consultarBandera()
basic.showIcon(IconNames.Heart)
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
    while (alerta == 1) {
        basic.showIcon(IconNames.No)
        for (let index = 0; index < bandera; index++) {
            music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            basic.pause(100)
        }
        basic.pause(5000)
    }
})
