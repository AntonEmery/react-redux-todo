import React from 'react';

/* Standard class component */
class App extends React.Component {

  testFunction() {
    return 'testing';
  }

  render() {
    return (
      <childComponent blah="test" />



    )
  }
}

//stateless functional component
const childComponent = (props) =>
// props.children allows us to access what is b/t the Button component tags, vs just passing
//in props
<h3>{props.blah}</h3>



export default App;
