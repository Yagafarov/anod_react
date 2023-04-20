import React from 'react';
import {Carousel, Button} from 'antd';

import("./Home.css")


function Home(){
    return(
<div id="home">
  <Carousel autoplay className='home'>
    <div className={'navbarItem'}>
        <div className="coeItem">
            <div>
            <h1   className={"headerText"}  >
                Lorem ipsum dolor sit amet, consectetur.
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores blanditiis commodi corporis culpa doloremque, doloribus iusto pariatur quae, quis similique suscipit.
            </p>
            <Button  type={'default'}>Boshlash</Button>
                </div>
        </div>
    </div>
    <div className={'navbarItem'}>
        <div className="coeItem">
            <div>
            <h1  className={"headerText"}>
                Lorem ipsum dolor sit amet, consectetur.
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores blanditiis commodi corporis culpa doloremque, doloribus iusto pariatur quae, quis similique suscipit.
            </p>
            <Button  type={'default'} >Boshlash</Button>
                </div>
        </div>
    </div>
    <div className={'navbarItem'}>
        <div className="coeItem">
            <div>
            <h1  className={"headerText"}>
                Lorem ipsum dolor sit amet, consectetur.
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores blanditiis commodi corporis culpa doloremque, doloribus iusto pariatur quae, quis similique suscipit.
            </p>
            <Button  type={'default'} >Boshlash</Button>
                </div>
        </div>
    </div>
    <div className={'navbarItem'}>
        <div className="coeItem">
            <div>
            <h1  className={"headerText"}>
                Lorem ipsum dolor sit amet, consectetur.
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores blanditiis commodi corporis culpa doloremque, doloribus iusto pariatur quae, quis similique suscipit.
            </p>
            <Button  type={'default'} >Boshlash</Button>
                </div>
        </div>
    </div>
  </Carousel>
        </div>
);}

export default Home;
