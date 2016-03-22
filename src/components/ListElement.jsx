import React from 'react';

import RemoveButton from './RemoveButton.jsx'

export default class ListElement extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div class={this.props.item.active ? "row list-row" : "row list-row disabled"}>

        <div class="col-xs-2">
          <div class="box">
            <div class="list-item">{this.props.item.orderDate}</div>
          </div>
        </div>

        <div class="col-xs-3">
          <div class="box">
            <div class="list-item">{this.props.item.orderNumber}</div>
          </div>
        </div>

        <div class="col-xs-3">
          <div class="box">
            <div class="list-item">{this.props.item.orderRetailer}</div>
          </div>
        </div>

        <div class="col-xs-1">
          <div class="box">
            <div class="list-item">{this.props.item.orderItems}</div>
          </div>
        </div>

        <div class="col-xs-2">
          <div class="box">
            <div class="list-item">{this.props.item.orderStatus}</div>
          </div>
        </div>


        {/*remove button*/}
        <RemoveButton removeItem={this.props.removeItem}/>
      </div>

    )
  }
}
