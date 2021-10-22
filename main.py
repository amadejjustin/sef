def on_button_pressed_a():
    global a_key
    if key_set:
        a_key += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def lock():
    global locked
    locked = True
    basic.show_leds("""
        # . . . .
                . # . . .
                . . . . .
                . . . . .
                . . . . .
    """)

def on_button_pressed_ab():
    if not (locked):
        lock()
        reset_lock()
    elif key_set and (a_key + 1 == a_blink and b_key + 1 == b_blink):
        unlock()
    else:
        reset_lock()
        set_the_key()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global b_key
    if key_set:
        b_key += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def set_the_key():
    global a_blink, b_blink, key_set
    a_blink = randint(1, 5)
    b_blink = randint(1, 5)
    for index in range(a_blink):
        basic.show_leds("""
            . . # . .
                        . # . . .
                        # # # # #
                        . # . . .
                        . . # . .
        """)
        basic.pause(200)
        basic.clear_screen()
        basic.pause(100)
    basic.pause(1000)
    for index2 in range(b_blink):
        basic.show_leds("""
            . . # . .
                        . . . # .
                        # # # # #
                        . . . # .
                        . . # . .
        """)
        basic.pause(200)
        basic.clear_screen()
        basic.pause(100)
    basic.pause(200)
    basic.show_icon(IconNames.DIAMOND)
    basic.pause(500)
    key_set = True
def reset_lock():
    global key_set, a_key, b_key
    key_set = False
    a_key = 0
    b_key = 0
def unlock():
    global locked
    basic.show_leds("""
        . . # . .
                . # . # .
                . . # # .
                . # # # .
                . . # . .
    """)
    locked = False
b_blink = 0
b_key = 0
a_blink = 0
locked = False
a_key = 0
key_set = False
reset_lock()