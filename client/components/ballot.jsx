import React from 'react';

class Ballot extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {

    alert('You have added: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h3>You are now ready to begin!</h3>
        <h4>Person X</h4>
        <form onSubmit={this.handleSubmit}>
          <label>
            Please type in your suggestion:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit Button" />
        </form>
        <h6> Pass your phone to the next person</h6>
      </div>

    );
  }
}
export default Ballot;
