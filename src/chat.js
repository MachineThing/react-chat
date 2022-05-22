import React from 'react';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.props.handler.onmessage = function (event) {
      console.log(event.data);
    }
  }

  render() {
    return(
      <div>
        <p>Chats go here</p>
      </div>
    )
  }
}
