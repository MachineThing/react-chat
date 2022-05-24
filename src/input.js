import React from 'react';

export default class Input extends React.Component {
  onPress = event => {
    if (event.keyCode === 13) {  // New line
      if (event.target.value !== "") {
        this.props.handler(event.target.value);
        event.target.value = "";
      }
    };
  }

  render() {
    return(
      <div class="input">
        <input onKeyDown={this.onPress} />
      </div>
    )
  }
}
