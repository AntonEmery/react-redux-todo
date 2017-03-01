import React from 'react';

/* Standard class component */
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.txt}</h1>
        <p>{this.props.cat}</p>
      </div>
    )
  }
}

//stateless functional Component, only returns jsx. does not have props
//const App = () => <h1>Stateless functional component</h1>;

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

export default App;
