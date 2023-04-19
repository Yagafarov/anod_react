import React from 'react';
import {Carousel, Row, Col, Button} from 'antd';
import './Home.css'

const Home = () => (
  <Carousel autoplay className='home'>
    <div className={'navbarItem'}>
      <Row className="corItem">
          <Col span={12}>
              <h1>
                  Lorem ipsum dolor sit amet.
              </h1>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores blanditiis commodi corporis culpa doloremque, doloribus iusto pariatur quae, quis similique suscipit.
              </p>
              <Button type={'default'}>Salom</Button>
          </Col>
          <Col span={12}>22</Col>
      </Row>
    </div>
    <div className={'navbarItem'}>
      <Row className="corItem">
          <Col span={12}>11</Col>
          <Col span={12}>22</Col>
      </Row>
    </div>
    <div className={'navbarItem'}>
      <Row className="corItem">
          <Col span={12}>11</Col>
          <Col span={12}>22</Col>
      </Row>
    </div>
    <div className={'navbarItem'}>
      <Row className="corItem">
          <Col span={12}>11</Col>
          <Col span={12}>22</Col>
      </Row>
    </div>
  </Carousel>
);

export default Home;