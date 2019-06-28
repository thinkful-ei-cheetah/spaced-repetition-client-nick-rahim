import React, { Component } from 'react';
import { Input, Label } from '../Form/Form';
import Button from '../Button/Button';
import './Learning.css';
import LanguageApiService from '../../services/language-api-service';

class Learning extends Component {
  constructor(props) {
    super(props);
    let correctIncorrect;
    this.state = {
      guess: '',
      answer: '',
      isCorrect: '',
      nextWord: this.props.head.nextWord,
      totalScore: this.props.head.totalScore,
      wordCorrectCount: this.props.head.wordCorrectCount,
      wordIncorrectCount: this.props.head.wordIncorrectCount,
      correctIncorrect: '',
      showinput: true
    };
  }

  postGuessHandler = event => {
    event.preventDefault();
    const { guess } = this.state;
    LanguageApiService.postGuess(guess).then(response => {
      const {
        answer,
        isCorrect,
        nextWord,
        totalScore,
        wordCorrectCount,
        wordIncorrectCount
      } = response;

      this.correctIncorrect = this.rightWrong(response.isCorrect);

      this.setState({
        answer,
        isCorrect,
        nextWord,
        totalScore,
        wordCorrectCount,
        wordIncorrectCount
      });
    });
    this.setState({ showinput: false });
  };

  handleNextClick = event => {
    LanguageApiService.getHead().then(response => {
      const { wordCorrectCount, wordIncorrectCount } = response;
      this.setState({ wordCorrectCount, wordIncorrectCount });
    });
    this.setState({ showinput: true });
    this.setState({ answer: '' });
  };

  rightWrong = answer => {
    if (answer) {
      return (
        <h2 className='second-h2' style={{ color: 'green' }}>
          {`You were correct! :D`}
        </h2>
      );
    } else {
      return (
        <h2 className='second-h2' style={{ color: 'red' }}>
          {`Good try, but not quite right :(`}
        </h2>
      );
    }
  };

  updateGuess(guess) {
    this.setState({ guess });
  }

  render() {
    return (
      <div className='Learning'>
        <div className='Learning__word-stat'>
          <h4 className='Learning__correct'>
            You have answered this word correctly {this.state.wordCorrectCount}{' '}
            times.
          </h4>
          <h4 className='Learning__incorrect'>
            You have answered this word incorrectly{' '}
            {this.state.wordIncorrectCount} times.
          </h4>
        </div>
        <div className='Learning__total-score'>
          <main className='DisplayScore'>
            <p>Your total score is: {this.state.totalScore}</p>
          </main>
        </div>
        <div className='Learning__prompt'>
          <h2>Translate the word:</h2>
          <span className='Learning__word'>{this.state.nextWord}</span>
        </div>
        <div className='DisplayFeedback'>
          {this.state.answer && (
            <div>
              <p className='Learning__guess'>
                {`The correct translation for ${this.props.head.nextWord} was ${
                  this.state.answer
                } and you chose ${this.state.guess}!`}
              </p>
              <Button
                type='submit'
                className='try-another'
                onClick={event => this.handleNextClick(event)}
              >
                Try another word!
              </Button>
            </div>
          )}
        </div>{' '}
        {this.state.showinput && (
          <form
            className='Learning__answer-form'
            onSubmit={event => this.postGuessHandler(event)}
          >
            <Label
              className='Learning__answer-form-label'
              htmlFor='learn-guess-input'
            >
              What's the translation for this word?
            </Label>
            <div className='Learning__answer-form-inputs'>
              <Input
                id='learn-guess-input'
                type='text'
                required
                onChange={event => this.updateGuess(event.target.value)}
              />
              <Button type='submit'>Submit your answer</Button>
            </div>
          </form>
        )}
        {this.correctIncorrect}
      </div>
    );
  }
}

export default Learning;
