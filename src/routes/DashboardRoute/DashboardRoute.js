import React, { Component } from 'react';
import LanguageApiService from '../../services/language-api-service';
import LanguageContext from '../../contexts/LanguageContext';
import UserInfo from '../../components/UserInfo/UserInfo';

class DashboardRoute extends Component {
  static contextType = LanguageContext;

  componentDidMount() {
    LanguageApiService.getLanguage().then(response => {
      const { language, words } = response;
      this.context.setLanguage(language);
      this.context.setWords(words);
    });
  }

  render() {
    return (
      <section>
        <UserInfo />
      </section>
    );
  }
}

export default DashboardRoute;
