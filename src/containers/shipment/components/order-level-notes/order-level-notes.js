import React from "react"
import {Button, Col, Input, Row} from "antd";
import "./order-level-notes-style.css"

const {TextArea} = Input;

const OrderLevelNotes = () => {
    return (
        <React.Fragment>
            <TextArea className={"text-area"} rows={4}
                      placeHolder={"Order Level Notes"}/>
            <Row className={"row1"} >
                <Col span={6}>
                    <Input className={"text-field"} placeholder="TRACKING UNIT NO"/>
                </Col>

                <Col span={6}>
                    <Button className="btn-no-tag" type="primary" shape="round"><span
                        className="btn-text">ADD RECORD</span></Button>
                </Col>

                <Col span={6}>
                    <Input placeholder="EXPIRY DATE" className={"text-field"}/>
                </Col>

                <Col span={6}>
                    <Button className="btn-no-tag" type="primary" shape="round"><span
                        className="btn-text">ADD NO TAG</span></Button>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default OrderLevelNotes
