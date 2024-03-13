import React from 'react'
import Header from './Header';
import {Container} from './Container';
import ButtonAdd from './ButtonAdd';
import DeleteItems from './DeleteItems';
import { useState } from "react";


const HomePage = () => {

  const [item , setitem]=useState("");

  const handleOnchange=((e) => {
    console.log(e.target.value);
  })

const handleonClick=((e) => {
  console.log(e.target.value);
});
   
  

  return (
    <>
     <Header/>
     <Container>
        <ButtonAdd handleOnchange={handleOnchange} handleonClick={handleonClick} />
        <DeleteItems/>
     </Container>
    </>
  )
}

export default HomePage
