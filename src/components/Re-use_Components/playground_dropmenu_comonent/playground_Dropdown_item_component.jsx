import React from 'react';
import './playground_dropdown_item.styles.scss'


function PlaygroundDropdownItem(props) {

  return(
    <center><button className='features_button' onClick = {props.onClick}> {props.text}</button></center> 


  );
}



export default PlaygroundDropdownItem;