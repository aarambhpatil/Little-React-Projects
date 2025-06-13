import { useEffect, useState } from "react";
import TaskCard from "./components/TaskCard";
import InputAction from "./actions/InputAction";

const options = {
  method: "GET",
};

async function fetchCurrentList() {
  const response = await fetch("http://localhost:5000/currentList", options);
  console.log(response.json());
}

function App() {
  const [currentList, setCurrentList] = useState([]);
  const [currentInput, setCurrentInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/currentList", options)
      .then((res) => res.json())
      .then((res) => {
        setCurrentList(res.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="w-3/4">
          <h1 className="py-5 text-4xl text-center">Task List</h1>
          <div className="pb-5">
            <input
              className="w-full rounded-lg h-8 bg-gray-200 p-2"
              type="text"
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  InputAction(currentInput);
                  window.location.reload(true);
                }
              }}
            />
            <div className="py-2"></div>
            <button
              className="py-2 px-5 rounded-lg bg-green-500 hover:bg-gray-500 hover:cursor-pointer"
              onClick={() => {
                InputAction(currentInput);
                window.location.reload(true);
              }}
            >
              Add
            </button>
          </div>
        </div>
        <div className="h-1 w-3/4 bg-black"></div>
        <div className="flex flex-row flex-wrap w-full items-center justify-center">
          {currentList && currentList.length != 0 ? (
            <>
              {currentList.map((ele, index) => (
                <div key={`${index}div`} className="p-3">
                  <TaskCard task={ele.TaskList} key={index} />
                </div>
              ))}
            </>
          ) : (
            <h1 className="text-black text-3xl pt-5">No Reminders</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
