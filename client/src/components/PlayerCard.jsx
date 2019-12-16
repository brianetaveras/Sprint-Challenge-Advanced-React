import React from 'react'


class PlayerCard extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return (
            <div className="player-card">
               <label>Name:</label> {this.props.player.name}<br/>
               <label>Country:</label> {this.props.player.country}<br/>
               <label>Searches</label> {this.props.player.searches}
            </div>
        )
    }
}



export default PlayerCard