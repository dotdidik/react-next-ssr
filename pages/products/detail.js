import React, { Component } from 'react'
import axios from 'axios';
import NextHead from '../components/common/NextHead';
import AppHeader from '../components/common/appHeader';
import { Container } from 'reactstrap'
export default class Productdetail extends Component {
    constructor(props){
        super(props);
        this.state={
            detail:{}
        }
    }

    static getInitialProps({query}) {
        return query
    }

    componentDidMount(){
        axios.get(`https://reduxblog.herokuapp.com/api/posts/${this.props.id}?key=anggora`)
        .then(res => 
            this.setState({
                detail : res.data
            })
        )
    }

    render() {
        console.log('hay',this.state.detail)
        const {title, categories, content} = this.state.detail
    return (
      <div>
        <NextHead 
            nexthead={title}
        />
        <div>
        <AppHeader />
            <Container>
                <img src={categories} alt=""/>
                <h1>{title}</h1>
                <h2>{content}</h2>
            </Container>
        </div>
      </div>
    )
  }
}
