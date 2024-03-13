import React from 'react'
import style from './Container.module.css'

const Container = (props) => {
  return (
    <div className={style.Container}>
        <div className={style.subContainer} >
            {props.children}
        </div>
      
    </div>
  )
}

export  {Container}
