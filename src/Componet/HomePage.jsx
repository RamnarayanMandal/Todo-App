import React, { useRef, useState } from "react";
import Header from "./Header";
import { Container } from "./Container";
import ButtonAdd from "./ButtonAdd";
import DeleteItems from "./DeleteItems";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sms from "./Sms";

const HomePage = () => {
  // State for todo items
  const [todoItems, setTodoItems] = useState([]);
  
  // Refs for input fields
  const itemNameRef = useRef();
  const itemDateRef = useRef();
  
  // Function to check if an item already exists
  const exists = (itemName) => {
    return todoItems.some((item) => item.name === itemName);
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    
    // Access current values from refs
    const newItemName = itemNameRef.current.value;
    const newItemDate = itemDateRef.current.value;

    if (newItemName !== "" && newItemDate !== "") {
      if (!exists(newItemName)) {
        const newItem = {
          name: newItemName,
          date: newItemDate,
        };
        // Update todoItems array by appending the new item
        setTodoItems([...todoItems, newItem]);

        // Reset input fields
        itemNameRef.current.value = "";
        itemDateRef.current.value = "";

        toast.success("Item Added Successfully", {
          position: "top-center",
          theme: "colored",
        });
      } else {
        // Display toast notification for existing item
        toast.error("Item already exists!", {
          position: "top-center",
        });
      }
    } else {
      // Display toast notification for empty fields
      toast.error("Please fill out both fields!", {
        position: "top-center",
      });
    }
  };

  const handleDelete = (itemName) => {
    const updatedItems = todoItems.filter(item => item.name !== itemName);
    setTodoItems(updatedItems);
    toast.success(`${itemName} Item Deleted Successfully`, {
      position: "top-center",
      theme: "colored",
    });
  };
  

  return (
    <>
      <Header />
      <Container>
        <ButtonAdd
          handleOnClick={handleOnClick}
          itemNameRef={itemNameRef}
          itemDateRef={itemDateRef}
        />
        <ToastContainer />
        {todoItems.length === 0 && <Sms />}
        {/* Pass todoItems and handleDelete as props to DeleteItems component */}
        <DeleteItems items={todoItems} handleDelete={handleDelete} />
      </Container>
    </>
  );
};

export default HomePage;
