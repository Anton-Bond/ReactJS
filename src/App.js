import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './Header';
import Card from './Card';

class App extends Component {
  state = {
    planets: [
      {
        title: 'Mercury',
        context: `Mercury — the smallest planet in our solar system and closest to the Sun — is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.`,
      },
      {
        title: 'Venus',
        context: `Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.`,
      },
      {
        title: 'Earth',
        context: `Earth — our home planet — is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.`,
      },
      {
        title: 'Mars',
        context: `Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was — billions of years ago — wetter and warmer, with a thicker atmosphere.`,
      },
      {
        title: 'Jupiter',
        context: `Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth.`,
      },
      {
        title: 'Saturn',
        context: `Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.`,
      },
      {
        title: 'Uranus',
        context: `Uranus — seventh planet from the Sun — rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.`,
      },
      {
        title: 'Neptune',
        context: `Neptune — the eighth and most distant major planet orbiting our Sun — is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations.`,
      },
    ],
    viewOnly: false,
  };

  // save card changes
  saveHandler = (index) => (value) => {
    this.setState({
      planets: this.state.planets.map((planet, _index) => {
        return index === _index ? { ...value } : planet;
      }),
    });
  };

  // toggle view page mode
  toggleViewOnlyHandler = () => {
    this.setState({ viewOnly: !this.state.viewOnly });
  };

  render() {
    let planets = this.state.planets.map((p, index) => {
      return (
        <Card
          title={p.title}
          context={p.context}
          key={index}
          isViewOnly={this.state.viewOnly}
          onSave={this.saveHandler(index)}
        />
      );
    });

    const StyledLabelView = styled.label`
      &:before {
        content: '\\2714';
        color: ${(props) => (props.alt ? '#000' : 'transparent')};
        display: inline-block;
        background: ${(props) => (props.alt ? '#009688' : '#ccc')};
        border: 2px solid;
        border-color: ${(props) => (props.alt ? '#009688' : '#7A7A7A')};
        border-radius: 5px;
        font-size: 20px;
        font-weight: 900;
        line-height: 22px;
        margin: -5px 5px 0 0;
        height: 20px;
        width: 20px;
        text-align: center;
        vertical-align: middle;
        transition: color ease 0.3s;
        cursor: pointer;
      }
    `;

    const StyledCheckboxView = styled.input`
      display: none;
    `;

    return (
      <div className="App">
        <Header />
        <div className="cardWrapper">
          <div className="view-checkbox">
            <StyledCheckboxView
              type="checkbox"
              name="viewOnly"
              id="viewOnly"
              checked={this.state.viewOnly}
              onChange={this.toggleViewOnlyHandler}
            />
            <StyledLabelView for="viewOnly" alt={this.state.viewOnly}>
              Только просмотр
            </StyledLabelView>
          </div>
          {planets}
        </div>
      </div>
    );
  }
}

export default App;
