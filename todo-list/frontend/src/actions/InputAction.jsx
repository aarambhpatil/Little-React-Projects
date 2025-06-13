const InputAction = (task) => {
  fetch("http://localhost:5000/appendList", {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
    },
    body: JSON.stringify({ task: task }),
  }).then((res) => console.log(res))
  .catch((err) => console.log(err))
};

export default InputAction;
