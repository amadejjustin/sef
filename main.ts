input.onButtonPressed(Button.A, function () {
    if (key_set) {
        a_key += 1
    }
})
function lock () {
    locked = true
    basic.showLeds(`
        . . . . #
        . . . . #
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . # #
        # . . # #
        # # . . #
        # # . . #
        # # . . #
        `)
    basic.pause(200)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(2000)
    basic.clearScreen()
}
input.onButtonPressed(Button.AB, function () {
    if (!(locked)) {
        lock()
        reset_lock()
    } else if (key_set && (a_key - 1 == a_blink && b_key - 1 == b_blink)) {
        unlock()
    } else {
        reset_lock()
        set_the_key()
    }
})
input.onButtonPressed(Button.B, function () {
    if (key_set) {
        b_key += 1
    }
})
function set_the_key () {
    a_blink = randint(1, 5)
    b_blink = randint(1, 5)
    for (let index = 0; index < a_blink; index++) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(100)
    }
    basic.pause(1000)
    for (let index = 0; index < b_blink; index++) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(100)
    }
    basic.pause(200)
    basic.showIcon(IconNames.Diamond)
    basic.pause(500)
    key_set = true
}
function reset_lock () {
    key_set = false
    a_key = 0
    b_key = 0
}
function unlock () {
    locked = false
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . # #
        # . . # #
        # # . . #
        # # . . #
        # # . . #
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . #
        . . . . #
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.pause(500)
    basic.clearScreen()
}
let b_blink = 0
let b_key = 0
let a_blink = 0
let locked = false
let a_key = 0
let key_set = false
reset_lock()
