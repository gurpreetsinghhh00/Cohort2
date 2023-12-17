const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

app.get("/todos", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

app.get("/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) throw err;
    const id = parseInt(req.params.id);
    const todo = data.find((item) => item.id == id);
    if (todo === undefined) {
      res.status(404).send();
    } else {
      res.json(todo);
    }
  });
});

app.post("/todos", (req, res) => {
  let todo = req.body;
  let newTodo = {
    id: Math.floor(Math.random() * 1000000),
    title: todo.title,
    completed: todo.completed,
    description: todo.description,
  };
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) throw err;
    let todos = JSON.parse(data);
    todos.push(newTodo);
    fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
      if (err) throw err;
      res.status(201).json({ id: newTodo.id });
    });
  });
});

app.put("/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) throw err;
    let todos = JSON.parse(data);
    const id = parseInt(req.params.id);
    const index = todos.findIndex((todo) => todo.id === id);
    if (index == -1) {
      res.status(404).send();
    } else {
      todos[index].description = req.body.description;
      todos[index].title = req.body.title;
      fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
        if (err) throw err;
        res.status(200).send();
      });
    }
  });
});

app.delete("/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) throw err;
    let todos = JSON.parse(data);
    const id = parseInt(req.params.id);
    const index = todos.findIndex((todo) => todo.id === id);
    if (index == -1) {
      res.status(404).send();
    } else {
      let newTodos = todos.filter((todo) => todo.id !== id);
      todos = newTodos;
      fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
        if (err) throw err;
        res.status(200).send();
      });
    }
  });
});

app.use((req, res, next) => res.status(404).send());

module.exports = app;
