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
    this.closeModal = this.closeModal.bind(this);
  }

  addNewLetterToModalsList(letter) {
    if (this.state.modals.filter(f_letter => f_letter.id === letter.id).length === 0) {
      this.setState({
        modals: [...this.state.modals, letter || {}]
      })
    }
  }

  closeModal(letter) {
    this.setState({
      modals: this.state.modals.filter(f_letter => f_letter.id !== letter.id)
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
        />
      </>
    );
  }
}

export default App;
