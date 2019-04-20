import React, { Component } from 'react'
import NextHead from './components/common/NextHead';
import AppHeader from './components/common/appHeader';

export default class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:"hayaaaa"
        };
    }
  render() {
    return (
      <div>
        <NextHead
          nexthead='about'
        />
        <AppHeader />
      </div>
    )
  }
}
