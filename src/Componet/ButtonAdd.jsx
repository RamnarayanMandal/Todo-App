import React from 'react';
import Style from './ButtonAdd.module.css';

const ButtonAdd = (props) => {
  return (
    <>
      <form className={Style.buttonContainer} onSubmit={props.handleOnClick}>
        <input
          type="text"
          className={`${Style.input} `}
          placeholder="Enter your Todo Name"
          aria-label="Todo Name"
          aria-describedby="basic-addon1"
          ref={props.itemNameRef}
        />
        <input
          type="date"
          className={`${Style.input} `}
          ref={props.itemDateRef}
        />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </>
  );
}

export default ButtonAdd;
