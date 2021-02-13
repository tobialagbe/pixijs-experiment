$(document).ready(function(){


    // https://www.youtube.com/watch?v=FgN2EENWPFc
   
   var displacementSprite,displacementFilter,bg;
   
   const sizes = {
       width: window.innerWidth,
       height: window.innerHeight
   }
   
   
   let app = new PIXI.Application({ 
       width: sizes.width,         // default: 800
       height: sizes.height,        // default: 600
       antialias: true,    // default: false
       transparent: false, // default: false
       resolution: 1       // default: 1
     }
   );
   
   //Add the canvas that Pixi automatically created for you to the HTML document
   document.body.appendChild(app.view);
   
   
   app.renderer.view.style.position = "absolute";
   app.renderer.view.style.display = "block";
   app.renderer.autoResize = true;
   app.renderer.resize(sizes.width, sizes.height);
   
   PIXI.loader
     .add("../assets/industrial.jpg")
     .add("../assets/pillar.png")
     .load(setup);
   
   
     function setup() {
   
   
   
   
       //Create the sprites
       bg = new PIXI.Sprite(PIXI.loader.resources["../assets/industrial.jpg"].texture);
       
       bg.x = sizes.width/2;
       bg.y = sizes.height/2;
    //    bg.width = sizes.width;
    //    bg.height = sizes.width/1.46;
        bg.width = sizes.height * 1.46;
        bg.height = sizes.height;
       bg.anchor.x = 0.5;
       bg.anchor.y = 0.5;
       bg.scale.set(2, 2);
       // bg.anchor.set(0.5);
   
  
   
   
   
   
       displacementSprite = PIXI.Sprite.from('../assets/flagmap4.png');
       displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
   
       app.stage.addChild(displacementSprite);
   
       bg.filters = [displacementFilter];
   
    //    displacementFilter.scale.x = 20;
    //    displacementFilter.scale.y = 20;
       displacementSprite.anchor.set(0.5);
       displacementSprite.x = 0;
       displacementSprite.y = 0;
       displacementSprite.height = sizes.height;
       displacementSprite.width = sizes.width/4;
   
   
   
       //Add the bg to the stage
       app.stage.addChild(bg);
   
   
       let bdy = document.getElementById("bdy")
       bdy.addEventListener("mousemove", onPointerMove);
       // app.stage
       // .on('mousemove', onPointerMove)
       // .on('touchmove', onPointerMove);
   
   
    
   
    //    app.ticker.add(function(delta) {

    //         if (displacementSprite.x < window.innerWidth + 50) {
    //             displacementSprite.position.set(displacementSprite.x += 20 * delta, displacementSprite.y);  
    //         }else{
    //             displacementSprite.position.set(0, displacementSprite.y); 
    //         }

    //         if (displacementSprite.y < window.innerHeight + 50) {
    //             displacementSprite.position.set(displacementSprite.x, displacementSprite.y += 5 * delta);  
    //         }else{
    //             displacementSprite.position.set(displacementSprite.x, 0); 
    //         }
   
    //    });
   
   
     }
   
   
   
   //   end of setup
   
   
   
   
   
   
   function onPointerMove(eventData) {
       displacementSprite.position.set(eventData.clientX - 25, eventData.clientY);
   }
   
   
   // function onPointerMove(eventData) {
   //     displacementFilter.scale.x = (window.innerWidth/2 - eventData.clientX) /25;
   //     displacementFilter.scale.y = (window.innerHeight/2 - eventData.clientY) /25;
   // }
   
   

   



   window.addEventListener("resize", function(){

    app.renderer.resize(window.innerWidth, window.innerHeight);
    bg.width = window.innerHeight * 1.46;
    bg.height = window.innerHeight;
    bg.anchor.x = 0.5;
    bg.anchor.y = 0.5;


   });
   
   
   
   
   
   
   
   })