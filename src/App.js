import React from 'react';
import Items from './items';

/* Standard class component */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {item: ''}
  }

handleChange(e) {
  this.setState({item: e.target.value})
}

handleSubmit() {
  const {item} = this.state;
  this.props.addToDo(item);
}


render() {
    const {item} = this.state;
    console.log(this.props);
    return (
      <div>
      <p>Redux To Do List</p>
        <Items items={this.props.value} />
        <input
          type="text"
          onChange={this.handleChange.bind(this)}
          value={item}
        />
      <br/>
      <button type="submit" onClick={this.handleSubmit.bind(this)}>Add To Do</button>
    </div>
    )
  }
}

export default App;
