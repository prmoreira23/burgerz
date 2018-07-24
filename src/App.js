import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {

  state = {
    burgers: [],
    burger: null
  }

  onBurgerClick = (burger) => {
    this.setState((prevState) => {
      return {
        burger: burger
      }
    });
  }

  onDeleteBurger = (burger) => {
    let burgers = this.state.burgers.filter(bur => bur !== burger);
    this.setState((prevState) => {
      return {burgers}
    });
  }

  onChangeCategory = (burger, category) => {
    burger.category = category;

    this.setState((prevState) => {
      return {...this.state.burgers}
    });

    fetch("http://localhost:3001/burgers/"+ burger.id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {...burger } )
    });
  }

  componentDidMount(){
    fetch("http://localhost:3001/burgers")
      .then(res => res.json())
      .then(burgers => this.setState({ burgers: burgers, burger: burgers[0] }));
  }

  render() {
    return (
      <div id="App">
        <BurgerContainer burgers={this.state.burgers} onBurgerClick={this.onBurgerClick} onDeleteBurger={this.onDeleteBurger} />
        {this.state.burger ? <BurgerDisplay burger={ this.state.burger } onChangeCategory={this.onChangeCategory} /> : <div>Click a Burger</div>}
      </div>
    );
  }
}

export default App;
