import React, { Component } from 'react';

class List extends Component {

  onDelete(index){
    this.props.ToDelete(index);
  }
  render(){
    return (
      <ul>
        {
          this.props.items.map((text, index) => <li key={index}>{text} <button onClick={this.onDelete.bind(this, index)}>X</button></li>)
        }
      </ul>
    );
  }
}

export default List;
