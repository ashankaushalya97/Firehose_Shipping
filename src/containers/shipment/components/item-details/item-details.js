import React from "react"
import {Col, Row} from "antd";

import "./item-details-style.css"

const ItemDetails = () => {
    return (
        <Col span={20} className={"item-details"}>
            <Row className={"detail-row"}>
                <Col span={6} className={"detail-row-col"}>
                    <strong>CUSTOMER CODE</strong>
                </Col>
                <Col span={6} className={"detail-row-col"}>
                    DIVISION CODE
                </Col>
                <Col span={6} className={"detail-row-col"}>
                    CHECK-IN NO
                </Col>
                <Col span={6} className={"detail-row-col"}>
                    CHECK-IN DATE TIME
                </Col>
            </Row>
        </Col>
    )
}

export default ItemDetails
