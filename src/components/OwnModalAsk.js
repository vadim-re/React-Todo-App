import React from "react";
import "../css/App.css";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class OwnModalAsk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      backdrop: true,

      removeTodo: this.props.removeTodo
    };

    this.toggle = this.toggle.bind(this);
  }
  removeTodo = () => {
    this.props.dataInterface.removeTodo(this.props.id);

    this.setState({
      modal: !this.state.modal,
      reloadeThemAll: this.props.reloadeThemAll()
    });
  };

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <div className="delete">
        <button onClick={this.toggle} className="li_delete">
          <i className="fa fa-times" aria-hidden="true" />
        </button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Eintrag bearbeiten</ModalHeader>
          <ModalBody>
            <p>Eintrag wirklich löschen?</p>
          </ModalBody>
          <ModalFooter>
            <a className="save" onClick={this.removeTodo}>
              Löschen
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
