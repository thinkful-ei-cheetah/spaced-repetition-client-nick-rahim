import React, { Component } from 'react';
import Learning from '../../components/Learning/Learning';
import LanguageApiService from '../../services/language-api-service';

class LearningRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      head: {
        nextWord: '',
        wordCorrectCount: 0,
        wordIncorrectCount: 0,
        totalScore: 0
      }
    };
  }

  componentDidMount() {
    LanguageApiService.getHead().then(response => {
      this.setState({ head: response });
    });
  }
  render() {
    return (
      <section>
        <Learning key={this.state.head.nextWord} head={this.state.head} />
      </section>
    );
  }
}

export default LearningRoute;
