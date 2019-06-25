import React, { Component } from 'react';
import LanguageApiService from '../../services/language-api-service';
import LanguageContext from '../../contexts/LanguageContext';

class DashboardRoute extends Component {
  static contextType = LanguageContext;

  componentDidMount() {
    LanguageApiService.getLanguage().then(response => {
      const { language, words } = response;
      this.context.setLanguage(language.name);
      this.context.setWords(words);
      this.context.setTotalScore(language.totalScore);
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
      </section>
    );
  }
}

export default DashboardRoute;
