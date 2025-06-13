const DeleteAction = (task) => {
  fetch("http://localhost:5000/deleteList", {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
    },
    body: JSON.stringify({ task: task }),
  }).then((res) => console.log(res))
  .catch((err) => console.log(err))
};

export default DeleteAction;
