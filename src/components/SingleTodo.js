import React from "react";
import "../css/App.css";
import "../css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";
import "../css/font-awesome.min.css";
import OwnModal from "./OwnModal.js";
import OwnModalAsk from "./OwnModalAsk.js";
import TodoDataInterface from "../lib/TodoDataInterface";

const todoDataInterface = new TodoDataInterface();

export default class SingleTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      archiveClass: ""
    };
  }
  archiveFunction() {
    if (this.props.isDone) {
      this.archiveClass = "hideButton";
    } else {
      this.archiveClass = "";
    }
    return this.archiveClass;
  }

  render() {
    return (
      <li>
        <div className="overlay">
          <div className="background_li">
            <div className="li_hover">
              <button
                className="li_text"
                data-id={this.props.todoId}
                onClick={this.props.archiveToggleTodo}
              >
                <div id="li_header">
                  <h3>
                    {this.props.isDone ? (
                      <span className="line-through">{this.props.text}</span>
                    ) : (
                      this.props.text
                    )}
                  </h3>
                </div>

                <div>
                  {this.props.isDone ? (
                    <span className="small line-through">
                      <i
                        className="fa fa-calendar-o"
                        aria-hidden="true"
                      />&nbsp; {this.props.date}
                    </span>
                  ) : (
                    <span className="small">
                      <i
                        className="fa fa-calendar-o"
                        aria-hidden="true"
                      />&nbsp; {this.props.date}{" "}
                    </span>
                  )}
                </div>
              </button>

              <OwnModal
                archiveClass={this.archiveFunction()}
                id={this.props.todoId}
                text={this.props.text}
                dataInterface={todoDataInterface}
                reloadeThemAll={this.props.reloadeThemAll}
              />
            </div>
            <OwnModalAsk
              id={this.props.todoId}
              text={this.props.text}
              dataInterface={todoDataInterface}
              reloadeThemAll={this.props.reloadeThemAll}
              deleteTodo={this.props.removeTodo}
            />
          </div>
        </div>
      </li>
    );
  }
}
