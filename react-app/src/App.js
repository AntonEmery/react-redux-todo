import React from 'react';

/* Standard class component */
class App extends React.Component {
  constructor() {
    super();
    //define state
    this.state = {txt: "this is the state text"}
  }

  update(e) {
    this.setState({txt: e.target.value})
  }


  render() {
    return (
      <div>
        {/*  pass in state to our component */}
        <h1>{this.state.txt}</h1>
        <p>{this.props.cat}</p>
        <Widget update={this.update.bind(this)}/>
      </div>
    )
  }
}

//stateless functional component
const Widget = (props) =>
  <input type="text" onChange={props.update} />


//stateless functional Component, only returns jsx. does not have props
//const App = () => <h1>Stateless functional component</h1>;

App.propTypes = {
  //txt prop type must be string
  txt: React.PropTypes.string,
  //cat prop type must be number and is required
  cat: React.PropTypes.number.isRequired
}

export default App;
