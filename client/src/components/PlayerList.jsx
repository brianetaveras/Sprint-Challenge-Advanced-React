import React from 'react'
import PlayerCard from './PlayerCard'

class PlayerList extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        console.log(this.props.players)
        return (
            <div className="player-list">
               {this.props.players.map(player=>{
                   return <PlayerCard player={player} key={player.id} />
               })}
            </div>
        )
    }
   
}

export default PlayerList;