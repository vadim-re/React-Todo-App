import React from "react";
import "../css/App.css";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class OwnModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      backdrop: true,

      inputValue: this.props.text
    };

    this.toggle = this.toggle.bind(this);
  }
  updateTodo = e => {
    if (this._todoInputField.value) {
      this.props.dataInterface.updateTodo(
        this.props.id,
        this._todoInputField.value
      );
      this.setState({
        modal: !this.state.modal,
        reloadeThemAll: this.props.reloadeThemAll()
      });
    }
  };
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  submitOnEnter = e => {
    if (e.key === "Enter") {
      this.updateTodo(e);
    }
  };
  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };
  render() {
    return (
      <div className={this.props.archiveClass + " li_bearb"}>
        <button onClick={this.toggle}>
          <i className="fa fa-pencil" aria-hidden="true" />
        </button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Eintrag bearbeiten</ModalHeader>
          <ModalBody>
            <input
              onKeyPress={this.submitOnEnter}
              type="text"
              value={this.state.inputValue}
              ref={c => (this._todoInputField = c)}
              onChange={this.handleChange}
            />
          </ModalBody>
          <ModalFooter>
            <a className="save" onClick={this.updateTodo}>
              Speichern
            </a>
            <a className="cancel" onClick={this.toggle}>
              Abbrechen
            </a>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
