import React from 'react';
import Header from './header';
import MainPage from './mainpage';
import Setup from './setup';
import Ballot from './ballot';
import Vote from './vote';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: {
        name: 'home',
        params: {}
      },
      foodSuggestions: {
        restaurant: []
      }
    };
    this.setView = this.setView.bind(this);
    this.addRestaurant = this.addRestaurant.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  addRestaurant(foodInput) {
    this.setState({
      foodSuggestions: {
        restaurant: foodInput
      }
    });
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {

    const viewType = this.state.view.name;
    if (viewType === 'home') {
      return (
        <div>
          < Header />
          < MainPage view={this.setView}/>
        </div>
      );
    } else if (viewType === 'setup') {
      return (
        <div>
          < Header />
          < Setup view={this.setView}/>
        </div>
      );
    } else if (viewType === 'ballot') {
      return (
        <div>
          < Header />
          < Ballot view={this.setView} numberOfPeople={this.state.view.params} res={this.addRestaurant}/>
        </div>
      );
    } else if (viewType === 'vote') {
      return (
        <div>
          < Header />
          < Vote />
        </div>
      );
    }

  }
}
