import React from 'react';
import Style from './ButtonAdd.module.css';

const ButtonAdd = (props) => {

 
 
  return (
    <>
      <div className={Style.buttonContainer}>
        <input type="text" className="form-control me-4" placeholder="Enter your Todo Name" aria-label="Username" aria-describedby="basic-addon1" 
        onChange={props.handleOnchange}/>
        <input type="date" className="form-control me-4" 
        onChange={props.handleOnchange}/>
        <button className="btn btn-primary"
        onClick={props.handleonClick}>Add</button>
      </div>
      
    </>
  );
}

export default ButtonAdd;
