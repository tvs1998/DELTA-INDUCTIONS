
var score=0;
window.onload = function(){
    const c = document.getElementById('canvas');
    c.width = window.innerWidth;
    c.height = window.innerHeight;

    const ctx = c.getContext('2d');
    const environment = new Environment(c, ctx);
    const player = new Player(250, 300, ctx,"#ff1213");
    //const score= new Score(20,20,"red",10,10,ctx,"text");
    const walls = [];
    let wallSet = generateRandomWalls(ctx, c.width, c.height);
    walls.push(wallSet.top, wallSet.bottom);
    setInterval(function(){
        let wallSet = generateRandomWalls(ctx, c.width, c.height);
        walls.push(wallSet.top, wallSet.bottom);
    }, 2000);

    gameLoop();
    function gameLoop(){

        player.update(walls);
        if (!player.dead){

            environment.update();
            score=score+1;
           // score.update();

            walls.forEach(function(wall1){
                wall1.update();
            });
        }
        environment.render();

        walls.forEach(function(wall1){
            wall1.render();
        });
        player.render();
        if (player.dead){
            drawGameOver(ctx, c);
            displayscore(ctx,c,score);

        }
        window.requestAnimationFrame(gameLoop);
    }
};

function generateRandomWalls(ctx, canvasWidth, canvasHeight){
    let lengthTop = Math.round(Math.random()*400+50);
    let lengthBottom = canvasHeight - lengthTop +80;
    let returnVal = { };
    returnVal.top = new Walls(canvasWidth, -5, lengthTop, 12, ctx);
    returnVal.bottom = new Walls(canvasWidth+320, canvasHeight+5-lengthBottom, lengthBottom, 12, ctx);
    return returnVal;
}


function drawGameOver(ctx, c){
    ctx.font="200px Verdana";
    ctx.textAlign="center";
    ctx.fillStyle="#ff2218";
    ctx.fillText("Game Over!!",c.width/2 , c.height/2);
}
function  displayscore(ctx,c,score) {
    ctx.font="30px Verdana";
    ctx.textAlign="center";
    ctx.fillStyle="#2f31ff";
    ctx.fillText("SCORE:"+score,c.width/2,c.height*2/3);
   var c=document.createElement("button");
   var d=document.createTextNode("RESTART");
   c.appendChild(d);
   document.body.appendChild(c);
   document.getElementsByTagName('button')[0].setAttribute('onclick',location.reload(true));

    //c.addEventListener('onclick',function(e){
      //  reload();
    //})

}