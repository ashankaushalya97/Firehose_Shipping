import React, {useEffect, useState} from "react"
import {Button, Col, Input, Layout, Row, Table} from "antd";
import ItemCard from "../../components/item-card/item-card";
import ItemDetails from "../../components/item-details/item-details";
import OrderLevelNotes from "../../components/order-level-notes/order-level-notes";
import {useDispatch, useSelector} from "react-redux";
import {getCheckIn, getPdfUrl} from "../../selectors";
import {getCheckinData, saveCheckin} from "../../action";

import "./styles.css"
import "antd/dist/antd.css";
import moment from 'moment';



const EntryScreen = () => {
    const columns = [
        {
            title: 'TYPE',
            dataIndex: 'time',
        },
        {
            title: 'TRACKING UNIT',
            // className: 'column-money',
            dataIndex: 'conf_no',
            align: 'right',
        },
        {
            title: 'ITEM CODE',
            dataIndex: 'customer',
        },
        {
            title: 'EXPIRY',
            dataIndex: 'customer',
        },
        {
            title: 'REQ PICK QTY',
            dataIndex: 'customer',
        },
        {
            title: 'PICKED',
            dataIndex: 'customer',
        },
        {
            title: 'NOTES',
            dataIndex: 'customer',
        },
    ];

    const {Content} = Layout;

    return(
        <>
        {/* <Content className={"mainContent"} style={{backgroundColor:'lightcyan'}}> */}
            {/* <Col span={20} className={"topDetailsRow"}> */}
                <Row gutter={16} className="item-container">
                        <ItemCard/>
                        <ItemCard/>
                        <ItemCard/>
                        <ItemCard/>
                        <ItemCard/>
                        <ItemCard/>
                </Row>
            {/* </Col> */}

            <ItemDetails/>

            <Row gutter={16} style={{minHeight:"200px"}}>
                <Col span={24} >
                    <div className="table-wrapper outbound-table">
                        <Table
                            columns={columns}
                            // dataSource={outbound ? outbound : outboundData}
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

            <OrderLevelNotes />
         {/* </Content> */}
        </>
    )
}
export default EntryScreen
