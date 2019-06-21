import React, { Component } from "react";
import "./App.css";
import {getSmurfs} from "../actions/index"
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

componentDidMount (){
  this.props.getSmurfs();
}

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.smurfs.map(smurf => {
          return;
          <>
            <h4>Name: {smurf.name}</h4>
            <h4>Age: {smurf.age}</h4>
            <h4>Height: {smurf.height}</h4>
            <h4>ID: {smurf.id}</h4>
          </>;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return;
  smurfs: state.smurfs;
};

export default connect(
  mapStateToProps,
  {getSmurfs}
)(App);
