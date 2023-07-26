//canvas and context
var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)

//timer to make the game run at 60fps
var timer = setInterval(main, 1000/60)

//global friction variable
var fy = .97
//Player array
player = [new Player(), new Player()]
player[0].pad = new Box(); 
player[1].pad = new Box(); 
console.log(player)
//Pad array 
pad = [player[0].pad, player[1].pad]

//pad[0] setup

pad[0].w = 20
pad[0].h = 150
pad[0].x = 0 + pad[0].w/2
pad[0].color = `white`

//pad[1] setup

pad[1].w = 20
pad[1].h = 150
pad[1].x = 0 + c.width - pad[1].w/2
pad[1].color = `white`


//ball setup
var ball = new Box();
ball.w = 20
ball.h = 20
ball.vx = -7
ball.vy = -5
ball.color = `white`




function main()
{
    //erases the canvas
    ctx.clearRect(0,0,c.width,c.height)
    
    //pad[0] accelerates when key is pressed 
    if(keys[`w`])
    {
       pad[0].vy += -pad[0].force
    }

    if(keys[`s`])
    {
        pad[0].vy += pad[0].force
    }
    if(keys[`ArrowUp`])
    {
       pad[1].vy += -pad[1].force
    }

    if(keys[`ArrowDown`])
    {
        pad[1].vy += pad[1].force
    }
    //applies friction
    pad[0].vy *= fy
    pad[1].vy *= fy
    //player movement
    pad[0].move();
    pad[1].move();

    //ball movement
    ball.move()

    //pad[0] collision
    if(pad[0].y < 0+pad[0].h/2)
    {
        pad[0].y = 0+pad[0].h/2
    }
    if(pad[0].y > c.height-pad[0].h/2)
    {
        pad[0].y = c.height-pad[0].h/2
    }
    //pad[1] collision 
    if(pad[1].y < 0+pad[1].h/2)
    {
        pad[1].y = 0+pad[1].h/2
    }
    if(pad[1].y > c.height-pad[1].h/2)
    {
        pad[1].y = c.height-pad[1].h/2
    }

    //ball collision 
    if(ball.x < 0)
    {
        ball.x = c.width/2
        ball.y  =c.height/2
        player[0].score += 1

    }
    if(ball.x > c.width)
    {
        ball.x = c.width/2
        ball.y  =c.height/2
        player[1].score += 1
    }
   console.log(`${player[0].score} | ${player[1].score} `)
   var hScore = document.querySelectorAll('#score div')

    if(ball.y < 0)
    {
        ball.y = 0
        ball.vy = -ball.vy
    }
    if(ball.y > c.height)
    {
        ball.y = c.height
        ball.vy = -ball.vy
       
    }

    //pad[0] with ball collision
    if(ball.collide(pad[0]))
    {
        ball.x = pad[0].x + pad[0].w/2 + ball.w/2
        ball.vx = -ball.vx;
    }
    //pad[1] with ball collision 
    if(ball.collide(pad[1]))
    {
        ball.x = pad[1].x - pad[1].w/2 - ball.w/2
        ball.vx = -ball.vx;
    }

    //draw the objects
    pad[0].draw()
    pad[1].draw()
    ball.draw()
    for(i = 0; i <hScore.length; i++ )
    { 
        hScore[i].innerHTML =`${player[i].score} ` 
        
    }
}
