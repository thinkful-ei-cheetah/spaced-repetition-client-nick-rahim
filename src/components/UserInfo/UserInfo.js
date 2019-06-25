import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LanguageContext from '../../contexts/LanguageContext'
import './UserInfo.css'

export default class UserInfo extends Component {
  static contextType = LanguageContext

  render() {
    return (
      <div className="UserInfo">
        <h2 className='UserInfo__lang'>Now Learning {this.context.language}</h2>
        <span className='UserInfo__score'>Total correct answers: {this.context.totalScore}</span>
        <Link className='UserInfo__link' to="/learn">Start practicing >></Link>
      </div>
    )
  }
}
