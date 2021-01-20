
class Game
{
    constructor()
    {
      

    }
    getstate()
    {
    var gameStateRef = databse.ref('Gamestate')
    gameStateRef.on('value' , (data)=>{
    gameState = datat.val();
    })
    }
    update(state)
    {database.ref('/').update({

    Gamestate : state
    })}
    start()
    {
    if(gameState === 0 )
    {
        player = new Player()
        player.getCount();
        form = new Form()
        form.display();
    }
    }
}