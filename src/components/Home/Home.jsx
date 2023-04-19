import React from 'react';
import {Carousel,Image, Row, Col, Button} from 'antd';
import imag1 from "../../assets/main1.png";
import("./Home.css")
const Home = () => (
  <Carousel autoplay className='home'>
    <div className={'navbarItem'}>
      <Row className="corItem">
          <Col xs={24} md={12}>
              <h1  className={"headerText"}>
                  Lorem ipsum dolor sit amet, consectetur.
              </h1>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores blanditiis commodi corporis culpa doloremque, doloribus iusto pariatur quae, quis similique suscipit.
              </p>
              <Button  type={'default'}>Boshlash</Button>
          </Col>
          <Col span={12}>
              <Image  src={imag1} preview={false}/>
          </Col>
      </Row>
    </div>
    <div className={'navbarItem'}>
        <Row className="corItem">
            <Col span={12}>
                <h1  className={"headerText"}>
                    Lorem ipsum dolor sit amet, consectetur.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores blanditiis commodi corporis culpa doloremque, doloribus iusto pariatur quae, quis similique suscipit.
                </p>
                <Button  type={'default'}>Boshlash</Button>
            </Col>
            <Col span={12}>
                <Image src={imag1} preview={false}/>
            </Col>
        </Row>
    </div>
    <div className={'navbarItem'}>
        <Row className="corItem">
            <Col span={12}>
                <h1  className={"headerText"}>
                    Lorem ipsum dolor sit amet, consectetur.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores blanditiis commodi corporis culpa doloremque, doloribus iusto pariatur quae, quis similique suscipit.
                </p>
                <Button  type={'default'}>Boshlash</Button>
            </Col>
            <Col span={12}>
                <Image  src={imag1} preview={false}/>
            </Col>
        </Row>
    </div>
    <div className={'navbarItem'}>
        <Row className="corItem">
            <Col span={12}>
                <h1  className={"headerText"}>
                    Lorem ipsum dolor sit amet, consectetur.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores blanditiis commodi corporis culpa doloremque, doloribus iusto pariatur quae, quis similique suscipit.
                </p>
                <Button  type={'default'}>Boshlash</Button>
            </Col>
            <Col span={12}>
                <Image  src={imag1} preview={false}/>
            </Col>
        </Row>
    </div>
  </Carousel>
);

export default Home;