function goodAliens() {
    //write code here to spawn the clouds
  
    if (frameCount % 100 === 0) {
      // assign x position
  
      var rand1 = Math.round(random(1,2));
  if(rand1===1){
      var gAlien = createSprite(displayWidth,displayHeight/2,40,40);
      gAlien.velocityX = -3;
  }
  else{
    var gAlien = createSprite(0,displayHeight/2,40,40);
  gAlien.velocityX = 3;
  }
      gAlien.y = Math.round(random(300,400));
      gAlien.addImage(goodAlienImg);
      //gAlien.velocityX = 3;
      
       //assign lifetime to the variable
      gAlien.lifetime = 300;
      
      //adjust the depth
      //gAlien.depth = trex.depth;
      //trex.depth = trex.depth+1;
      
      //add each cloud to the group
      gAliensGroup.add(gAlien);
    }
    
  
  
  function badAliens() {
  
    if(frameCount % 80 === 0) {
      //assign x position
      var rand = Math.round(random(1,2));
      if(rand===1){
      var bAlien = createSprite(displayWidth,displayHeight/2-100,20,30);
      bAlien.velocityX = -5
      }
      else{
        var bAlien = createSprite(0,displayHeight/2-100,20,30);
        bAlien.velocityX = 5;
  };
  
      bAlien.setCollider('circle',0,0,45)
      // obstacle.debug = true
    
      //bAlien.velocityY = -6;
      bAliensGroup.add(bAlien);
      //generate random obstacles
    }
    
    function asteroids() {
  
      if(frameCount % 50 === 0) {
        //assign x position
        var rand3 = Math.round(random(1,2));
        if(rand3===1){
        var asteroid = createSprite(375,0,50,50);
        asteroid.velocityY = 4;
        }
        else{
          var asteroid = createSprite(575,0,50,50);
          asteroid.velocityY=4;
        }
       asteroid.setCollider('circle',0,0,45)
        // obstacle.debug = true
      
        //bAlien.velocityY = -6;
        asteroidGroup.add(asteroid);
        //generate random obstacles
      }
    }
  }
  }