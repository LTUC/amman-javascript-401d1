import React from 'react';

const render = (condition = false, children = null) => {
  return condition ? children : null;
};

export const If = props =>
  React.Children.map(props.children, child =>
    React.cloneElement(child, { condition: props.condition }),
  );

export const Then = props => render(props.condition, props.children);
export const Else = props => render(!props.condition, props.children);

/*
<When condition={true}>
  <h2>When Works</h2>
</When>
*/
export const When = props => render(props.condition, props.children);

/*
<Unless condition={administrator}>
  Pay more $$ and we will make you an admin
</Unless>
*/
export const Unless = props => render(!props.condition, props.children);
