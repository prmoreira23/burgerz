import React, { Component } from 'react';

const BurgerDisplay = (props) => {
    return (
      <div className="BurgerDisplay">
        <img src={ props.burger.imgURL } />
        <br/>
        <h2>{ props.burger.name }</h2>
        <br/>
        <select onChange={(e) => props.onChangeCategory(props.burger, e.target.value)} ref={this.category} value={props.burger.category}>
          <option value="Relatable">Relatable</option>
          <option value="Bougie">Bougie</option>
        </select>
      </div>
    )
}

export default BurgerDisplay
