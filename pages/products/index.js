import React, { Component } from 'react'
import AppHeader from '../components/common/appHeader';
import { Container, Row, Col } from 'reactstrap'
import Link from 'next/link'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppCard from '../components/common/AppCard';
export default class AllProducts extends Component {
    constructor(props){
        super(props);
        this.state={
            datas: []
        }
    }
    componentDidMount(){
        axios.get('https://reduxblog.herokuapp.com/api/posts?key=anggora')
        .then(res => 
            this.setState({datas: res.data})    
        )

    }

    render() {
        console.log(this.state.datas);
        
    return (
      <div>
        <AppHeader/>
        <div>
            <Container>
                <Row>
                    {
                        this.state.datas.map((data, index)=>
                        <Col md='3' key={index}>
                                <AppCard
                                    title={data.title}
                                    gambar={data.categories}
                                    content={data.content}
                                />
                            <Link href={{pathname:`/products/detail`, query:{id:data.id}}}>
                                <a>detail</a>
                            </Link>
                        </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
      </div>
    )
  }
}
