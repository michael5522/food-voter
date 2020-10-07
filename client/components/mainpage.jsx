import React from 'react';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle() {
    this.props.view('setup');
    // alert('this is working ');
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>photo should go here</h1>
        <button onClick={this.clickHandle}> click to start</button>
      </div>
    );
  }
}
export default MainPage;
