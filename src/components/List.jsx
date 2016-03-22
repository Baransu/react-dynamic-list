import React from 'react';

import ListElement from './ListElement.jsx';
import ListHead from './ListHead.jsx';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }

    // setInterval(() => {
    //   this.removeItem(Math.floor(Math.random() * this.state.items.length))
    // }, 5000);
    //
    // setInterval(() => {
    //   this.addNewItem()
    // }, 1000);

  }

  addNewItem() {
    let date = new Date();
    this.setState({
      items: [...this.state.items,
        {
          orderDate: date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear(),
          orderNumber: '0123456789ABC',
          orderRetailer: 'Barneys New York',
          orderItems: 1,//this.state.items.length + 1,
          orderStatus: 'Processing',
          active: Math.random() > 0.5 ? true : false
        },
      ]
    });
  }

  removeItem(index) {
    var items = this.state.items.filter((item, i) => i !== index);
    this.setState({items: items});
  }

  render() {
    return (
      <div>
        <button onClick={this.addNewItem.bind(this)}>Add New Item</button>
        <div className="container list-container">
          {/*header*/}
          <ListHead />
          {/*list*/}
          {this.state.items.map((item, i) => {
            return (
              <ListElement
                key = {i}
                item = {item}
                removeItem = {this.removeItem.bind(this, i)}
                />
            );
          })}
        </div>
      </div>
    )
  }

}
