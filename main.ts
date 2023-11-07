/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelo Yalung
 * Created on: Nov 2023
 * This program moves a pixel from the top left to the bottom right when pressing the A button, moving the pixel from the bottom right to the top left when pressing the B Button.
*/

// variables
let loopCounter = 0
let sprite: game.LedSprite = null

// setup
basic.showIcon(IconNames.Happy)

// on a button press
input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  basic.pause(500)
  loopCounter = 0
  sprite = game.createSprite(0, 0)

  // the loop for the A button
  while (loopCounter <= 5) {
    sprite.set(LedSpriteProperty.X, loopCounter)
    sprite.set(LedSpriteProperty.Y, loopCounter)
    basic.pause(500)
    loopCounter = loopCounter + 1
  }

  sprite.delete()
  basic.showIcon(IconNames.Happy)
})

// b button pressed
input.onButtonPressed(Button.B, function () {
  basic.clearScreen()
  basic.pause(500)
  loopCounter = 5
  sprite = game.createSprite(0, 0)

  // looping for B button
  while (loopCounter >= 0) {
    sprite.set(LedSpriteProperty.X, loopCounter)
    sprite.set(LedSpriteProperty.Y, loopCounter)
    basic.pause(500)
    loopCounter = loopCounter - 1
  }

  sprite.delete()
  basic.showIcon(IconNames.Happy)
})
