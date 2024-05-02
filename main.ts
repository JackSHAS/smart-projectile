let spray: Sprite = null
let tempSpeed = 0
let normalizing_ratio = 0
function distance_formula (x1: number, x2: number, y1: number, y2: number) {
    return Math.sqrt((y1 - y2) * (y1 - y2) + (x1 - x2) * (x1 - x2))
}
function sprite_is_in_range (sprite_1: Sprite, sprite_2: Sprite, range: number) {
    if (distance_formula(sprite_1.x, sprite_2.x, sprite_1.y, sprite_2.y) <= range) {
        return true
    }
    return false
}
function createProjectileThatFollows2 (sprite_to_hit: Sprite, attacking_sprite: Sprite, speed: number) {
    spray = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . . . . 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    spray.x = attacking_sprite.x
    spray.y = attacking_sprite.y
    tempSpeed = distance_formula(sprite_to_hit.x - attacking_sprite.x, 0, sprite_to_hit.y - attacking_sprite.y, 0)
    // Create the ratio that we need to multiply the vx and vy by so we have the same speed of projectile no matter where our sprite is
    normalizing_ratio = speed / tempSpeed
    spray.vx = (sprite_to_hit.x - attacking_sprite.x) * normalizing_ratio
    spray.vy = (sprite_to_hit.y - attacking_sprite.y) * normalizing_ratio
}
