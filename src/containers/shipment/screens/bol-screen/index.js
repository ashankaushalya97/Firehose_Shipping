import React, {useEffect, useState} from "react"
import {Button, Col, Input, Layout, Row, Table} from "antd";
import ItemDetails from "../../components/item-details/item-details";
import {useDispatch, useSelector} from "react-redux";
import {getCheckIn} from "../../selectors";
import {getCheckinData, saveCheckin} from "../../action";
import moment from "moment";
import BolItemDetails from "../../components/bol-item-details/bol-item-details";
import BolOrderDetails from "../../components/bol-order-details/bol-order-details";
import BolOrderLevelNotes from "../../components/bol-order-level-notes/bol-order-level-notes";

import "./styles.css"

const BolScreen = () => {
    const columns = [
        {
            title: 'S.NO',
            dataIndex: 'time',
        },
        {
            title: 'ITEM CODE',
            className: 'column-money',
            dataIndex: 'conf_no',
            // align: 'right',
        },
        {
            title: 'DESCRIPTION',
            dataIndex: 'customer',
        },
        {
            title: 'REQ ITEM QTY',
            dataIndex: 'customer',
        },
        {
            title: 'PICK ITEM QTY',
            dataIndex: 'customer',
        },
        // {
        //     title: 'CARRIER',
        //     dataIndex: 'checkin',
        //     align: 'center',
        //     //   render: (text,record,index) => (!record.checkInNo? <Input defaultValue={text} bordered={false}/> : <span>{text}</span>)
        //     render: (data, record, index) => (record.checkin ?
        //         <span style={{textAlign: 'center', justifyContent: 'center'}}>{data?.carrier}</span> :
        //         <Input value={carrier} bordered={false} disabled={record.checkin} onChange={(e) => {
        //             setCarrier(e.target.value)
        //         }}/>)
        // },
        // {
        //     title: 'TRUCK',
        //     dataIndex: 'checkin',
        //     render: (data, record, index) => (record.checkin ? <span>{data?.truck_no}</span> :
        //         <Input value={truck} bordered={false} disabled={record.checkin} onChange={(e) => {
        //             setTruck(e.target.value)
        //         }}/>)
        // },
        // {
        //     title: 'CHECK-IN NO',
        //     dataIndex: 'checkin',
        //     render: (data, record, index) => data ? data?.checkin_no : ''
        // },
        // {
        //     title: 'PENDING',
        //     dataIndex: 'pending',
        //     render: (value, record, index) => (!record?.checkin?.checkin_no ?
        //         <Button disabled={!(carrier && truck)} onClick={(e) => {
        //             e.stopPropagation();
        //             handleSubmit(record)
        //         }} type="primary" shape="round"
        //                 style={{background: "#F4D03F", borderColor: "#FCF3CF", color: "#000000"}}><span
        //             className="btn-text-checkin">CHECK IN</span></Button> : null)
        // },
    ];

    const {Content} = Layout;
    return (
        <Content className={"mainContent"}>
            <Col span={20} className={"topDetailsRow"}>
                <Row gutter={16}>
                    <BolItemDetails/>
                </Row>
            </Col>

            <ItemDetails/>
            <BolOrderDetails/>

            <Row gutter={16} style={{minHeight: "200px"}}>
                <Col span={24}>
                    <div className="table-wrapper outbound-table">
                        <Table
                            columns={columns}
                            bordered
                            pagination={false}
                            size="small"
                            rowClassName="table-row"
                            scroll={{y: 100, x: 'max-content'}}
                            className = "tableDetails"
                        />
                    </div>
                </Col>
            </Row>
            <BolOrderLevelNotes />
        </Content>
    )
}

export default BolScreen
