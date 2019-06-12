//ici c'est le parent
// il y aura ici la logique des joueurs
import React from 'react'

import Player from './player'

export default class Players extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      players: [
        {
          name: 'Wendie',
          poste: 'defender',
          isPermanent: true,
          leader: false,
          age: 37,
        },
        {
          name: 'Amandine',
          poste: 'midfielder',
          isPermanent: true,
          leader: true,
          age: 30,
        },
        {
          name: 'Sakina',
          poste: 'defender',
          isPermanent: true,
          leader: false,
          age: 26,
        },
        {
          name: 'Sarah',
          poste: 'goalkeeper',
          isPermanent: true,
          leader: false,
          age: 33,
        },
        {
          name: 'Eugénie',
          poste: 'forward',
          isPermanent: true,
          leader: false,
          age: 32,
        },
      ],
    }
  }

  render() {
    console.log(this.props)
    return (
      <section>
        <h1>Vive le footbal féminin</h1>
        <strong>Nous sommes {this.props.date}</strong>
        <Player
          name={'Zizou'}
          poste={'midfielder'}
          age={46}
          titulaire={true}
          // teams={[`Bordeaux`, `Juventus`, `Real de Madrid`]}
        />
        <h2>Liste des joueuses : </h2>
        {this.state.players.map((value, index) => {
          return (
            <Player
              key={`player` + index}
              number={index}
              name={value.name}
              age={value.age}
              poste={value.poste}
              leader={value.leader}
            />
          )
        })}
      </section>
    )
  }
}
