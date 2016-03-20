import React from 'react';

import RemoveButton from './RemoveButton.jsx'

export default class ListElement extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className={this.props.item.active ? "row list-row" : "row list-row disabled"}>

        <div className="col-xs-2">
          <div className="box">
            <div className="list-item">{this.props.item.orderDate}</div>
          </div>
        </div>

        <div className="col-xs-3">
          <div className="box">
            <div className="list-item">{this.props.item.orderNumber}</div>
          </div>
        </div>

        <div className="col-xs-3">
          <div className="box">
            <div className="list-item">{this.props.item.orderRetailer}</div>
          </div>
        </div>

        <div className="col-xs-1">
          <div className="box">
            <div className="list-item">{this.props.item.orderItems}</div>
          </div>
        </div>

        <div className="col-xs-2">
          <div className="box">
            <div className="list-item">{this.props.item.orderStatus}</div>
          </div>
        </div>


        {/*remove button*/}
        <RemoveButton removeItem={this.props.removeItem}/>
      </div>

    )
  }
}
