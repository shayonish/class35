class Player
{
    constructor()
    {
      

    }
    getCount()
    {
    var playerCountRef = databse.ref('playerCount')
    playerCountRef.on('value' , (data)=>{
    playerCount = datat.val();
    })
    }
    updateCount(count)
    {database.ref('/').update({

    playerCount : count
    })}
    update(name)
    {
    var playerIndex = 'player'+ playerCount
    database.ref(playerIndex).set({
    name : name
    }
    )
    }
    }