import DeleteAction from "../actions/DeleteAction";

const TaskCard = (task) => {
  return (
    <div className="py-3 px-1 w-45 bg-gray-100 rounded-lg">
      <p className="p-2">{task.task}</p>
      <button
        className="p-2 bg-red-500 rounded-lg cursor-pointer transition hover:bg-gray-500"
        onClick={() => {
          DeleteAction(task);
          window.location.reload(true);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskCard;
