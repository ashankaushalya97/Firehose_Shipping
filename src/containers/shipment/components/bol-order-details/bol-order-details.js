import React from "react"
import {Col, Row} from "antd";

const BolOrderDetails = () => {
    return(
        <Col span={20} style={{height: "120px", display: "inline"}}>
            <Row style={{minHeight:"50px"}}>
                <Col span={8} style={{width: "100px", padding: "20px 80px 10px 80px"}}>
                    <strong>ORDER NO</strong>
                </Col>
                <Col span={8} style={{width: "100px", padding: "20px 80px 10px 80px"}}>
                    <Row>
                        <Col span={12}>PALLETS</Col>
                        <Col span={12}>14</Col>
                    </Row>
                    <Row>
                        <Col span={12}>PALLET CODE</Col>
                        <Col span={12}>CHEP</Col>
                    </Row>
                </Col>
                <Col span={8} style={{width: "100px", padding: "20px 80px 10px 80px"}}>
                    <Row>
                        <Col span={12}>REQ ORDER QTY</Col>
                        <Col span={12}>20CA</Col>
                    </Row>
                    <Row>
                        <Col span={12}>ICKED ORDER QTY</Col>
                        <Col span={12}>20CA</Col>
                    </Row>
                </Col>
        </Row>
        </Col>
    )
}

export default BolOrderDetails
