import React from 'react';

//import action functions



/* Standard class component */
class App extends React.Component {




render() {
    return (
      <div>
      <p>Learning Redux</p>
      <button onClick={this.props.increment}>Increment</button>
      <button onClick={this.props.decrement}>Decrement</button>
      <p>
        Store is {this.props.value}
      </p>
    </div>
    )
  }
}

export default App;
