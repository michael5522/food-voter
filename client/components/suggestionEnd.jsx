import React from 'react';

class SuggestionEnd extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.view('vote');
    // event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Adding Suggestions has concluded

        </label>
        <h1> Prepare to vote!</h1>
        <input type="submit" value="Click to Continue" />
      </form>
    );
  }
}
export default SuggestionEnd;
