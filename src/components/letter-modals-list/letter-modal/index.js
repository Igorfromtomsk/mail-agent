import React, {Component} from 'react';
import './style.sass';

import {Button} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import IconButton from '../../commonInUse/icon-button';

export default class LetterModal extends Component {
  constructor(props) {
    super(props);

    this.editor = React.createRef();

    this.state = {
      title: this.props.modal.title
    };

    this.save = this.save.bind(this);
    this.titleChangeHandler = this.titleChangeHandler.bind(this);
  }

  componentDidMount() {
    this.initIframeEditor();
  }

  titleChangeHandler(e) {
    this.setState({
      title: this.getTitle.value
    })
  }

  initIframeEditor() {
    const iframe = this.editor.current;
    const html =
      `<html>
        <head>
        <style>
          body { margin: 0; padding: 0; height: 100%; }
        </style>
        </head>
        <body>${this.props.modal.text}</body>
      </html>`;

    iframe.contentDocument.open();
    iframe.contentDocument.write(html);
    iframe.contentDocument.close();

    iframe.contentDocument.designMode = 'on';
  }

  save() {
    this.props.sendLetter({
      author: 'me',
      recipient: this.getRecipient.value,
      title: this.getTitle.value,
      text: this.editor.current.contentDocument.body.innerText,
      category: 'outbox',
      time: new Date()
    });
  }

  render() {
    return (
      <div className="letter-modal">
        <div className="letter-modal__header">
          <h3>{this.state.title}</h3>
          <div className="letter-modal__buttons">
            <IconButton
              onClick={() => this.props.closeModal(this.props.modal)}
            ><FontAwesomeIcon icon="times"/></IconButton>
          </div>
        </div>
        <div className="letter-modal__body body">
          <div className="letter-modal__input-group">
            <input
              className="letter-modal__input"
              type="text"
              name="recipient"
              placeholder="Кому:"
              ref={node => this.getRecipient = node}
            />
          </div>
          <div className="letter-modal__input-group">
            <input
              className="letter-modal__input"
              type="text"
              name="title"
              onChange={this.titleChangeHandler}
              placeholder="Тема:"
              ref={node => this.getTitle = node}
              defaultValue={this.props.modal.title}
            />
          </div>
          <iframe className="body__editor" ref={this.editor}/>
        </div>
        <div className="letter-modal__footer">
          <Button
            onClick={this.save}
            bsStyle="success"
          >Send</Button>
        </div>
      </div>
    )
  }
}