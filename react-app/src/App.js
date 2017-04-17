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
// props.children allows us to access what is b/t the Button component tags, vs just passing
//in props
<h3>{props.children}</h3>

class Heart extends React.Component {
  render() {
    return <span>&hearts;</span>
  }
}

export default App;
