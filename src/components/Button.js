import React from "react";

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    this.all_active = "active";
    this.rest_active = "";
    this.done_active = "";
  }
  changeVisibilityFilter = e => {
    this.setState({
      visibilityFilter: e.target.title
    });
  };
  onStateChange = e => {
    switch (e.target.title) {
      case "Alle Aufgaben":
        this.all_active = "active";
        this.rest_active = "";
        this.done_active = "";

        break;

      case "Verbliebene Aufgaben":
        this.all_active = "";
        this.rest_active = "active";
        this.done_active = "";
        break;
      case "Erledigte Aufgaben":
        this.all_active = "";
        this.rest_active = "";
        this.done_active = "active";
        break;
      default:
        break;
    }
    this.props.filterChange(e);
    this.changeVisibilityFilter(e);
  };

  render() {
    return (
      <div>
        <div className="col-md-4">
          <button
            className={this.all_active}
            onClick={this.onStateChange}
            key="0"
            title="Alle Aufgaben"
          >
            Alle Aufgaben {this.props.countAll}
          </button>
        </div>
        <div className="col-md-4">
          <button
            className={this.rest_active}
            onClick={this.onStateChange}
            key="1"
            title="Verbliebene Aufgaben"
          >
            Verbliebene Aufgaben {this.props.countOpen}
          </button>
        </div>
        <div className="col-md-4">
          <button
            className={this.done_active}
            onClick={this.onStateChange}
            key="2"
            title="Erledigte Aufgaben"
          >
            Erledigte Aufgaben {this.props.countDone}
          </button>
        </div>
      </div>
    );
  }
}
