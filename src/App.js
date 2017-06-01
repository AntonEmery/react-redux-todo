import React from 'react';
import Items from './items';

/* Standard class component */
class App extends React.Component {

render() {
    console.log(this.props);
    return (
      <div>
      <p>Redux To Do List</p>
        <Items items={this.props.value} />
      <button onClick={this.props.addToDo}>Add To Do</button>

    </div>
    )
  }
}

export default App;
