import React from 'react';
import ReactDOM from 'react-dom/client';
import Input from './input.js'
import Chat from './chat.js'

class ChatApp extends React.Component {
  render() {
    return(
      <>
      <Chat />
      <Input />
      </>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChatApp />
  </React.StrictMode>
);
