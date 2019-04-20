import React, { Component } from 'react'
import AppHeader from '../common/appHeader';
import AppCarousel from '../common/appCarousel';
import Link from 'next/link'

import { Container, Row, Col } from 'reactstrap';
export default class AppHome extends Component {
  render() {
    return (
      <div>
        <AppHeader
            nexthead= 'Home'
        />
        <Container className='home-container'>
            <Row className='carousel-bg'>
                <Col md='7'>
                    <div className='d-flex flex-space'>
                        <div>
                            PROMO
                        </div>
                        <div>
                            <Link href='/products'>See all</Link>
                        </div>
                    </div>
                    <AppCarousel />
                </Col>
                <Col md='5'>
                    test
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}
