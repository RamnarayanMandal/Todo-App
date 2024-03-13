import React from "react";

const DeleteItems = () => {
  const items = [
    {
      name: "milk",
      date: "4/20/2023",
    },
    {
      name: "bread",
      date: "5/15/2023",
    },
  ];

  const handleDelete = (index) => {
    // Implement delete functionality here
    // For example:
    const updatedItems = [...items];
    updatedItems.splice(index, 1); // Removes the item at the given index
    // Set the updated items state or perform any other necessary action
  };

  return (
    <>
      <div className="container text-center">
        {items.map((item, index) => (
          <div className="row" key={index}>
            <div className="col mt-4">
              <p>{item.name}</p>
            </div>
            <div className="col mt-4">
              <p>{item.date}</p>
            </div>
            <div className="col mt-4">
              <button className="btn btn-danger " onClick={() => handleDelete(index)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DeleteItems;
