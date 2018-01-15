import Todo from "./Todo";
import { findIndex } from "lodash";

let todos = JSON.parse(localStorage.getItem("saved") || "[]");

export default class TodoDataInterface {
  constructor() {
    this.todos = todos;
  }

  addTodo(descriptionText) {
    const newTodo = new Todo(descriptionText);
    this.todos.unshift(newTodo);

    localStorage.setItem("saved", JSON.stringify(todos));

    return newTodo;
  }
  archiveToggleTodo(todoId) {
    const todoIndex = findIndex(this.todos, todo => todo.id === todoId);
    if (todoIndex > -1) {
      this.todos[todoIndex].isDone = !this.todos[todoIndex].isDone;
      localStorage.setItem("saved", JSON.stringify(todos));
    }
  }

  removeTodo(todoId) {
    const todoIndex = findIndex(this.todos, todo => todo.id === todoId);
    if (todoIndex > -1) {
      this.todos.splice(todoIndex, 1);
      localStorage.setItem("saved", JSON.stringify(todos));
    }
  }
  getCountAll() {
    if (todos === []) {
      return 0;
    } else {
      return todos.length;
    }
  }
  getCountDone() {
    var j = 0;
    for (var i = 0; i <= todos.length - 1; i++) {
      if (todos[i].isDone === true) {
        j = j + 1;
      }
    }
    return j;
  }
  getCountOpen() {
    var j = 0;
    for (var i = 0; i <= todos.length - 1; i++) {
      if (todos[i].isDone === false) {
        j = j + 1;
      }
    }
    return j;
  }
  getAllTodos() {
    return this.todos.map(todo => todo);
  }

  updateTodo(todoId, textNew) {
    const todoIndex = findIndex(this.todos, todo => todo.id === todoId);

    if (todoIndex > -1) {
      this.todos[todoIndex].descriptionText = textNew;

      localStorage.setItem("saved", JSON.stringify(todos));
    }
  }
}
