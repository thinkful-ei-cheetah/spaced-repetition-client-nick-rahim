import React, { Component } from 'react';
import { Input, Label } from '../Form/Form';
import Button from '../Button/Button';

class Learning extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h4>
          You have answered this word correctly{' '}
          {this.props.head.wordCorrectCount} times.
        </h4>
        <h4>
          You have answered this word incorrectly{' '}
          {this.props.head.wordIncorrectCount} times.
        </h4>
        <p>Your total score is: {this.props.head.totalScore}</p>
        <h1>What's the translation for this word?</h1>
        <h2>Translate the word:</h2>
        <span>{this.props.head.nextWord}</span>
        <form>
          <Label htmlFor='learn-guess-input'>
            What's the translation for this word?
          </Label>
          <Input id='learn-guess-input' type='text' required />
          <Button type='submit'>Submit your answer</Button>
        </form>
      </div>
    );
  }
}

export default Learning;
