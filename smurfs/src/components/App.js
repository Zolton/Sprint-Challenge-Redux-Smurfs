import React, { Component } from "react";
import "./App.css";
import {getSmurfs} from "../actions/index";
import { connect } from "react-redux";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */




class App extends Component {

  componentDidMount() {
    console.log("Smurfs ahoy")
    console.log(this.props)
    console.log(this.props.smurfs)
    this.props.getSmurfs()
  }
  
  render() {
    return (
      <div className="App">
        Hello from Smurfville
        {this.props.smurfs.map(smurf => {
          return (
          <div>
            <h4>Name: {smurf.name}</h4>
            <h4>Age: {smurf.age}</h4>
            <h4>Height: {smurf.height}</h4>
            <h4>ID: {smurf.id}</h4>
          </div>)
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("this is state", state)

  return {
  smurfs: state.smurfs
  }
};

export default connect(
  mapStateToProps,
  {getSmurfs}
)(App);