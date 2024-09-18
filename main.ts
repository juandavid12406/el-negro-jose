basic.showString("instrucción: ponga a hervir el agua en la estufa")
basic.showString("¿hirvió?")
basic.showString("presione A para si B para no")
while (input.buttonIsPressed(Button.A)) {
    if (true) {
        basic.showString("si")
        break;
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showString("no")
        basic.showString("reinicie el proceseso")
    }
    basic.showString("agregar el café")
    basic.showString("¿azucar?")
    basic.showString("presione A para si B para no")
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("añadir azucar")
        break;
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showString("no")
        basic.showString("no  se añade azucar")
        break;
    }
    basic.showString("disfrute su cafe")
}
