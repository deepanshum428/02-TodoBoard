import React from "react";

const Board = ({ taskList, setTaskList }) => {
  const handleDelete = (deleteIndex) => {
    const newTaskList = taskList.filter((_, taskID) => taskID !== deleteIndex);
    setTaskList(newTaskList);
  };

  return (
    <div className="w-full flex flex-col gap-4 items-center mt-6">
      {taskList.map((task, index) => (
        <div
          key={index}
          className="bg-violet-100 w-full max-w-md rounded-2xl shadow-md p-5 flex items-center justify-between"
        >
          <div>
            <p className="text-lg font-semibold text-violet-700">
              {index + 1}. {task}
            </p>
          </div>

          <button
            onClick={() => handleDelete(index)}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-200"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Board;
