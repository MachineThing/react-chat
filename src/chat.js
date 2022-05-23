import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.nickname;
    this.msg = props.msg;
    this.style = {"color": "red"};

  }

  render() {
    return(
      <p><span style={this.style}>{this.name}</span>: {this.msg}</p>
    )
  }
}

export default class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chats: []
    };
    this.state.chats.push({nickname:"Bot", msg:"Chats go here!"});

    this.props.handler.onmessage = function (event) {
      console.log(event.data);
    }
  }

  render() {
    return(
      <div>
        {this.state.chats.map(function(item) {
          return(
            <Message nickname={item.nickname} msg={item.msg} key={item}/>
          )
        })}
      </div>
    )
  }
}
