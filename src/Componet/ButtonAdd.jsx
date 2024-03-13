import React from 'react';
import Style from './ButtonAdd.module.css';

const ButtonAdd = (props) => {

 
 
  return (
    <>
      <div className={Style.buttonContainer}>
        <input type="text" value={props.todoName} className={`${Style.input} ` } placeholder="Enter your Todo Name" aria-label="Username" aria-describedby="basic-addon1" 
        onChange={props.handleOnChangeName }/>
        <input type="date" value={props.todoDate} className={`${Style.input}  ` } 
        onChange={props.handleOnChangeDate}/>
        <button className="btn btn-primary"
        onClick={props.handleOnClick}>Add</button>
      </div>
      
    </>
  );
}

export default ButtonAdd;
