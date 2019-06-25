import React, { Component } from 'react';
import LanguageApiService from '../../services/language-api-service';
import LanguageContext from '../../contexts/LanguageContext';
import WordsList from '../../components/Words/WordList';

class DashboardRoute extends Component {
  static contextType = LanguageContext;

  componentDidMount() {
    LanguageApiService.getLanguage().then(response => {
      const { language, words } = response;
      this.context.setLanguage(language);
      this.context.setWords(words);
      this.context.setTotalScore();
      console.log(this.context.language);
      console.log(this.context.words);
      console.log(this.context.words[0].original);
    });
  }
  render() {
    return (
      <section>
        {/* {this.context.language} */}
        {this.context.totalScore}
        {/* {this.context.words[0].original} */}
        <div>
          <WordsList words={this.context.words} />
        </div>
      </section>
    );
  }
}

export default DashboardRoute;
