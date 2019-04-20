import React, { Component } from 'react'
import Head from 'next/head';
export default class NextHead extends Component {
  render() {
    return (
      <Head>
        <title>
            {this.props.nexthead}
        </title>
      </Head>
    )
  }
}
