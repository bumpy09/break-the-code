let Choice = 0
let Lunch_options = ["Fried rice", "Spaghetti", "Nasi lemak"]
basic.forever(function () {
    let list: number[] = []
    while (edubitIrBit.isIrSensorTriggered()) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . . # . .
            . . . . .
            `)
    }
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    Choice = randint(0, list.length - 1)
    basic.showString("" + (list[0]))
    while (!(edubitIrBit.isIrSensorTriggered())) {
    	
    }
})
