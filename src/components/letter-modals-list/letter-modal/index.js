import React, {Component} from 'react';
import './style.sass';

import {Button} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import IconButton from '../../commonInUse/icon-button';

export default class LetterModal extends Component {
  constructor(props) {
    super(props);

    this.editor = React.createRef();

    this.save = this.save.bind(this);
  }

  componentDidMount() {
    this.initIframeEditor();
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
    console.log(this.editor.current.contentDocument.body.innerText);
  }

  render() {
    return (
      <div className="letter-modal">
        <div className="letter-modal__header">
          <h3>{this.props.modal.title}</h3>
          <div className="letter-modal__buttons">
            <IconButton
              onClick={() => this.props.closeModal(this.props.modal)}
            ><FontAwesomeIcon icon="times"/></IconButton>
          </div>
        </div>
        <div className="letter-modal__body body">
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