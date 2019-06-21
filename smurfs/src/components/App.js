import React, { Component } from "react";
import "./App.css";
import { getSmurfs, addSmurf } from "../actions/index";
import { connect } from "react-redux";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  state = {
    name: "",
    age: "",
    height: "",
    id: ""
  };

  componentDidMount() {
    console.log("Smurfs ahoy");
    console.log(this.props);
    console.log(this.props.smurfs);
    this.props.getSmurfs();
  }

  changeHandler = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

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
            </div>)})}
        <form
          onSubmit={() => {
            this.props.addSmurf({ ...this.state });
          }}
        >
          <input
            type="text"
            placeholder="Enter new Smurf name"
            name="name"
            value={this.state.name}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            placeholder="Enter new Smurf age"
            name="age"
            value={this.state.age}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            placeholder="Enter new Smurf height"
            name="height"
            value={this.state.height}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            placeholder="Enter new Smurf id"
            name="id"
            value={this.state.id}
            onChange={this.changeHandler}
          />
          <button type="submit">Send new Smurf to Smurfville</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("this is state", state);

  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(App);
