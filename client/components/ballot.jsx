import React from 'react';
import SuggestionEnd from './suggestionEnd';

class Ballot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      allRestaurants: [],
      amountOfPeople: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const oldData = [...this.state.allRestaurants];
    oldData.push(this.state.value);
    this.setState({
      allRestaurants: oldData,
      amountOfPeople: this.state.amountOfPeople + 1,
      value: ''
    });

    this.props.res(oldData);
    // alert('You have added: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const totalPpl = parseInt(this.props.numberOfPeople);
    // console.log("current amount of people",totalPpl);

    if (this.state.amountOfPeople === totalPpl) {
      return (
        <SuggestionEnd view={this.props.view}/>
      );
    } else {
      return (
        <div>
          <h3>You are now ready to begin!</h3>
          <h4>You are currently Person {this.state.amountOfPeople + 1}</h4>
          <form onSubmit={this.handleSubmit}>
            <label>
              Please type in your suggestion:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit Button" />
          </form>
          <h6> Pass your phone to Person {this.state.amountOfPeople + 2} After hitting Submit</h6>
        </div>
      );
    }
  }
}
export default Ballot;
