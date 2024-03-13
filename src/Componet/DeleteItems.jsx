import React from "react";

const DeleteItems = ({ items, handleDelete }) => {
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
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(item.name)} // Pass name to handleDelete
              >
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
