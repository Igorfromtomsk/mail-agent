import React, {Component} from 'react';
import './App.sass';

import Grid from "react-bootstrap/es/Grid";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";

import Sidebar from "./components/sidebar";
import LetterList from "./containers/letters-list";
import Footer from "./components/footer";
import Header from "./components/header";
import LetterModalsList from './components/letter-modals-list'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modals: []
    };

    this.addNewLetterToModalsList = this.addNewLetterToModalsList.bind(this);
    this.sendLetterHandler = this.sendLetterHandler.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  addNewLetterToModalsList(letter) {
    const opened_modals_to_write = this.state.modals.filter(letter => letter.pseudo_id);
    const pseudo_id =
      opened_modals_to_write.length ?
        opened_modals_to_write.sort((a, b) => a.pseudo_id - b.pseudo_id)[0].pseudo_id + 1 :
        1;

    console.log(this.state.modals);
    if (!letter || this.state.modals.filter(f_letter => f_letter.id === letter.id).length === 0) {
      this.setState({
        modals: [...this.state.modals, letter || {pseudo_id, text: ''}]
      })
    }
  }

  sendLetterHandler(letter) {
    this.props.sendLetterHandler(letter);
  }

  closeModal(letter) {
    this.setState({
      modals: this.state.modals.filter(f_letter => f_letter !== letter)
    })
  }

  render() {
    return (
      <>
        <Grid fluid>
          <Row className="show-grid">
            <Col md={12}>
              <Header/>
            </Col>
          </Row>
          <Row className="show-grid main-container">
            <Col md={2}>
              <Sidebar
                addNewLetterToModalsList={this.addNewLetterToModalsList}
              />
            </Col>
            <Col md={10}>
              <LetterList
                addNewLetterToModalsList={this.addNewLetterToModalsList}
              />
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={12}>
              <Footer/>
            </Col>
          </Row>
        </Grid>
        <LetterModalsList
          closeModal={this.closeModal}
          modals={this.state.modals}
          sendLetterHandler={this.sendLetterHandler}
        />
      </>
    );
  }
}

export default App;
