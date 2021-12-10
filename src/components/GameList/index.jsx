import React from 'react'
import GameCard from 'components/GameCard'
import {Grid} from '@mui/material'

const GameList = ({games}) => {
  
  return (
      <Grid container spacing={3}>
        {games && games.map(game => (
          <Grid key={game.id} item xs={12} md={6}>
            <GameCard game={game}/>
          </Grid>
        ))}
      </Grid>
  )
}
    
export default GameList
