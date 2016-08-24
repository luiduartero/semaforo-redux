import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import '../sass/styles.scss';

// Javascript the good parts
// Reducer
const cambioColor = (state = 0, action) => {
  switch(action.type){
    case 'CHANGE':
      if (state < 2){
        return state+1;
      }
      else{
        return 0;
      }
    default:
      return state;
  }
}

// createStore: reducer --> store
const store = createStore(cambioColor);

const Counter = ({value}) => {
  var  htmlred;
  var  htmlgreen;
  var  htmlyellow;
  if (value=== 0){
    htmlred=<div class="red light"></div>;
  }
  else {
    htmlred=<div class="red light off"></div>;
  }
  if (value=== 2){
    htmlyellow=<div class="yellow light"></div>;
  }
  else {
    htmlyellow=<div class="yellow light off"></div>;
  }
  if (value=== 1){
    htmlgreen=<div class="green light"></div>;
  }
  else {
    htmlgreen=<div class="green light off"></div>;
  }
  return(
    <div>
      <div class="traffic-light">
        {htmlred}
        {htmlyellow}
        {htmlgreen}
      </div>
      <button onClick= {() => ( store.dispatch( { type: 'CHANGE'} ) )}>Change</button>
    </div>
  );
}

const render = () => {
  ReactDOM.render(
    <Counter value={store.getState()} />,
    document.getElementById('root')
  )
};
store.subscribe(render);
render();