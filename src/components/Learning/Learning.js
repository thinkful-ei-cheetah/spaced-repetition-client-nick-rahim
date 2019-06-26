import React, { Component } from 'react';
import { Input, Label } from '../Form/Form';
import Button from '../Button/Button';
import './Learning.css';

class Learning extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          <p>Your total score is: {this.props.head.totalScore}</p>
        </div>
        <div className='Learning__prompt'>
          <h2>Translate the word:</h2>
          <span className='Learning__word'>{this.props.head.nextWord}</span>
        </div>
        <form className='Learning__answer-form'>
          <Label className='Learning__answer-form-label' htmlFor='learn-guess-input'>
            What's the translation for this word?
          </Label>
          <div className='Learning__answer-form-inputs'>
            <Input id='learn-guess-input' type='text' required />
            <Button type='submit'>Submit your answer</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Learning;
