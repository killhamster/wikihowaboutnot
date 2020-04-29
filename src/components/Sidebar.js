import React from 'react';
import Author from './Author';
import Rating from './Rating';

function Sidebar() {
  return(
    <div id="sidebar">
      <Author />
      <Rating />
    </div>
  )
}

export default Sidebar;
