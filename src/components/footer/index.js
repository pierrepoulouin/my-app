import React from 'react'

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div class="card">
        <div class="card-header">Dicton</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>Dominick est fort et adore le Roquefort</p>
            <footer class="blockquote-footer">
              Someone famous in{' '}
              <cite title="Source Title">Guillaume Guillotin</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    )
  }
}
