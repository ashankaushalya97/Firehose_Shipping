import React from "react"
import {Button, Col, Input, Row} from "antd";

const BolOrderLevelNotes = () => {
    const {TextArea} = Input;
    return (
        <React.Fragment>
            <TextArea
            rows={4}
            style={{width: "60%", margin: "20px"}}
            placeHolder={"Order Level Notes"}
            />
            <Row>
                <Col span={18}>

                </Col>
                <Col span={6}>
                    <Col span={6}>
                        <Input placeholder="SEAL#" style={{backgroundColor: "#D5D5D5", marginLeft:"25px"}}/>
                    </Col>
                    <Col span={6}>
                        <Button className="btn-input" type="primary" shape="round"
                                style={{background: "#515A5A", borderColor: "#000000 ", marginTop:"20px"}}><span
                            className="btn-text">SHIP CONFIRM</span></Button>
                    </Col>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default BolOrderLevelNotes
