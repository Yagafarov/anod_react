import React from 'react'
import {Divider, Typography} from "antd";
import("./Contact.css")
function Contact() {
    return (
        <section className={"section"} id={"contact"}>
            <Divider ><Typography.Title level={3}>Contact Us</Typography.Title> </Divider>
        </section>
    );
}
export default Contact;
