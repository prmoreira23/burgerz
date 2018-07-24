import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {

  state = {
    filter: "All"
  }

  onChangeFilter = (filter) => {
    this.setState({
      filter
    });
  }

  render(){
    return (
      <div className="BurgerContainer">
        <BurgerFilter onChangeFilter={this.onChangeFilter}/>
        <BurgerList burgers={this.props.burgers} onBurgerClick={this.props.onBurgerClick} onDeleteBurger={this.props.onDeleteBurger} filter={this.state.filter} />
      </div>
    )
  }
}
