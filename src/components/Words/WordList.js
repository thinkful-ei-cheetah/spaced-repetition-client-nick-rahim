import React, { Component } from 'react';
import Words from './Words';
import './WordList.css';

class WordList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='WordList'>
        <ul className='words'>
          <h3 className='WordList_header'>Words</h3>
          {this.props.words.map(word => (
            <Words key={word.id} word={word.original} />
          ))}{' '}
        </ul>
        <ul className='correct'>
          <h3 className='WordList_header'>Correct</h3>
          {this.props.words.map(word => (
            <Words key={word.id} word={word.correct_count} />
          ))}{' '}
        </ul>
        <ul className='incorrect'>
          <h3 className='WordList_header'>Incorrect</h3>
          {this.props.words.map(word => (
            <Words key={word.id} word={word.incorrect_count} />
          ))}{' '}
        </ul>
      </div>
    );
  }
}

export default WordList;
