import React from "react"
import {Button, Col, Input, Row} from "antd";

const {TextArea} = Input;

const OrderLevelNotes = () => {
    return (
        <React.Fragment>
            <TextArea rows={4} style={{width: "60%", margin: "20px"}}
                      placeHolder={"Order Level Notes"}/>
            <Row style={{padding: "20px"}}>
                <Col span={6}>
                    <Input placeholder="TRACKING UNIT NO" style={{backgroundColor: "#D5D5D5"}}/>
                </Col>

                <Col span={6}>
                    <Button className="btn-input" type="primary" shape="round"
                            style={{background: "#515A5A", borderColor: "#000000 "}}><span
                        className="btn-text">ADD RECORD</span></Button>
                </Col>

                <Col span={6}>
                    <Input placeholder="EXPIRY DATE" style={{backgroundColor: "#D5D5D5"}}/>
                </Col>

                <Col span={6}>
                    <Button className="btn-input" type="primary" shape="round"
                            style={{background: "#515A5A", borderColor: "#000000 "}}><span
                        className="btn-text">ADD NO TAG</span></Button>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default OrderLevelNotes
