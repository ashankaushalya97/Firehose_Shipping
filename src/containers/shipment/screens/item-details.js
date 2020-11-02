import React from "react"
import {Col, Row} from "antd";

const ItemDetails = () => {
    return(
        <Col span={20} style={{height: "120px", display: "inline"}}>
            <Row style={{minHeight:"50px"}}>
                <Col span={6} style={{width: "100px", padding: "20px 80px 10px 80px"}}>
                    <strong>CUSTOMER CODE</strong>
                </Col>
                <Col span={6} style={{width: "100px", padding: "20px 80px 10px 80px"}}>
                    DIVISION CODE
                </Col>
                <Col span={6} style={{width: "100px", padding: "20px 80px 10px 80px"}}>
                    CHECK-IN NO
                </Col>
                <Col span={6} style={{width: "100px", padding: "20px 80px 10px 80px"}}>
                    CHECK-IN DATE TIME
                </Col></Row>
        </Col>
    )
}

export default ItemDetails
