import React from 'react';

export default class ListHead extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="row list-head">

        <div class="col-xs-2">
          <div class="box">
            <div class="list-item">Order Date</div>
          </div>
        </div>

        <div class="col-xs-3">
          <div class="box">
            <div class="list-item">Order Number</div>
          </div>
        </div>

        <div class="col-xs-3">
          <div class="box">
            <div class="list-item">Retailer</div>
          </div>
        </div>

        <div class="col-xs-2">
          <div class="box">
            <div class="list-item">Items</div>
          </div>
        </div>

        <div class="col-xs-2">
          <div class="box">
            <div class="list-item">Status</div>
          </div>
        </div>

      </div>
    )
  }

}
