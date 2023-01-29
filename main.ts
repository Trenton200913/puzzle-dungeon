function gen_sprite_controll_and_map_cam () {
    mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
    tiles.setCurrentTilemap(tilemap`level1`)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
}
function gen_music () {
    for (let index = 0; index < 100; index++) {
        music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.UntilDone)
    }
}
let mySprite: Sprite = null
game.splash("puzzle dungeon", "press A to play")
gen_sprite_controll_and_map_cam()
forever(function () {
    gen_music()
})
