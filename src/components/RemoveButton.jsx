import React from 'react';

export default class RemoveButton extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="col-xs-1">
        <div class="box">
          <a href="#" onClick={this.props.removeItem} class="list-item item-remove">&#45;</a>
        </div>
      </div>
    )
  }

}
