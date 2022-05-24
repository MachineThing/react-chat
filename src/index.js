import React from 'react';
import ReactDOM from 'react-dom/client';
import Input from './input.js';
import Chat from './chat.js';
import './less/index.css';

class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.ws = new WebSocket(`ws://${window.location.hostname}:3500`);
  }

  handleInput = text => {
    this.ws.send(text);
  }

  render() {
    return(
      <>
      <Chat handler={this.ws} />
      <Input handler={this.handleInput} />
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChatApp />
  </React.StrictMode>
);
