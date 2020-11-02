import React from "react"
import {Col} from "antd";

import "./bol-item-details-style.css"

const BolItemDetails = () => {
    return (
        <React.Fragment>
            <Col className={"col1"} span={7}>
                <h1 style={{color: "white",fontSize:"35px",textAlign:"center", lineHeight:"50px"}}>SHIP TO INFORMATION</h1>
            </Col>
            <Col className={"col2"} span={7}>
            </Col>
            <Col className={"col1"} span={7}>
                <h1 style={{color: "white",fontSize:"37px",textAlign:"center",lineHeight:"48px"}}>BILL TO INFORMATION</h1>
            </Col>
        </React.Fragment>
    )
}

export default BolItemDetails
