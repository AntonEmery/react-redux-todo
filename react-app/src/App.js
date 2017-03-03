import React from 'react';

/* Standard class component */
class App extends React.Component {

  render() {
    return (
      <Button>I <Heart /> React</Button>
    )
  }
}

//stateless functional component
const Button = (props) =>
  <button>{props.children}</button>

class Heart extends React.Component {
  render() {
    return <span>&hearts;</span>
  }
}


export default App;
