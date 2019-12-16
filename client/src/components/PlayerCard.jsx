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
                {this.props.player.name}
            </div>
        )
    }
}


export default PlayerCard