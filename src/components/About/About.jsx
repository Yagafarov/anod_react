import React from 'react'
import { Divider,Typography, Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import("./About.css")
function About() {
  return (
      <section className={"section"} id={"about"}>
              <Divider ><Typography.Title level={3}>About me</Typography.Title> </Divider>

      </section>
  );
}
export default About;
