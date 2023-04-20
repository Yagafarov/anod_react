import React from 'react'
import {Divider, Typography} from "antd";
import("./CardSection.css")
function CardSection() {
    return (
        <section className={"section"} id={"card"}>
            <Divider ><Typography.Title level={3}>Cards</Typography.Title> </Divider>
        </section>
    );
}
export default CardSection;
