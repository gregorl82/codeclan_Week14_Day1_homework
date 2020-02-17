import React, { Fragment } from 'react';

function ChartItem(props) {
  return (
    <Fragment>
      <p>{props.children.chartPosition}. {props.children['im:name'].label}, {props.children['im:artist'].label}</p>
    </Fragment>
  )
}

export default ChartItem;
