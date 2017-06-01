import React from 'react';

class Items extends React.Component {
  render() {
    const {todos} = this.props.items
    return (
      <ul>
        {todos.map((item, index) => {
          return <li key={index}>{item.text}</li>;
        })}
      </ul>
    )
  }
}

export default Items;
