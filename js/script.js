$(document).ready(function(){


 // https://www.youtube.com/watch?v=FgN2EENWPFc

var displacementSprite,displacementFilter;

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
    let bg = new PIXI.Sprite(PIXI.loader.resources["../assets/industrial.jpg"].texture);
    let pl = new PIXI.Sprite(PIXI.loader.resources["../assets/pillar.png"].texture);
    
    bg.x = sizes.width/2;
    bg.y = sizes.height/2;
    bg.width = sizes.width;
    bg.height = sizes.width/1.46;
    bg.anchor.x = 0.5;
    bg.anchor.y = 0.5;
    // bg.scale.set(2, 2);
    // bg.anchor.set(0.5);


    pl.position.set(sizes.width/3, 0);
    pl.width = sizes.height/5.3;
    pl.height = sizes.height;
    // pl.scale.set(0.8, 0.8);




    displacementSprite = PIXI.Sprite.from('../assets/displacement-sprite.png');
    displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

    app.stage.addChild(displacementSprite);

    bg.filters = [displacementFilter];

    displacementFilter.scale.x = 20;
    displacementFilter.scale.y = 20;
    displacementSprite.anchor.set(0.5);



    //Add the bg to the stage
    app.stage.addChild(bg);
    app.stage.addChild(pl);


    let bdy = document.getElementById("bdy")
    bdy.addEventListener("mousemove", onPointerMove);
    // app.stage
    // .on('mousemove', onPointerMove)
    // .on('touchmove', onPointerMove);


 

    app.ticker.add(function(delta) {
        
        document.getElementById("bdy").addEventListener("wheel", function(){
            // bg.scale.set(bg.scale.x += 0.000002, bg.scale.y += 0.00002);
            
            if (detectMouseWheelDirection() == "down") {
                

                if (pl.height < sizes.height*2) {
                    bg.scale.x += 0.000038 * delta;
                    bg.scale.y += 0.000038 * delta;
        
                    pl.scale.x += 0.00004 * delta;
                    pl.scale.y += 0.00004 * delta;
                }


            }else{

                if (pl.height > sizes.height + 20) {

                    bg.scale.x -= 0.000038 * delta;
                    bg.scale.y -= 0.000038 * delta;
        
                    pl.scale.x -= 0.00004 * delta;
                    pl.scale.y -= 0.00004 * delta;


                }

                console.log(bg.scale.x)

            }

        });

    });


  }



//   end of setup






function onPointerMove(eventData) {
    displacementSprite.position.set(eventData.clientX - 25, eventData.clientY);
}


// function onPointerMove(eventData) {
//     displacementFilter.scale.x = (window.innerWidth/2 - eventData.clientX) /25;
//     displacementFilter.scale.y = (window.innerHeight/2 - eventData.clientY) /25;
// }





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