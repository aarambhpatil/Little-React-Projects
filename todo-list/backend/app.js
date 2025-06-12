const express = require("express");
const app = express();
const cors = require("cors")
const dotenv = require("dotenv");
const conSQL = require("./config/connectSQL");

dotenv.config();

const PORT = process.env.PORT;

app.use(cors())
app.use(express.json());

const createNewTable = () => {
    conSQL.query("CREATE TABLE TaskList (TaskList TEXT)", (error, results) => {
        if (error) return -1
        return 1;
    })
}

app.get("/currentList", (req, res) => {
  conSQL.query("SELECT * from TaskList", async (error, results, fields) => {
    if (error && error.code == "ER_NO_SUCH_TABLE") {
        createNewTable()
        return res.status(210).send("Table Created")
    }
    return res.status(200).json({ results });
  });
});

app.post("/appendList", (req, res) => {
  if (!req.body || !req.body.task) {
    return res.status(404).json({ message: "No Task Sent" });
  }
  const { task } = req.body
  conSQL.query(`INSERT INTO TaskList VALUES ("${task}")`, (error, results, fields) => {
    if (error) {
        return res.sendStatus(404)
    }
    res.status(200).json({message: `Task ${task} added successfully`})
  })
});

app.post("/deleteList", (req, res) => {
  if (!req.body || !req.body.task) {
    return res.status(404).json({ message: "No Task Sent" });
  }
  const { task } = req.body
  conSQL.query(`DELETE from TaskList WHERE task="${task}"`, (error, results, fields) => {
    
  })
})

app.listen(PORT || 5000, (req, res) => {
  console.log(`App runnning on Port: ${PORT || 5000}`);
});
