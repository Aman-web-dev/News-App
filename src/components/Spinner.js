import React, { Component } from 'react'
import ZZ5H from './ZZ5H.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center spinner-container'>
        <img src={ZZ5H}  className='text-center' alt='Loading'/>
      </div>
    )
  }
}

