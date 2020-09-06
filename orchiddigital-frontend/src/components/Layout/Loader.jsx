import React, { Component } from 'react'
import Page from 'react-page-loading'

export default class Loader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Page loader={"bar"} color={"#A9A9A9"} >
     
          <p>Loading</p>
        </Page>
      </div>
    )
  }
}
