import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container text-center">
                <h1 className="display-3">Project manage user React JS</h1>
                <p className="lead">with JSON data</p>
                <hr className="my-2" />
            </div>
        </div>
    )
  }
}
