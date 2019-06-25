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
      <>
        <h3 className='WordList_title'>Words to practice</h3>
        <div className='WordList'>
          <ul className='words'>
            <h4 className='WordList_header'>Words</h4>
            {this.props.words.map(word => (
              <Words key={word.id} word={word.original} />
            ))}{' '}
          </ul>
          <ul className='correct'>
            <h4 className='WordList_header'>Correct</h4>
            {this.props.words.map(word => (
              <Words key={word.id} word={word.correct_count} />
            ))}{' '}
          </ul>
          <ul className='incorrect'>
            <h4 className='WordList_header'>Incorrect</h4>
            {this.props.words.map(word => (
              <Words key={word.id} word={word.incorrect_count} />
            ))}{' '}
          </ul>
        </div>
      </>
    );
  }
}

export default WordList;
