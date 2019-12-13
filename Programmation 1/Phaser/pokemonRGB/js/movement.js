

function move() {
    let velocity = 48;
    player.setVelocityY(0);
    player.setVelocityX(0);
    let rgb = RGB();
    background.setTint(rgb);
    player.setTint(rgb);
    overlay.setTint(rgb);
    lastPos = {
        x: player.x,
        y: player.y
    };
    if (cursors.left.isDown)
    {
        player.setVelocityX(-velocity);
        player.anims.play('left', true);
        lastStand = "Left";
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(velocity);
        player.anims.play('right', true);
        lastStand = "Right";
    }
    else if (cursors.up.isDown)
    {
        player.setVelocityY(-velocity);
        player.anims.play('up', true);
        lastStand = "Up";
    }
    else if (cursors.down.isDown) {
        player.setVelocityY(velocity);
        player.anims.play('down', true);
        lastStand = "Down";
    }
    else {
        player.anims.play('stand'+lastStand);
    }
}
