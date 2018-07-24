import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

export default class BurgerList extends Component {

  eachBurger = () => {
    let burgers = this.props.burgers;
    burgers = this.props.filter === 'All' ? burgers : (this.props.filter === 'Bougie' ? burgers.filter(burger => burger.category === 'Bougie') : burgers.filter(burger => burger.category === 'Relatable'));
    return burgers.map((burger) => <BurgerItem key={burger.id} burger={burger} onDeleteBurger={this.props.onDeleteBurger} onBurgerClick={this.props.onBurgerClick} />);
  }

  render(){
    return (
      <div className="BurgerList">
        { this.eachBurger() }
      </div>
    )
  }
}
