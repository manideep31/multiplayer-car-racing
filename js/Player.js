class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank=0;
  }

  getCount(){
    var playercountRef = database.ref('playercount');
    playercountRef.on("value",(data)=>{
      playercount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playercount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,rank:this.rank
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  
    getCarsAtEnd() {
     database.ref('carsatend').on("value",(data)=>
     { this.rank = data.val(); }) }
     
     static updatecarsatend(rank) {
     database.ref('/').update({ carsatend:rank }) 


  }
}
