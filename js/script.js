$(document).ready(function(){


const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

  //Create a Pixi Application
// let app = new PIXI.Application({width: 256, height: 256});
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
    let bg = new PIXI.Sprite(PIXI.loader.resources["../assets/industrial.jpg"].texture);
    let pl = new PIXI.Sprite(PIXI.loader.resources["../assets/pillar.png"].texture);
    
    // bg.position.set(0.5, 0.5);
    // bg.width = "auto";
    // bg.height = sizes.height;
    bg.scale.set(1.8, 1.8);
    // bg.anchor.set(0.5);


    pl.position.set(sizes.width/3, - sizes.height/5);
    pl.scale.set(0.8, 0.8);


    //Add the bg to the stage
    app.stage.addChild(bg);
    app.stage.addChild(pl);


 

    app.ticker.add(function(delta) {
        
        document.getElementById("bdy").addEventListener("wheel", function(){
            // bg.scale.set(bg.scale.x += 0.000002, bg.scale.y += 0.00002);
            
            if (detectMouseWheelDirection() == "down") {
                
                bg.scale.x += 0.00002 * delta;
                bg.scale.y += 0.00002 * delta;
    
                pl.scale.x += 0.00004 * delta;
                pl.scale.y += 0.00004 * delta;

            }else{

                if (bg.scale.x > 1) {

                    bg.scale.x -= 0.00002 * delta;
                    bg.scale.y -= 0.00002 * delta;
        
                    pl.scale.x -= 0.00004 * delta;
                    pl.scale.y -= 0.00004 * delta;


                }

                console.log(bg.scale.x)

            }

        });

    });


  }





  function detectMouseWheelDirection( e )
{
    var delta = null,
        direction = false
    ;
    if ( !e ) { // if the event is not provided, we get it from the window object
        e = window.event;
    }
    if ( e.wheelDelta ) { // will work in most cases
        delta = e.wheelDelta / 60;
    } else if ( e.detail ) { // fallback for Firefox
        delta = -e.detail / 2;
    }
    if ( delta !== null ) {
        direction = delta > 0 ? 'up' : 'down';
    }

    return direction;
}









})