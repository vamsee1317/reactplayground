import React, { Component } from 'react'

export class Greeting extends Component {

 constructor(props){
    super(props);
 }

  render() {
    return (
      <div className='mt-4'>
        <h1 className='text-3xl'>Hello {this.props.name}</h1>
      </div>
    )
  }
}
