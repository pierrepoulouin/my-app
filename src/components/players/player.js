// ici on a l'enfant
// il y aura la logique d'un player ici
import React from 'react'

export default class Player extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    console.log(this.props)
    let playerCaptain = ``
    this.props.leader
      ? (playerCaptain = `player leader`)
      : (playerCaptain = `player`)
    let playerAge = ``
    this.props.age > 30 ? (playerAge = 'old') : (playerAge = 'young')
    return (
      <div className={playerCaptain}>
        <p> Numéro: {this.props.number}</p>
        <p>Player: {this.props.name}</p>
        <p>Poste: {this.props.poste}</p>
        <p> Age : {this.props.age} </p>
        <p className={playerAge}>Age : {this.props.age}</p>

        <strong>
          {this.props.leader
            ? this.props.name + ' est capitaine'
            : 'pas capitaine'}
        </strong>

        {/* {this.props.leader ? (
          <p className="player leader">{this.props.name}</p>
        ) : (
          <p className="player">{this.props.players}</p>
        )} */}

        {/* <p>
          {this.props.name} a {this.props.age} ans
        </p>
        <p>
          {this.props.name} est {this.props.titulaire ? 'titulaire' : 'pas ouf'}
        </p>
        <p>{this.props.name} a joué pour :</p> */}
        {/* <ul>
          <li>{this.props.teams[0]}</li>
          <li>{this.props.teams[1]}</li>
          <li>{this.props.teams[2]}</li>
        </ul> */}

        {/* Même methode avec map */}
        {/* <p>{this.props.name} a joué pour :</p>
        <ul> */}
        {/* si cette condition est remplie */}
        {/* {this.props.teams &&
            // alors on execute
            this.props.teams.map(team => {
              return <li>{team} </li>
            })}
        </ul> */}
      </div>
    )
  }
}
