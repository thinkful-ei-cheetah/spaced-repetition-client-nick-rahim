import React, { Component } from 'react';
import { Input, Label } from '../Form/Form';
import Button from '../Button/Button';
import './Learning.css';
import LanguageApiService from '../../services/language-api-service';

class Learning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: '',
      answer: '',
      isCorrect: '',
      nextWord: '',
      totalScore: null,
      wordCorrectCount: 0,
      wordIncorrectCount: 0
    };
  }

  postGuessHandler = event => {
    event.preventDefault();
    const { guess } = this.state;
    LanguageApiService.postGuess(guess).then(response => {
      console.log('api', response, 'props', this.props);
      const {
        answer,
        desk,
        isCorrect,
        nextWord,
        totalScore,
        wordCorrectCount,
        wordIncorrectCount
      } = response;

      this.setState({
        answer,
        desk,
        isCorrect,
        nextWord,
        totalScore,
        wordCorrectCount,
        wordIncorrectCount
      });
    });
  };

  updateGuess(guess) {
    this.setState({ guess });
  }

  render() {
    return (
      <div className='Learning'>
        <div className='Learning__word-stat'>
          <h4 className='Learning__correct'>
            You have answered this word correctly{' '}
            {this.props.head.wordCorrectCount} times.
          </h4>
          <h4 className='Learning__incorrect'>
            You have answered this word incorrectly{' '}
            {this.props.head.wordIncorrectCount} times.
          </h4>
        </div>
        <div className='Learning__total-score'>
          <main className='DisplayScore'>
            {this.state.totalScore === true ? (
              <p>Your total score is: {this.state.totalScore}</p>
            ) : (
              <p>Your total score is: {this.props.head.totalScore}</p>
            )}
          </main>
        </div>
        <div className='Learning__prompt'>
          <h2>Translate the word:</h2>
          <span className='Learning__word'>{this.props.head.nextWord}</span>
        </div>
        <div className='DisplayFeedback'>
          {this.state.answer && (
            <p>{`The correct translation for ${this.props.head.nextWord} was ${
              this.state.answer
            } and you chose ${this.state.guess}!`}</p>
          )}
        </div>{' '}
        <button className='try-another'>Try another word!</button>
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
        {this.state.isCorrect === true ? (
          <h2 className='second-h2' style={{ color: 'green' }}>
            {`You were correct! :D`}
          </h2>
        ) : (
          <h2 className='second-h2' style={{ color: 'red' }}>
            {`Good try, but not quite right :(`}
          </h2>
        )}
      </div>
    );
  }
}

export default Learning;
