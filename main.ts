controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
    projectile = sprites.createProjectileFromSprite(img`
        5 5 5 
        5 5 5 
        5 5 5 
        5 5 5 
        5 5 5 
        . . . 
        . . . 
        . . . 
        . . . 
        . . . 
        . . . 
        . . . 
        `, spaceship, 0, -50)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.fire, 500)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.UntilDone)
})
let BadBurgers: Sprite = null
let projectile: Sprite = null
let spaceship: Sprite = null
effects.starField.startScreenEffect()
spaceship = sprites.create(img`
    . . . . . . . . b . . . . . . . 
    . . . . . . b d d c . . . . . . 
    . . . . . b 1 1 d d c . . . . . 
    . . . . b 1 1 1 d 1 1 b . . . . 
    . . . . c 1 1 1 d 1 1 1 c c . . 
    b b b c d 1 1 c c 1 1 d 1 1 b b 
    b d 1 1 d d b c c c b d 1 1 1 b 
    b 1 1 1 1 c c . . c d d 1 1 1 b 
    b 1 1 1 1 c c . . b 1 1 d d c . 
    . b 1 1 d d b c b b 1 1 b c c . 
    . . c b d d b 1 1 b b d b c . . 
    . . c 1 1 d d 1 1 1 d d d b . . 
    . b d 1 1 1 d 1 1 d 1 1 1 d b . 
    . b d 1 1 1 d b b d 1 1 1 1 b . 
    . . b 1 1 d c c b b d 1 1 d b . 
    . . b b b b . . . b b b b b b . 
    `, SpriteKind.Player)
spaceship.setPosition(76, 91)
controller.moveSprite(spaceship)
info.setLife(3)
game.onUpdateInterval(500, function () {
    BadBurgers = sprites.create(img`
        ...........ccccc66666...........
        ........ccc4444444444666........
        ......cc444444444bb4444466......
        .....cb4444bb4444b5b444444b.....
        ....eb4444b5b44444b44444444b....
        ...ebb44444b4444444444b444446...
        ..eb6bb444444444bb444b5b444446..
        ..e6bb5b44444444b5b444b44bb44e..
        .e66b4b4444444444b4444444b5b44e.
        .e6bb444444444444444444444bb44e.
        eb66b44444bb444444444444444444be
        eb66bb444b5b44444444bb44444444be
        fb666b444bb444444444b5b4444444bf
        fcb666b44444444444444bb444444bcf
        .fbb6666b44444444444444444444bf.
        .efbb66666bb4444444444444444bfe.
        .86fcbb66666bbb44444444444bcc688
        8772effcbbbbbbbbbbbbbbbbcfc22778
        87722222cccccccccccccccc22226678
        f866622222222222222222222276686f
        fef866677766667777776667777fffef
        fbff877768f86777777666776fffffbf
        fbeffeefffeff7766688effeeeefeb6f
        f6bfffeffeeeeeeeeeeeeefeeeeebb6e
        f66ddfffffeeeffeffeeeeeffeedb46e
        .c66ddd4effffffeeeeeffff4ddb46e.
        .fc6b4dddddddddddddddddddb444ee.
        ..ff6bb444444444444444444444ee..
        ....ffbbbb4444444444444444ee....
        ......ffebbbbbb44444444eee......
        .........fffffffcccccee.........
        ................................
        `, SpriteKind.Enemy)
    BadBurgers.setPosition(randint(0, scene.screenWidth()), 0)
    BadBurgers.follow(spaceship, 50)
})
