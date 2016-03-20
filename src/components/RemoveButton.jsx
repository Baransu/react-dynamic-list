import React from 'react';

export default class RemoveButton extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-xs-1">
        <div className="box">
          <a href="#" onClick={this.props.removeItem} className="list-item item-remove">&#45;</a>
        </div>
      </div>
    )
  }

}
