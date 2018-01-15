import React from "react";
import VisibleTodoList from "./VisibleTodoList";
import Button from "./Button";
import "../css/bootstrap.css";

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.visibilityFilters = [
      "Alle Aufgaben",
      "Verbliebene Aufgaben",
      "Erledigte Aufgaben"
    ];

    this.state = {
      todos: this.props.dataInterface.getAllTodos()
    };
  }

  addTodo = () => {
    if (this._todoInputField.value) {
      this.props.dataInterface.addTodo(this._todoInputField.value);
      this.setState({ todos: this.props.dataInterface.getAllTodos() });

      this._todoInputField.value = "";
    }
  };
  reloadeThemAll = () => {
    this.setState({ todos: this.props.dataInterface.getAllTodos() });
  };

  archiveToggleTodo = e => {
    this.props.dataInterface.archiveToggleTodo(e.target.dataset.id);
    this.setState({ todos: this.props.dataInterface.getAllTodos() });
  };

  removeTodo = e => {
    this.props.dataInterface.removeTodo(e.target.dataset.id);

    this.setState({ todos: this.props.dataInterface.getAllTodos() });
  };

  changeVisibilityFilter = e => {
    this.setState({
      visibilityFilter: e.target.title
    });
  };

  visibleTodos = () => {
    switch (this.state.visibilityFilter) {
      case "Alle Aufgaben":
        return this.state.todos;

      case "Verbliebene Aufgaben":
        return this.state.todos.filter(todo => todo.isDone === false);

      case "Erledigte Aufgaben":
        return this.state.todos.filter(todo => todo.isDone === true);

      default:
        return this.state.todos;
    }
  };

  submitOnEnter = e => {
    if (e.key === "Enter") {
      this.addTodo();
    }
  };

  render() {
    let visibleTodos = this.visibleTodos();

    return (
      <div className="row">
        <div className="col-md-8 col-xs-12 col-lg-8 col-sm-8 col-md-offset-2  col-sm-offset-2">
          <div>
            <h1>
              <i className="fa fa-check-square-o" aria-hidden="true" /> Easy
              TodoApp with React
            </h1>
            <input
              onKeyPress={this.submitOnEnter}
              type="text"
              placeholder="Was muss heute erledigt werden?"
              ref={c => (this._todoInputField = c)}
            />
          </div>

          <VisibleTodoList
            reloadeThemAll={this.reloadeThemAll}
            visibleTodos={visibleTodos}
            visibilityFilter={this.state.visibilityFilter}
            archiveToggleTodo={this.archiveToggleTodo}
            removeTodo={this.removeTodo}
          />
          <div className="filter-buttons">
            <Button
              countAll={this.props.dataInterface.getCountAll()}
              countDone={this.props.dataInterface.getCountDone()}
              countOpen={this.props.dataInterface.getCountOpen()}
              filter={this.visibilityFilters}
              filterChange={this.changeVisibilityFilter}
              visibilityFilter={this.state.visibilityFilter}
            />
          </div>
        </div>
      </div>
    );
  }
}
