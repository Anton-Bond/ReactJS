import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';
import Header from './Header';
import CardList from './CardList';

class App extends Component {
  state = {
    planets: [
      {
        title: 'Меркурий',
        context: `Меркурий - самая маленькая планета в нашей солнечной системе и ближайшая к Солнцу - лишь немного больше, чем Луна Земли. Меркурий - самая быстрая планета, которая движется вокруг Солнца каждые 88 земных дней.`,
      },
      {
        title: 'Венера',
        context: `Венера медленно вращается в противоположном направлении от большинства планет. Густая атмосфера задерживает тепло в безудержном парниковом эффекте, что делает ее самой горячей планетой в нашей солнечной системе.`,
      },
      {
        title: 'Земля',
        context: `Земля - наша родная планета - единственное место, которое мы знаем до сих пор, где обитают живые существа. Это также единственная планета в нашей солнечной системе с жидкой водой на поверхности.`,
      },
      {
        title: 'Марс',
        context: `Марс - это пыльный, холодный, пустынный мир с очень тонкой атмосферой. Существуют убедительные доказательства того, что миллиарды лет назад Марс был более влажным и теплым с более плотной атмосферой.`,
      },
      {
        title: 'Юпитер',
        context: `Юпитер более чем в два раза массивнее, чем другие планеты нашей Солнечной системы вместе взятые. Большое Красное пятно гигантской планеты - это многовековой шторм, превышающий Землю.`,
      },
      {
        title: 'Сатурн',
        context: `Украшенный ослепительной сложной системой ледяных колец, Сатурн уникален в нашей солнечной системе. У других гигантских планет есть кольца, но ни одна из них не является столь же впечатляющей, как у Сатурна.`,
      },
      {
        title: 'Уран',
        context: `Уран - седьмая планета от Солнца - вращается под углом почти 90 градусов от плоскости его орбиты. Этот уникальный наклон заставляет Уран вращаться на боку.`,
      },
      {
        title: 'Нептун',
        context: `Нептун - восьмая и самая отдаленная главная планета, вращающаяся вокруг нашего Солнца, - темный, холодный и взбитый сверхзвуковыми ветрами. Это была первая планета, найденная с помощью математических расчетов.`,
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

  // rerender component without picked cards
  deleteCardsHandler = () => {
    this.setState({planets: this.state.planets})
  }

  render() {
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
          <CardList 
            planets={this.state.planets}
            viewOnly={this.state.viewOnly}
            onSave={this.saveHandler}
          />
          <div>
            <button className="btn-delete" onClick={this.deleteCardsHandler}>Удалить выбранные карточки</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
