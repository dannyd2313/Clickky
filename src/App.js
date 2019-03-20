import React, { Component } from 'react';
import './App.css';
import characterChoice from "./components/characterList.json"
import SCards from "./components/playerCard";
import Scoreboard from "./components/Scoreboard";
import Header from './components/header';

const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
    state = {
      characterChoice,
      score: 0,
      topScore: 0,
      showAlert: 0,
      showSuccess: 0,
      clickedPicture: []
    };
  
    clickedPicture = id => {
      let clickedPicture = this.state.clickedPicture;
      let score = this.state.score;
      let topScore = this.state.topScore;
      this.setState({
        showAlert: 0
      });
  
      if (clickedPicture.indexOf(id) === -1) {
        clickedPicture.push(id);
        this.handleIncrement();
        this.makeShuffle();
      } else if (this.state.score === 12) {
        this.setState({
          showSuccess: 1,
          score: 0,
          clickedPicture: []
        });
      } else {
        this.setState({
          score: 0,
          clickedPicture: []
        });
        this.setState({
          showAlert: 1
        });
      }
  
      if (score > topScore) {
        this.setState({
          topScore: score
        });
      }
    };
  
    handleIncrement = () => {
      this.setState({ score: this.state.score + 1 });
    };
  
    makeShuffle = () => {
      this.setState({ characterChoice: shuffle(characterChoice) });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="alert alert-danger" style={{ opacity: this.state.showAlert }}>
                 This car has already been selected. Please try another.
            </div>
        <div className="alert alert-success" style={{ opacity: this.state.showSuccess }}>
                Great Memory. 
        </div>
        <Scoreboard
          title="Car Clicky Game"
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <div className="player-container">
          {this.state.characterChoice.map(characterChoice => (
            <SCards
              key={characterChoice.id}
              id={characterChoice.id}
              name={characterChoice.name}
              photo={characterChoice.photo}
              clickedPicture={this.clickedPicture}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;