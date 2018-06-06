const Player = function(x, y, ctx, color) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.velX = 0;
    this.velY = 0;
    this.width = 90;
    this.height = 64;
    this.ctx.fillStyle=color;
    this.ctx.fillRect(this.x,this.y,this.width,this.height);

    this.dead = false;
   this.Img = document.getElementById('player');
    var self = this;
    window.addEventListener('mousemove', function(e) {
        self.x=e.pageX;
        self.y=e.pageY;

        });
    };
Player.prototype.update = function(walls){
    if (this.detectCollisions(walls)){
        this.dead = true;
    }




};

Player.prototype.render = function(){
    let renderX = - this.width/2;
    let renderY = - this.height/2;
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    let angle = Math.PI/6 * this.velY/16;
    this.ctx.rotate(angle);
    this.ctx.drawImage(this.Img, renderX, renderY);

    this.ctx.restore();
};

Player.prototype.detectCollisions = function(walls){
    for(var i = 0; i < walls.length; i++){
        let e = walls[i];
        let highWall = e.ypos <= 0;
        let x0 = e.xpos, x1 = e.xpos+e.width;
        let alpha2 = this.x ;
        let beta2 = this.y;
        if (highWall ){
            let y0 = e.ypos + e.length;
            let alpha = this.x;
            let beta = this.y - this.height/2;
            if (alpha > x0 +20&& alpha < x1+20 && beta < y0 ||
                alpha2 > x0+20 && alpha2 < x1+20 && beta2 < y0){
                return true;
            }
        }
        else{
            let y2 = e.ypos;
            let a = this.x;
            let b = this.y + this.height/2;
            if (a > x0+25 && a < x1+25&& b > y2 +50||
                alpha2 > x0+60 && alpha2 < x1+60 && beta2 > y2+50) {
                return true;
            }
        }
    }
    return false;
};