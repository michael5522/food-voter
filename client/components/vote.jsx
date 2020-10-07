import React from 'react';

class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return (
      <div>
        <h4> Check the one you want to vote for</h4>
        <h5> Person 1</h5>
        <h5>1</h5>
        <h5>2</h5>
        <h5>3</h5>
      </div>
    );
  }
}
export default Vote;
