import React from 'react'

export default class Starwars extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      apiUrl: 'https://swapi.co/api/people/',
    }
  }
  componentDidMount() {
    console.log(`Our component Star wars is mount`)
  }
  render() {
    return <h1>A StarWars story</h1>
  }
}
