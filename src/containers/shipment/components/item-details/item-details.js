import React from "react"
import {Col, Row} from "antd";

import "./item-details-style.css"

const ItemDetails = ({data}) => {
    return (
        <Col span={20} className={"item-details"}>
            <Row className={"detail-row"}>
                <Col span={6} className={"detail-row-col"}>
                <span><strong>CUSTOMER CODE : </strong>{data?.customer?.code}</span>
                </Col>
                <Col span={6} className={"detail-row-col"}>
                    <span><strong>DIVISION CODE : </strong>{data?.division?.code} </span> 
                </Col>
                <Col span={6} className={"detail-row-col"}>
                    <span><strong>CHECK-IN NO : </strong>{data?.checkin?.checkin_no} </span> 
                </Col>
                <Col span={6} className={"detail-row-col"}>
                    <span><strong>CHECK-IN DATE TIME : </strong>{data?.checkin?.checkin_datetime} </span> 
                </Col>
            </Row>
        </Col>
    )
}

export default ItemDetails
