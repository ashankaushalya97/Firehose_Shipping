import {Button, Col, Input, Layout, Row,Ta} from 'antd';
import './styles.css'
import "antd/dist/antd.css";
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {getShipment} from '../../selectors';
import moment from 'moment';
import OrderCard from "../../components/order-card/order-card";
import EntryScreen from "../entry-screen";
import BolScreen from "../bol-screen";

const Shipment = () => {
    const [evtType,setEvtType] = useState('entry');
    const [items,setItems] = useState([]);
    const [order,setOrder] = useState();
    const shipment = useSelector(getShipment);
    
    const {Header, Footer, Sider, Content} = Layout;
    const dispatch = useDispatch();

    useEffect(() =>{
        shipment && setOrder(shipment?.orders[0])
    },[shipment])

    const columns = [
        {
            title: 'TYPE',
            dataIndex: 'time',
        },
        {
            title: 'TRACKING UNIT',
            className: 'column-money',
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


    return (
        <>
            <section>
                <Layout>
                        <Layout>
                            <Row>
                                {/* <Col span={4} style={{minHeight:"100vh",backgroundColor:"#D5DBDB"}}></Col> */}
                                <Col span={4} style={{height:"100px",backgroundColor:"#D5DBDB"}}></Col>
                                <Col span={4} style={{height:"100px",backgroundColor:"#D5DBDB"}}></Col>
                                <Col span={8} className="title-container" style={{height:"100px",backgroundColor:"#D5DBDB"}}>
                                    <h2 className="title">SHIPPING CONFIRMATION PAGE</h2>
                                </Col>
                                <Col span={5} className="sub-title-container" style={{height:"100px",backgroundColor:"#D5DBDB"}}>
                                    <div className="sub-title" >{evtType=='entry'?'ENTRY':'BOL'} SCREEN</div>
                                </Col>
                                <Col span={3}className="btn-search-container" style={{height:"100px",backgroundColor:"#D5DBDB",padding:'5px'}}>
                                {
                                    evtType=='entry'?
                                    <>
                                    <Input  className="search-text" placeholder="CHECK-IN NO" size="small" />
                                    <Button className="btn-input btn-search" type="primary" shape="round" style={{ background: "#515A5A", borderColor: "#000000 " }}  ><span className="btn-text">RETRIEVE</span></Button>
                                    </>
                                    : <></>
                                }    
                                
                                </Col>
                            </Row>
                        </Layout>
                    <Layout>
                        <Sider className = {"sidebar"}>
                            <Col className = {"order-card-container"}>
                                {
                                    shipment?.orders?.map(m => 
                                        <OrderCard data={m} setOrder={setOrder} order={order} />
                                        )
                                }
                            </Col>
                            <Button type="primary" shape="round" className={"review-btn"} onClick={()=>{setEvtType(evtType=='entry'?'bol':'entry')}}>
                                <span className="btn-text">{evtType=='entry'?'REVIEW BOL':'RETURN'}</span></Button>
                        </Sider>
                        <Layout>
                            {evtType=='entry'?
                                <EntryScreen order={order} /> : <BolScreen/>
                            }
                        </Layout>
                    </Layout>
                </Layout>
            </section>
        </>
    );
}

export default Shipment;
