import {Button, Col, Input, Layout, Row,Ta} from 'antd';
import './styles.css'
import "antd/dist/antd.css";
import {useDispatch, useSelector} from 'react-redux';
import {getCheckinData, saveCheckin} from '../../action';
import {useEffect, useState} from 'react';
import {getCheckIn, getPdfUrl} from '../../selectors';
import moment from 'moment';
import OrderCard from "../../components/order-card/order-card";
import EntryScreen from "../entry-screen";
import BolScreen from "../bol-screen";

const Shipment = () => {
    const [selectedRow, setSelectedRow] = useState();
    const [customer, setCustomer] = useState('');
    const [orderNo, setOrderNo] = useState('');
    const [poNo, setPO] = useState('');
    const [confNo, setConfNo] = useState('');
    const [carrier, setCarrier] = useState();
    const [truck, setTruck] = useState();
    const [inbound, setInbound] = useState();
    const [outbound, setOutbound] = useState();
    let date = new Date();

    const {Header, Footer, Sider, Content} = Layout;

    const dispatch = useDispatch();

    let checkInData = useSelector(getCheckIn);
    let pdfUrl = useSelector(getPdfUrl);

    let inboundData = [];
    let outboundData = [];

    useEffect(() => {
        dispatch(getCheckinData());
    }, []);

    if (checkInData && checkInData?.appointments?.length > 0) {
        inboundData = checkInData?.appointments.filter(n => n.direction == 'I');
        outboundData = checkInData?.appointments.filter(n => n.direction == 'O');
    }

    const handleSelection = (record) => {
        record?.checkin ? (selectedRow === record ? setSelectedRow(undefined) : setSelectedRow(record)) : setSelectedRow(undefined);
    }
    const handleSearch = () => {
        if (customer || orderNo || poNo || confNo) {
            setInbound(inboundData.filter(n => n.customer.toLowerCase().includes(customer.toLowerCase())
                && n.conf_no.includes(confNo) && n.orders.some(m => m.order_no.toLowerCase().includes(orderNo.toLowerCase()) && m.po_no.toLowerCase().includes(poNo.toLowerCase()))
            ));
            setOutbound(outboundData.filter(n => n.customer.toLowerCase().includes(customer.toLowerCase())
                && n.conf_no.includes(confNo) && n.orders.some(m => m.order_no.toLowerCase().includes(orderNo.toLowerCase()) && m.po_no.toLowerCase().includes(poNo.toLowerCase()))
            ));
        }
    }
    const handleClear = () => {
        clearFields();
    }
    const handleRefresh = () => {
        clearFields();
        dispatch(getCheckinData());
    }
    const handleSubmit = (record) => {
        let obj = {
            'conf_no': record.conf_no,
            'checkin': {
                'checkin_no': '',
                'checkin_time': moment(date).format('HH:mm'),
                'checkin_date': moment(date).format('YYYY-MM-DD'),
                'carrier': carrier,
                'truck_no': truck,
            }
        }
        dispatch(saveCheckin(obj));
        handleRefresh();
    }

    const clearFields = () => {
        setSelectedRow(undefined);
        setInbound(undefined);
        setOutbound(undefined);
        setCustomer('');
        setOrderNo('');
        setPO('');
        setConfNo('');
        setTruck('');
        setCarrier('');
    }
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

    const TableHeader = ({type}) => {
        return (
            <>
                <Row>
                    <Col span={6} className="completed">
                        <span
                            className="table-status-text">COMPLETED: {type === 'i' ? inboundData.filter(m => m?.checkin).length : outboundData.filter(m => m?.checkin).length}</span>
                    </Col>
                    <Col span={12}>
                        <h3 className="table-header">{type === 'i' ? 'INBOUND' : 'OUTBOUND'}</h3>
                    </Col>
                    <Col span={6} className="pending">
                        <span
                            className="table-status-text">PENDING: {type === 'i' ? inboundData.filter(m => !m?.checkin).length : outboundData.filter(m => !m?.checkin).length}</span>
                    </Col>
                </Row>
            </>
        )
    };

    return (
        <>
            <section>
                <Layout>
                    {/* <Header className={"mainHeader"}> */}
                        {/* <Row>
                            <Col span={10} style={{backgroundColor:'red',height:'100%'}} >
                                <h1 className={"main-heading"}>SHIPPING CONFIRMATION PAGE</h1>
                            </Col>    
                        </Row> */}
                        <Layout>
                            <Row>
                                {/* <Col span={4} style={{minHeight:"100vh",backgroundColor:"#D5DBDB"}}></Col> */}
                                <Col span={4} style={{height:"100px",backgroundColor:"#D5DBDB"}}></Col>
                                <Col span={4} style={{height:"100px",backgroundColor:"#D5DBDB"}}></Col>
                                <Col span={8} className="title-container" style={{height:"100px",backgroundColor:"#D5DBDB"}}>
                                {/* <Col className="title-container" span={12}> */}
                                    <h2 className="title">SHIPPING CONFIRMATION PAGE</h2>
                                {/* </Col> */}
                                </Col>
                                <Col span={8} className="sub-title-container" style={{height:"100px",backgroundColor:"#D5DBDB"}}>
                                    <div className="sub-title" >ENTRY SCREEN</div>
                                </Col>
                            </Row>
                        </Layout>
                    {/* </Header> */}
                    <Layout>
                        <Sider className = {"sidebar"}>
                            <Col className = {"order-card-container"}>
                                <Row gutter={16} className="col-scroll" >
                                        <OrderCard/>
                                        <OrderCard/>
                                        <OrderCard/>
                                        <OrderCard/>
                                        <OrderCard/>
                                </Row>
                            </Col>
                            <Button type="primary" shape="round" className={"review-btn"}>
                                <span className="btn-text">REVIEW BOL</span></Button>
                        </Sider>
                        <Layout>
                            {/* <Table
                                columns={columns}
                                // dataSource={outbound ? outbound : outboundData}
                                bordered
                                pagination={false}
                                size="small"
                                rowClassName="table-row"
                                scroll={{y: 100, x: 'max-content'}}
                                className = "tableDetails"
                            /> */}
                            <EntryScreen/>
                        </Layout>

                        {/* <EntryScreen/> */}
                    </Layout>
                </Layout>
                {/* <Row gutter={8}>
                    <Col span={4} style={{height:"100px",backgroundColor:"#D5DBDB"}}></Col>
                    <Col span={4} style={{height:"100px",backgroundColor:"#D5DBDB"}}></Col>
                    <Col span={8} className="title-container" style={{height:"100px",backgroundColor:"#D5DBDB"}}>
                        <h2 className="title">SHIPPING CONFIRMATION PAGE</h2>
                    </Col>
                    <Col span={8} className="sub-title-container" style={{height:"100px",backgroundColor:"#D5DBDB"}}>
                        <div className="sub-title" >ENTRY SCREEN</div>
                    </Col>
                </Row>
                <Row >
                    <Col span={4} style={{minHeight:"85vh",backgroundColor:"#D5DBDB"}}>
                        <Row gutter={16} justify="space-around" align="middle">
                            <Col span={20} style={{height:"100px",backgroundColor:"#566573",margin:"10px 5px 10px 5px",padding:0}}></Col>
                            <Col span={20} style={{height:"100px",backgroundColor:"#566573",margin:"10px 5px 10px 5px",padding:0}}></Col>
                        </Row>
                    </Col>
                    <Col span={20} style={{height:"120px",backgroundColor:"yellow",display:"inline"}}>
                        <Row gutter={16}>
                            <Col span={4} style={{height:"100px",backgroundColor:"#566573",margin:"10px 5px 10px 5px",padding:0,display:"inline"}}></Col>
                        </Row>
                    </Col>
                </Row> */}
            </section>
        </>
    );
}

export default Shipment;
