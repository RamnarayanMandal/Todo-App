import React, { useState } from "react";
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

  // State for item name and date
  const [itemName, setItemName] = useState("");
  const [itemDate, setItemDate] = useState("");

  const handleOnChangeName = (e) => {
    setItemName(e.target.value);
  };

  const handleOnChangeDate = (e) => {
    setItemDate(e.target.value);
  };

  const exists = (itemName) => {
    return todoItems.some((item) => item.name === itemName);
  };

  const handleOnClick = () => {
    // Check if itemName is not empty, itemDate is not empty, and itemName does not already exist
    if (itemName !== "" && itemDate !== "") {
      if (!exists(itemName)) {
        const newItem = {
          name: itemName,
          date: itemDate,
        };
        // Update todoItems array by appending the new item
        setTodoItems([...todoItems, newItem]);

        // Reset input fields
        setItemName("");
        setItemDate("");

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
    toast.success("Item Deleted Successfully", {
      position: "top-center",
      theme: "colored",
    });
  };
  

  return (
    <>
      <Header />
      <Container>
        <ButtonAdd
          handleOnChangeDate={handleOnChangeDate}
          handleOnClick={handleOnClick}
          handleOnChangeName={handleOnChangeName}
          todoName={itemName}
          todoDate={itemDate}
        />
        <ToastContainer />
        {todoItems.length==0&&<Sms/>}
        {/* Pass todoItems and handleDelete as props to DeleteItems component */}
        <DeleteItems items={todoItems} handleDelete={handleDelete} />
      </Container>
    </>
  );
};

export default HomePage;
