import React from 'react'

const Player = (props) => {
  return (
    <div className={props.whichplayer}>
        
        <h2>Player {props.whichplayer} </h2>
        <h3>Wins: </h3>
        
        
    </div>
  )
}

export default Player;
