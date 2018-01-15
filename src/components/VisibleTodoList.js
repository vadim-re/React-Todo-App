import React from "react";
import SingleTodo from "./SingleTodo";

export default class VisibleTodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.visibleTodos.length > 0 ? (
          <ul>
            {this.props.visibleTodos.map(todo => (
              <SingleTodo
                key={todo.id}
                todoId={todo.id}
                text={todo.descriptionText}
                isDone={todo.isDone}
                date={todo.date}
                archiveToggleTodo={this.props.archiveToggleTodo}
                removeTodo={this.props.removeTodo}
                reloadeThemAll={this.props.reloadeThemAll}
              />
            ))}
          </ul>
        ) : (
          "Keine Aufgaben vorhanden"
        )}
      </div>
    );
  }
}
