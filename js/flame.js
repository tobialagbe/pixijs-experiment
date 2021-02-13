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
     .add("../assets/flames/3x/Asset 1@3x.png")
     .add("../assets/flames/3x/Asset 2@3x.png")
     .add("../assets/flames/3x/Asset 3@3x.png")
     .add("../assets/flames/3x/Asset 4@3x.png")
     .add("../assets/flames/3x/Asset 5@3x.png")
     .add("../assets/flames/3x/Asset 6@3x.png")
     .add("../assets/flames/3x/Asset 7@3x.png")
     .add("../assets/flames/3x/Asset 8@3x.png")
     .add("../assets/flames/3x/Asset 9@3x.png")
     .add("../assets/flames/3x/Asset 10@3x.png")
     .add("../assets/flames/3x/Asset 11@3x.png")
     .add("../assets/flames/3x/Asset 12@3x.png")
     .add("../assets/flames/3x/Asset 13@3x.png")
     .add("../assets/flames/3x/Asset 14@3x.png")
     .add("../assets/flames/3x/Asset 15@3x.png")
     .add("../assets/flames/3x/Asset 16@3x.png")
     .add("../assets/flames/3x/Asset 17@3x.png")
     .add("../assets/flames/3x/Asset 18@3x.png")
     .load(setup);
   
   
     function setup() {
   
        const frames = [
            PIXI.Texture.from('../assets/flames/3x/Asset 1@3x.png'),
            PIXI.Texture.from('../assets/flames/3x/Asset 2@3x.png'),
            PIXI.Texture.from('../assets/flames/3x/Asset 3@3x.png'),
            PIXI.Texture.from('../assets/flames/3x/Asset 4@3x.png'),
            PIXI.Texture.from('../assets/flames/3x/Asset 5@3x.png'),
            PIXI.Texture.from('../assets/flames/3x/Asset 6@3x.png'),
            PIXI.Texture.from('../assets/flames/3x/Asset 7@3x.png'),
            PIXI.Texture.from('../assets/flames/3x/Asset 8@3x.png'),
            PIXI.Texture.from('../assets/flames/3x/Asset 9@3x.png'),
            PIXI.Texture.from('../assets/flames/3x/Asset 10@3x.png'),
            PIXI.Texture.from('../assets/flames/3x/Asset 11@3x.png'),
            PIXI.Texture.from('../assets/flames/3x/Asset 12@3x.png'),
            PIXI.Texture.from('../assets/flames/3x/Asset 13@3x.png'),
            PIXI.Texture.from('../assets/flames/3x/Asset 14@3x.png'),
            PIXI.Texture.from('../assets/flames/3x/Asset 15@3x.png'),
            PIXI.Texture.from('../assets/flames/3x/Asset 16@3x.png'),
            PIXI.Texture.from('../assets/flames/3x/Asset 17@3x.png'),
            PIXI.Texture.from('../assets/flames/3x/Asset 18@3x.png'),
        ];


        const flameAnim = new PIXI.extras.AnimatedSprite(frames);
   
   
        flameAnim.x = app.screen.width / 2;
        flameAnim.y = app.screen.height / 2;
        flameAnim.anchor.set(0.5);
        flameAnim.animationSpeed = 0.7;
        flameAnim.play();
    
        app.stage.addChild(flameAnim);
   
  
   
    
   
       app.ticker.add(function(delta) {
        //
       });
   
   
     }
   
   
   
   //   end of setup
   
   
   
   
   

   

   



   window.addEventListener("resize", function(){

    app.renderer.resize(window.innerWidth, window.innerHeight);
    bg.width = window.innerHeight * 1.46;
    bg.height = window.innerHeight;
    bg.anchor.x = 0.5;
    bg.anchor.y = 0.5;


   });
   
   
   
   
   
   
   
   })