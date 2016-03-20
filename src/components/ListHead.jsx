import React from 'react';

export default class ListHead extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row list-head">

        <div className="col-xs-2">
          <div className="box">
            <div className="list-item">Order Date</div>
          </div>
        </div>

        <div className="col-xs-3">
          <div className="box">
            <div className="list-item">Order Number</div>
          </div>
        </div>

        <div className="col-xs-3">
          <div className="box">
            <div className="list-item">Retailer</div>
          </div>
        </div>

        <div className="col-xs-2">
          <div className="box">
            <div className="list-item">Items</div>
          </div>
        </div>

        <div className="col-xs-2">
          <div className="box">
            <div className="list-item">Status</div>
          </div>
        </div>

      </div>
    )
  }

}
