import React from 'react';

class Items extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.todos.map(item => {
          return <li>{item.text}</li>;
        })}
      </ul>
    )
  }
}

export default Items;
