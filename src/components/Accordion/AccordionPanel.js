import React from 'react';

const setupCollapse = props => {
  console.log("clicked header", props);
}
const AccordionPanel = props => {
  return (
    <div className="accordion-panel">
      <div className="accordion-panel--header" onClick={() => props.handleClick(props.label)}>{props.label}</div>
      <div className="accordion-panel--body">{props.children}</div>
    </div>
  );
}

export default AccordionPanel;
